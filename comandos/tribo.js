const Discord = require('discord.js')
const { Client, MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {

    message.delete({ timeout: 1000 })

    let roles = {
      '1': '818200493036929104',  
      '2': '818200775359987734',
      '3': '818200882516459558',
      '4': '818200973222608906',
    }

    let autor = message.guild.member(message.author);

    let roleIdentifier = (args) => {
      if (args.length != 1){
        return message.author.send('Errado!')
      }
      return roles[args[0]]
    }
    let desiredRole = roleIdentifier(args)

    if (autor.roles.cache.has(roles['1']) || autor.roles.cache.has(roles['2']) || autor.roles.cache.has(roles['3']) || autor.roles.cache.has(roles['4'])) {
      const embed1 = new MessageEmbed()
        .setTitle('Você já possui uma tribo, não os traia!')
        .setColor('#08c217')
      return message.author.send(embed1)
    }

    autor.roles.add(desiredRole)
    autor.roles.add('818220675679911956') // Primata
    autor.roles.remove('817120411698462761') // Alma Penada
    const embed = new MessageEmbed()
      .setTitle('Bem vindo à tribo primata!')
      .setColor('#16b6f5')
      .setDescription('Lute bravamente com seus irmãos!');
    message.author.send(embed)
}