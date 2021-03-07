class Form {
constructor() {
this.input = createInput ("Name")
this.button = createButton ("Come on")
this.greeting = createElement ("h3")
}
hide(){
this.greeting.hide() 
this.button.hide()
this.input.hide()
}
display(){
    var title = createElement ("h2")
    title.html("Car Racing")
    title.position(130,10)
    //var input = createInput ("Your good name")
    this.input.position(130,160)
    //var button = createButton ("Ready")
    this.button.position(250,200)
    //var greeting = createElement ("h2")
    this.button.mousePressed (function(){
     this.input.hide()
     this.button.hide()
     player.name = this.input.value()
     playercount+=1
     player.index = playercount
     player.update()
     player.updatecount(playercount)
     this.greeting.html("Bonjour "+player.name)
     this.greeting.position (130,160)
    })
}
}