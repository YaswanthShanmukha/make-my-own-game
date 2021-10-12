class Form{
    constructor(){
        this.input = createInput("").attribute("placeholder",'Enter your name')
        this.playButton = createButton("Play")
        this.titleImg = createImg("")
        this.greeting = createElement("h2")

    }

    setElementsPosition(){
        this.input.position(width/2-110,height/2-80)
        this.playButton.position(width/2-90,height/2-20)
        this.titleImg.position(120,50)
        this.greeting.position(width/2-300,height/2-100)
    }

    setElementsStyle(){
        this.input.class("customInput")
        this.playButton.class("customButton")
        this.titleImg.class("gametitle")
        this.greeting.class("greeting")
    }

    hide(){
        this.greeting.hide()
        this.playButton.hide()
        this.input.hide()

    }

    handleMousePressed(){
        this.playButton.handleMousePressed(()=>{
            this.input.hide()
            this.playButton.hide()
            var message =`Hello ${this.input.value()}
            </br>Waiting for Players to join`
            this.greeting.html(message)
        })
    }
        display(){
            this.setElementsPosition()
            this.setElementsStyle()
            this.handleMousePressed()
        }

    

    }




