/*
$("p").click(function(){            //this applied when we had 2 seperate paragraphs
   // $("p").slideToggle("slow");  //slide/hides both <p>(paragraphs) when clicked on but doesnt reappear
   $(this).slideToggle("slow");     // "this" makes each paragraph disappear seperately and they dont reappear
})

*/     /* paragraph slideToggle */
/*
$("button").mouseenter(function(){
    $(this).removeClass("makeRed").addClass("makeBlue");
});

$("button").mouseleave(function(){
    $(this).removeClass("makeBlue").addClass("makeRed");
});
*/    /* mouseenter/leave makerRed/Blue */

/*
$(document).ready(function(){
    $(".box").on("click", function(){
        var classNames = $(this).attr("class").split(" "); // space is what we are looking out for
        $("." + classNames[1]).css("background-color", "red");
        // elements have 2 classes. variables 
        //assigned to string containing both classes(box and 1). for function to work
        //split string box 1 wherever we encounter a space. achieved using split which gives an array
        //containing 2 strings. box and 1
    });
});

*/   /* splits 1, 2 , 3 with box example */

$(document).ready(function(){   //use 'if' when we only want a certain class to change to red at given time
    // use 'if' to check rgba value of element..if it's red..if =255,0,0 we change it to black
    // this is done by setting background color to 0,0,0
    // if value is not red..then we set all boxes to black(to ensure no other red boxes)
    $(".box").on("click", function(){
        /**
         * when we click an element that has 
         * a 'box' class, this event will be fired.
         */
         var classNames = $(this).attr("class").split(" ");
         var boxClass = classNames[0];
         var className = classNames[1];
         if ($(this).css("background-color") =="rgb(255, 0, 0)") {
             //if this object already red..turn it black
             $("." + className).css("background-color", "#000");
         } else {
             //else turn all elements with a box class black
             //and then change the color of all elements
             //with the same class name as the clicked element to red
             $("." + boxClass).css("background-color", "#000");
             $("." + className).css("background-color", "red");
         }
    });
});