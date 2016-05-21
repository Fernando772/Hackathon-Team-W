$(document).ready(function(){
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var middleX = canvas.width/2,
middleY = canvas.height/2;
    


//head 

var head = {
    posX:middleX - 80,
    posY:middleY - 100,
    sizeX:100,
    sizeY:100,
    draw: function(){
    ctx.fillStyle = "blue";
    ctx.fillRect(middleX -50,middleY-200,100,100);
    }
}

head.draw();


//body

var body = {
    posX:middleX - 80,
    posY:middleY - 100,
    sizeX:160,
    sizeY:200,
    draw: function(){
    ctx.fillStyle = "red";
    ctx.fillRect(this.posX,this.posY,this.sizeX,this.sizeY); 
    },
};

body.draw();




/*
var eyes = {
    posX:middleX - 70,
    posY:middleY - 120,
    sizeX: 100,
    sizeY: 100,
    draw: function() {
        ctx.fillStyle = "red;
        ctx.fillRect(this.posX,this.posY,this.sizeX,this.sizeY");
    }
}
var mouth ={
    posX:middleX - 100,
    posY:middleY - 220,
    sizeX: 60,
    sizeY: 60,
    draw: function() {
        ctx.fillStyle = "cyan";
        ctx.arc(this.posX,this.posY,this.sizeX,this.sizeY");
    }
}
}
*/

var arms = {
    posX: middle + 80,
    posY: middleY - 100,
    sizeX: 50,
    sizeY: 200,
    draw: function(){

    ctx.fillStyle = "orange";
    ctx.fillRect(middleX + 80,middleY - 100,50,200);
    ctx.fillRect(middleX - 130,middleY - 100,50,200);
    
    
    }
//arms


//feet


ctx.fillRect(middleX - 80,middleY + 100,75,200);
ctx.fillRect(middleX - -5,middleY + 100,75,200);

/*
var sadEyeBrows = {
    posX:,
    posY:,
}*/
    


});