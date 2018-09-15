const weather = require('weather-js');
module.exports.run = async (client, message, args) => {
        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
            if (result === undefined || result.length === 0) {
                message.channel.send(':x: Please enter a location!')
                return;
            }
            var current = result[0].current;
            var location = result[0].location;
        message.channel.send({
            embed: {
                color: 0xDF9C9D,
                author: {
                    name: client.user.username,
                    icon_url: client.user.displayAvatarURL
                },
                description: `**${current.skytext}**`,
                thumbnail: {
                    url: current.imageUrl
                },
                fields: [{
                        name: "• Timezone:",
                        value: `UTC${location.timezone}`,
                        inline: true
                    },
                    {
                        name: "• Degree Type:",
                        value: location.degreetype,
                        inline: true
                    },
                    {
                        name: "• Temperature:",
                        value: `${current.temperature} Degrees`,
                        inline: true
                    },
                    {
                        name: "• Feels Like:",
                        value: `${current.feelslike} Degrees`,
                        inline: true
                    },
                    {
                        name: "• Winds",
                        value: current.winddisplay,
                        inline: true
                    },
                    {
                        name: "• Humidity",
                        value: `${current.humidity}%`,
                        inline: true
                    }
                ]
            }
        })
    })
}
module.exports.help = {
    name: "weather",
    category: "utiles"
}
