const { RichEmbed } = require("discord.js");
module.exports = {
    name: "event",
    category: "info",
    description: "Shows Next Event!",
    run: async (client, message, args) => {
        const embedHelp = new RichEmbed()
            .setTitle('**CS:GO Event**')
            .setDescription("We're Going To Host A Fortnite CS:GO Event At 7:00!")
            .addField('How Do I Join?','To Join, Add **"SKRTxALERT"AKA Ronnie** **"EZ ZOMBYEYES" AKA Voh** On Fortnite, Be On At 7:00, and Verify By Clicking On The :csgo: Below')
            .addField('What Is This Event?',"This Is A CS:GO Search and Destroy Map Code Which We're Going To Play.")
            .setFooter('See You There!')
            .setTimestamp()
        message.channel.sendEmbed(embedHelp);
    }
}