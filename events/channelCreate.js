module.exports = async (client, channel) => {
    let get_log = client.guildDB.get(channel.guild.id);
    if (get_log == undefined) return;
    if (get_log == 'no_set') return;
    let get_channel = channel.guild.channels.find(c => c.id == get_log.id);
    if (!get_channel) return;
    get_channel.send(`A **${channel.type}** channel was created`, {
        embed: {
            color: 0xDF9C9D,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            fields: [{
                name: '• Name:',
                value: channel.name
            }, {
                name: '• ID:',
                value: channel.id
            }]
        }
    });
};
