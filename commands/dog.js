const superagent = require("superagent");

module.exports.run = async (client, message) => {
    let {
        body
    } = await superagent
        .get('https://random.dog/woof.json');
    message.channel.send({
          embed: {
            color: 0xDF9C9D,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            image: {
                url: body.url
            }
        }
    })
}

module.exports.help = {
    name: "dog",
    category: "fun"
}
