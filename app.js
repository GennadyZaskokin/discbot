const bott = new Discord.Client();
const prefix = '!';

bott.on('message', message => {
if(message.author.bot) return;
        if(message.content.indexOf(prefix) !== 0) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
if (command === 'clear') {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply ("Ошибка"); 
  if(!args[0]) return message.channel.send ("Ошибка"); 
  message.channel.bulkDelete(args[0]+1).then(() => { 
  message.channel.send('Deleted ${args[0]} messages.').then(msg =>msg.delete(5000)); 
  }); 
}
});

client.login(process.env.BOT_TOKEN);
