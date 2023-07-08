import argparse
from pathlib import Path


class Article:

    def __init__(self, article_name: str, task: str, chapter_dir=None):

        self.article_name = article_name
        if chapter_dir:
            self.chapter_dir = Path(chapter_dir)
        self.chapters = dict()
        self.exe(task)

    def create(self, new_article_dir):
        title = input("Enter a title: ")
        intro = input("Enter an intro: ")
        start = input("Enter a starting text: ")

        filePath = new_article_dir / (self.article_name + '.md')
        filePath.touch(exist_ok=True)
        file = open(filePath, "a+")
        file.write(
            "---\n" +
            f"title: {title}\n" +
            f"intro: {intro}\n" +
            f"start: {start}\n" +
            "---"
        )

        print(f'Article {self.article_name} is set up.')

    def add_chapter(self, new_article_dir):
        dst_file = new_article_dir / (self.chapter_dir.stem + '.md')
        self.chapter_dir.rename(dst_file)

    def del_chapter(self):
        self.chapter_dir.unlink()

    def del_article(self):
        pass

    def build(self, new_article):
        chapters = list(new_article.glob(f'*'))

        if len(chapters) > 0:

            pre_file = None
            for c in chapters:
                if c.stem == 'Required knowledge':
                    pre_file = c

                elif c.stem != self.article_name:
                    order = input(f"Enter (only!) the chapter number for {c.stem}: ")
                    self.chapters[order] = dict(path=c, name="".join([l if l != "-" else " " for l in list(c.stem)]))

            self.chapters = dict(sorted(self.chapters.items()))

            filePath = new_article / (new_article.stem + '.md')
            file = open(filePath, "a+")

            txt = f"\nchapters: {[list(d.values())[1] for d in list(self.chapters.values())]} \n---"
            file.write(txt)

            if pre_file:
                filePath = new_article / (new_article.stem + '.md')
                file = open(filePath, "a+")

                begin = "\n <br/> \n ### Required knowledge"

                with open(pre_file.as_posix()) as f:
                    txt = f.read()

                ending = """
                                                    <br/>
                                                    ![_config.yml]({{ site.baseurl }}/images/separator.png)
                                                    """
                file.write(begin + txt + ending)

            for key in self.chapters.keys():
                p = self.chapters[key]['path']

                filePath = new_article / (new_article.stem + '.md')
                file = open(filePath, "a+")

                with open(p.as_posix()) as f:
                    txt = f.read()
                name = "".join([l if l != "-" else " " for l in list(p.stem)])
                file.write("\n\n{{% include chapter.html name=\"{}\" %}} \n<br/>\n".format(name) +
                           txt +
                           '\n<br/>' +
                           '\n\n![_config.yml]({{ site.baseurl }}/images/separator.png)')

        else:
            raise ValueError(f"No chapters yet.")

    def exe(self, task):
        cwd = Path().resolve()
        articles = cwd / '.articles'
        new_article = articles / self.article_name

        folders = list(articles.glob(f'*'))

        if len(folders) > 0:
            for d in folders:
                if self.article_name == d.stem:
                    if task == 'build':
                        self.build(new_article)
                        print(f'Article {self.article_name} is created.')
                        return

                    elif task == 'del_a':
                        self.del_article()
                        print(f'Article {self.article_name} is deleted.')
                        return

                    elif task == "add":
                        chapters = list(new_article.glob(f'*'))

                        if len(chapters) > 0:
                            for c in chapters:

                                if self.chapter_dir.stem == c.stem:
                                    if task == 'del_c':
                                        self.del_chapter()
                                        print(f'Chapter {self.chapter_dir.stem} is deleted.')
                                        return

                            print(f'Chapter {self.chapter_dir.stem} not found.')
                            self.add_chapter(new_article)
                            print(f"New file for chapter {self.chapter_dir.stem} added.")
                            return

            if task == "del_c":
                print(f'Chapter {self.chapter_dir.stem} not found.')
                return
            else:
                print(f'Article {self.article_name} not found.')

            if task == "create":
                new_article.mkdir(parents=True, exist_ok=True)
                print(f"New folder for article {self.article_name} created.")
                self.create(new_article)
                return


def main(article_name, task, chapter_dir):
    # article : create / del_a
    # chapter : add / del_c

    Article(article_name=article_name, task=task, chapter_dir=chapter_dir)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("-article", "--article_name", required=True)
    parser.add_argument("-t", "--task", default='create', const='create', choices=['add', 'create', 'del_c', 'del_a', 'build'], required=True)
    parser.add_argument("-dir", "--chapter_dir")
    args = parser.parse_args()
    main(**vars(args))
