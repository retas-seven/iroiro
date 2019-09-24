import sys
import json
import requests


class BookRetrievalService:

    def book_retrieval(self, isbn_list):
        '''
        書籍情報を取得しファイルに出力する
        '''
        # 書籍情報を取得
        book_list = self.__request_openbd(isbn_list)

        for book in book_list:
            if not book:
                continue

            # 書籍情報を編集
            edited_book = self.__edit_book(book)

            # 書籍情報を出力
            self.__output_book(edited_book)

    def __request_openbd(self, isbn_list):
        '''
        書籍情報を取得する
        '''
        # URLパラメータはカンマ区切りのISBNを指定する
        url_param = ','.join(isbn_list)
        url = f'https://api.openbd.jp/v1/get?isbn={url_param}'
        
        # APIから書籍情報を取得
        response = requests.get(url)

        # ステータスチェック
        if response.status_code != requests.codes.ok:
            response.raise_for_status()
        
        # APIから返却された書籍情報を取得
        book_list = json.loads(response.content)
        return book_list

    def __edit_book(self, book):
        '''
        書籍情報を編集する
        '''
        # TODO 編集処理を作成
        return book

    def __output_book(self, edited_book):
        '''
        書籍情報をファイル出力する
        '''
        isbn = edited_book.get('onix').get('RecordReference')
        with open(f'{isbn}.txt', mode='a') as f:
            f.write('■書籍情報\n')
            f.write(str(edited_book))
            # f.write(pprint.pformat(edited_book))
            f.write('\n')

if __name__ == '__main__':
    # ０番目はモジュール名のため削除する
    del sys.argv[0]

    # コマンドラインでISBNが指定されなかった場合、サンプルのISBNを使用する
    isbn_list = sys.argv or ['9784033213804', '9784052031113']

    BookRetrievalService().book_retrieval(isbn_list)
    print('終了しました！')

    