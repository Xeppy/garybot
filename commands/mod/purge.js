const {Command} = require('discord.js-commando');
var Discord = require('discord.js');

class Purge extends Command {
    constructor(client){
        super(client, {
            name: 'purge',
            group: 'mod',
            memberName: 'purge',
            description: 'Deletes X last messages, need to have the bot-commander',
            examples: ['>player [Name]']
        });
    }

    async run(message) {
        var cont = message.content.slice().split(" ");
        var args = cont.slice(1);

        async function purge() {
            message.delete();

/*             if(!message.member.roles.find("name", "bot-commander")){
                message.reply("You do not have permission to delete messages in this Server");
                return;
            }
*/

            if(isNaN(args[0])){
                message.reply("Please post the number of messages you want me to delete");
                return;
            }


            const fetched = await message.channel.fetchMessages({limit: args[0]});
            message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send(`Error: ${error}`));
        }

        if(message.author.id === '169010985573679104' || message.member.roles.find("name", "bot-commander")){
            purge();
            } else {
                message.reply("You do not have permission to delete messages in this Server");                
            }        
    }

}
module.exports = Purge;