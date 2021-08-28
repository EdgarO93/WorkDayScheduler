//define variable for date
var today = moment().format("MMMM D, YYYY");

//sets time for clock 
var time = moment().format("HH:mm");
//gets the data that is saved in local storage
getData();

// Date Set (month number, year), and is being added to the html
$("#currentDay").text(" Today is " + today);

// Sets timer for clock and function to check each row every second
timer = setInterval(function () {
    // this will update the clock on the site each minute
    var time = moment().format("HH:mm");
    $('#clock').text(time);
    // this runs a loop using jQuery running through each row
    $('textarea').each(function () {
        // at each row create a variable from the id hour to and turn into number
        var blockParse = $(this).attr("id");
        var blockTime = parseInt(blockParse);
        //this will create a variable from the current time and then grab the hour
        var d = new Date();
        var hour = d.getHours();
        // if else if statement that compares hour to the id value(row hour)
        // then it assigns a class that colors gray past events, salmon current and green future
        if (hour > blockTime) {
            // console.log(hour >blockTime)
            $(this).addClass("past")
            // console.log(this)
        }
        else if (hour < blockTime) {
            $(this).addClass("future")
        }
        else {
            $(this).addClass("present")
        }
    })

}, 1000);
// this jQuery event listener will run the local storage fucntion
$(".saveBtn").on("click", saveData);
// this function saves the inputs into local storage
function saveData(event) {
    // defining variable for the local storage grabbing the input value
    //and the hours through the  click target
    var text = $(event.target).siblings(".description").val();
    var times = $(event.target).siblings(".description").attr("id");
    //this will save the information
    localStorage.setItem(times, text);

};
//this function will return the local storage info in each
//row and it will stay in the page with the earlier invocation
function getData() {
    $('#9.description').val(localStorage.getItem('9'));
    $('#10.description').val(localStorage.getItem('10'));
    $('#11.description').val(localStorage.getItem('11'));
    $('#12.description').val(localStorage.getItem('12'));
    $('#13.description').val(localStorage.getItem('13'));
    $('#14.description').val(localStorage.getItem('14'));
    $('#15.description').val(localStorage.getItem('15'));
    $('#16.description').val(localStorage.getItem('16'));
    $('#17.description').val(localStorage.getItem('17'));
};

