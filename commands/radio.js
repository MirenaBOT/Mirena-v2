module.exports.run = async (client, message) => {

    const radio = {
        "nrj": "http://185.52.127.132/fr/30001/mp3_128.mp3?origine=fluxradios",
        "rtl2": "http://streaming.radio.rtl2.fr/rtl2-1-48-192",
        "skyrock": "http://icecast.skyrock.net/s/natio_mp3_128k?tvr_name=tunein16&tvr_section1=128mp3",
        "rfm": "http://rfm-live-mp3-128.scdn.arkena.com/rfm.mp3",
        "fun": "http://streaming.radio.funradio.fr/fun-1-44-128",
        "virgin": "http://vr-live-mp3-128.scdn.arkena.com/virginradio.mp3"
    }

    if (!message.member.voiceChannel) return message.channel.send(`You must be connected in a living room!`)

    if(!message.member.voiceChannel.joinable) return message.channel.send(`I don't have permission to join in this living room!`);

    if(!message.member.voiceChannel.speakable) return message.channel.send(`I don't have permission to talk in this living room!`);

    let args = message.content.split(" ").slice(1).join(" ").toLowerCase();

    if (!args) return message.channel.send('Please specify a radio name, here is the list of available radios:\n • **nrj,**\n • **rtl2,**\n • **skyrock,**\n • **rfm,**\n • **radio,**\n • **virgin.**')

    if (!radio[args]) return message.channel.send('Invalid radio, here is the list of available radios:\n • **nrj,**\n • **rtl2,**\n • **skyrock,**\n • **rfm,**\n • **radio,**\n • **virgin.**')

    message.member.voiceChannel.join().then(connection => {

        require('http').get(radio[args], (res) => {

            connection.playStream(res);

            message.channel.send(`**${args}**  has just been launched good listening`);

        });

    });

}

module.exports.help = {
    name: "radio",
    category: "music"

}
