const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.reply("Veuillez poser une question.");
    let question = args.join(" ");
    let replies = ["Yes", "No", "I don't know. I don't know.", "Ask again later", "I do not wish to offend you", "Are you sure you know my answer?", "Of course it is.", "Obviously"];
    let result = Math.floor((Math.random() * replies.length));

    message.channel.send({
        embed: {
          color: 0xDF9C9D,
          author: {
              name: client.user.username,
              icon_url: client.user.displayAvatarURL
          },
            thumbnail: {
                url: "https://thumbs.gfycat.com/KeenVerifiableCavy-max-1mb.gif"
            },
            fields : [
                {
                "name": "Question asked:",
                "value": question
            },
                            {
                "name": "Answers given:",
                "value": replies[result]
            }
        ]
        }

    })

}

module.exports.help = {
    name: "8ball",
    category: "fun"
}
