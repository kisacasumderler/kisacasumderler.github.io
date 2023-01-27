$(document).ready(function() {
    let max_i = $(".slideItem").length;
    let i = 0;
    let SliderItems = $(".slideItem");
    $(".slideItem").hide();
    $(".slideItem:first").show();
    function Slider(deger){
        if(deger<0){
            i=(max_i-1);
        }
        if(deger>(max_i-1)){
            i=0;
        }
        SliderItems.hide();
        SliderItems.eq(i).fadeOut(1000);
        SliderItems.eq(i).fadeIn(1300);
    }
    $("#btnPrev").click(function(){
        Slider(i-=1);
    })
    $("#btnNext").click(function(){
        Slider(i+=1);
    })

    $(".attribution a").mouseenter(function(){
        $(this).css({"border-bottom":"1px solid #7068d9","font-size":"17px"},3000);
    })
    $(".attribution a").mouseleave(function(){
        $(this).css({"border-bottom":"1px solid transparent","font-size":"16px"},3000);
    })
    $(".btnGrup div").mousedown(function(){
        $(this).css({"background":"hsl(240, 18%, 77%)"});
    })
    $(".btnGrup div").mouseup(function(){
        $(this).css({"background":"white"});
    })
});