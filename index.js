const request = require('node-superfetch');

module.exports = {
    sifre: async function(yazi) {
        if(!yazi) throw new TypeError('Lütfen bir dizi ismi gir. Örneğin; Lucifer')
        if(isNaN(yazi)) throw new TypeError('Bir Sayı Olması Lazım')
           try {
            const { body } = await request.get("https://www.nullman.tk/api/sifre?sifre="+yazi.toLowerCase());
            return body
        } catch (err) {
            throw new TypeError(err);
        }
    }
 }
