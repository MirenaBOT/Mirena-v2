module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '467279300912218131') return message.channel.send('Désolé, mais vous n\'avez pas la permission `Administrateur`!');

    let getchannel = client.guildDB.get(message.guild.id);
    getchannel.id = 'no_set';
    client.guildDB.set(message.guild.id, getchannel);

    message.channel.send(`Log channel has been removed from **${message.guild.name}** server.`)

}

module.exports.help = {
    name: "dellog",
    category: "config"
}
