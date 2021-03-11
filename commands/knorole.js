require ('dotenv').config()
const Discord = require('discord.js');
const usedCommand = new Set();
const config = process.env;

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply("You cannot use " + config.prefix + "knorole command beacuse of the cooldown.")
    } else {
        if (message.content.toLowerCase().startsWith(config.prefix + "knorole")) {
            //check if no perm
            if(!message.member.hasPermission("ADMINISTRATOR")){
              return message.reply("You don't have `ADMINISTRATOR` permission to do that!");
            }      
              //count members will be kicked
              var memberscount = message.guild.members.cache.filter(member => member.roles.cache.array().length < 2).size;
        
              if (memberscount == 0){
                message.reply('Looks like everyone has a role already.') 
              }
              else{
              message.reply('The bot will kick ('+ memberscount +') users without a role.\n'+ 'Confirm with a thumb up or deny with a thumb down.')    
                message.react('👍').then(r => {
                message.react('👎');
                });
              // confirmation of the task
              message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
              { max: 1, time: 30000 }).then(collected => {
                    if (collected.first().emoji.name == '👍') {
                            let members = message.guild.members.cache.filter(member => member.roles.cache.array().length < 2)
                            members.forEach(m => {
                              m.kick()
                              .catch(console.error);
                            });               
                            message.reply('Done! ('+ memberscount +') users without roles has been kicked.'); 
                    }
                    else
                            message.reply('Operation canceled.');
                }).catch(() => {
                    message.reply('No reaction after 30 seconds, operation canceled');
                });
              }
        }
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 21600000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
}

module.exports.config = {
    name: "knorole",
    description: "",
    usage: "?knorole",
    accessableby: "Admins",
    aliases: []
}