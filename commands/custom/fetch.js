const Discord = require("discord.js");
const config = require("../../config/config.json");

module.exports.run = async (client, message, args) => {   	   

    //User no permission
	const embed6 = new Discord.MessageEmbed()
		.setDescription(
			`${emojis.cross} ${message.author.username}, Missing Permission`
		)
		.setColor("RED");
	if (!message.member.hasPermission("ADMINISTRATOR") || message.author.id === 221838936866029568) {
		return message.channel.send(embed6).then(m => m.delete({ timeout: 5000 }));
	}

    //Bot no permission
    const notice3 = new Discord.MessageEmbed()
    .setDescription(`${emojis.cross} I don't have permission to fetch new data!`)
    .setColor("RED");
	if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) {
		return message.channel.send(notice3).then(m => m.delete({ timeout: 5000 }));
	}    

    //Process
    const ListEmbedP = new Discord.MessageEmbed() 
    .setTitle('Prune Bot | Fetch')
    .setDescription(`Updating user and server datas...`)
    .setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')
    .setThumbnail('https://i.imgur.com/NU0WJlu.gif')
    .setColor('#7750F8')                  
    .setFooter(`©${nowyear} ${client.user.username} Created by Mashwishi.\nCommand requested by: ${message.author.username}#${message.author.discriminator}`, `https://i.imgur.com/ypxq7B9.png`)
        
    var listMsg = await message.channel.send(ListEmbedP); 

    //Success
    const ListEmbedS = new Discord.MessageEmbed() 
    .setTitle('Prune Bot | Fetch')
    .setDescription(`Successfully updated the server and user data!`)
    .setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')
    .setThumbnail('https://i.imgur.com/AEIPZvc.png')
    .setColor('#1CD599')                  
    .setFooter(`©${nowyear} ${client.user.username} Created by Mashwishi.\nCommand requested by: ${message.author.username}#${message.author.discriminator}`, `https://i.imgur.com/ypxq7B9.png`)

    //Failed
    const ListEmbedF = new Discord.MessageEmbed() 
    .setTitle('Prune Bot | Fetch')
    .setDescription(`Oh no! Failed updated the server and user data.`)
    .setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')
    .setThumbnail('https://i.imgur.com/oTdBh9E.gif')
    .setColor('#FFCE00')                  
    .setFooter(`©${nowyear} ${client.user.username} Created by Mashwishi.\nCommand requested by: ${message.author.username}#${message.author.discriminator}`, `https://i.imgur.com/ypxq7B9.png`)        
    
    //Old Shit Code
    //await message.guild.members.fetch()
    //.then(console.log)
    //.catch(error => {
    //       console.error(error);
    //       return listMsg.edit(ListEmbedF)        
    //}); listMsg.edit(ListEmbedS)

    //Fetching data (new)
    try
    {
        await message.guild.members.fetch();
        //.then(console.log)
    }
    catch (error)
    {
        console.error(error);
        return listMsg.edit(ListEmbedF);     
    }
    return listMsg.edit(ListEmbedS);       
};
module.exports.help = {
	name: "fetch",
	description: "This command is used for fetching new data of the server.",
	usage: "p!fetch",
	accessableby: "Admins",
	aliases: [],
	cooldown: 3600
};
