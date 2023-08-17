const Discord = require("discord.js");
const fs = require("fs");
//const { SlashCommandBuilder } = require("@discordjs/builders");
//const { eventNames } = require("process");
//const Canvas = require("canvas");
//const botID = "1133864746026803410";
//const ownerID = "933276326922698802";
const Client = new Discord.Client ({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.GUILD_INVITES, 
    ]
});


const eventFiles = fs.readdirSync("./Events").filter(file => file.endsWith(".js"))
for(const file of eventFiles){
    const event = require("./Events/"+ file);
    if(event.once){
        Client.once(event.name, (...args) => event.execute(...args));
    }
    else{
        Client.on(event.name, (...args) => event.execute(Client,...args));
    }
}
config = require('./config/config.json')
Client.login(config.token)


