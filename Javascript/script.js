//define variables
var today = moment().format("MMMM D, YYYY");
// probrably add variables to each hour to maybe make each a form?
//sets time  
var time = moment().format("hh:mm:ss");

// Date Set (month number, year),
$("#currentDay").text(" Today is  " + today);

//timer
// Sets timer
timer = setInterval(function () {
    var time = moment().format("hh:mm:ss");
    $('#clock').text(time);
    $('textarea').each(function () {
        
        var blockTime= $(this).attr("id");
        console.log(blockTime)
        if (blockTime < time) {
            $("blockT").addClass("past")
        }
        else if (blockTime > time) {
            $("blockT").addClass("future")
        }
    })
   

}, 1000);


//need to figure out how to compare string value to time
//function to change the color based on time, maybe some kind of conditional statment
// to check time (if current time < time make red, else if turn current time >time green else nothing)
//color could be done by assigned an id or class and then using css to change color 

// function changeColor(){ 
// if (currenttime<time){
//    $("currenttime")addClass("past")

// } else if (currenttime>time){
//     $("currenttime")addClass("future")
// }

// };

//function to save each input and add to local storage

//click event for save button
// $(safeBtn).on("click", function () {
//     //function for saving list

// });
