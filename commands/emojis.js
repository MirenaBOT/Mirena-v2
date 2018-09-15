var moment = require("moment");

module.exports.run = async (client, message, args) => {

    if (message.guild.emojis.size === 0) return message.channel.send("There is no emojis on this server.");

    message.channel.send(`Here are the \`${message.guild.emojis.filter(e => e.toString()).size}\` emojis of **${message.guild.name}**:\n${message.guild.emojis.map(e => e).join(' - ')}`);

}

module.exports.help = {
    name: "emojis",
    category: "utiles"
}
