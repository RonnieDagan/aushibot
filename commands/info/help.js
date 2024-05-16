
const { RichEmbed } = require("discord.js");
module.exports = {
    name: "help",
    category: "info",
    description: "Shows You Info About About Aushi",
    run: async (client, message, args) => {
        const embedHelp = new RichEmbed()
            .setTitle('Help')
            .setDescription('Heres Are A List Of Commands For @Aushi. Please Note That Gamer Bot Is Under Development Which Is The Reason For Our Shortage Of Commands')
            .addField('🤣Fun:','▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬')
            .addField('`meme`',' Let Aushi Search The Internet For A Meme For You')
            .addField('‎‍⚖️Moderation:','▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬')
            .addField('`purge<number of messages>`',' Delete A Specific Amount Of Messages')
            .addField('`warn <member> <reason>`','Warn A Specific Member For Their Actions')
            .addField('⏰Upcoming Commands:','▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬')
            .addField('`profile`','See Your Profile In This Server')    
            .addField('`economy`','A Fully Working Economy W/ Aushi')
            .setFooter('@Aushi Made By SKRT#3146, Contact For Any Questions')
            .setColor(0x00FF27)
        message.channel.sendEmbed(embedHelp);
    }
}