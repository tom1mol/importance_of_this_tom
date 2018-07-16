/*$("p").click(function(){
    $("p").slideToggle("slow");  // both disappear at same time
})
*/

/*
$("p").click(function(){
    $(this).slideToggle("slow");  // both disappear individually using this keyword
})
*/

/*
$("button").mouseenter(function(){
    $(this).removeClass("makeRed").addClass("makeBlue");
});

$("button").mouseleave(function(){
    $(this).removeClass("makeBlue").addClass("makeRed");
});
*/

/*
$(document).ready(function(){
    $(".box").on("click", function(){        //box class and "on click function" 
        var classNames = $(this).attr("class").split(" ");  // space is what we're spotting them by 
        $("." + classNames[1]).css("background-color", "red"); //elements have 2 classes. box and 1   change bg color red
    });   //split string box 1 whenever we encounter a space  achieved using split..gives us array containing 2 strings 
});
*/

$(document).ready(function(){
    $(".box").on("click", function(){
        /**
         * when we click on an element that has
         * a 'box class, this event will be fired.
         */
         var classNames = $(this).attr("class").split(" ");
         var boxClass = classNames[0];
         var className = classNames[1];
         if ($(this).css("background-color") == "rgb(255, 0, 0)") {
             //if this object already red...turn it black
             $("." + className).css("background-color", "#000");
        } else {
            //else turn all elements with a box class black
            //and then change the color of all elements
            // with the same class name as the clicked element to red
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });
    });