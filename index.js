let message = []

function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }

    return message

}

function countDown(num) {
    while (num >= 0) 
        console.log(num--)
    
}
