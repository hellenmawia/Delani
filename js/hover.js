
   $('.portimg').hover(function(){
    $('.porttext',this).slideToggle('slow');
 }, function(){
    $('.porttext',this).slideToggle('slow');
 });

 $(".design").click(function(event) {
    $(".show1").slideToggle();
    $(".switchdisplay").slideToggle();
  });

 $("form#form").on('submit',function(event){
    event.preventDefault();
    let name = $("input#name").val();
    let email = $("input#email").val();
    let message = $("textarea#message").val();

    if ($("input#name").val() && $("input#email").val()){
        alert ("Hello " + name + ", Thank you for reaching out,your message has been received");
    }
    else {
        alert("Please provide your correct name and email!");
    }

});










