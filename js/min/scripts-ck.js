function getRandomInt(n,t){return Math.floor(Math.random()*(t-n+1))+n}$(document).ready(function(){console.log("ready!");var n=$(".fr_item").children().children().children("img");$.each(n,function(){$(this).attr("src","assets/imgs/"+getRandomInt(2,100)+".png")})});