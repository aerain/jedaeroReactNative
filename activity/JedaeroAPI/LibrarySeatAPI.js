import RNFetchBlob from 'rn-fetch-blob';
import cheerio from 'cheerio-without-node-native';
import iconv from 'iconv-lite';
import { Buffer } from 'buffer';

var uri = 'http://203.253.194.135:8011/WebSeat/domian5.asp';

export default async function () {
    let haksa = {};
        haksa.title = "도서좌석",
        haksa.row = [];
    try {
        let res = await RNFetchBlob.fetch('GET', uri);
        let strbase64 = new Buffer(res.data, 'base64');
        let resBody = iconv.decode(strbase64, 'EUC-KR').toString();
        let $ = cheerio.load(resBody);

        $('table').eq(1).find('tr').each(function (tr) {
            if(tr >= 2) {
                let tempRow = {key : tr};
                $(this).find('td').each(function(td) {
                    tempRow['table' + td] = $(this).text();
                })
                haksa.row.push(tempRow);
            } 
        })
    } catch(err) {
        console.log(err);
        return err;
    } finally {
        return haksa;
    }
}