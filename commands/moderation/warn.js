const Discord = require("discord.js");
const ms = require("ms")
const fs = require("fs")
//_warn @person <reason>
module.exports = {
    name: "warn",
    category: "moderation",
    description: "Warn A Member For Their Actions",
    run: async (client, message, args) => {
        let reason = args.slice(1).join(' ')
        let warnGood = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle("Succsefully Warned User!")

        let warningMessage = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(`You've Been Warned In ${message.guild.name}`)
        .setDescription(`This Has Happend Because You've Violated A Rule In ${message.guild.name}. For Now This Is Just A Warning But Make Sure Not To Violate The Rules!`)
        .addField("Warned For:",reason)
        .addField("Warned By:","idk")

        let errorWarnEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle("Error")
        .addField("You're Not Using The Command Correctly!","The Correct Usage Is:")
        .setDescription("_warn <user> <reason>")
        

        let errorNoPermissions = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("You Don't Have The Permission To Do This Command")
        .addField("To Be Able To:","You Need A Higher Role!")
        
        
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendEmbed(errorNoPermissions)
        let user = message.mentions.users.first()

        if(!user) return message.channel.sendEmbed(errorWarnEmbed)
        if(!args[1]) return message.channel.sendEmbed(errorWarnEmbed)
        


        user.sendEmbed(warningMessage)
        message.channel.sendEmbed(warnGood)
    }
}