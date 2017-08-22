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

var dramaObject = {
  question: `Nice to meet you, ${name}. Hmmm... on a scale of 1-5 (1 being the least amount of drama and 5 being the most amount of drama), how much drama are you in the mood for today?`,
  formClass:"drama-form",
  divClass: "drama-section",
  listItems: [1,2,3,4,5],
  dropdownClass: "number"
};

var celebApprenticeObject = {
  question: "Ooh, not in the mood for much drama today, are we? No worries, I hope you're in the mood for some challenges though. Let's get started. Choose a team - Blue or Red?",
  formClass:"celeb-apprentice-form",
  divClass: "celeb-apprentice-section",
  listItems: ["Blue","Red"],
  dropdownClass: "color"
}

var redObject = {
  question: "So your project manager Ashton has proposed that you guys create either a minimalist logo, modern retro logo, or a bold avant-garde logo. Which one should you guys go with?",
  formClass: "red-form",
  divClass: "red-section",
  listItems: ["Minimalist","Modern","Avant-Garde"],
  dropdownClass: "design",
  image: 'images/mtv.png',
  imageClass: 'mtv',
  promptStatement: "Great choice! Welcome to Celebrity Apprentice. The following stars are members of your team: Khloe Kardashian, Tom Brady, and Ashton Kutcher. Your task today is to design a new logo for the MTV VMA's.",
  labelClass : "prompt"
}

var blueObject = {
  question: "So your project manager Jay Z has proposed that you guys create either the world's spiciest burger or a bougie burger made with truffles and gold flakes. Which one type of burger should you guys go with?",
  formClass: "blue-form",
  divClass: "blue-section",
  listItems: ["Bougie","Spicy"],
  dropdownClass: "burger",
  image: 'https://media0.giphy.com/media/O38MGj6hMuy6k/200.webp#2-grid1',
  imageClass: 'shake-shack',
  promptStatement: "Great choice! Welcome to Celebrity Apprentice. The following stars are members of your team: Lady Gaga, LeBron James, Jay Z. Your task today is to create a new burger to be featured on the Shake Shack menu.",
  labelClass : "prompt"
}

var minimalistObject = {
  text: "Ooh you are really not in the mood for drama today, huh? Minimalist designs are trendy but the MTV executives believe that in order to successfully market a music awards show to millenials, bolder is better. Nice try, but the Red Team must take an L :("
}

var modernObject = {
  text: "Ooh you are really not in the mood for drama today, huh? Minimalist designs are trendy but the MTV executives believe that in order to successfully market a music awards show to millenials, bolder is better. Nice try, but the Red Team must take an L :("
}

var avantGardeObject = {
  text: "Great choice! When it come to marketing the MTV VMAs, bolder is BETTER. It is a win for the Red Team!"
}

var bougieObject = {
  text: "The Bougie Burger was a success! Such a success that Shake Shack has decided to make the Bougie Burger a permanent feature on their menu. Blue Team wins!"
}

var spicyObject = {
  text: "Oh no :( You created the burger with good intentions, but unfortunately, the burger led to way too many health liabilities and went viral on Buzzfeed for this reason. Looks like the Blue Team took an L this time. :/"
}

function createForm(object){
  var $formTag = $('<form>').addClass(object.formClass)
  .append($('<img>').attr('src', object.image).addClass(object.imageClass))
  .append($('<label>').addClass(object.labelClass).text(object.promptStatement))
  .append($('<div>').addClass(object.divClass)
  .append($('<label>').addClass('question').text(object.question)));

  var $dropdown = $('<div>').addClass("dropdown")
  .append($('<button>').addClass('btn btn-primary dropdown-toggle').attr('type','button').attr('data-toggle','dropdown').attr('id','team-dropdown').text('Options').append($('<span>').addClass('caret')));
  var $ul = $('<ul>').addClass('dropdown-menu');
  object.listItems.forEach(function(item){
    var $li = $('<li>');
    var $a = $('<a>').attr('href','#').html(item).addClass(object.dropdownClass);
    $li.append($a);
    $ul.append($li);
    $dropdown.append($ul);
  });
  $formTag.append($dropdown);
  $('body').append($formTag);
};

function createPrompt(promptObject){
  $labelTag = $('<label>').text(promptObject.text).addClass('result');
  $('body').append($labelTag);
}

$('#start-button').on('click', function(){
  $('.name-section').fadeIn('slow');
});

$('.name-form').on('submit',function(e){
  e.preventDefault();
  name = $('#name-input').val();
  console.log(name);
  createForm(dramaObject);
});

$('body').on('click',".number",function(){
  dramaLevel = $(this).html();
  console.log(dramaLevel);
  if(dramaLevel<3){
    createForm(celebApprenticeObject);
  } else if(dramaLevel==3){
    $('.kardashian-section').fadeIn('slow');
  } else{
    $('.jersey-shore-section').fadeIn('slow');
    $('.js-logo').fadeIn('slow');
  }
});

$('body').on('click',".color", function(){
    team = $(this).html().toLowerCase();
    if(team=='red'){
      createForm(redObject);
    } else{
      createForm(blueObject);
    }
});

$('body').on('click','.design',function(){
  design = $(this).html().toLowerCase();
  if(design =='minimalist'){
    createPrompt(minimalistObject);
  } else if(design == 'modern'){
    createPrompt(modernObject);
  } else {
    createPrompt(avantGardeObject);
  }
});

$('body').on('click',".burger",function(){
  burger = $(this).html().toLowerCase();
  if(burger =='bougie'){
    createPrompt('bougieObject');
  } else{
    createPrompt('spicyObject');
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
