// put code here!
console.log('JS Loaded');

var name;
var team;
var dramaLevel;
var design;


$('.name-section').hide();
$('.drama-section').hide();
$('.scenario-section').hide();
$('.celeb-apprentice-section').hide();
$('.kardashian-section').hide();
$('.jersey-shore-section').hide();
$('.red-prompt').hide();
$('.red-section').hide();
$('.blue-prompt').hide();
$('.blue-section').hide();
$('.minimalist-prompt').hide();
$('.modern-prompt').hide();
$('.avant-garde-prompt').hide();
$('.bougie-prompt').hide();
$('.spicy-prompt').hide();
$('.kim-section').hide();
$('.khloe-section').hide();
$('.kourtney-section').hide();
$('.3d-prompt').hide();
$('.kimye-prompt').hide();
$('.holographic-prompt').hide();
$('.chyna-prompt').hide();
$('.kris-prompt').hide();
$('.tyga-prompt').hide();
$(".oreos-reeses-prompt").hide();
$('.pop-tarts-prompt').hide();
$('.snooki-section').hide();
$('.jwoww-section').hide();
$('.mike-section').hide();
$('.bail-prompt').hide();
$('.lesson-prompt').hide();
$('.laugh-prompt').hide();
$('.spain-prompt').hide();
$('.bahamas-prompt').hide();
$('.mexico-prompt').hide();
$('.p-prompt').hide();
$('.c-w-prompt').hide();

$('input').keyup(function(e) {
    if (e.keyCode == 13) {
        $('div').scrollTop = 100;
    }
})
.focus();

$('#start-button').on('click', function(){
  $('.name-section').fadeIn('slow');
});


$('.name-form').on('submit',function(e){
  e.preventDefault();
  name = $('#name-input').val();
  $('.drama-section').fadeIn('slow');
  $('.drama-section label').text(`Nice to meet you, ${name}. Hmmm... on a scale of 1-5 (1 being the least amount of drama and 5 being the most amount of drama), how much drama are you in the mood for today?`);
});

$('.number').on('click',function(){
  dramaLevel = $(this).html();
  if(dramaLevel<3){
    $('.celeb-apprentice-section').fadeIn('slow');
  } else if(dramaLevel==3){
    $('.kardashian-section').fadeIn('slow');
  } else{
    $('.jersey-shore-section').fadeIn('slow');
  }
});

$('.color').on('click', function(){
    team = $(this).html().toLowerCase();
    if(team=='red'){
      $('.red-prompt').fadeIn('slow');
      $('.red-section').fadeIn('slow');
    } else{
      $('.blue-prompt').fadeIn('slow');
      $('.blue-section').fadeIn('slow');
    }
});

$('.design').on('click',function(){
  design = $(this).html().toLowerCase();
  if(design =='minimalist'){
    $('.minimalist-prompt').fadeIn('slow');
  } else if(design == 'modern'){
    $('.modern-prompt').fadeIn('slow');
  } else {
    $('.avant-garde-prompt').fadeIn('slow');
  }
});

$('.burger').on('click',function(){
  burger = $(this).html().toLowerCase();
  if(burger =='bougie'){
    $('.bougie-prompt').fadeIn('slow');
  } else{
    $('.spicy-prompt').fadeIn('slow');
  }
})

$('.sister').on('click',function(){
  sister = $(this).html().toLowerCase();
  if(sister == 'kim'){
    $('.kim-section').fadeIn('slow');
  } else if(sister == 'khloe'){
    $('.khloe-section').fadeIn('slow');
  } else if(sister == 'kourtney'){
    $('.kourtney-section').fadeIn('slow');
  }
});

$('.kim-form').on('submit',function(e){
  e.preventDefault();
  var kimoji = $('#kim-input').val().toLowerCase();
  if(kimoji == '3d'){
    $('.3d-prompt').fadeIn('slow');
  } else if(kimoji == 'kimye'){
    $('.kimye-prompt').fadeIn('slow');
  } else{
    $('.holographic-prompt').fadeIn('slow');
  }
})

$('.khloe-form').on('submit',function(e){
  e.preventDefault();
  var guest = $('#khloe-input').val().toLowerCase();
  if(guest == 'chyna'){
    $('.chyna-prompt').fadeIn('slow');
  } else if(guest == 'kris'){
    $('.kris-prompt').fadeIn('slow');
  } else{
    $('.tyga-prompt').fadeIn('slow');
  }
});

$('.kourtney-form').on('submit',function(e){
  e.preventDefault();
  var food = $('#kourtney-input').val().toLowerCase();
  if(food == 'oreos' || food == "reese's"){
    $(".oreos-reeses-prompt").fadeIn('slow');
  } else{
    $('pop-tarts-prompt').fadeIn('slow');
  }
});

  $('.jersey-shore-form').on('submit',function(e){
    e.preventDefault();
    var guido = $('#jersey-shore-input').val().toLowerCase();
    if(guido == 'snooki'){
      $('.snooki-section').fadeIn('slow');
    } else if(guido == 'jwoww'){
      $('.jwoww-section').fadeIn('slow');
    } else{
      $('.mike-section').fadeIn('slow');
    }
  });

$('.snooki-form').on('submit',function(e){
  e.preventDefault();
  var choice = $('#snooki-input').val().toLowerCase();
  if(choice == "bail"){
    $('.bail-prompt').fadeIn('slow');
  } else if(choice == "lesson"){
    $('.lesson-prompt').fadeIn('slow');
  } else{
    $('.laugh-prompt').fadeIn('slow');
  }
})

$('.jwoww-form').on('submit',function(e){
  e.preventDefault();
  var choice = $('#jwoww-input').val().toLowerCase();
  if(choice == "spain"){
    $('.spain-prompt').fadeIn('slow');
  } else if(choice == "bahamas"){
    $('.bahamas-prompt').fadeIn('slow');
  } else{
    $('.mexico-prompt').fadeIn('slow');
  }
});

$('.mike-form').on('submit',function(e){
  e.preventDefault();
  var acronym = $('#mike-input').val().toLowerCase();
  if(acronym == "p"){
    $('.p-prompt').fadeIn('slow');
  } else{
    $('.c-w-prompt').fadeIn('slow');
  }
});
