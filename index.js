const Discord = require("discord.js");
const client = new Discord.Client()

client.on('ready', () => {
  //console.log(`Logged in as ${client.user.tag}!`);
});
listAB = [
64,68,115,263,382,626,982,1330,2004,2665,3916,5156,7446,9753,12751,18163,23691,33451,43572,56729,73833,103459,144203,175058,243930,317208,439968,536310,743789,1027470,1257246,1736683
]
listAC = [
0,0,0,0,225,428,744,1089,1748,2454,3786,5216,7862,10729,14599,21627,29322,43020,58213,78724,106414,154857,224146,282572,408877,552141,795252,1006648,1449741,2079651,2642548,3790483  
]
client.on('message', function(msg) {
  let tab = []
  let k=l=m=0
  bool = bool1 = bool2 = true
  const args = msg.content.trim().split(/ +/g)
  const command = args.shift().toLowerCase()
  if (command === "!academie") {
    let [i, j, o, p] = args
    i = parseInt(i)
    j = parseInt(j)
    if(i !== i)
      i = 0
    if(j !== j && i > 0){
      j = i
      bool = true
    }
    if(i > 0)
      i--
    while(i < j && i < 32){
      l += listAB[i]
      m += listAC[i]
      showTab()
      tab[k++] = 'lvl:'+(i+1)+' b: '+number(listAB[i])+' c: '+number(listAC[i++])+' cumulé: b: '+number(l)+' c: '+number(m)
    }
    if(tab.length == 0)
      tab = 'argument: [1-32][1-32]'
    msg.channel.send(tab)
  }
  if (command == '!alice')
    msg.channel.send('https://tenor.com/view/anime-die-funny-gif-8523469')
  if (command == '!bylka')
    msg.channel.send('https://gph.is/2fdlZCb')
  if (command == '!cam')
    msg.channel.send('https://gph.is/1ZKO0QO')
  if (command == '!kamikaze')
    msg.channel.send('https://gph.is/2oXyHr5')
});
function number(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

client.login('NTIwNDAxMzI3NzkzMjQyMTIz.DutVxg.20OgI3ZSxkBhYPq7jrWr8vButvk');
