$(document).ready(function(){
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 210,
      itemMargin: 5,
      minItems: 2,
      maxItems: 4
    });
    
    $(`[unique-script-id="w-w-dm-id"] .btn-box`).click(function() {
        $(this).parent().children(".overlay").show();
        });
    $(`[unique-script-id="w-w-dm-id"] .close`).click(function() {
        $(".overlay").hide();
        });
})