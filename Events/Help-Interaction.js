const { MessageEmbed, MessageSelectMenu } = require ("discord.js");
module.exports = {
    name: "interactionCreate",
    once: false,
    execute(Client,interaction,){
        if(interaction.isSelectMenu()){
            if(interaction.customId == 'help'){
                console.log(interaction.values);

                if(interaction.values == "botinfo"){

                    const embed = new MessageEmbed()
                        .setTitle("Bot")
                        .setColor("#1c91ca")
                        .setDescription("Info sur le bot")
                        .addFields([
                            {name: "!botinfo" , value: "donne les info sur Upsilon"},
                            {name: "!ping" , value: "envoie la latence du bot"},
                        ]);

                        interaction.reply({ embeds: [embed] });

                }else if(interaction.values == "modération"){

                    const embed2 = new MessageEmbed()
                    .setTitle("Modération")
                    .setColor("#1c91ca")
                    .setDescription("Il faut avoir les permission requise pour utiliser ces commandes")
                    .addFields([
                        {name: "!kick @utilisateur" , value: "kick le membre"},
                        {name: "!ban @utilisateur" , value: "ban le membre"},
                        {name: "!mute @utilisateur" , value: "mute le membre"},
                        {name: "!clear <nombre de message>" , value: "supprime les message dans le salon"},

                    ]);

                    interaction.reply({ embeds: [embed2] });
                }
            }
        }
    }
}