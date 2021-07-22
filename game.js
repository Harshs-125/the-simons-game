var buttonColours = ["red", "blue", "green", "yellow"];

var colours= [];
var usercolours = [];

var started = false;
var level = 0;
$(document).keydown(function(){
  if(!started)
  {
    $("p").text("Level "+level);
    nextsq();
    started=true;
  }
})

$(".button").click(function(event){
  var userclick=this.id;
  usercolours.push(userclick);
  $("#"+this.id).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  var src="sounds/"+userclick+".mp3";
  audioplay(src);
  check(usercolours.length-1);
});

function check(clevel)
{
  if(colours[clevel]===usercolours[clevel])
  {
    if(usercolours.length===colours.length)
    {
      setTimeout(function(){
        nextsq();
      },1000);
    }
  }else{
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
    $("p").text("GAME OVER! press any key to start");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    newgame();
  }
}

function nextsq()
{ level++;
  $("p").text("Level "+level);
  console.log("level:"+level);
  usercolours = [];
  var randomnum=Math.floor(Math.random()* 4 + 1);
  console.log(randomnum);
  if(randomnum===1)
  {
    var src="sounds/green.mp3"
    audioplay(src);
    $(".green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    colours.push("green");
  }
    else if(randomnum===2)
  {
    var src="sounds/red.mp3"
    audioplay(src);
    $(".red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    colours.push("red");
  }
  else if(randomnum===3)
  {
    var src="sounds/yellow.mp3"
    audioplay(src);
    $(".yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    colours.push("yellow");
  }
  else{
    var src="sounds/blue.mp3"
    audioplay(src);
    $(".blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    colours.push("blue");
  }
}


function audioplay(src)
{
  var audio=new Audio(src);
  audio.play();
}

function newgame()
{
  level=0;
  started=false;
  colours=[];
}
