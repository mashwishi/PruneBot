require ('dotenv').config()
const Discord = require('discord.js');
const usedCommand = new Set();
const { prefix, ownerID } = process.env;

exports.run = (bot, message) => {

    const { content, attachments } = message;

    if(usedCommand.has(message.author.id)) {
        return message.reply(`You cannot use ${prefix}emmessage command beacuse of the cooldown.`)
    }

    if(message.author.id !== ownerID) {
        return message.reply("You're not my developer to do that!");
    }

    const description = content.substr(prefix.length).substr(9);
    const embed = new Discord.MessageEmbed()
        .setColor('#b491c8')
        .setTitle('Prune Bot | Announcement')
        .setAuthor(
            'Join our Discord Server',
            'https://i.imgur.com/hKeHeEy.gif',
            'https://discord.io/LIMYAW',
        )
        .setDescription(description)
        .setThumbnail('https://i.imgur.com/ypxq7B9.png')
        .addFields([
            { name: 'Github (Source Code)', value: 'https://github.com/mashwishi/PruneBot' },
            { name: 'Support the Developer:', value: 'https://ko-fi.com/mashwishi' }
        ])
        .setFooter('PruneBot is created by Mashwishi', 'https://i.imgur.com/DxWDaGv.png')
        .setTimestamp();

    if(attachments.size > 0) {
        embed.setImage(attachments.first().url)
    }

    bot.guilds.cache.array().forEach(guild => guild.owner.send(embed));

    usedCommand.add(message.author.id);
    setTimeout(() => usedCommand.delete(message.author.id), 5000);
}

exports.config = {
    name: "emmessage",
    description: "",
    usage: "?emmessage",
    accessableby: "Admins",
    aliases: []
}
