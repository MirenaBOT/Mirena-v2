const log = require("./../utils/log.js");

module.exports = async (client) => {

    // console.log(client.guildDB)

    setInterval(function() {
  		client.user.setPresence({game : {name : `m!help | Ozpheln Team [FR] `, type : 0}});
  	}, 60000);

    log.color(`${client.user.username} est online.`, "FgMagenta");
    log.color(`${client.user.username} à ${client.users.size} membres est ${client.guilds.size} serveurs!`, "FgMagenta");

    client.guilds.filter(g => !client.guildDB.has(g.id)).forEach((g) => {
        const get_guildDB = {
            id: 'no_set'
        };
        client.guildDB.set(g.id, get_guildDB);
        log.debug(`[guildDB] Created (lately) the configuration file for ${g.name} (ID:${g.id})`);
    });

}
