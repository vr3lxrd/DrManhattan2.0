module.exports = (client, message) => {
    if (message.content.startsWith(process.env.PREFIX)){ 

        if (message.author.bot) return

        const args = message.content.split(" ")
        args.shift()  

        const commandSplited = message.content.split(" ")[0]
        const command = commandSplited.replace(/^./g,"")
        command.toLowerCase()
        
        try {
            const commandHandler = require(`../comandos/${command}`)
            commandHandler.run(client, message, args) 
        }
        catch {
            message.channel.send('Comando Inválido')
        }
    }

    if (!message.content.startsWith(process.env.PREFIX) && message.channel.id === '818189362176065588') {
        message.delete({ timeout: 1000 })
        message.author.send('Use o canal #escolha-sua-tribo apenas para escolher a tribo!')
    }
}