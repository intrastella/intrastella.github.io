import pypdfium2 as pdfium
from PIL import Image
from pathlib import Path
import numpy as np
import copy as c


def main(article, file):
    p = Path(__file__).parent
    in_path = f'{p}/_latex_pdf/{article}/{file}.pdf'
    out_path = f'{p.parent}/images/{article}/{file}' + '.png'

    import fitz

    doc = fitz.open(in_path)
    page = doc.load_page(0)

    zoom = 2
    mat = fitz.Matrix(zoom, zoom)
    pix = page.get_pixmap(matrix=mat, dpi=600)

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

    # pil_image = get_background(pil_image, 74, 5, 7)
    # 51, 19, 19

    width, height = pil_image.size

    if width != 900:
        scale = width/900
        new_size = (900, int(height / scale))
        pil_image = pil_image.resize(new_size)

    pil_image.save(img_path, quality=100)
    pil_image = Image.open(img_path).convert('RGB')

    width, height = pil_image.size

    Last_image = Image.new('RGBA', size=(width + 2, height + 2), color=(137, 145, 156))
    Last_image.paste(pil_image, (1, 1))

    width, height = Last_image.size

    image = Image.new('RGBA', size=(width + 20, height + 20), color=(255, 255, 255))
    image.paste(Last_image, (10, 10))

    width, height = image.size

    Last_image = Image.new('RGBA', size=(width + 4, height + 4), color=(137, 145, 156))
    Last_image.paste(image, (2, 2))

    Last_image.show()

    """p = Path(__file__).parent
    out_path = f'{p.parent}/images/2023-7-6-VAE/test' + '.png'"""

    Last_image.save(img_path, quality=100)


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

    bottom = crop_height - 5
    right = crop_width - 5

    return img[top + 5: bottom, left + 5: right, :]


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
    for i in range(1, 14):
        if i != 3:
            paste_layer('2023-7-6-VAE', f'eq{i}')

    # paste_layer('2023-7-6-VAE', f'eq1')


