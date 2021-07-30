<div align="center">
  <a href="https://discord.com/api/oauth2/authorize?client_id=814580247973986314&permissions=259845516535&scope=bot"><img src="https://i.imgur.com/s4q1Wz3.png" width="15%"/></a>
  <h1><a href="https://discord.com/api/oauth2/authorize?client_id=814580247973986314&permissions=259845516535&scope=bot">Prune Bot </a></h1>

  <h3>Version 2.0.0</h3>

  <h4>Created by Mashwishi | Powered by <a href="https://discord.js.org/">Discord.js</a></h4>
  
  <h6>Fellow Developers that guide me doing this from Discord Server Community of <a href="https://discord.gg/discord-api">Discord API</a>.
  <br>Special Thanks to our contributors and helper <a href="https://github.com/esfox">esfox</a>, <a href="https://github.com/itsjusttriz">itsjusttriz</a> and <a href="https://github.com/Hickacou">Hickacou</a>!</h6>
 
  [![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B14A4MU)

  [![support][support-image]][support-invite]
  
 [![Contributors][contributors-shield]][contributors-url]
 [![Forks][forks-shield]][forks-url]
 [![Stargazers][stars-shield]][stars-url]
 [![Issues][issues-shield]][issues-url]
 [![MIT License][license-shield]][license-url]
 <br>

</div>

---

<h2 align="center">What is this bot?</h2>

<strong><a href="https://discord.com/api/oauth2/authorize?client_id=814580247973986314&permissions=8&scope=bot">PruneBot</a></strong> is an easy to use multi-purpose bot and it has a free open source code to setup your own prune bot to your own server. Our goal is to cover as many functionalities as possible.

<strong><a href="https://discord.com/api/oauth2/authorize?client_id=816474139560378379&permissions=8&scope=bot">PruneBot (Development)</a></strong> is created for beta testing of the latest updates of PruneBot. This is also limited to 100 servers, This bot is not that stable and may contain bugs. There will be no support given to this version

---

### Bot Features:
- :battery: 24/7 Full Uptime with high stability
- :file_folder: Persistent Database based in `Enmap`
- :cop: Powerful Moderation Commands
- :smiley: Easy to use
- ⚙ Per-Server Settings
- :+1: Fast command responses
- :tada: Giveaways Commands
- :soccer: Slash Commands

### Important Note:
- ⚠ | Embed links needed for bot embed messages
- ⚠ | Admin Permission needed for Moderation commands


---

<h2 align="center">Commands</h2>

### Featured Commands:

We have more than 80 commands in this bot, and they are **featured** and having 9 main categories

- ⚙ **Basic:** `setprefix`, and more **coming soon**!
- :lock: **Moderation:** `ban`, `kick`, `warn`, `mute`, `createchannel`, `createemoji`, and **9 more!**
- :electric_plug: **Utility:** `weather`, `aes256`, `embed`, `enlarge`, and **4 more!**
- :skull: **Pruning:** `urole`, `unorole`, `kole`, `knorole`, `fetch`
- :file_folder: **Info:** `help`, `uptime`, `vote`, `channel`, `stats`, `whois`, and **5 more!**
- :musical_note: **Music:** `play`, `loop`, `skip`, `stop`, `jumpto`, `volume`, and **4 more!**
- :gift: **Giveaways:** `gstart`, `gend`, `greroll`
- :stars: **Images:** `cat`, `changemymind`, `gay`, `trigger`, `circle`, and **7 more!**
- :soccer: **Fun:** `8ball`, `reverse`, `snipe`, and **4 more!**


## Issue/Suggestions

If met any issues, go [here](https://github.com/Mashwishi/PruneBot/issues) to report bug and create new issue for supporting

## Github Repository

PruneBot Made by Mashwishi, project [Here](https://github.com/Mashwishi/PruneBot)

<h2 align="center">Self-Hosting & Development</h2>

**We ask you to please not host your own instance of PruneBot.** Even though our license allows it, self-hosted instances of the bot have brought us a lot of headache in the past. If you're considering self-hosting, please [try the official instance of the bot first](https://github.com/mashwishi/PruneBot/#). If you have any concerns about the security of our instance, please contact us. We'd love to talk and answer any questions you have.

> If you're really really really going to self-host the bot, please [read our license](https://github.com/mashwishi/PruneBot/blob/master/LICENSE) first, and be aware that we don't provide any self-hosting support. **You'll be on your own.**

## Getting Started

This is how you will set-up your self-hosted Prune Bot.


### Requirements

- Node.js v12.x or upper
- Python (For Advanced Music feature)

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/mashwishi/prunebot.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create `.env` file to the same folder of the PruneBot then copy and fill this:
   ```env
   TOKEN=<your bot token here>
   OWNERID=<your id here>
   ```

### Reminders:

- If you are not using Discord Bot lists and top.gg, delete files from `handlers/dbl-loader.js` / `events/dbl/all-files` and removes all codes from index.js with `//`
- If you are using Top.gg bot lists API, u need to delete `//` from commands lines from index.js
- If you are not using .env supported hosters, please add code `require('dotenv').config()` to the top of the code from `index.js`, `shard.js` and other place are needed to use `process.env.(stuff)`

1. To get PruneBot ready to run locally, the first step is to clone this repository onto the machine you wish to run it on.
2. **Node.js version 12 or newer is recommended to run PruneBot since we are using Discord.js v12**
3. Use NPM to install the dependencies from the project folder: `npm install`
4. Edit/create the file `.env` (or your hoster's provided environment secret) and insert your bot token in `TOKEN` value.
5. Start the bot from the project folder: `node shard.js`
6. Open `http://localhost:8080/` or your project URL to view the http output.

---

[support-invite]: https://discord.gg/WAh8eaF2Qq
[support-image]: https://discordapp.com/api/guilds/779997243159216149/widget.png?style=banner2

[donate-link]: https://www.paypal.me/NCMC
[donate-image]: https://i.imgur.com/R2SxfKG.png

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/mashwishi/PruneBot.svg?style=for-the-badge
[contributors-url]: https://github.com/mashwishi/PruneBot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mashwishi/PruneBot.svg?style=for-the-badge
[forks-url]: https://github.com/mashwishi/PruneBot/network/members
[stars-shield]: https://img.shields.io/github/stars/mashwishi/PruneBot.svg?style=for-the-badge
[stars-url]: https://github.com/mashwishi/PruneBot/stargazers
[issues-shield]: https://img.shields.io/github/issues/mashwishi/PruneBot.svg?style=for-the-badge
[issues-url]: https://github.com/mashwishi/PruneBot/issues
[license-shield]: https://img.shields.io/github/license/mashwishi/PruneBot.svg?style=for-the-badge
[license-url]: https://github.com/mashwishi/PruneBot/blob/master/LICENSE
