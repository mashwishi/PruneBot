module.exports.run = async (client, message, args) => {
	if (!message.member.voice.channel)
		return message.channel.send(
			`${client.emotes.error} | You must be in a voice channel!`
		);
	const queue = client.distube.resume(message);
	message.channel.send(
		`${client.emotes.success} | Resumed! Now playing:\n${queue.songs[0].name}`
	);
};

module.exports.help = {
	name: "resume",
	description: "This command is used for resuming music.",
	usage: "p!resume",
	accessableby: "Member",
	aliases: [],
	cooldown: 5
};
