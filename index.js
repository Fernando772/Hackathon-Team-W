$(document).ready(function(){
  
  
    var backgrounds=["http://traveldealslady.com/wp-content/uploads/Grand-Canal-Venice-Italy-vacation-trips-travel-agent1.jpg",
                     "https://i.ytimg.com/vi/5_vP6dZIPCw/maxresdefault.jpg",
                     "http://www.aum.my/html/images/brands/jr/ioi/1.jpg",
                     "https://media.timeout.com/images/100589813/image.jpg",
                     "http://www.atlantisbahamas.com/media/Things%20To%20Do/Water%20Park/Beaches/Hero/WaterPark_Beaches.jpg"];
    $(".bg-images").click(function(){
        
        var idxstring= $(this).data("idx");
    
        $("body").css("background-image","url("+backgrounds[idxstring]+")");
    
    });
    
    
    $(".Skin-tone li").on("click", function(){
    $(this).data("color");

   
});
});