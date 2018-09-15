module.exports.run = async (client, message, args) => {

    var today = new Date()
    let Day = today.toString().split(" ")[0].concat("day");
    let Month = today.toString().split(" ")[1]
    let Year = today.toString().split(" ")[3]

    message.channel.send({
        embed: {
            color: 0xDF9C9D,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            fields: [{
                name: "• Today is:",
                value: `**${Day} ${Month} ${Year}**\n\`Time of day:\` **${today.toString().split(" ")[4]}**`,
                inline: true
            }
            ]
        }
    })

}

module.exports.help = {
    name: "time",
    category: "utiles"
}
