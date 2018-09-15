module.exports = async (client, message) => {

    var prefix = 'm!';

    var mention = `<@${client.user.id}>`;

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    if (message.content === mention) return message.channel.send('My prefix is ​​`m!` in this server to see all my commands done `m!help`.')

    const args = message.content.split(/\s+/)
    const cmd = args.shift().toLowerCase().slice(prefix.length);
    if (!message.content.toLowerCase().startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd);
    if (commandfile) return commandfile.run(client, message, args);
}
