const { MessageEmbed } = require ("discord.js");
module.exports = {
    name: "messageCreate",
    once: false,
    execute(Client,message,Discord){
        const config = require('../config/config.json');
        if(message.content.startsWith (config.prefix + "suggest")){
            message.delete();
            //const pseudo = message.member.displayName
            const member5 = message.author.username
            //console.log(member5)
            const suggest = message.content.slice(9).trim();
            const embed2 = new MessageEmbed()
                .setColor("#FFD700")
                .setDescription("***"+ suggest + "***")
                .setAuthor(member5)
                .setFooter(`le ${new Date(message.createdTimestamp).toLocaleString()}`)
                
    
                message.channel.send({embeds : [embed2]}).then(msg => {
                    msg.react("✅")
                    msg.react("❌")
                });
                
        };
    }
}