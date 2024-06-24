
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        let buttonIneerHTML = this.innerHTML;

       buttonAnimation(buttonIneerHTML);
       
        switch (buttonIneerHTML) {
        case "w":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();    

            break;

            case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            
            break;

            case "s":
                let snare = new Audio("sounds/snare.mp3");
                snare.play();  
                
            break;     

            case "d":
                let kick = new Audio("sounds/kick-bass.mp3");
                kick.play();  

            break; 
            
            case "j":
                let crash = new Audio("sounds/crash.mp3");
                crash.play();  

            break;
            
            case "k":
                let tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();  

            break;
            
            case "l":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();  

            break;    
                

        default: console.log(buttonIneerHTML)
            break;
       }

    });
}

document.addEventListener("keydown", function(event) {

    buttonAnimation(event.key);

    switch (event.key) {
        case "w":
            let keyW = new Audio("sounds/tom-4.mp3");
            keyW.play();
        
        break;    

        case "a":
            let keyA = new Audio("sounds/tom-2.mp3");
           keyA.play();
            
        break;

        case "s":
                let keyS = new Audio("sounds/snare.mp3");
                keyS.play();  
                
        break;     

        case "d":
                let keyD = new Audio("sounds/kick-bass.mp3");
                keyD.play();  

        break; 
            
        case "j":
                let keyJ = new Audio("sounds/crash.mp3");
                keyJ.play();  

        break;
            
        case "k":
                let keyK = new Audio("sounds/tom-1.mp3");
                keyK.play();  

        break;
            
        case "l":
                let keyL = new Audio("sounds/tom-3.mp3");
                keyL.play();  

        break;  
        
        default:

        break;
    
    }});

    function buttonAnimation(currentKey) {
        let activeButton = document.querySelector("." + currentKey);

        activeButton.classList.add("pressed");

        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100)
        }
    
    





  
