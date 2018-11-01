var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function encode64(input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
 
    do {
       chr1 = input.charCodeAt(i++);
       chr2 = input.charCodeAt(i++);
       chr3 = input.charCodeAt(i++);
 
       enc1 = chr1 >> 2;
       enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
       enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
       enc4 = chr3 & 63;
 
       if (isNaN(chr2)) {
          enc3 = enc4 = 64;
       } else if (isNaN(chr3)) {
          enc4 = 64;
       }
 
       output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + 
          keyStr.charAt(enc3) + keyStr.charAt(enc4);
    } while (i < input.length);
    
    return output;
}

var uri = 'dreamy.jejunu.ac.kr';

export default function (id, pwd) {
    let baseid = encode64(id),
        basepwd = encode64(pwd);

    console.log(baseid, basepwd);
    fetch(`http://${uri}/frame/index.do`, {
        'method':'GET',
        'credentials':'include',    
        'headers': {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
            'Connection':'keep-alive',
        },
    })
    .then(response => response.headers)
    .then(headers => headers.map['set-cookie'])
    .then(emptyCookie => {
        fetch(`http://${uri}/frame/sysUser.do?next=`, {
            'method': 'POST',
            'credentials':'include',
            'mode': 'no-cors',
            'redirect': 'manual',
            'headers': {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
                'Connection':'keep-alive',
                'Upgrade-Insecure-Requests' : '1',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Method':'POST',
            },
            'body': `tmpu=${baseid}&tmpw=${basepwd}&mobile=&app=&z=Y&userid=&password=`,
            'agent': {
                'rejectUnauthorized': 'false'
            }
        }).then(response => {
            console.log(response, "됐냐?");
        })
        // .catch(err => {
        //     console.log(err);
        //     // fetch(`http://${uri}/frame/main.do`, {
        //     //     'method': 'GET',
        //     //     'credentials':'include',
        //     //     'headers': {
        //     //         'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
        //     //         'Connection':'keep-alive',
        //     //     }
        //     // }).then(res => res.text())
        //     // .then(res => console.log(res));
        // });
    });
    
}