require ('dotenv').config()
const Discord = require('discord.js');
const usedCommand = new Set();
const config = process.env;

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply("You cannot use " + config.prefix + "urole command beacuse of the cooldown.")
    } else {
        if (message.content.toLowerCase().startsWith(config.prefix + "urole")) {
            //check if no perm
            if(!message.member.hasPermission("ADMINISTRATOR")){
              return message.reply("You don't have `ADMINISTRATOR` permission to do that!");
            }  
        
            let mentionedrole = message.mentions.roles.firstKey()
            const withoutPrefix = message.content.slice(config.prefix.length);
            const split = withoutPrefix.split(/ +/);
            const command = split[0];
            const args = split.slice(1);
            let id = args[0];
        
            if (!args.length){
              return message.channel.send(` ${message.author}, please kindly input a role!`);
            }
            else if (!id.startsWith('<@&') && id.endsWith('>')) {
              return message.channel.send(` ${message.author}, You didn't mention a role!`);
            }
            //[view the id before deleting] message.channel.send(`Role ID: `+ mentionedrole);
                
                //display the gathered data of users
               // const therole = message.guild.roles.cache.find(role => role.id == mentionedrole);
                //  const ListEmbed = new Discord.MessageEmbed() 
                 // .setTitle(`Prune Bot | Users`)
                 // .setDescription(`Users that has ${therole} role.`)
                 // .setColor('#b491c8')
                  //.addFields(
                  //  { name: 'Users:', value: message.guild.roles.cache.get(mentionedrole).members.map(m=>m.user.tag).join('\n') },)
                 // .setFooter('PruneBot is created by Mashwishi', 'https://i.imgur.com/DxWDaGv.png');
                 
               // message.channel.send(`Users that has ${therole} role.`);    
                message.channel.send(message.guild.roles.cache.get(mentionedrole).members.map(m=>m.user.tag).join('\n'));  
          }
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
}

module.exports.config = {
    name: "urole",
    description: "",
    usage: "?urole",
    accessableby: "Admins",
    aliases: []
}