const Discord = require("discord.js");
const config = require("../../config/config.json");

module.exports.run = async (client, message, args) => {

    //User no permission
	const embed6 = new Discord.MessageEmbed()
		.setDescription(
			`${emojis.cross} ${message.author.username}, Missing Permission`
		)
		.setColor("RED");
	if (!message.member.hasPermission("KICK_MEMBERS") || message.author.id === 221838936866029568) {
		return message.channel.send(embed6).then(m => m.delete({ timeout: 5000 }));
	}

    //Bot no permission
    const notice3 = new Discord.MessageEmbed()
    .setDescription(`${emojis.cross} I don't have permission to list people!`)
    .setColor("RED");
	if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
		return message.channel.send(notice3).then(m => m.delete({ timeout: 5000 }));
	}

    //List and kicking
    let mentionedrole = message.mentions.roles.firstKey()
    const withoutPrefix = message.content.slice(config.prefix.length);
    const split = withoutPrefix.split(/ +/);
    const command = split[0];
    const argss = split.slice(1);
    let id = argss[0];

    //Didn't mention a role
	const notice2 = new Discord.MessageEmbed()
		.setDescription(`${message.author}, You didn't mention a role!`)
		.setColor("RED");
	if (!args.length) return message.channel.send(notice2);

    //Didn't mention the exact role
	const embed7 = new Discord.MessageEmbed()
		.setTitle("Wrong Usage!")
		.setDescription("Correct Example: p!urole <role>")
		.setColor("RED");
	if (!id.startsWith('<@&') && id.endsWith('>')) {
		message.delete();
		return message.channel.send(embed7).then(m => m.delete({ timeout: 5000 }));
	}
         
          const therole = message.guild.roles.cache.find(role => role.id == mentionedrole); 
          var memberscount = message.guild.roles.cache.get(mentionedrole).members.size;             
          
          const ListEmbed = new Discord.MessageEmbed() 
          .setTitle('Prune Bot | Total of '+ memberscount +' User(s)')
          .setDescription(`Users that has ${therole} role:  \n` + getUsers(page))
          .addFields(
            { name: 'Important Note:', value: "25 users can be only kicked per cooldown command."} 
          )              
          .setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')
          .setThumbnail('https://i.imgur.com/ypxq7B9.png')
          .setColor('#b491c8')                  
          .setFooter('| ◀️ Back | ▶️ Next | 👍 Confirm | 👎 Cancel', 'https://i.imgur.com/DxWDaGv.png');
          var listMsg = await message.channel.send(ListEmbed); 
              var page = parseInt(args[0]);
              if (!page) {
                  page = 1;
              };
              await listMsg.react("◀️");
              await listMsg.react("▶️");
              await listMsg.react("👍");
                await listMsg.react("👎");
              const filter = (reaction, user) => ["◀️", "▶️", "👍","👎"].includes(reaction.emoji.name) && user.id === message.author.id;
              const collector = listMsg.createReactionCollector(filter, {
                  time: 120000
              });
              collector.on('collect', (reaction, user) => {
                  reaction.emoji.reaction.users.remove(user.id);
                  switch (reaction.emoji.name) {
                      case "◀️":
                          --page;
                          if (page < 1) {
                              page = 1;
                          };
                          const newlistMsga = new Discord.MessageEmbed()
                          .setTitle('Prune Bot | Total of '+ memberscount +' User(s)')
                          .setDescription(`Users that has ${therole} role: \n` + getUsers(page))
                          .addFields(
                            { name: 'Important Note:', value: "25 users can be only kicked per cooldown command."} 
                          )                          
                          .setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')
                          .setThumbnail('https://i.imgur.com/ypxq7B9.png')                                  
                          .setColor('#b491c8')                                        
                          .setFooter('| ◀️ Back | ▶️ Next | 👍 Confirm | 👎 Cancel', 'https://i.imgur.com/DxWDaGv.png');
                          listMsg.edit(newlistMsga);
                          break;
                      case "▶️":                        
                          ++page;
                          const newlistMsgb = new Discord.MessageEmbed()
                          .setTitle('Prune Bot | Total of '+ memberscount +' User(s)')
                          .setDescription(`Users that has ${therole} role: \n` + getUsers(page))
                          .addFields(
                            { name: 'Important Note:', value: "25 users can be only kicked per cooldown command."} 
                          )                            
                          .setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')
                          .setThumbnail('https://i.imgur.com/ypxq7B9.png')                                  
                          .setColor('#b491c8')                                      
                          .setFooter('| ◀️ Back | ▶️ Next | 👍 Confirm | 👎 Cancel', 'https://i.imgur.com/DxWDaGv.png');                                                                   
                          listMsg.edit(newlistMsgb);
                          break;
                      case "👍":
                        const ukicked = new Discord.MessageEmbed()                 
                        .setTitle('Prune Bot | Total of '+ memberscount +' User(s)')
                        .setDescription(`Users that has ${therole} role.`)
                        .setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')
                        .setThumbnail('https://i.imgur.com/ypxq7B9.png')                        
                        .setColor('#b491c8')                                            
                        .setFooter(`©${nowyear} ${client.user.username} Created by Mashwishi.\nCommand requested by: ${message.author.username}#${message.author.discriminator}`, `https://i.imgur.com/ypxq7B9.png`)   
                            
                            //2.0.0 (Current)
                            //let members = message.guild.roles.cache.get(mentionedrole).members
                            //members.forEach(m => {
                            //  m.kick()
                            //  .catch(console.error);
                            //});

                            //2.1.0 - Limiting the kicking for 25 users per 5 minutes
                            //Reason: Even discord.js already have feature to avoid rate-limited
                            //I just want to make things sure to keep our bot running safe.
                            let members = message.guild.roles.cache.get(mentionedrole).members
                            let count = 0
                            members.forEach(m => {
                            if(count == 25) return
                            count++
                            m.kick()
                            .then(console.log)
                            .catch(console.error);
                            });

                            ukicked.addFields(
                              //{ name: 'Operation Successful', value: memberscount + " user(s) has been kicked."} 
                              { name: 'Operation Successful', value: count + " user(s) has been kicked."} 
                            )   

                            listMsg.reactions.removeAll();
                            listMsg.edit(ukicked);
                          break;     
                      case "👎":
                        const cancel = new Discord.MessageEmbed()                 
                        .setTitle('Prune Bot | Total of '+ memberscount +' User(s)')
                        .setDescription(`Users that has ${therole} role.`)
                        .setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')
                        .setThumbnail('https://i.imgur.com/ypxq7B9.png')                        
                        .setColor('#b491c8')      
                        .addFields(
                          { name: 'Operation Cancelled', value: "No users has been kicked."} 
                        )                                         
                        .setFooter(`©${nowyear} ${client.user.username} Created by Mashwishi.\nCommand requested by: ${message.author.username}#${message.author.discriminator}`, `https://i.imgur.com/ypxq7B9.png`)   
                          
                          listMsg.reactions.removeAll();
                          listMsg.edit(cancel);
                          break;                                                                 
                  };
              });
              collector.on('end', collected => {
             
                const done = new Discord.MessageEmbed()                 
                .setTitle('Prune Bot | Total of '+ memberscount +' User(s)')
                .setDescription(`Users that has ${therole} role.`)
                .setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')
                .setThumbnail('https://i.imgur.com/ypxq7B9.png')                        
                .setColor('#b491c8')      
                .addFields(
                  { name: 'Reaction Timeout', value: "I'm done looking for reactions on the message!"} 
                )                                         
                .setFooter(`©${nowyear} ${client.user.username} Created by Mashwishi.\nCommand requested by: ${message.author.username}#${message.author.discriminator}`, `https://i.imgur.com/ypxq7B9.png`)   
                  
                  listMsg.reactions.removeAll();
                  listMsg.edit(done);
              });
              function getUsers(n) {
                  const list = message.guild.roles.cache.get(mentionedrole).members.map(m => m.user.tag);
                  
                  var pageNum = (n * 10) - 10;
                  if (!pageNum) {
                      pageNum = 0;
                  };
                  return list.slice(pageNum, pageNum + 9).join("\n");
              };    


};
module.exports.help = {
	name: "urole",
	description: "This command is used for listing and kicking all users with specific role.",
	usage: "p!urole <role>",
	accessableby: "ADMINISTRATOR",
	aliases: [],
	cooldown: 300
};
