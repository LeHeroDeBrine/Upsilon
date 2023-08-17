module.exports = {
    name: "messageCreate",
    once: false,
    async execute(Client,message){
        const config = require('../config/config.json');
        if (message.content.startsWith( config.prefix + 'say')) {
            const SayMessage = message.content.slice(5).trim()
            if (SayMessage.includes('@everyone') || SayMessage.includes('@here')) {
                await message.reply('Désolé, vous ne pouvez pas utiliser cette mention.');
            } else {
                await message.channel.send(SayMessage)
            }
            //message.channel.send(SayMessage)
        }
    }
}