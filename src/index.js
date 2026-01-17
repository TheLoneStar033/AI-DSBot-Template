require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");
const { CommandKit } = require("commandkit");
const path = require("path");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

new CommandKit({
    client,
    commandsPath: path.join(__dirname, "commands"),
    eventsPath: path.join(__dirname, "events"),
    bulkRegister: true,
});

client.login(process.env.TOKEN);
