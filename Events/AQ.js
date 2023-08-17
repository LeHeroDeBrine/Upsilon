module.exports = {
    name: "messageCreate",
    once: false,
    execute(Client,message,member){
        const config = require('../config/config.json');
        //const reply = message.reply("nique ta mere avec tes ref de 2010, on est en big 2023 arrete sa mon reuf")
        const AQ = message.content.slice(0).trim()
        if(AQ.includes('quoiqoubeh') || AQ.includes('apagnan') || AQ.includes('quoiqou')){
            /*msg.react("")
            msg.react("")
            msg.react("")*/
            message.reply(`nique ta race avec tes ref de 2010, on est en big 2023 arrete sa mon reuf <@${message.member.id}>`)
        }
    }
}