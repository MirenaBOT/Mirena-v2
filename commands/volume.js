module.exports.run = async (client, message) => {

    if (!message.member.voiceChannel) return message.channel.send(`You must be connected in a living room!`)

    if(!message.member.voiceChannel.joinable) return message.channel.send(`I don't have permission to join in this living room!`);

    if(!message.member.voiceChannel.speakable) return message.channel.send(`I don't have permission to talk in this living room!`);

    if (!message.guild.voiceConnection.player.dispatcher || message.guild.voiceConnection.player.dispatcher.paused) return message.channel.send('I\'m not playing');

    let args = message.content.split(" ");

    if (parseInt(args[1]) > 100) return message.channel.send("The volume is already at its maximum!");

    message.guild.voiceConnection.player.dispatcher.setVolume((parseInt(args[1]) / 100));

    message.channel.send(`The volume is now at **${parseInt(args[1])}/100**.`);

}

module.exports.help = {
    name: "volume",
    category: "music"

}
