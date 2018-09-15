var moment = require("moment");

module.exports.run = async (client, message, args) => {

    const search = args.slice(0).join(' ');
    let {
        member
    } = message;
    if (message.mentions.members.size > 0) {
        member = message.mentions.members.first();
    } else if (search) {
        member = client.findersUtil.findMember(message.guild, search);
        if (member.size === 0) {
            return message.channel.send(`❌ No members found \`${search}\`!`);
        } else if (member.size === 1) {
            member = member.first();
        } else {
            return message.channel.send(client.findersUtil.formatMembers(client, member));
        }
    };

    var user = member.user;

    if (user.bot == true) {
        var checkbot = "Bot";
    } else {
        var checkbot = "Human";
    }
    if (user.presence.status == 'online') {
        var etat = "<:online:476360871246036993> Online";
    } else if (user.presence.status == "offline") {
        var etat = "<:ofline:476360871313014784> Offline";
    } else if (user.presence.status == "idle") {
        var etat = "<:idle:476360871338180611> Idle";
    } else if (user.presence.status == "dnd") {
        var etat = "<:dnd:476360871837433856> Do not disturb";
    }

    message.channel.send(`Here is the different information of **${user.username}**`, {
        embed: {
            color: 0xDF9C9D,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            thumbnail: {
                url: user.displayAvatarURL
            },
            fields: [{
                    name: "• Username:",
                    value: `${user}`,
                    inline: true
                }, {
                    name: "• Nickname:",
                    value: `${user.username + "#" + user.discriminator}`,
                    inline: true
                }, {
                    name: "• Status:",
                    value: etat,
                    inline: true
                }, {
                    name: "• ID:",
                    value: user.id,
                    inline: true
                }, {
                    name: "• Join Discord:",
                    value: moment(user.createdAt).format("LL"),
                    inline: true
                }, {
                    name: "• Join server:",
                    value: moment(message.guild.members.get(user.id).joinedAt).format("LL"),
                    inline: true
                }, {
                    name: "• Category",
                    value: checkbot,
                    inline: true
                }, {
                    name: "• Roles:",
                    value: message.guild.members.get(user.id).roles.array().map(g => g).join(', '),
                    inline: true
                }
            ]
        }
    })
}

module.exports.help = {
    name: "uinfo",
    category: "utiles"
}
