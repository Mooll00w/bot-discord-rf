const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const ytSearch= require('yt-search');

const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]});

const prefix = "!";

Client.on("ready", () =>{
    console.log("Bot Connecté");
});

Client.on("messageCreate", message => {

    if(message.author.bot) return;

    //help
    if(message.content === prefix + "help") {
        const embed = new Discord.MessageEmbed()
            .setColor("#ffffff")
            .setTitle("Liste des commandes")
            .setURL("https://www.republiqueforum.fr/forum")
            .setDescription("Développé par Mooll00w01")
            .addField("!help", "Affiche la liste la liste des commandes.")
            .setTimestamp();
        message.channel.send({ embeds: [embed]});
    }

})
Client.login(process.env.TOKEN);
