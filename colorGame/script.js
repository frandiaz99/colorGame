let num = 6; 
colors = generateRandomColors(num);
var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message"); /*mensaje de correcto o no*/
var h1 = document.querySelector("h1");

var reset = document.querySelector("#reset");
var hard = document.querySelector("#hard");
var easy = document.querySelector("#easy");
var pickedColor = pickColor();

        
for (i=0;i<square.length;i++){

        square[i].style.backgroundColor=colors[i];
  
        square[i].addEventListener("click", function(){

                var clickedColor = this.style.backgroundColor; 
                console.log(pickedColor,clickedColor);
                if(clickedColor == pickedColor){
                        message.textContent = "CORRRRECTOOOO!!!";
                
                        changeColors(pickedColor);
                        stripe.style.backgroundColor=pickedColor;
                        h1.style.backgroundColor = transparent;
                        reset.textContent = "VUELVE A JUGAR"; 

                } 
                else {
                        message.textContent = "INTENTALO NUEVAMENTE";
                        this.style.backgroundColor="rgb(83, 83, 83)";
                }

        }); 
}              

reset.addEventListener("click", function(){
       
        colors = generateRandomColors(num);
        pickedColor = pickColor();
        colorDisplay.textContent=pickColor();  
        reset.textContent="NUEVOS COLORES";

        message.textContent="";

        for (i=0;i<square.length;i++){
                
                square[i].style.backgroundColor=colors[i];
                h1.style.backgroundColor="#232323";
                stripe.style.backgroundColor="#232323";
        }

        
        h1.style.backgroundColor="#232323";
        

});

easy.addEventListener("click",function(){

        easy.classList.add("selected");
        hard.classList.remove("selected");

        num =3;
        colors = generateRandomColors(num);


        pickedColor = pickColor(colors);

        colorDisplay.textContent = pickedColor; 

        for(i=0;i<num;i++){
                square[i].style.backgroundColor=colors[i]; 
        }
        for(i>num;i<square.length;i++){
                square[i].style.display="none";
        }
});

hard.addEventListener("click",function(){

        hard.classList.add("selected");
        easy.classList.remove("selected");
        
        num =6;

        colors = generateRandomColors(num);
        pickedColor = pickColor(colors);
        colorDisplay.textContent = pickedColor;

        for(i=0;i<colors.length;i++){
                square[i].style.backgroundColor = colors[i];
                square[i].style.display="block"; 
        } 
});


/*funcion cambio de colores*/ 
function changeColors(color) {
        for (i=0;i<colors.length;i++){
                square[i].style.backgroundColor = color;
        }
}

function pickColor() {
        let number = Math.round(Math.random()*colors.length);
        return colors[number];  
}


function randomColor() {
        
        let R = Math.round(Math.random()*255);
        let G = Math.round(Math.random()*255);
        let B = Math.round(Math.random()*255); 

        return `rgb(${R}, ${G}, ${B})`;
}


colorDisplay.textContent=pickedColor;  

function generateRandomColors(num) {

        var arreglo=[];

        for (i=0;i<num;i++){
                
                arreglo[i]=randomColor();
        }         

        return arreglo; 
}



