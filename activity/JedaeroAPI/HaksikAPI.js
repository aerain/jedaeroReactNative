async function HaksikAPI () {

    return new Promise(function (resolve, reject) {
        let uri = 'http://www.jejunu.ac.kr/camp/stud/foodmenu';
        let data = {};
        try {
            let res = await RNFetchBlob.fetch('GET', uri);
            let $ = cheerio.load(res.text());
            {
                data['title'] = '백두관 식당';
                countday = 1;
                countmenu = 1;
                $('td.border_right.border_bottom.txt_center').each(function() {
                    TempText = $(this).text().substring(1).trim();
                    locateNumber = 'baekdu' + countday + "_" + countmenu;
                    data[locateNumber] = TempText;
                    countmenu++;
                    if (countmenu % 14 === 0){
                    countmenu = 1;
                    countday++;
                    }
                });
            }
        } catch (err) {
    
        }
    });

    
        
}

//     switch (this.props.DoW) {
//         case "mon":
//           this.setState({
//             meal: {
//               combo : data.baekdu1_3,
//               dinner : data.baekdu1_4,
//               special: data.baekdu1_6,
//               western: data.baekdu1_9,
//               chinese : data.baekdu1_12,
//             }
//           })
//           break;
//         case "tue":
//           this.setState({
//             meal: {
//               combo : data.baekdu2_3,
//               dinner : data.baekdu2_4,
//               special: data.baekdu2_6,
//               western: data.baekdu2_9,
//               chinese : data.baekdu2_12,
//             }
//           })
//           break;
//         case "wed":
//           this.setState({
//             meal: {
//               combo : data.baekdu3_3,
//               dinner : data.baekdu3_4,
//               special: data.baekdu3_6,
//               western: data.baekdu3_9,
//               chinese : data.baekdu3_12,
//             }
//           })
//           break;
//         case "thu":
//           this.setState({
//             meal: {
//               combo : data.baekdu4_3,
//               dinner : data.baekdu4_4,
//               special: data.baekdu4_6,
//               western: data.baekdu4_9,
//               chinese : data.baekdu4_12,
//             }
//           })
//             break;
//         case "fri":
//           this.setState({
//             meal: {
//               combo : data.baekdu5_3,
//               dinner : data.baekdu5_4,
//               special: data.baekdu5_6,
//               western: data.baekdu5_9,
//               chinese : data.baekdu5_12,
//             }
//           })
//           break;
//       }
//     }
//   } catch (error) {
//       console.log(error);
//   }
