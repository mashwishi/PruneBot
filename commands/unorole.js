require ('dotenv').config()
const Discord = require('discord.js');
const usedCommand = new Set();
const config = process.env;

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply("You cannot use " + config.prefix + "unorole command beacuse of the cooldown.")
    } else {
        if (message.content.toLowerCase().startsWith(config.prefix + "unorole")) {
            //check if no perm
            if(!message.member.hasPermission("ADMINISTRATOR")){
              return message.reply("You don't have `ADMINISTRATOR` permission to do that!");
            }  
                
              var memberscount = message.guild.members.cache.filter(member => member.roles.cache.array().length < 2).size;
        
                if (memberscount == 0){
                message.reply('Looks like everyone has a role already.') 
                }
                else{  
                const ListEmbed = new Discord.MessageEmbed() 
                .setTitle(`Prune Bot | Users`)
                .setDescription(`Users that has no role.`)
                .setColor('#b491c8')
                .addFields(
                 { name: 'Users:', value: message.guild.members.cache.filter(member => member.roles.cache.array().length < 2).map(member => member.user.tag).join('\n') },)
                .setFooter('PruneBot is created by Mashwishi', 'https://i.imgur.com/qB9jJZ3.png');
              message.channel.send(ListEmbed);   
                } 
        }
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds 5000 = 5secs.
    }
}

module.exports.config = {
    name: "unorole",
    description: "",
    usage: "?unorole",
    accessableby: "Admins",
    aliases: []
}