module.exports.run = async (client, message, args) => {
    let rollVal = args[0] || 6;
    if (rollVal < 1) return message.channel.send('What magic are you trying to do? You can\'t roll a zero or a negative side die!')
    var roll = Math.floor(Math.random() * rollVal) + 1;
    message.channel.send({
        embed: {
          color: 0xDF9C9D,
          author: {
              name: client.user.username,
              icon_url: client.user.displayAvatarURL()
          },
          title: `You ran into one: **${roll}**`,
        }
    })

}

module.exports.help = {
    name: "roll",
    category: "fun"
}
