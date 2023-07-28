import pypdfium2 as pdfium
from PIL import Image
from pathlib import Path
import numpy as np
import fitz


def main(article, file):
    p = Path(__file__).parents[1]
    in_path = f'{p}/images/{article}/{file}.pdf'
    out_path = f'{p}/images/{article}/{file}' + '.png'

    # out_path = f'{p.parent}/images/{article}/test9' + '.png'

    doc = fitz.open(in_path)
    page = doc.load_page(0)

    zoom = 1
    mat = fitz.Matrix(zoom, zoom)
    pix = page.get_pixmap(matrix=mat, dpi=300)

    pix.save(out_path)

    get_final_img(out_path)


def low_resolution(article, file):
    p = Path(__file__).parent
    in_path = f'{p}/_latex_pdf/{article}/{file}.pdf'
    out_path = f'{p.parent}/images/{article}/{file}' + '.png'

    pdf = pdfium.PdfDocument(in_path)
    page = pdf.get_page(0)
    pil_image = page.render(
        scale=1,
        rotation=0,
        crop=(0, 0, 0, 0)
    ).to_pil()
    pil_image.save(out_path)

    get_final_img(out_path)


def get_final_img(img_path):
    pil_image = Image.open(img_path).convert('RGB')

    img = crop_img(pil_image)
    pil_image = Image.fromarray(img)

    pil_image.save(img_path, quality=100)
    pil_image = Image.open(img_path).convert('RGB')

    width, height = pil_image.size

    if width != 1600:
        scale = width / 1600
        new_size = (1600, int(height / scale))
        pil_image = pil_image.resize(new_size)

    pil_image = create_nice_boundary(pil_image)

    width, height = pil_image.size

    print(width)
    # 900

    if width != 1600:
        scale = width / 1600
        new_size = (1600, int(height / (scale * 1.0))) # 1.05
        pil_image = pil_image.resize(new_size)

    pil_image.save(img_path, quality=300)


def resize(img_path):
    pil_image = Image.open(img_path)

    width, height = pil_image.size

    if width != 300:
        scale = width / 300
        new_size = (300, int(height / scale))
        pil_image = pil_image.resize(new_size)

    pil_image.save(img_path, quality=300)


def get_nice_boundary(pil_image):
    width, height = pil_image.size

    back_img = create_nice_boundary(width + 150, height + 150) # 150 , 50 for small
    back_img.paste(pil_image, (75, 75))

    return back_img


def create_nice_boundary(width, height):
    R_C = np.full((height, width), 255, dtype=np.uint8)
    G_C = np.full((height, width), 255, dtype=np.uint8)
    B_C = np.full((height, width), 255, dtype=np.uint8)

    bound = 22

    for channel, c in zip([R_C, G_C, B_C], [192, 180, 180]):

        for i in range(bound, height - bound - 1):
            channel[i][bound] = c
            channel[i][width - bound] = c

        for j in range(bound, width - bound - 1):
            channel[bound][j] = c
            channel[height - bound][j] = c

        for i in range(5, 150):
            for j in range(5, 7):
                channel[i][j] = 98
                channel[height - i][width - j] = 98

        for i in range(5, 7):
            for j in range(5, 40):
                channel[i][j] = 98
                channel[height - i][width - j] = 98

    R_C = np.expand_dims(R_C, axis=2)
    G_C = np.expand_dims(G_C, axis=2)
    B_C = np.expand_dims(B_C, axis=2)

    back_img = np.concatenate((R_C, G_C, B_C), axis=2)
    return Image.fromarray(back_img)


