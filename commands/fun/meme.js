
const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "meme",
    catergory: "fun",
    description: "Scans The Internet For A Meme!",
    
    run: async (client, message, args) => {
        // In this array, 
        // you can put the subreddits you want to grab memes from
        if(!args[0]) {
        var subReddits = ["dankmemes"];
        }else{
            subReddits = [args[0]];

        }
        // Grab a random property from the array
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        // Get a random image from the subreddit page
        const img = await randomPuppy(random);
        const embedMeme = new RichEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embedMeme)
    }
}