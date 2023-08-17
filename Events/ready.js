module.exports = {
    name: "ready",
    once: true,
    execute(Client, args){
        console.log(`En ligne en tant que ${Client.user.tag}`);

        Client.user.setActivity("!help",{type : 'STREAMING',url : 'https://www.twitch.tv/le_hero_de_brine'})
        Client.user.setStatus('dnd')
    }
}