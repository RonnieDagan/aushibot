
const { RichEmbed } = require("discord.js");
module.exports = {
    name: "cointoss",
    category: "fun",
    description: "Flips A Coin Thats Either Heads Or Talls",
    run: async (client, message, args) => {
        
        let land = ["Heads","Tails"];
        let result = Math.floor((Math.random() * land.length));
        let img = "https://images-na.ssl-images-amazon.com/images/I/51NyMaKLydL._AC_.jpg"
       if(land[result] != "Tails") {
           img = "https://i.ebayimg.com/images/g/xtcAAOSwLwBaZigS/s-l400.jpg"
       }

        let coinEmbed = new RichEmbed()
        .addField('Result:',land[result])
        .setThumbnail(img)
        .setColor(0x9c9e99)
        message.channel.sendEmbed(coinEmbed);
    }
}