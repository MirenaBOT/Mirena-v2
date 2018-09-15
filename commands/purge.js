module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Sorry, but you do not have the **Manage Messages** permissions! If you think this is an error, contact an owner.')
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send('I do not have the **Manage Messages** permission in this server.');

    if (!args[0]) return message.channel.send('You must specify a number of messages.');
    if (args[0] < 1 && args[0] > 100) return message.channel.send('Please provide a number greater than 1 and 100');
    if (isNaN(args[0])) return message.channel.send('Please provide a corect number.');


    message.channel.bulkDelete(args[0])
        .then(messages => message.channel.send(`🗑 I delete **${args[0]}** messages.`).then(msg => msg.delete({
          timeout: 3000
        }))).catch().catch((e) => message.channel.send('You can not delete messages older than 14 days.'));
}

module.exports.help = {
    name: "purge",
    category: "moderation"
}
