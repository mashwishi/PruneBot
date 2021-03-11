require ('dotenv').config()
const Discord = require('discord.js');
const usedCommand = new Set();
const config = process.env;

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply("You cannot use " + config.prefix + "roleid command beacuse of the cooldown.")
    } else {
        const ListEmbed = new Discord.MessageEmbed() 
        .setColor('#b491c8')
        .setTitle('Commands & Information')
        .setAuthor('Prune Bot', 'https://i.imgur.com/ypxq7B9.png', 'https://discord.com/invite/qpkRST8MMb')
        .setDescription('')
        .setThumbnail('https://i.imgur.com/ypxq7B9.png')
        .addFields(
          { name: config.prefix +'help', value: 'To show all of the available bot commands.\nCommand Cooldown: 10 seconds' },
          { name: config.prefix +'fetch', value: 'To fetch/update all the data cache. \nCommand Cooldown: 24 hours' },
          { name: config.prefix +'krole <role>', value: 'Kick all the users to the specific role. \nCommand Cooldown: 6 hours' },
          { name: config.prefix +'urole <role>', value: 'List all the users with the mentioned role. \nCommand Cooldown: 30 seconds' },       
          { name: config.prefix +'knorole', value: 'Kick all the users without role. \nCommand Cooldown: 6 hours' },
          { name: config.prefix +'unorole', value: 'List all the users without role. \nCommand Cooldown: 30 seconds' },          
          { name: config.prefix +'roles', value: 'List and count all the roles in the server. \nCommand Cooldown: 5 seconds' },
          { name: config.prefix +'roleid <role>', value: 'Print the Role ID of the specific role. \nCommand Cooldown: 5 seconds' },   
          { name: 'NOTE:', value: 'User must have Administrator Permission to be able to use this, You MUST "fetch" the data first to get the latest or updated data to this server to be able to kick or list the latest users and roles.' },   
        )
        .setImage('')
        .setTimestamp()
        .setFooter('PruneBot is created by Mashwishi', 'https://i.imgur.com/qB9jJZ3.png');
        message.channel.send(ListEmbed);  

        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 10000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "?help",
    accessableby: "Admins",
    aliases: []
}