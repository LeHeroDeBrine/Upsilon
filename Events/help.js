const { MessageEmbed, MessageSelectMenu } = require ("discord.js");
const { MessageActionRow } = require ("discord.js");
module.exports = {
    name: "messageCreate",
    once: false,
    execute(Client,message, Discord,){
        const config = require('../config/config.json');
        if(message.content.startsWith (config.prefix + "help")){
            const embed = new MessageEmbed()
                .setTitle("Commande Upsilon")
                .setColor("#1c91ca")
                .setDescription("Préfixe = !")
                .setFooter("Choisissez une catégorie dans le sélecteur ci-dessous pour en consulter les commandes.")
                .addFields([
                    {name: "• Bot" , value: "donne les info sur Upsilon"},
                    {name: "• Moderation" , value: "affiche les commandes pour la moderation"},
                ]);
                

        var row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId("help")
                    .setPlaceholder("Acceuil")
                    .addOptions([
                        {
                            label: "Bot",
                            description: "Info sur le bot",
                            value: "botinfo",
                        },
                        {
                            label: "Modération",
                            description: "Commande pour la modération",
                            value: "modération",
                        },

                    ])
            );

            message.reply({ embeds : [embed], components : [row]})
        };
    }
}


