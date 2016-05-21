$(document).ready(function(){
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var middleX = canvas.width/2,
middleY = canvas.height/2;

var pantsvel = document.getElementById("velvet");
var pantsleo = document.getElementById("leopard");
var pantsjea = document.getElementById("jeans");
var pattZeb = document.getElementById('zeb');
var pattBan = document.getElementById('banana');
var pattFlo = document.getElementById('flower');

var shirt = "Zebra";
var skincolor = "#DFBB97";
var shirts = [pattZeb,pattBan,pattFlo];
var bottoms = [];
var shoes = [];
var face = 'happy';
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
        
    var pat = ctx.createPattern(shirts[2],"repeat");
    ctx.rect(this.posX,this.posY,this.sizeX,this.sizeY);
    ctx.fillStyle = pat;
    ctx.fill();
    ctx.fillStyle = "black";

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
    posY:middleY - 130,
    sizeX: 20,
    sizeY: 0,
    draw: function() {
        ctx.strokeStyle = "cyan";
        ctx.beginPath();
        ctx.arc(this.posX,this.posY,this.sizeX,this.sizeY,Math.PI/1);
        ctx.linewidth = 1;
        ctx.closePath();
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
        ctx.beginPath();
        ctx.arc(this.posX,this.posY,this.sizeX,this.sizeY,Math.PI/1,true);
        ctx.lineWidth = 1;
        ctx.closePath();
        ctx.stroke();
        
    },
}
 var pupils ={
     posY:middleY - 163,
     posX:middleX - 33,
     xposY:middleY - 163,
     xposX:middleX - -17,
     sizeX: 5,
     sizeY: 5,
     xsizeX: 5,
     xsizeY: 5,
     draw:function(){
         ctx.fillStyle = "black";
         ctx.fillRect(this.posX,this.posY,this.sizeX,this.sizeY);
         ctx.fillRect(this.xposX,this.xposY,this.xsizeX,this.xsizeY)
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


    
    pat = ctx.createPattern(shirts[0],"repeat");
    ctx.rect(this.lposX,this.lposY,this.sizeX,this.sizeY);
    ctx.rect(this.rposX,this.rposY,this.sizeX,this.sizeY);
    ctx.fillStyle = pat;
    ctx.fill();
    ctx.fillStyle = "black";
    
    
    
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
    var pattern = document.getElementById('zeb');
    var pat = ctx.createPattern(pattern,"repeat");
    ctx.rect(this.lposX,this.lposY,this.sizeX,this.sizeY/2);
    ctx.rect(this.rposX,this.rposY,this.sizeX,this.sizeY/2);
    ctx.fillStyle = pat;
    ctx.fill();
    ctx.fillStyle = "black";
    
    ctx.fillStyle = skincolor;
    ctx.fillRect(this.lposX,this.lposY + this.sizeX,this.sizeX,this.sizeY/2);
    ctx.fillRect(this.rposX,this.rposY + this.sizeX,this.sizeX,this.sizeY/2);
    },
}




render();

function render(){
ctx.clearRect(0,0,canvas.width,canvas.height);
head.draw();
body.draw();
arms.draw();
feet.draw();
eyes.draw();
hands.draw();



if (face === 'happy') {
    mouth.draw()
}
if (face === 'sad'){
    unhappy.draw();
}

//pupils.draw();
requestAnimationFrame(render);
}

/*
var sadEyeBrows = {
    posX:,
    posY:,
}*/



 $(".Skin-tone li").on("click", function(){
    skincolor = $(this).data("color");

   
});
    var backgrounds=["http://traveldealslady.com/wp-content/uploads/Grand-Canal-Venice-Italy-vacation-trips-travel-agent1.jpg",
                     "https://i.ytimg.com/vi/5_vP6dZIPCw/maxresdefault.jpg",
                     "http://www.aum.my/html/images/brands/jr/ioi/1.jpg",
                     "https://media.timeout.com/images/100589813/image.jpg",
                     "http://www.atlantisbahamas.com/media/Things%20To%20Do/Water%20Park/Beaches/Hero/WaterPark_Beaches.jpg"];
    $(".bg-images").click(function(){
        
        var idxstring= $(this).data("idx");
    
        $("body").css("background-image","url("+backgrounds[idxstring]+")");
        $
    });
    
    $('.face').on('click', function() {
        face = $(this).data('face');

    })
    $('.shirt').on('click',function(){
        shirt = $(this).data('shirt');
    
    });
 $('.pants').on('click', function(){
     pat = $(this).data('pants');
 })
});








