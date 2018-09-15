module.exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
    var os = require('os');
    if (client.uptime < 60000) {
        return message.channel.send(':x: I\'m just getting started, please wait 1 minute.');
    }
    message.channel.send(`Here is the different information of ${client.user.username}`, {
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
                    name: "• Uptime:",
                    value: (Math.round(client.uptime / (1000 * 60 * 60))) + " Hrs, " + (Math.round(client.uptime / (1000 * 60)) % 60) + " Mins " + (Math.round(client.uptime / 1000) % 60) + " Secs"
                },
                {
                    name: "• CPU | RAM:",
                    value: `**CPU:** ${(os.loadavg()[0] * os.cpus().length / 100).toFixed(2)}% | **RAM:** ${(process.memoryUsage().rss / 1048576).toFixed()}MB / ${(os.totalmem() > 1073741824 ? `${(os.totalmem() / 1073741824).toFixed(1)} GB` : `${(os.totalmem() / 1048576).toFixed()} MB`)} (${(process.memoryUsage().rss / os.totalmem() * 100).toFixed(2) }%)`
                },
                {
                    name: "• Global Information:",
                    value: `${client.guilds.size} server and ${client.users.size} members `
                },
                {
                    name: "• Ping API:",
                    value: `${Math.round(client.ping)}` + 'ms'
                },
                {
                    name: "• Version",
                    value: `Discord.js: ${Discord.version} | NodeJS: ${process.version} | Bot: 1.0.0`,
                },
                {
                    name: "• OS",
                    value: process.platform,
                }, {
                    name: "• Config",
                    value: os.cpus()[0].model,
                }, {
                    name: "• Thanks",
                    value: `[Ota](https://discord.gg/gkh4s59) [Sworder71](https://github.com/Sworder71)`
                }
            ]
        }
    })

}

module.exports.help = {
    name: "debug",
    category: "bot"
}
