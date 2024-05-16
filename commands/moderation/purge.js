const discord = require("discord.js");
module.exports = {
    name: "purge",
    category: "moderation",
    description: "Delete A Specif Amount Of Messages Automatically ",
    run: async (client, message, args) => {
        //purge <number of meassages>
        
        let purgeNoPermissionEmbed = new discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle("Error")
        .setDescription("You Dont Have Permission To Do This Command")

        let purgeErrorEmbed = new discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle("You Didnt Correctly Write The Command:")
        .setDescription("_purge <number of messages>")
        .setFooter("You Have To Enter A Command Between 1-100")

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendEmbed(purgeNoPermissionEmbed) //checks im user has permission
        if(!args[0]) return message.channel.sendEmbed(purgeErrorEmbed) //checks if theirs the first argument
        if(args[0] > 100) return message.channel.sendEmbed(purgeErrorEmbed) //checks if it is above 100

        let purgeSuccessful = new discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(`Succsesfully Deleted ${args[0]} messages`)

        message.channel.bulkDelete(args[0])
        message.channel.sendEmbed(purgeSuccessful)
    }
}