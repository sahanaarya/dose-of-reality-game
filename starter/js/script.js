// put code here!
console.log('JS Loaded');

var name;
var team;
var dramaLevel;
var design;
var sister;
var kimoji;
var guest;
var food;
var choice;
var guido;
var destination;
var letter;


$('.name-section').hide();
$('.drama-section').hide();
$('.scenario-section').hide();
$('.celeb-apprentice-section').hide();
$('.kardashian-section').hide();
$('.jersey-shore-section').hide();
$('.js-logo').hide();
$('.red-prompt').hide();
$('.red-section').hide();
$('.mtv').hide()
$('.blue-prompt').hide();
$('.blue-section').hide();
$('.shake-shack').hide();
$('.minimalist-prompt').hide();
$('.modern-prompt').hide();
$('.avant-garde-prompt').hide();
$('.bougie-prompt').hide();
$('.spicy-prompt').hide();
$('.kim-section').hide();
$('.kim-face').hide();
$('.khloe-section').hide();
$('.khloe-gif').hide();
$('.kourtney-section').hide();
$('.kourt-kit-kat').hide();
$('.3d-prompt').hide();
$('.kimye-prompt').hide();
$('.holographic-prompt').hide();
$('.chyna-prompt').hide();
$('.kris-prompt').hide();
$('.tyga-prompt').hide();
$(".oreos-reeses-prompt").hide();
$('.pop-tarts-prompt').hide();
$('.snooki-section').hide();
$('.snooki-gif').hide();
$('.jwoww-section').hide();
$('.jwoww-gif').hide();
$('.mike-section').hide();
$('.situation-gif').hide();
$('.bail-prompt').hide();
$('.lesson-prompt').hide();
$('.laugh-prompt').hide();
$('.spain-prompt').hide();
$('.bahamas-prompt').hide();
$('.mexico-prompt').hide();
$('.p-prompt').hide();
$('.c-w-prompt').hide();

var nameObject = {
  question: "What is your name?",
  placeholder: "Enter Name",
  id: "name-input"
}

function createForm(object){
  var $formTag = $('<form>').addClass('form')
  .append($('<div>'))
  .append($('<label>'))
  .append($('<input>').text(object.question))
  $('body').append($formTag);
}

createForm(nameObject);

console.log(nameObject.question);



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
    $('.js-logo').fadeIn('slow');
  }
});

$('.color').on('click', function(){
    team = $(this).html().toLowerCase();
    if(team=='red'){
      $('.red-prompt').fadeIn('slow');
      $('.red-section').fadeIn('slow');
      $('.mtv').fadeIn('slow')

    } else{
      $('.blue-prompt').fadeIn('slow');
      $('.blue-section').fadeIn('slow');
      $('.shake-shack').fadeIn('slow');
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
    $('.kim-face').fadeIn('slow');
  } else if(sister == 'khloe'){
    $('.khloe-section').fadeIn('slow');
    $('.khloe-gif').fadeIn('slow');
  } else if(sister == 'kourtney'){
    $('.kourtney-section').fadeIn('slow');
    $('.kourt-kit-kat').fadeIn('slow');
  }
});

$('.kimoji').on('click',function(){
  kimoji = $(this).html().toLowerCase();
  if(kimoji == '3d'){
    $('.3d-prompt').fadeIn('slow');
  } else if(kimoji == 'kimye'){
    $('.kimye-prompt').fadeIn('slow');
  } else{
    $('.holographic-prompt').fadeIn('slow');
  }
  });

  $('.guest').on('click', function(){
    guest = $(this).html().toLowerCase();
    if(guest == 'chyna'){
      $('.chyna-prompt').fadeIn('slow');
    } else if(guest == 'kris'){
      $('.kris-prompt').fadeIn('slow');
    } else{
      $('.tyga-prompt').fadeIn('slow');
    }
  })

  $('.food').on('click',function(){
    food = $(this).html().toLowerCase();
    console.log(food);
    if(food == 'oreos' || food == "reese's"){
      $(".oreos-reeses-prompt").fadeIn('slow');
    } else{
      $('.pop-tarts-prompt').fadeIn('slow');
    }
  })

  $('.guido').on('click',function(){
    guido = $(this).html().toLowerCase();
    if(guido == 'snooki'){
      $('.snooki-section').fadeIn('slow');
      $('.snooki-gif').fadeIn('slow');
    } else if(guido == 'jwoww'){
      $('.jwoww-section').fadeIn('slow');
      $('.jwoww-gif').fadeIn('slow');
    } else{
      $('.mike-section').fadeIn('slow');
      $('.situation-gif').fadeIn('slow');
    }
  })

  $('.choice').on('click',function(){
    choice = $(this).html().toLowerCase();
    if(choice == "bail"){
      $('.bail-prompt').fadeIn('slow');
    } else if(choice == "lesson"){
      $('.lesson-prompt').fadeIn('slow');
    } else{
      $('.laugh-prompt').fadeIn('slow');
    }
  })

  $('.destination').on('click',function(){
    destination = $(this).html().toLowerCase();
    if(destination == "spain"){
      $('.spain-prompt').fadeIn('slow');
    } else if(destination == "bahamas"){
      $('.bahamas-prompt').fadeIn('slow');
    } else{
      $('.mexico-prompt').fadeIn('slow');
    }
  })

  $('.letter').on('click',function(){
    letter = $(this).html().toLowerCase();
    if(letter == "p"){
      $('.p-prompt').fadeIn('slow');
    } else{
      $('.c-w-prompt').fadeIn('slow');
    }
  });

  $('#adventure-lab').on('click', function(){
    $('.content').hide();
  })
