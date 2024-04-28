$(document).ready(function() {
    var itemList = $(".menu li");
    var time1,time2,time3,time4,time5;
    $("#menu-toggle").click(function(){
        if($("#menu-toggle").prop("checked")==true){
            $(".menu").css("display","none");
            $(".menu").css("background-color","rgb(30,30,30)");
            $(".menu").slideDown();
            $("body").css("overflow","hidden");
            time1 = setTimeout(function(){
                itemList.eq(0).css("visibility","visible");
            }, 400);
            time2 = setTimeout(function(){
                itemList.eq(1).css("visibility","visible");
            }, 600);
            time3 = setTimeout(function(){
                itemList.eq(2).css("visibility","visible");
            }, 800);
            time4 = setTimeout(function(){
                itemList.eq(3).css("visibility","visible");
            }, 1000);
            time5 = setTimeout(function(){
                itemList.eq(4).css("visibility","visible");
            }, 1200);
        }else{
            clearTimeout(time1);
            clearTimeout(time2);
            clearTimeout(time3);
            clearTimeout(time4);
            clearTimeout(time5);
            $(".menu").slideUp();
            $("body").css("overflow","scroll");
            $(".menu").css("background-color","none");
            $(".menu li").css("visibility","hidden");
        }
    });
});
function handleResize(){
    if(window.innerWidth>1200){
        $(".menu li").css("visibility","visible");
        $(".menu").css("display","flex")
        $("#menu-toggle").prop('checked', false);
    }
    else{
        $(".menu").css("display","none")
        $(".menu li").css("visibility","hidden");
        $("#menu-toggle").prop('checked', false);
    }
}
window.addEventListener("resize", handleResize);