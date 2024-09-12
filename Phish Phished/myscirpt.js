const TelegramBot = require('node-telegram-bot-api');
const token = '6455159198:AAHNzNXFG0QLOsViyA2HqnSHVipB1p3U4Kg';
const bot = new TelegramBot(token, {polling: true});

function sendMessageWithDelay() {
    console.log("Sending message");    

    bot.sendMessage(-4529604316, "GROWWW UP MOTHERFUCKER");
    
    setTimeout(sendMessageWithDelay, 1000); 

}
sendMessageWithDelay();

// fetch("https://api.telegram.org/bot6455159198:AAHNzNXFG0QLOsViyA2HqnSHVipB1p3U4Kg/getUpdates")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => console.error('Error:', error));
