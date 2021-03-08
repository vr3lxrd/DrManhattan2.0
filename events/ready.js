module.exports = (client) => {
    console.log('Conectado')
    client.user.setActivity('Marina and the Diamonds', {type: 'WATCHING'})
}