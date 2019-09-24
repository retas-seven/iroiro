import json
import requests


class BookRetrievalService:

    def book_retrieval(self, isbn):
        # 書籍情報を取得
        book_info = self.__request_openbd(isbn)

        # 書籍情報を編集
        edit_book_info = self.__edit_book_info(book_info)

        # 書籍情報を出力
        self.__output_book_info(isbn, edit_book_info)

    def __request_openbd(self, isbn):
        '''
        書籍情報を取得する
        '''
        ret = {}
        url = f'https://api.openbd.jp/v1/get?isbn={isbn}'
        
        # APIから書籍情報を取得
        response = requests.get(url)

        # ステータスチェック
        if response.status_code != requests.codes.ok:
            resopnse.raise_for_status()
        
        # APIから返却された書籍情報を取得
        contentList = json.loads(response.content)

        if not contentList or not contentList[0]:
            print('書籍情報ヒットなし')
            return ret

        ret.update(contentList[0])
        return ret

    def __edit_book_info(self, book_info):
        '''
        書籍情報を編集する
        '''
        # TODO 編集処理を作成
        return book_info

    def __output_book_info(self, isbn, edit_book_info):
        '''
        書籍情報をファイル出力する
        '''
        with open(f'{isbn}.txt', mode='a') as f:
            f.write('■書籍情報\n')
            f.write(str(edit_book_info))
            f.write('\n')

if __name__ == "__main__":
    BookRetrievalService().book_retrieval('9784033213804')
    print('終了しました！')

    