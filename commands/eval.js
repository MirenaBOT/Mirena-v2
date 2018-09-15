module.exports.run = async (client, message, args) => {

    let cus = client.users.size;
    let cgs = client.guilds.size;

    const clean = text => {
        if (typeof (text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text
    };
    if (message.author.id != '467279300912218131') return message.channel.send(`⚠ You do not have permission to use this command.`);
    try {
        const code = args.join(" ");
        if (code.length === 0) return message.channel.send("⚠ Aucun code à Eval");
        let evaled = eval(code);
        if (typeof evaled !== "string");
        evaled = require('util').inspect(evaled);
        let codeok = evaled.replace(client.token, "Do you want a cold beer instead of my token?");
        message.channel.send(clean(codeok.substr(0, 1850)), {
            code: "js"
        }).then(async (res) => {
            await res.react("🍻");
        });
    } catch (err) {
        message.channel.send(clean(err), {
            code: "js"
        }).then(async (res) => {
            await res.react("❌");
        });
    };
}
module.exports.help = {
    name: "eval",
    category: "owner",
}
