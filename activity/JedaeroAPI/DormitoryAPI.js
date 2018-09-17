import RNFetchBlob from 'rn-fetch-blob';
import cheerio from 'cheerio-without-node-native';
import iconv from 'iconv-lite';
import { Buffer } from 'buffer';

export default function DormitoryAPI () {
    return new Promise(async function(resolve, reject) {
        let uri = 'http://dormitory.neo-internet.co.kr/';
        let data = new Object();
        try {
        let res = await RNFetchBlob.fetch('GET',uri + "board/adm/Recipe/restaurant.php");
        let strbase64 = new Buffer(res.data, 'base64');
        let resBody = iconv.decode(strbase64, 'EUC-KR').toString();
        let $ = cheerio.load(resBody);
        data['title'] = '기숙사 식당';
        countday = 0;
        countmenu = 0;
        $('.wanted > tbody > tr > td').each(function() {
        TempText = $(this).text();
        locateNumber = 'dormitory' + countday + '_' + countmenu;
        data[locateNumber] = TempText;

        countmenu++;
        if (countmenu % 6 === 0){
            countmenu = 1;
            countday++;
        }
        });

        console.log(data);

        let meal = {
            mealMon: {
                dawn : data.dormitory1_1,
                breakfast : data.dormitory1_2,
                lunch: data.dormitory1_3,
                dinner: data.dormitory1_4,
            }, 
            mealTue: {
                dawn : data.dormitory1_1,
                breakfast : data.dormitory1_2,
                lunch: data.dormitory1_3,
                dinner: data.dormitory1_4,
            }, 
            mealWed: {
                dawn : data.dormitory1_1,
                breakfast : data.dormitory1_2,
                lunch: data.dormitory1_3,
                dinner: data.dormitory1_4,
            }, 
            mealThu: {
                dawn : data.dormitory1_1,
                breakfast : data.dormitory1_2,
                lunch: data.dormitory1_3,
                dinner: data.dormitory1_4,
            }, 
            mealFri: {
                dawn : data.dormitory1_1,
                breakfast : data.dormitory1_2,
                lunch: data.dormitory1_3,
                dinner: data.dormitory1_4,
            }, 
            mealSat: {
                dawn : data.dormitory1_1,
                breakfast : data.dormitory1_2,
                lunch: data.dormitory1_3,
                dinner: data.dormitory1_4,
            }, 
            mealSun: {
                dawn : data.dormitory1_1,
                breakfast : data.dormitory1_2,
                lunch: data.dormitory1_3,
                dinner: data.dormitory1_4,
            }, 
        }

        resolve(meal);

    } catch (err) {

    }
    });
}