const Discord = require("discord.js");

module.exports.run = async (client, message) => {
    message.channel.send(`Here is my **${client.commands.map(c => c).length}** commands`, {
        embed: {
            color: 0xDF9C9D,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            thumbnail: {
                url: client.user.displayAvatarURL
            },
            fields: [{
                    name: "• Owner:",
                    value: `${client.commands.filter(cmd => cmd.help.category === 'owner').map(cmd => `\`${cmd.help.name}\``).join(" - ")}`
                },
                {
                    name: "• Bot:",
                    value: `${client.commands.filter(cmd => cmd.help.category === 'bot').map(cmd => `\`${cmd.help.name}\``).join(" - ")}`
                },
                {
                    name: "• Configuration:",
                    value: `${client.commands.filter(cmd => cmd.help.category === 'config').map(cmd => `\`${cmd.help.name}\``).join(" - ")}`
                },
                {
                    name: "• Moderation:",
                    value: `${client.commands.filter(cmd => cmd.help.category === 'moderation').map(cmd => `\`${cmd.help.name}\``).join(" - ")}`
                },
                {
                    name: "• Helpful:",
                    value: `${client.commands.filter(cmd => cmd.help.category === 'utiles').map(cmd => `\`${cmd.help.name}\``).join(" - ")}`
                },
                {
                    name: "• Music:",
                    value: `${client.commands.filter(cmd => cmd.help.category === 'music').map(cmd => `\`${cmd.help.name}\``).join(" - ")}`
                },
                {
                    name: "• fun:",
                    value: `${client.commands.filter(cmd => cmd.help.category === 'fun').map(cmd => `\`${cmd.help.name}\``).join(" - ")}`
                },
                {
                    name: "• NSFW:",
                    value: `${client.commands.filter(cmd => cmd.help.category === 'nsfw').map(cmd => `\`${cmd.help.name}\``).join(" - ")}`
                }
            ]
        }
    })

}
module.exports.help = {
    name: "help",
    category: "utiles"
}
