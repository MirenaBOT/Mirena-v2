const Discord = require('discord.js');
const fs = require("fs");
const log = require("./utils/log.js");
const Enmap = require('enmap');
const db = require('enmap-level');
const client = new Discord.Client();
client.commands = new Discord.Collection();

(async function () {
    fs.readdir("./commands/", (err, files) => {
        if (err) log.error(err);
        let cmd = files.filter(f => f.split(".").pop() === "js");
        if (cmd.length <= 0) {
            log.debug("Aucune commande trouvée :/\n");
            return;
        }

        log.debug(`Chargement des (${files.length} commandes)`);
        cmd.forEach((f, i) => {
            let fichier = require(`./commands/${f}`);
            client.commands.set(fichier.help.name, fichier);
        });

        log.debug(`Toutes les commandes ont été chargées.\n`);
    });

    fs.readdir("./events/", (err, files) => {
        if (err) log.error(err);
        let cmd = files.filter(f => f.split(".").pop() === "js");
        if (cmd.length <= 0) {
            log.debug("Aucun events trouvée :/\n");
            return;
        }

        log.debug(`Chargement des (${files.length} events)`);
        files.forEach((f, i) => {
            const events = require(`./events/${f}`);
            const event = f.split(".")[0];
            client.on(event, events.bind(null, client));
            delete require.cache[require.resolve(`./events/${f}`)];
        });

        log.debug(`Toutes les events ont été chargés.\n`);
    });

    fs.readdir("./helpers/", async (err, files) => {
        if (err) log.error(err);
        let cmd = files.filter(f => f.split(".").pop() === "js");
        if (cmd.length <= 0) {
            log.debug("Aucune fonctions trouvée :/\n");
            return;
        }

        log.debug(`Chargement des (${files.length} fonctions)`);
        files.forEach(async (r) => {
            const helper = require(`./helpers/${r}`);
            client[r.split('.')[0]] = helper;
        });

        log.debug(`Toutes les fonctions ont été chargés.\n`);
    });

}());

client.guildDB = new Enmap({
    provider: new db({
        name: 'guildDB'
    })
});

client.login("NDYyNjYzODE5MTY0OTA5NTY4.Dm1rPQ.ZNligMW435uEcWrI1Td7Eb4hx_c")
    .then(() => log.log('[Discord] Connecté au WebSocket !'))
    .catch(console.error);
