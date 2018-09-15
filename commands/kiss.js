const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  if (!args[0]) {
    return message.channel.send('Please mark a name of a person.');
  }

    const search = args.slice(0).join(' ');
    let {
        member
    } = message;
    if (message.mentions.members.size > 0) {
        member = message.mentions.members.first();
    } else if (search) {
        member = client.findersUtil.findMember(message.guild, search);
        if (member.size === 0) {
          return message.channel.send(`❌ No members found \`${search}\`!`);
        } else if (member.size === 1) {
            member = member.first();
        } else {
            return message.channel.send(client.findersUtil.formatMembers(client, member));
        }
    };

    const Neko = require("neko.js");

    let nekoclient = new Neko.Client();

    let kiss = await nekoclient.kiss();

    if (member) {
        nekoclient.kiss().then((kiss) => {
            message.channel.send({
                embed: {
                  color: 0xDF9C9D,
                  author: {
                      name: client.user.username,
                      icon_url: client.user.displayAvatarURL
                  },
                  title: `${message.member.displayName} gives a kiss to ${member.displayName}`,
                  image: {
                      url: kiss.url
                  }
                }
            })
        });
    }
}

module.exports.help = {
    name: "kiss",
    category: "fun"
}
