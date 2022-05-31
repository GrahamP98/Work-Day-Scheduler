// using moment.js to display time
$('#currentDay').text(moment().format('MMMM Do, (dddd) YYYY'));

//GLOBAL VARIABLES
var saveBtn = $('.saveBtn');

//function to save description to a corresponding hour to local storage.
saveBtn.on('click', function () {
    var time = $(this).siblings('.hour').text();
    var description = $(this).siblings('.description').val();
    localStorage.setItem(time, description);
    alert(description + " has been saved for " + time);
});

//using moment.js this function takes the current hour determines if its more, less or equal to the scheduler hours and gives it a corresponding class which gives it certain style properties.
function colorCoordinator() {
    var hour = moment().hours();

    $('.time-block').each(function () {

        var rHour = parseInt($(this).attr('id'));

        if (rHour > hour) {
            $(this).addClass('future');
        } else if (rHour === hour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('past');
        }
    })
};

//events stay when saved even when page is refreshed.
function saveEvents() {

    $('.hour').each(function () {
        var event = $(this).text();
        var description = localStorage.getItem(event);

        if (event !== null) {
            $(this).siblings('.description').val(description);
        }
    });
}

//call functions
colorCoordinator();
saveEvents();



