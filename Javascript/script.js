//define variables
var today = moment().format("MMMM D, YYYY");

//sets time  
var time = moment().format("HH:mm");

// Date Set (month number, year),
$("#currentDay").text(" Today is  " + today);


// Sets timer for clock
timer = setInterval(function () {
    var time = moment().format("HH:mm");
    $('#clock').text(time);
    $('textarea').each(function () {

        var blockParse = $(this).attr("id");
        var blockTime = parseInt(blockParse);
     

        var d = new Date();
        var hour = d.getHours();

        if (hour > blockTime ) {
            console.log(hour >blockTime)
            $(this).addClass("past")
            console.log(this)
         
        }
        else if (hour < blockTime) {
            $(this).addClass("future")

        }
        else {
            $(this).addClass("present")
        }
       
    })


}, 1000);



//function to save each input and add to local storage

//click event for save button
// $(safeBtn).on("click", function () {
//     //function for saving list

// });
