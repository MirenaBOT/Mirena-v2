module.exports = async (client, member) => {
    let get_log = client.guildDB.get(member.guild.id);
    if (get_log == undefined) return;
    if (get_log == 'no_set') return;
    let get_channel = member.guild.channels.find(c => c.id == get_log.id);
    if (!get_channel) return;

    get_channel.send(`A new member has joined the server`, {
        embed: {
            color: 0xDF9C9D,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            fields: [{
                name: '• Name:',
                value: `${member.user.username}`
            }, {
                name: '• ID:',
                value: `${member.user.id}`
            }]
        }
    });
};
