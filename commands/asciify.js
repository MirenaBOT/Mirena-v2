var figlet = require('figlet');

exports.run = (client, message, args) => {

    var maxLen = 14

    if (args.join(' ').length > maxLen) return message.channel.send('Only 14 characters.')

    if (!args[0]) return message.channel.send('Please specify a text for asciify!');

    figlet(`${args.join(' ')}`, function (err, data) {
        if (err) {
            return;
        }

        message.channel.send(`${data}`, {
            code: 'AsciiArt'
        });
    });

}

module.exports.help = {
    name: "asciify",
    category: "fun"
}
