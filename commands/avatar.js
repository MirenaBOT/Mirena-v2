module.exports.run = async (client, message, args) => {
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
    message.channel.send({
        embed: {
            color: 0xDF9C9D,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            title: `🖼 Here is the avatar of **${member.user.username}**:`,
            image: {
              url: member.user.displayAvatarURL({size: 1024})
            }
        }
    })
};
module.exports.help = {
    name: "avatar",
    category: "utiles"
};
