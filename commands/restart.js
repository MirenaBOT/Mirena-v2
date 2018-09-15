module.exports.run = async (client, message, args) => {

    if (message.author.id != '467279300912218131') return message.channel.send(`⚠ You do not have permission to use this command.`);

    message.channel.send(`Rebooting the process...`)

    setTimeout(function () {
        process.exit(1);
    }, 3 * 1000)

}
module.exports.help = {
    name: "restart",
    category: "owner",
}
