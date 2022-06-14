$(document).ready(function(){

    // toggle sidebar 
    $("#sidebar-toggle-button").on("click", function(){
        if($(".sidebar").hasClass("sidebar-collapse")){
            $(".sidebar").removeClass("sidebar-collapse");
            $(".main-content").removeClass("sidebar-collapsed-main-content");
        }else{
            $(".sidebar").addClass("sidebar-collapse");
            $(".main-content").addClass("sidebar-collapsed-main-content");
        }
    });

});