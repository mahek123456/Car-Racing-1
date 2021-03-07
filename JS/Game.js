class Game {
constructor (){



}
getstate() {
 var gamestateref = database.ref("gamestate")
 gamestateref.on ("value",function(data){
     gamestate = data.val()
 })

}
update(state) {
    database.ref('/').update({
       gamestate:state 
    })
}
start() {
if (gamestate === 0){
    player = new Player ()
    form = new Form ()
    player.getcount ()
    form.display()
}
}
play() {
form.hide()
text("Hola... Game starts "+120,100)
player.getplayerinfo()
if (allplayers !== undefined){
    var displayposition = 130
    for(var plr in allplayers){
        if(plr === "player"+player.index){
            fill ("red")
        }
        else {
            fill("black")
        } 
    }
    displayposition +=20
    textsize(15)
    text(allplayers[plr].name+":"+allplayers[plr].distance,120,displayposition) 

}
if (keyIsDown(UP_ARROW) && player.index !== null){
    player.distance += 50
    player.update()
}
}
}