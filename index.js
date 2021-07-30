require("dotenv").config();
const config = require("./config/config.json");
const Enmap = require("enmap");
const Discord = require("discord.js");

const client = new Discord.Client({
	partials: ["MESSAGE", "USER", "REACTION"],
	disableMentions: "everyone"
});
const DisTube = require("distube");

client.config = config;
global.client = client;
client.login(process.env.TOKEN);
global.nowyear = new Date().getFullYear();
global.emojis = require("./config/emoji.json");

const db = require("quick.db");
const { GiveawaysManager } = require("discord-giveaways");

const nz_date_string = new Date().toLocaleString("en-US", {
	timeZone: "Asia/Hong_Kong"
});

client.commands = new Discord.Collection();
client.slcommands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.emotes = emojis;
client.colors = client.config.colors;
client.snipes = new Map();
client.mapss = new Map();
client.mapss.set("uptimedate", nz_date_string);

["command", "event", "music"].forEach(x =>
	require(`./handlers/${x}.js`)(client)
);
["alwaysOn", "http"].forEach(x => require(`./server/${x}`)());

client.settings = new Enmap({
	name: "settings",
	fetchAll: false,
	autoFetch: true,
	cloneLevel: "deep"
});

client.moderationdb = new Enmap("moderation");

client.distube = new DisTube(client, {
	leaveOnFinish: true,
	leaveOnEmpty: true,
	leaveOnStop: true,
	youtubeDL: true,
	updateYouTubeDL: true,
	youtubeCookie:
		"GPS=1; YSC=w5dGoHzqQRI; VISITOR_INFO1_LIVE=B4ElBqxSDv4; PREF=tz=Asia.Hong_Kong"
});

if (!db.get("giveaways")) db.set("giveaways", []);

const GiveawayManagerWithOwnDatabase = class extends GiveawaysManager {
	async getAllGiveaways() {
		return db.get("giveaways");
	}

	async saveGiveaway(messageID, giveawayData) {
		db.push("giveaways", giveawayData);
		return true;
	}

	async editGiveaway(messageID, giveawayData) {
		const giveaways = db.get("giveaways");
		const newGiveawaysArray = giveaways.filter(
			giveaway => giveaway.messageID !== messageID
		);
		newGiveawaysArray.push(giveawayData);
		db.set("giveaways", newGiveawaysArray);
		return true;
	}

	async deleteGiveaway(messageID) {
		const newGiveawaysArray = db
			.get("giveaways")
			.filter(giveaway => giveaway.messageID !== messageID);
		db.set("giveaways", newGiveawaysArray);
		return true;
	}
};

client.giveawaysManager = new GiveawayManagerWithOwnDatabase(client, {
	storage: false,
	updateCountdownEvery: 10000,
	endedGiveawaysLifetime: 30000,
	hasGuildMembersIntent: false,
	default: {
		botsCanWin: false,
		exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
		embedColor: "#ff6969",
		embedColorEnd: "#505050",
		reaction: "🎉"
	}
});

client.status = queue =>
	`Volume: \`${queue.volume}%\` | Filter: \`${
		queue.filter || "Off"
	}\` | Loop: \`${
		queue.repeatMode
			? queue.repeatMode == 2
				? "All Queue"
				: "This Song"
			: "Off"
	}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

client.ws.on("INTERACTION_CREATE", async interaction => {
	if (!client.slcommands.has(interaction.data.name)) return;
	try {
		client.slcommands.get(interaction.data.name).execute(interaction);
	} catch (error) {
		console.log(
			`Error from command ${interaction.data.name} : ${error.message}`
		);
		console.log(`${error.stack}\n`);
		client.api.interactions(interaction.id, interaction.token).callback.post({
			data: {
				type: 4,
				data: {
					content: "Sorry, error occurred when running this command!"
				}
			}
		});
	}
});
