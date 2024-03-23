const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

//require('dotenv').config({path: '../private.env'});
require('dotenv').config();

const { DISCORD_TOKEN, SERVER_PASS } = process.env;

const client = new Client({ intents: [] });
client.once('ready', () => {console.log('Ready!');});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'status') {
        //const filePath = '../server/htdocs/status.json';
        const filePath = '/valheim/status.json';

        fs.readFile(filePath, { encoding: 'utf8' }, async (err, data) => {
            if (err) {
                console.error('Error reading the file:', err);
                await interaction.reply('Sorry, I could not read the status right now.');
                return;
            }
            try {
                const json = JSON.parse(data);
                json.password = SERVER_PASS;
                await interaction.reply(`Status: \`\`\`json\n${JSON.stringify(json, null, 2)}\n\`\`\``);
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                await interaction.reply('Sorry, there was an error processing the status.');
            }
        });
    }
});

client.login(DISCORD_TOKEN);
