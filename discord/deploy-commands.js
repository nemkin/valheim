const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

require('dotenv').config({path: '../private.env'});
const { DISCORD_CLIENT_ID, DISCORD_TOKEN } = process.env;

const commands = [
    {
        name: 'valheim',
        description: 'Replies with the join information of the Valheim server.'
    }
];

const rest = new REST({ version: '9' }).setToken(DISCORD_TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(DISCORD_CLIENT_ID),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

