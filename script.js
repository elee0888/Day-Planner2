// show current date
let currentDate = moment().format("dddd MMMM DD, YYYY");
$("#currentDay").html(currentDate);


$(document).ready(function() {

$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".text-box").val();
    var time = $(this).parent().attr("id");
    
    console.log(text, time);
    localStorage.setItem(time, text);
});

function setColorBlock() {
    let currentHr = moment().format("HH");
    console.log(moment().format("HH"));
    $(".color-rows").each(function() {
    let colorThis = ($(this).attr("id"));
    console.log(colorThis);
        //var color = $(this).attr('id');

    if (currentHr > colorThis) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
    };

    if (currentHr === colorThis) {
        $(this).removeClass("past");
        $(this).addClass("present");
    };

    if (currentHr < colorThis) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    };
});
    
   
    };

    setColorBlock();

    setInterval (function() {
        setColorBlock();
    },  5000);

});

  $("#09 .text-box").val(localStorage.getItem("09"));
  $("#10 .text-box").val(localStorage.getItem("10"));
  $("#11 .text-box").val(localStorage.getItem("11"));
  $("#12 .text-box").val(localStorage.getItem("12"));
  $("#13 .text-box").val(localStorage.getItem("13"));
  $("#14 .text-box").val(localStorage.getItem("14"));
  $("#15 .text-box").val(localStorage.getItem("15"));
  $("#16 .text-box").val(localStorage.getItem("16"));
  $("#17 .text-box").val(localStorage.getItem("17"));
  $("#18 .text-box").val(localStorage.getItem("18"));
  $("#19 .text-box").val(localStorage.getItem("19"));
  $("#20 .text-box").val(localStorage.getItem("20"));
  $("#21 .text-box").val(localStorage.getItem("21"));