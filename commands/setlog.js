module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '467279300912218131') return message.channel.send('Désolé, mais vous n\'avez pas la permission `Administrateur`!');

    let getchannel = client.guildDB.get(message.guild.id);
    getchannel.id = message.channel.id;
    client.guildDB.set(message.guild.id, getchannel);

    message.channel.send(`The channel **${message.channel.name}** has been configured for logs.`)

}

module.exports.help = {
    name: "setlog",
    category: "config"
}
