const discord = require("discord.js");
//_warn @person <reason>
module.exports = {
    name: "hi",
    category: "templates",
    description: "dm test",
    run: async (client, message, args) => {
        
        message.author.send("hi")
    }}