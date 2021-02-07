const Discord = require('discord.js')


module.exports = bot =>{
    console.log(`${bot.user.username}, is Online!`);
    bot.user.setActivity(" Type.help", {type:""});
}