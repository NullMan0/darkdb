const request = require('axios')
/*

© NullAPI ©

*/
module.exports = {
    sifre: async function(yazi) {
        if(!yazi) throw new TypeError('Lütfen bir sayı gir.')
        if(isNaN(yazi)) throw new TypeError('Bir Sayı Olması Lazım')
           try {
            const body = await request.get("https://www.nullman.tk/api/sifre/"+yazi.toLowerCase());
            return body.data.sifre
        } catch (err) {
            throw new TypeError(err);
        }
    },
  /*

© NullAPI ©

*/
    kekoyazi: async function(yazi) {
        if(!yazi) throw new TypeError('Lütfen bir yazı gir.')
           try {
            const body = await request.get("https://www.nullman.tk/api/kekoyaz/"+yazi.toLowerCase());
            return body.data.yazi
        } catch (err) {
            throw new TypeError(err);
        }
    },
 /*

© NullAPI ©

*/
    tdk: async function(yazi) {
        if(!yazi) throw new TypeError('Lütfen bir kelime gir.')
 
const body = await request.get("https://sozluk.gov.tr/gts?ara="+yazi)
if(body.data.error) {
  return false
}else{
  return true
}
 
    }
 }
 /*

© NullAPI ©

*/
