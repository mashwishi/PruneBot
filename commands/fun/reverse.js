module.exports.run = async (client, message, args) => {
	try {
		if (!args[0])
			return message.reply("You need to input the text to reverse!");

		const str = args.join(" ");
		const msg = await message.reply(str.split("").reverse().join(""));
		msg.react("🔁");
	} catch (err) {
		message.channel.send(`Their was an error!\n${err}`).catch();
	}
};

module.exports.help = {
	name: "reverse",
	description: "This command is used for reversing words.",
	usage: "p!reverse",
	accessableby: "Member",
	aliases: [],
	cooldown: 5
};
