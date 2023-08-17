const { MessageEmbed, MessageSelectMenu } = require ("discord.js");
module.exports = {
    name: "messageCreate",
    once: false,
    async execute(Client,message,){
        const config = require('../config/config.json');
        if (message.content.startsWith(config.prefix + 'serveur')){
            if (message.guild) {
            const guild = message.guild;
            const ownerid = guild.ownerId
            const memberOwner = await message.guild.members.fetch(ownerid);
            const memberTag = memberOwner.user.tag;
            const botCount = message.guild.members.cache.filter(member => member.user.bot).size;
            const roles2 = message.guild.roles.cache.size
            const rolesnum = (roles2 - 1).toString();
            const roles = message.guild.roles.cache
                .filter(role => role.name !== '@everyone')
                .map(role => role.toString())
                .join(', ');
            //const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(7, '0')}`; // Genere une couleur aleratoire
            //console.log(randomColor)
            const embed = new MessageEmbed()
                .setTitle("Info Sur Le Serveur")
                .setColor("#1c91ca")
                //.setColor(randomColor)
                .addFields([
                    {name: "Nom du serveur" ,value : guild.name},
                    {name: "Identifiant du serveur" ,value : guild.id},
                    {name: "Proprietaire du serveur" ,value : memberTag},
                    {name: "Nombres de membre(s)" ,value :  `${guild.memberCount} membre(s) dont ${botCount} bot(s)` },
                    {name: "Nombres de salon(s)" ,value : `${guild.channels.cache.size} salon(s)`},
                    {name: "Nombres de role(s)" ,value : `${rolesnum} role(s)\n`+roles},  
                    {name: "Date de creation du serveur" ,value : `${guild.createdAt.toLocaleDateString('fr-FR')}`},
                    {name: "Nombres de Booste(s)" ,value : `${guild.premiumSubscriptionCount} booste(s)`},
                    ])
                if (message.guild.icon) {
                    embed.setThumbnail(message.guild.iconURL({ dynamic: true }));
                }
                else{
                    embed.setThumbnail(message.guild.iconURL);
                }
            message.reply({ embeds : [embed]})
            }else{
                message.reply("vous etes pas sur un serveur, veuiller envoyer la commande sur un serveur.")
            }
        }
    }
}