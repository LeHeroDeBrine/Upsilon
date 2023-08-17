const Canvas = require("canvas");
const Discord = require("discord.js")
module.exports = {
    name: "guildMemberRemove",
    once: false,
    async execute(Client,member,){
        const config = require('../config/config.json');
        if (member.guild.id === config.serverid) {
            console.log(member.displayName+" est partie . ");
            Client.channels.cache.get(config.guildMemberRemove).send(member.displayName + " est partie . ");


            var canvas = Canvas.createCanvas(1809, 1080);
            ctx = canvas.getContext("2d");
            const img = './images/img1.png';
            var background = await Canvas.loadImage(img);
            ctx.drawImage(background, 0, 0, 1809, 1080);


            //ctx.font = "100px Comic Sans MS";
            ctx.font = "100px Elephant Normal"
            ctx.fillStyle = "#FFFFFF";
            ctx.textAlign = "center";
            ctx.fillText("  " + member.user.tag.toUpperCase() , 900, 950);
            ctx.fillText("      EST PARTIE    " , 900, 1050);


            ctx.beginPath();
            ctx.arc(900, 275 , 175 , 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();


            var avatar = await Canvas.loadImage(member.user.displayAvatarURL({
                format : "png",
                size : 2048
            }));

            ctx.drawImage(avatar, 725, 100, 350, 350);

            const attachment2 = new Discord.MessageAttachment(canvas.toBuffer(), "Bye.png");

            Client.channels.cache.get(config.guildMemberRemove).send({files : [attachment2]});
        }
    }
}