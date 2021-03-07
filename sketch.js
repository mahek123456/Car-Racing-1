var gamestate = 0;
var database;
var playercount = 0;
var form, game, player;
var allplayers;

function setup(){
    createCanvas(500,500);
    database = firebase.database()
    game = new Game()
    game.getstate()
    game.start() 
}

function draw(){
    background("white");
    if (playercount === 4){
        game.update(1)
    }
    if(gamestate ===1){
        clear ()
        game.play
    }
    drawSprites();
}
