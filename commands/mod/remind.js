const {Command} = require('discord.js-commando');
const Discord = require('discord.js');
const schedule = require('node-schedule');

class Remind extends Command {
    constructor(client){
        super(client, {
            name: 'remind',
            group: 'mod',
            memberName: 'remind',
            description: 'Sets a reminder',
            examples: ['>remind [date] [time]']
        });
    }

    async run(message) {
        console.log(Date.now());
        message.delete();
        var date = new Date(2017, 10, 4, 20, 56, 0);
        message.reply("Your reminder is set");
        var j = schedule.scheduleJob(date, function(){
           message.channel.send("@376474508745375744 Here's your reminder!");
          });
    }

}
module.exports = Remind;