img="";
status="";
objects = [];

function preload(){

img = loadImage("kitchen.jpeg");
     
}

function setup(){

 canvas = createCanvas(640,420);
 canvas.center();
 detection = ml5.objectDetector('cocossd', modelLoaded);
 document.getElementById("status").innerHTML = "Status : Identifiying Objects.. ";

}


function modelLoaded(){
 
    console.log("Model Has Been Loaded! Enjoy!");
    status = true;
    detection.detect(img,gotResults);


}

function gotResults(error,results){
  
    if (error){

         console.log(error);

    }

    else{
      
        console.log(results);
        objects = results;

    }


}

function draw(){

image(img,50,50,600,400);
 
if ( status != ""){

   for( i=0 ; i < objects.length ; i++){
         
    document.getElementById("status").innerHTML = "Status : Objects Identified";
    document.getElementById("noObj").innerHTML = "Number of objects detected : " + objects.length;

    fill("#FF0000");
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "% " ,objects[i].x + 20 , objects[i].y + 20);
    noFill();
    stroke("#FF0000");
    rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
    

   }

}

}

function BacKKit(){

    window.location = "index.html";


}