def create_doubled_nice_boundary(width, height):
    R_C = np.full((height, width), 255, dtype=np.uint8)
    G_C = np.full((height, width), 255, dtype=np.uint8)
    B_C = np.full((height, width), 255, dtype=np.uint8)

    for channel in [R_C, G_C, B_C]:
        for i in range(5, height - 5):
            for j in range(5, 7):
                channel[i][j] = 98
                channel[height - i][width - j] = 98

                if j == 5:
                    channel[i][4 + j] = 98
                    channel[height - i][width - (4 + j)] = 98

        for i in range(5, 7):
            for j in range(5, 40):
                channel[i][j] = 98
                channel[height - i][width - j] = 98

                channel[i][width - j] = 98
                channel[height - i][j] = 98

                if i == 5:
                    channel[4 + i][j] = 98
                    channel[height - (4 + i)][width - j] = 98

                    channel[4 + i][width - j] = 98
                    channel[height - (4 + i)][j] = 98

    R_C = np.expand_dims(R_C, axis=2)
    G_C = np.expand_dims(G_C, axis=2)
    B_C = np.expand_dims(B_C, axis=2)

    back_img = np.concatenate((R_C, G_C, B_C), axis=2)
    return Image.fromarray(back_img)


def get_thick_boundary(pil_image):
    width, height = pil_image.size

    Last_image = Image.new('RGBA', size=(width + 2, height + 2), color=(137, 145, 156))
    Last_image.paste(pil_image, (1, 1))

    width, height = Last_image.size

    image = Image.new('RGBA', size=(width + 20, height + 20), color=(255, 255, 255))
    image.paste(Last_image, (10, 10))

    width, height = image.size

    Last_image = Image.new('RGBA', size=(width + 4, height + 4), color=(137, 145, 156))
    Last_image.paste(image, (2, 2))

    return Last_image


def get_lower_bound(img):
    x = range(img.shape[0])[::-1]
    y = range(img.shape[1])[::-1]

    for j in y:
        for i in x:
            comparison = img[i, j, :] != np.array([255, 255, 255])
            if comparison.any():
                return i, j


def get_upper_bound(img):
    x = range(img.shape[0])
    y = range(img.shape[1])

    for i in x:
        for j in y:
            comparison = img[i, j, :] != np.array([255, 255, 255])
            if comparison.any():
                return i, j


def crop_img(img):
    img = np.array(img, dtype=np.uint8)

    crop_height, crop_width = get_lower_bound(img)
    top, left = get_upper_bound(img)

    bottom = crop_height - 10
    right = crop_width - 10

    return img[top + 10: bottom, left + 10: right, :]


def paste_layer(article, file):
    p = Path(__file__).parent
    img_path = f'{p.parent}/images/{article}/{file}' + '.png'

    pil_image = Image.open(img_path).convert('RGB')
    pil_image = get_background(pil_image, 255, 255, 255)
    pil_image.save(img_path, quality=100)

    # pil_image.save(f'{p.parent}/images/2023-7-6-VAE/test' + '.png', quality=100)


def get_background(img, r: int, g: int, b: int):
    R_C = np.full((img.size[1], img.size[0]), r, dtype=np.uint8)
    G_C = np.full((img.size[1], img.size[0]), g, dtype=np.uint8)
    B_C = np.full((img.size[1], img.size[0]), b, dtype=np.uint8)

    R_C = np.expand_dims(R_C, axis=2)
    G_C = np.expand_dims(G_C, axis=2)
    B_C = np.expand_dims(B_C, axis=2)

    cover_img = np.concatenate((R_C, G_C, B_C), axis=2)
    cover_img = Image.fromarray(cover_img)
    cover_img.putalpha(60)

    img.paste(cover_img, (0, 0), cover_img)
    return img


if __name__ == "__main__":
    '''p = Path(__file__).parent
    img_path = f'{p.parent}/images/2023-7-6-VAE/feat_ex.png'
    resize(img_path)'''

    '''for i in range(16, 27):
            if i != 3:
                main('2023-7-6-VAE', f'eq{i}')
                paste_layer('2023-7-6-VAE', f'eq{i}')'''

    main('lina', f'commutative')
    paste_layer('lina', f'commutative')
