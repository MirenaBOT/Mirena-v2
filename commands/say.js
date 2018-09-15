module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '467279300912218131') return message.channel.send('Sorry, but you don\'t have administrator permission! If you think this is a mistake, contact an owner.');
    let botmessage = args.join(" ");
    if (!botmessage) return message.channel.send(`❌ No text entry!`);
    message.delete().catch().catch((e) => {
        return
    });
    message.channel.send(botmessage);
}

module.exports.help = {
    name: "say",
    category: "bot"
}
