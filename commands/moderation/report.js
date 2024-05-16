const discord = require("discord.js");
const ms = require("ms")
const fs = require("fs")
//_warn @person <reason>
module.exports = {
    name: "report",
    category: "moderation",
    description: "Report A Member For Their Actions",
    run: async (client, message, args) => {
        let reason = args.slice(1).join(' ')
        let user = message.mentions.users.first()
        
        let reportGoodEmbed = new discord.RichEmbed()
        .setTitle(`Succsesfully Reported User`)
        .addField("Reported:",user)
        .addField("Reported For",reason)
        .addField("Reported By",message.author)
        .setTimestamp()
        .setColor("#ed2800")
        .setThumbnail("https://cdn3.iconfinder.com/data/icons/symbol-3-1/36/259-512.png")
        .setFooter("This Report Will Be Automatically Sent To The Owner Of This Server.")
        if(!user) return message.reply("Unspecified Member")
        if(!reason) return message.reply("Unspecified Reason")

        message.channel.sendEmbed(reportGoodEmbed)
        message.send
    }
}