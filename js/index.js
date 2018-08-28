$('.chatinput').keyup(function (event) {
    newText = event.target.value;
    $('.printchatbox').text(newText);
}); 