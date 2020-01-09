$(document).ready(function() {

    $("#currentDay").html(moment().format('dddd') + ", " +moment().format("MMM Do YY").substring(0,5) + "th");
    
    });