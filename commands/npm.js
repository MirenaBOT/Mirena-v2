const axios = require('axios');

module.exports.run = async (client, message, args) => {

    if (!args[0]) {
        return message.channel.send(':x: Please specify a keyword.');
    }
    const results = await axios({
        method: 'get',
        url: `https://www.npmjs.com/search/suggestions?q=${encodeURIComponent(args.join(' '))}&size=${20}`,
        headers: { 'Content-Type': 'application/json' }
    }).then(r => r.data);
    if (!results[0]) {
        return message.channel.send(':x: Your search does not match any package.');
    }
    let embedFields = [];
    if (results[0].name) {
        embedFields.push({
            name: 'Name',
            value: `[${results[0].name}](https://www.npmjs.com/package/${results[0].name})`,
            inline: true
        });
    }
    if (results[0].version) {
        embedFields.push({
            name: 'Version',
            value: results[0].version,
            inline: true
        });
    }
    if (results[0].publisher) {
        embedFields.push({
            name: 'Author',
            value: typeof results[0].publisher === 'string' ? results[0].publisher : results[0].publisher.username,
            inline: true
        });
    }
    if (results[0].description) {
        embedFields.push({
            name: 'Description',
            value: results[0].description
        });
    }
    if (results[0].links) {
        embedFields.push({
            name: 'Links',
            value: (() => {
                const links = [];
                for (const key in results[0].links) {
                    links.push(`[${key}](${results[0].links[key]})`);
                }
                return links.join(', ');
            })()
        });
    }

    return message.channel.send({
        embed: {
            color: 0xDF9C9D,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            title: 'NPM',
            url: `https://www.npmjs.com/search?q=${encodeURIComponent(args.join('+'))}`,
            thumbnail: {
                url: 'https://proxy.duckduckgo.com/iur/?f=1&image_host=http%3A%2F%2Fdevstickers.com%2Fassets%2Fimg%2Fpro%2Fnrc3.png&u=https://devstickers.com/assets/img/pro/nrc3.png'
            },
            fields: embedFields,
        }
    });

}

module.exports.help = {
    name: "npm",
    category: "utiles"
}
