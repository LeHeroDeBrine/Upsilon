module.exports = {
    name: "messageCreate",
    once: false,
    execute(Client,message,async){
        const config = require('../config/config.json');
        if (message.content.startsWith(config.prefix +'doc')) {
            const reply = message.reply({
                content: 'Choisissez entre les versions de discord.js :',
                components: [
                    {
                        type: 1,
                        components: [
                            {
                                type: 2,
                                label: 'V13',
                                style: 5,
                                url: 'https://old.discordjs.dev/#/docs/discord.js/main/general/welcome',
                            },
                            {
                                type: 2,
                                label: 'V14',
                                style: 5,
                                url: 'https://discord.js.org/docs/packages/core/1.0.0',
                            },
                        ],
                    },
                ],
            });
            //message.reply(reply)
        };
    }
}