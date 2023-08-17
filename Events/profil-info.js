const { MessageEmbed, MessageSelectMenu } = require ("discord.js");
module.exports = {
    name: "messageCreate",
    once: false,
    execute(Client,message,){
        const config = require('../config/config.json');
        if (message.content.startsWith(config.prefix+ 'profil')){
            const user = message.mentions.users.first();
            if (!user) {
              return message.reply('Vous devez mentionner un utilisateur pour obtenir ses informations de profil!');
            }else{
            const userInformation = `> *Le nom complet de l'utilisateur est:* \ **${user.username}#${user.discriminator}** \n > *Son ID est:* \ **${user.id}** \n> *La date de creation du compte est* \ **${user.createdAt.toDateString()}** \n> *Son avatar est :* ${user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 })} `;
            const embed = new MessageEmbed()
                .setTitle(`Info sur ${user}`)
                .setColor("#1c91ca")
                .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }))
//                .setDescription("Préfixe = !")
//                .setFooter("Choisissez une catégorie dans le sélecteur ci-dessous pour en consulter les commandes.")
                .addFields([
                    {name: "Le nom complet de l'utilisateur est:" , value: user.username+"#"+user.discriminator},
                    {name: "Son ID est:" , value: user.id},
                    {name: "La date de creation du compte est" , value: user.createdAt.toLocaleDateString('fr-FR')},
                ]);
    
            //message.reply(`${userInformation}`)
            message.reply({ embeds : [embed]})
            }
        }
    }
}