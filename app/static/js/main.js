$(document).ready(function() {

	$(".etc_check").on('click', function(){
        if($(this).attr('checked', 'checked')){
            $('.specify').toggleClass("specify-input");
        }
    });
    $(".etc_check_2").on('click', function(){
        if($(this).attr('checked', 'checked')){
            $('.specify-2').toggleClass("specify-input");
        }
    });
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
})