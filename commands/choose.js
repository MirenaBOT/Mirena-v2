module.exports.run = async (client, message, args) => {
    if (!args[0]) {
        return message.channel.send(`Please ask at least 2 choices.`);
    }
    let choices = args;
    if (choices.length < 2) {
        return message.channel.send(`I have to choose between at least two things.`);
    }
    let choice = choices[Math.floor(Math.random() * choices.length)].trim();
    message.channel.send(`I have chosen: \`${choice}\`!`);
    }
    
    
    module.exports.help = {
        name: "choose",
        category: "fun"
    }
    