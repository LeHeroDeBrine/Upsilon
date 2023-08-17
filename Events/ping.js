const { MessageEmbed } = require ("discord.js");
module.exports = {
    name: "messageCreate",
    once: false,
    execute(Client,message, client){
        const config = require('../config/config.json');

        if(message.content.startsWith (config.prefix + "ping")){
            const embedPing = new MessageEmbed()
                .setTitle("✅ Le ping est de ***__"+ Client.ws.ping+"__*** ms.")
                .setColor("#1c91ca")
                message.reply({ embeds : [embedPing],})
        }
    }
}