module.exports = async (client, message) => {
    if (message.author.bot) return;
    let getlog = client.guildDB.get(message.guild.id);
    if (getlog == undefined) return;
    if (getlog.id == 'no_set') return;
    let channel = message.guild.channels.find(c => c.id == getlog.id);
    if (!channel) return;
    channel.send(`Message from **${message.member.user.username}** deleted`, {
        embed: {
            color: 0xDF9C9D,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            fields: [{
                    name: "• Channel:",
                    value: `${message.channel.name}`
                },
                {
                    name: "• Message:",
                    value: message.content
                }
            ]
        }
    })
}
