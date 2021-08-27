//define variables
var today = moment().format("MMMM D, YYYY");

//sets time  
var time = moment().format("HH:mm");
//gets the data
getData();

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


$(".saveBtn").on("click", saveData);

function saveData(event) {
    var text = $(event.target).siblings(".description").val();
    var time = $(event.target).siblings(".description").attr("id");
    localStorage.setItem(time, text);
    
};

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

