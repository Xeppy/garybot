const {Command} = require('discord.js-commando');
var Discord = require('discord.js');

class Profile extends Command {
    //Constructor is ran when the bot is launched
        constructor(client){
            super(client, {
                name: 'profile',
                group: 'profile',
                memberName: 'profile',
                description: 'Gives you a profile summary for a player',
                examples: ['>player [Name]'],
                args: [
                    {
                        key: 'text',
                        prompt: 'Which player would you like the profile summary for?',
                        type: 'string'
                    }
                ]
            });
        }

        async run(message, { text }) {
            switch(text) {
                case 'aurelia':
                    var
                    setTitle = "Noble High Elf",
                    setAuthor = "Aurelia Dilaris",
                    setColor = 0x00AE86,
                    setDescription = "A young and perky 101 year old High Elf, ready to set out into the wide world and help others achieve their dreams above all else",
                    setImage = "https://staticdelivery.nexusmods.com/images/110/4872006-1429009636.jpg",
                    setURL = "http://forgottenrealms.wikia.com/wiki/High_elf",
                    setField1 = "Traits",
    
                    setField2Name = "Darkvision",
                    setField2ID = "See in dim light as if bright light, in low light as if dim light.",
    
                    setField3Name = "Fey Ancestry",
                    setField3ID = "Advantage on saving throws to resist being charmed and can't be put to sleep",
    
                    setField4Name = "Trance",
                    setField4ID = "Don't need to sleep, can meditate for 4 hours and receive benefits of a long rest",
    
                    setField5Name = "Other Proficiencies and Languages",
                    setField5ID = "Common, Elvish, Celestial, All armour, Shields Simple, Martial Weapons, Dragon Chess";
                    break;
    
                    case 'kohaii':
                    var
                    setTitle = "Noble High Elf",
                    setAuthor = "Aurelia Dilaris",
                    setColor = 0x00AE86,
                    setDescription = "A young and perky 101 year old High Elf, ready to set out into the wide world and help others achieve their dreams above all else",
                    setImage = "https://staticdelivery.nexusmods.com/images/110/4872006-1429009636.jpg",
                    setURL = "http://forgottenrealms.wikia.com/wiki/High_elf",
                    setField1 = "Traits",
    
                    setField2Name = "Darkvision",
                    setField2ID = "See in dim light as if bright light, in low light as if dim light.",
    
                    setField3Name = "Fey Ancestry",
                    setField3ID = "Advantage on saving throws to resist being charmed and can't be put to sleep",
    
                    setField4Name = "Trance",
                    setField4ID = "Don't need to sleep, can meditate for 4 hours and receive benefits of a long rest",
    
                    setField5Name = "Other Proficiencies and Languages",
                    setField5ID = "Common, Elvish, Celestial, All armour, Shields Simple, Martial Weapons, Dragon Chess";
                    break;
    
                    case 'napoleten':
                    var
                    setTitle = "Noble High Elf",
                    setAuthor = "Aurelia Dilaris",
                    setColor = 0x00AE86,
                    setDescription = "A young and perky 101 year old High Elf, ready to set out into the wide world and help others achieve their dreams above all else",
                    setImage = "https://staticdelivery.nexusmods.com/images/110/4872006-1429009636.jpg",
                    setURL = "http://forgottenrealms.wikia.com/wiki/High_elf",
                    setField1 = "Traits",
    
                    setField2Name = "Darkvision",
                    setField2ID = "See in dim light as if bright light, in low light as if dim light.",
    
                    setField3Name = "Fey Ancestry",
                    setField3ID = "Advantage on saving throws to resist being charmed and can't be put to sleep",
    
                    setField4Name = "Trance",
                    setField4ID = "Don't need to sleep, can meditate for 4 hours and receive benefits of a long rest",
    
                    setField5Name = "Other Proficiencies and Languages",
                    setField5ID = "Common, Elvish, Celestial, All armour, Shields Simple, Martial Weapons, Dragon Chess";
                    break;
    
                    case 'faust':
                    var
                    setTitle = "Noble High Elf",
                    setAuthor = "Aurelia Dilaris",
                    setColor = 0x00AE86,
                    setDescription = "A young and perky 101 year old High Elf, ready to set out into the wide world and help others achieve their dreams above all else",
                    setImage = "https://staticdelivery.nexusmods.com/images/110/4872006-1429009636.jpg",
                    setURL = "http://forgottenrealms.wikia.com/wiki/High_elf",
                    setField1 = "Traits",
    
                    setField2Name = "Darkvision",
                    setField2ID = "See in dim light as if bright light, in low light as if dim light.",
    
                    setField3Name = "Fey Ancestry",
                    setField3ID = "Advantage on saving throws to resist being charmed and can't be put to sleep",
    
                    setField4Name = "Trance",
                    setField4ID = "Don't need to sleep, can meditate for 4 hours and receive benefits of a long rest",
    
                    setField5Name = "Other Proficiencies and Languages",
                    setField5ID = "Common, Elvish, Celestial, All armour, Shields Simple, Martial Weapons, Dragon Chess";
                    break;
                default:
                    var setTitle = "none";
            }
    
            const embed = new Discord.RichEmbed()
            .setTitle(setTitle)
            .setAuthor(setAuthor)
            .setColor(setColor)
            .setDescription(setDescription)
            .addBlankField(true)
            .setImage(setImage)
            .setThumbnail(setImage)
            .setURL(setURL)
            .addField(setField1)
            .addField(setField2Name, setField2ID)
            .addField(setField3Name, setField3ID)
            .addField(setField4Name, setField4ID)
            .addBlankField(true)
            .addField(setField5Name, setField5ID);
          
            if(setTitle != "none" ){
            message.channel.send({embed});
            } else {
                message.reply("That Player does not exist");
            }
        }

}

module.exports = Profile;