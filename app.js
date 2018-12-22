var tmi =require('tmi.js');

var options = {
    options:{
        debug:true
    },
    connection:{
        cluster:'aws',
        reconnect:true
    },
    identity:{
        username:'punjabi_Bot',
        password: 'oauth:o9mj5dj1h2ravzl1wf20y36cyuof19'
    },
    channels:["love_twitch_tv"]
};

let my_message={
    greeting:"hello",
    asking:"How are you today"
}

var client= new tmi.client(options);
client.connect();

client.on('chat',(channel,user,message,self)=>{

//  console.log(my_message.website.toLowerCase())
   
    if(message.toLowerCase() == my_message.greeting.toLowerCase())
    {
        client.action('love_twitch_tv',"Hi I'm Punjabi Bot. How can I help! " )
    }
    else if(message.toLowerCase() == my_message.asking.toLowerCase())
    {
        client.action('love_twitch_tv',"I'm pretty good today. How are you doing today?" )
    }
      else 
    {
        client.action('love_twitch_tv',"Sorry I don't understand what you mean ? For info contact my boss at http://lovepreetsingh.us/" )
    }

})


client.on('connected',(address,port)=>{
        client.action('love_twitch_tv',"Bot is ready to chat....!" )

})