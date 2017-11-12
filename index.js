const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    owner: '169010985573679104'
});
const {token, prefix} = require('./json/config.json');
const {dmCompliments, compliments} = require('./json/arrays.json');


bot.registry
.registerGroups([
    ['dice', 'Commands for Dice Rolling'],
    ['hi', 'Used for testing simple args based commands'],
    ['stats', 'Shows Stats for each party member'],
    ['profile', 'Shows a Profile summary for '],
    ['mod', 'Moderator Commands']
])
.registerDefaultGroups()
.registerDefaults()
.registerCommandsIn(__dirname + "/commands");

bot.on('message', message => {
    var sender = message.author;
    var msg = message.content.toUpperCase();

    if (bot.user.id === message.author.id){
        return;
    }

    if (message.author.id === '141377976003592192'){
        var roll = Math.floor(Math.random() * 2) + 1;
        var randomMsg = dmCompliments[Math.floor(Math.random() * dmCompliments.length)];
        if(roll == 2){
        message.channel.send(randomMsg);
        }
    }
    /* Compliment Someone
    if (message.author.id === '169947926309634048' ){
        var roll = Math.floor(Math.random() * 2) + 1;
        var randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
        message.reply(randomCompliment);
        /*if(roll == 2){
        message.author.send(randomCompliment);
        }
    }*/

        //Good Bot
        if(msg.includes('GOOD BOT')){
            message.channel.send('Thank you ' + message.author +  ', I aim to please ^_^');
        }

});

bot.on('ready', () => {
    console.log("Gary Bot is Online...");
    bot.user.setStatus('Online');
    bot.user.setGame('D&D with all my friends');
    });

bot.login(token);
