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

        var blockTime = $(this).attr("id");
        var blockHour = moment(blockTime, "HH:mm")
        // console.log(blockHour)

        if (moment(time, "HH:mm").isAfter(blockHour, "HH:mm")) {

            $(".blockT").addClass("past").removeClass("blockT");

        }
        else if (moment(time, "HH:mm").isBefore(blockHour, "HH:mm")) {
            $(".blockT").addClass("future").removeClass("blockT");

        }
        else {
            $(".blockT").addClass("present").removeClass("blockT");
        }

    })


}, 1000);



//function to save each input and add to local storage

//click event for save button
// $(safeBtn).on("click", function () {
//     //function for saving list

// });
