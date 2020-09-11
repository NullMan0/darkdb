const request = require('node-superfetch');

module.exports = {
    sifre: async function(yazi) {
        if(!yazi) throw new TypeError('Lütfen bir sayı gir.')
        if(isNaN(yazi)) throw new TypeError('Bir Sayı Olması Lazım')
           try {
            const { body } = await request.get("https://www.nullman.tk/api/sifre/"+yazi.toLowerCase());
            return body
        } catch (err) {
            throw new TypeError(err);
        }
    },
    kekoyaz: async function(yazi) {
        if(!yazi) throw new TypeError('Lütfen bir yazı gir.')
           try {
            const { body } = await request.get("https://www.nullman.tk/api/kekoyaz/"+yazi.toLowerCase());
            return body
        } catch (err) {
            throw new TypeError(err);
        }
    },
 ,
    tdk: async function(yazi) {
        if(!yazi) throw new TypeError('Lütfen bir kelime gir.')
           try {
            const { body } = await request.get("https://sozluk.gov.tr/gts?ara="+yazi.toLowerCase());
            if(body === "error") {
                return true
                }else{
                    return false
                    }
        } catch (err) {
            throw new TypeError(err);
        }
    }   
 }
