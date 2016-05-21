$(document).ready(function(){
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var middleX = canvas.width/2,
middleY = canvas.height/2;

var pattern = new Image();
pattern.src = "Images/zebra.jpeg";
pattern.onload = function(){
    ctx.drawImage(pattern,50,50);

}
var skincolor = "yellow";
var shirts = [];
var mouths = [mouth];
var bottoms = [];
var shoes = [];
//head 

var head = {
    posX:middleX - 80,
    posY:middleY - 100,
    sizeX:100,
    sizeY:100,
    draw: function(){
    ctx.fillStyle = skincolor;
    ctx.fillRect(middleX -50,middleY-200,100,100);
    }
}




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







var eyes = {
    posX:middleX - -10,
    posY:middleY - 170,
    tposX:middleX - 40,
    tposY:middleY - 170,
    sizeX: 20,
    sizeY: 20,
    xsizeX:10,
    xsizeY:10,
    draw: function() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.posX,this.posY,this.sizeX,this.sizeY);
        ctx.fillRect(this.tposX,this.tposY,this.sizeX,this.sizeY);
        
        
    },
}

var mouth ={
    posX:middleX - 2,
    posY:middleY - 110,
    sizeX: 20,
    sizeY: 0,
    draw: function() {
        ctx.strokeStyle = "cyan";
        //ctx.arc(this.posX,this.posY,this.sizeX,this.sizeY,Math.PI/1);
        ctx.linewidth = 1;
        ctx.stroke();
        
    }
}

var unhappy ={
    posX:middleX - 2,
    posY:middleY - 110,
    sizeX: 20,
    sizeY: 0,
    draw:function() {
        ctx.strokeStyle = "cyan";
        ctx.arc(this.posX,this.posY,this.sizeX,this.sizeY,Math.PI/1,true);
        ctx.lineWidth = 1;
        ctx.stroke();
        
    },
}
 
 var neutral ={
     posY:middleY - 120,
     posX:middleX - 22,
     sizeX: 40,
     sizeY: 5,
     draw: function() {
     ctx.fillStyle = "black";  
     ctx.fillRect(this.posX,this.posY,this.sizeX,this.sizeY);
     ctx.lineWidth = 1;
     }
 }
var arms = {
    lposX: middleX + 80,
    lposY: middleY - 100,
    rposX: middleX - 130,
    rposY: middleY - 100,
    sizeX: 50,
    sizeY: 150,
    draw: function(){

    ctx.fillStyle = "orange";
    ctx.fillRect(this.lposX,this.lposY,this.sizeX,this.sizeY);
    ctx.fillRect(this.rposX,this.rposY,this.sizeX,this.sizeY);
    
    
    },
}
var hands = {
    lposX: arms.lposX,
    lposY: arms.lposY + 150,
    rposX: arms.rposX,
    rposY: arms.rposY + 150,
    sizeX: 50,
    sizeY: 50,
    draw: function(){
    ctx.fillStyle = skincolor;
    ctx.fillRect(this.lposX,this.lposY,this.sizeX,this.sizeY);
    ctx.fillRect(this.rposX,this.rposY,this.sizeX,this.sizeY);
    }


};

//arms


//feet



var feet = {
    lposX: middleX - 80,
    lposY: middleY + 100,
    rposX: middleX + 10,
    rposY: middleY + 100,
    sizeX: 70,
    sizeY: 200,
    draw: function(){
    ctx.fillStyle = "green";
    ctx.fillRect(this.lposX,this.lposY,this.sizeX,this.sizeY);
    ctx.fillRect(this.rposX,this.rposY,this.sizeX,this.sizeY);
    },
}

var shoes = {
    lposX: middleY + 200,
    lposY: canvas.height,

};


render();

function render(){
ctx.clearRect(0,0,canvas.width,canvas.height);
head.draw();
body.draw();
arms.draw();
feet.draw();
eyes.draw();
hands.draw();
neutral.draw();
requestAnimationFrame(render);
}

/*
var sadEyeBrows = {
    posX:,
    posY:,
}*/
var backgrounds=["http://traveldealslady.com/wp-content/uploads/Grand-Canal-Venice-Italy-vacation-trips-travel-agent1.jpg",
"https://i.ytimg.com/vi/5_vP6dZIPCw/maxresdefault.jpg",
"http://www.aum.my/html/images/brands/jr/ioi/1.jpg",
"https://media.timeout.com/images/100589813/image.jpg",
"http://www.atlantisbahamas.com/media/Things%20To%20Do/Water%20Park/Beaches/Hero/WaterPark_Beaches.jpg"];
 //$(".imgages").click(function(){
 //var idxstring= $(this).data("idx");
 //$("body").css("background-image",);
// });
/*
$()




*/


});