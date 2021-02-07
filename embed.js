const Discord = require('discord.js');
module.exports ={
    name:"help",
    description:"This is a help cmd",
    async run(message, args){
        const embed = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
    .setTitle('Help Has arrived!')
    .setDescription('Hello, i am Treqx bot and here is a list of commands that you can use for diffrent things.')
    .addField('mhelp','This command gives you the info about all the commands related to moderation of your server.')
    .setFooter('This is a test bot that is still under development.')
 
    message.channel.send(embed)
    }
    
}