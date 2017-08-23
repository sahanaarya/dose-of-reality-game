// put code here!
console.log('JS Loaded');

var name = "Placeholder";

var $bodyHeight = $('body').height();

var originalHtml = document.body.innerHTML;

var score = 0;

$('.name-section').hide();

var dramaObject = {
  formClass:"drama-form",
  divClass: "drama-section",
  listItems: [1,2,3,4,5],
  dropdownClass: "number"
};

var $buttonDiv = $('<div>').addClass('button');

var $adventureButton = $('<button>').attr('id','adventure').attr('type','button').text("Click to go on another adventure!");

var $newUserButton = $('<button>').attr('id','new-user').attr('type','button').text("New User Click Here");

$('.content').on('click',"#adventure",function(){
  $('.content').empty();
  $('.name-form').hide();
  createForm(dramaObject);
});

$('.content').on('click','#new-user',function(){
  $('.content').empty();
  $('.name-form').fadeIn('slow');
  $('#name-input').val('');
  score = 0;
})


function nameDramaObject(){
  dramaObject.question = `Nice to meet you, ${name}. Hmmm... on a scale of 1-5 (1 being the least amount of drama and 5 being the most amount of drama), how much drama are you in the mood for today?`;
}

function updateBodyHeight(){
  $bodyHeight = $('body').height();
  $('html, body').stop().animate({scrollTop: $bodyHeight}, 1000);
}

var celebApprenticeObject = {
  question: "Ooh, not in the mood for much drama today, are we? No worries, I hope you're in the mood for some challenges though. Let's get started. Choose a team - Blue or Red?",
  formClass:"celeb-apprentice-form",
  divClass: "celeb-apprentice-section",
  listItems: ["Blue","Red"],
  dropdownClass: "color"
}

var kardashianObject = {
  question: "So you want a happy medium, huh? Well, congratulations - you are now have a role in Keeping Up With the Kardashians! In this week's episode you will be featured as the BFF of one of the sisters. Which sister will it be?",
  formClass:"kardashian-form",
  divClass: "kardashian-section",
  listItems: ["Kourtney","Kim", "Khloe"],
  dropdownClass: "sister"
}

var jerseyshoreObject = {
  question: "We're definitely turning up the drama today for you! Congratulations, you are now officially the newest cast member of the Jersey Shore. In the upcoming episode, you will be introduced as the BFF of one of the current castmates. Which castmate will you pick? Your choices are Snooki, JWoww, and The Situation. Which one will you pick?",
  divClass: "jersey-shore-section",
  listItems: ["Snooki","JWoww", "Situation"],
  dropdownClass: "guido"
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
  image: 'images/burger-gif.webp',
  imageClass: 'shake-shack',
  promptStatement: "Great choice! Welcome to Celebrity Apprentice. The following stars are members of your team: Lady Gaga, LeBron James, Jay Z. Your task today is to create a new burger to be featured on the Shake Shack menu.",
  labelClass : "prompt"
}

var minimalistObject = {
  text: "Ooh you are really not in the mood for drama today, huh? Minimalist designs are trendy but the MTV executives believe that in order to successfully market a music awards show to millenials, bolder is better. Nice try, though!",
  points: 3
}

var modernObject = {
  text: "Ooh you are really not in the mood for drama today, huh? Minimalist designs are trendy but the MTV executives believe that in order to successfully market a music awards show to millenials, bolder is better. Nice try, though!",
  points: 2
}

var avantGardeObject = {
  text: "Great choice! When it come to marketing the MTV VMAs, bolder is BETTER. It is a win for the Red Team!",
  points: 5
}

var bougieObject = {
  text: "The Bougie Burger was a success! Such a success that Shake Shack has decided to make the Bougie Burger a permanent feature on their menu. Blue Team wins!",
  points: 5
}

var spicyObject = {
  text: "Oh no :( You created the burger with good intentions, but unfortunately, the burger led to way too many health liabilities and went viral on Buzzfeed for this reason. Looks like the Blue Team took an L this time. :/",
  points: 1
}

var kimObject = {
  question: "Kim needs help coming up with an idea for a new collection of Kimojis. So far, she has three ideas in mind and is relying on you to select one. The options are 3D kimojis, kimye kimojis, and holographic kimojis. Which one will you pick?",
  formClass: "kim-form",
  divClass: "kim-section",
  listItems: ["3D","Kimye","Holographic"],
  dropdownClass: "kimoji",
  image: 'images/kim.webp',
  imageClass: 'kim-face'
}

var threedObject = {
  text: "Congrats! The 3D Kimojis were a success. In fact the Kimoji app developers are now working on rolling out a collection of 4D Kimojis due to the 3D collection's enormous success. Plus, you get a cut of the profits. Cha-ching!",
  points: 5
}

var kimyeObject = {
  text: "Ehh, it looks like the public is over the Kimye hype, and the new collection did not perform as well as you expected. Unfortunately, it looks like this footage will not be featured on the show - sorry! :(",
  points: 2
}

var holographicObject = {
  text: "Awesome choice. News of Holographic Kimojis went viral. In fact, you played such an instrumental role in the success of the collection, that they have decided to feature you in the next collection of Kimojis. Congrats on your big break!",
  points: 5
}

var khloeObject = {
  question: "Arguably, the most fun and down-to-earth sister, Khloe is excited to have you featured on the show! For the first order of business, Khloe needs your help choosing which celebrity to interview on her talk show 'Kocktails with Khloe'. She has narrowed her list down to a few famous Kardashian exes: Blac Chyna, Kris Humphries, and Tyga. Who should she choose to interview?",
  formClass: "khloe-form",
  divClass: "khloe-section",
  listItems: ["Chyna","Kris","Tyga"],
  dropdownClass: "guest",
  image: 'images/khloe.gif',
  imageClass: 'khloe-gif'
}

var chynaObject = {
  text:"Ooh yes... looks like you found a way to turn up the drama! Khloe's interview with Chyna was arguably the most successful episode of Kocktails with Khloe. The show has never been more popular and has been renewed for another season. Congrats!!",
  points: 5
}

var krisObject = {
  text: "It looks like the public is over Kim's '72-day marriage'. Fewer people chose to tune into the show and the show suffered poor ratings. It's up to you to find a way for Khloe to make a comeback!!",
  points: 1
}

var tygaObject = {
  text: "Tyga.... really? Turns out that Kylie got word of the decision to interview Tyga and is refusing to speak to Khloe :/ It's up to you to patch things up!",
  points: 0
}

var kourtneyObject = {
  question: "Have you seen that viral video of Kourtney teaching the world how to eat a Kit-Kat? Well, it looks like she is making a sequel but needs to choose another type of food. So far, she is considering either Oreos, Pop Tarts, or Reese's Peanut Butter cups. Which one should she feature in her next video?",
  formClass: "kourtney-form",
  divClass: "kourtney-section",
  listItems: ["Oreos","Pop Tarts","Reese's"],
  dropdownClass: "food",
  image: 'images/kourtney.gif',
  imageClass: 'kourt-kit-kat'
}

var oreosReesesObject = {
  text: "Uh oh, it looks like your choice of food was too controversial. Turns out that people do not want instruction on how to eat their favorite childhood sweets. For this reason, there has actually been an increase in the number of people unsubscribing from Kourtney's app. :(",
  points: 0
}

var poptartsObject = {
  text: "Not a bad choice! In fact, you had the foresight to take it one step further and get the video sponsored by the creators of Pop Tarts. Your brilliance will be rewarded by a share of profits from this soon-to-be viral video. Congrats!!",
  points: 5
}

var snookiObject = {
  question: "Bold move. On your first day of taping the show, Snooki went on a wild adventure and found herself in jail. Your options are to: bail her out, let her learn her lesson, or point and laugh. What will you do?",
  formClass: "snooki-form",
  divClass: "snooki-section",
  listItems: ["Bail","Lesson","Laugh"],
  dropdownClass: "choice",
  image: 'images/snooki.webp',
  imageClass: 'snooki-gif'
}

var bailObject = {
  text: "You are a kind soul. Unfortunately, Snooki didn't learn her lesson and ended up in jail the very next day. I guess now it's time to show some tough love.",
  points: 3
}

var lessonObject = {
  text: "Solid choice. However, somehow Snooki managed to escape from jail and is angry at you for not bailing her out when you had the chance. I'd watch my back if I were you....",
  points: 2
}

var laughObject = {
  text: "LOL. You win, game over.",
  points: 6
}

var jwowwObject = {
  question: "So, I'm gonna let you in on a little secret... it turns out that JWoww is actually the brains behind the whole show. At the moment, one of her responsibilities is to pick an international destination to shoot the next season. So far, the options are Spain, Bahamas, and Mexico. Which one should she choose?",
  formClass: "jwoww-form",
  divClass: "jwoww-section",
  listItems: ["Spain","Bahamas","Mexico"],
  dropdownClass: "destination",
  image: 'images/jwoww.gif',
  imageClass: 'jwoww-gif'
}

var spainObject = {
  text: "Good choice, but the rest of the cast is not too psyched about it... In fact, on the first day of shooting, they decide to ditch and catch a plane to Italy instead. It's up to you to hunt them down and bring them back to the shooting location!",
  points: 3
}

var bahamasObject = {
  text: "Good choice, but the rest of the cast is not too psyched about it... In fact, on the first day of shooting, they decide to ditch and catch a plane to Mexico instead. It's up to you to hunt them down and bring them back to the shooting location!",
  points: 3
}

var mexicoObject = {
  text: "Perfect choice! The new season was a hit and they want to bring you on board as a full-time location consultant. Get psyched because it pays $200K/year. Cha ching!",
  points: 5
}

var mikeObject = {
  question: "So 'The Situation' has a brilliant idea to add one more letter to the famous Jersey Shore Acronym 'GTL', and he needs your help. What letter should be added on? The options are P for Party, C for Chill, and W for Work. Which one should he pick?",
  formClass: "mike-form",
  divClass: "mike-section",
  listItems: ["P","C","W"],
  dropdownClass: "letter",
  image: 'images/situation.webp',
  imageClass: 'situation-gif'
}

var pObject = {
  text: "You nailed it! 'GTL' is now 'GTLP' (Gym, Tan, Laundry, Party) and a trending hashtag on Twitter. Nice job!",
  points: 5
}

var cwObject = {
  text: "Eh, unfortunately the new extended acronym didn't successfully catch on, so the Jersey Shore crew is reverting back to the OG catchphrase 'GTL'. Better luck next time!",
  points: 3
}

function createForm(object){
  var $formTag = $('<form>').addClass(object.formClass)
  .append($('<div>').addClass('image-section'))
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
  $('.content').append($formTag);
  updateBodyHeight();
};

function createPrompt(promptObject){
  $labelTag = $('<label>').text(promptObject.text).addClass('result');
  $pointsMessage = $('<label>').text(`You win ${promptObject.points} point(s).`).addClass('points');
  $('.content').append($labelTag);
  $($labelTag).append($pointsMessage);
  updateBodyHeight();
  $('.content').append($buttonDiv);
  $buttonDiv.append($adventureButton);
  $buttonDiv.append($newUserButton);
  score = score + promptObject.points;
  console.log(score);
}

$('.container').on('click',"#start-button", function(){
  console.log('hey');
  $('.name-section').fadeIn('slow');
});

$('.name-form').on('submit',function(e){
  e.preventDefault();
  name = $('#name-input').val();
  console.log(name);
  nameDramaObject();
  createForm(dramaObject);
});

$('body').on('click',".number",function(){
  dramaLevel = $(this).html();
  if(dramaLevel<3){
    createForm(celebApprenticeObject);
  } else if(dramaLevel==3){
    createForm(kardashianObject);
  } else{
    createForm(jerseyshoreObject);
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
    createPrompt(bougieObject);
  } else{
    createPrompt(spicyObject);
  }
})

$('body').on('click',".sister",function(){
  sister = $(this).html().toLowerCase();
  if(sister == 'kim'){
    createForm(kimObject);
  } else if(sister == 'khloe'){
    createForm(khloeObject);
  } else if(sister == 'kourtney'){
    createForm(kourtneyObject);
  }
});

$('body').on('click',".kimoji",function(){
  kimoji = $(this).html().toLowerCase();
  if(kimoji == '3d'){
    createPrompt(threedObject);
  } else if(kimoji == 'kimye'){
    createPrompt(kimyeObject);
  } else{
    createPrompt(holographicObject);
  }
  });

  $('body').on('click','.guest', function(){
    guest = $(this).html().toLowerCase();
    if(guest == 'chyna'){
      createPrompt(chynaObject);
    } else if(guest == 'kris'){
      createPrompt(krisObject);
    } else{
      createPrompt(tygaObject);
    }
  })

  $('body').on('click',".food",function(){
    food = $(this).html().toLowerCase();
    console.log(food);
    if(food == 'oreos' || food == "reese's"){
      createPrompt(oreosReesesObject);
    } else{
      createPrompt(poptartsObject);
    }
  })

  $('body').on('click','.guido',function(){
    guido = $(this).html().toLowerCase();
    if(guido == 'snooki'){
      createForm(snookiObject);
    } else if(guido == 'jwoww'){
      createForm(jwowwObject);
    } else{
      createForm(mikeObject);
    }
  })

  $('body').on('click','.choice',function(){
    choice = $(this).html().toLowerCase();
    if(choice == "bail"){
      createPrompt(bailObject);
    } else if(choice == "lesson"){
      createPrompt(lessonObject);
    } else{
      createPrompt(laughObject);
    }
  })

  $('body').on('click','.destination',function(){
    destination = $(this).html().toLowerCase();
    if(destination == "spain"){
      createPrompt(spainObject);
    } else if(destination == "bahamas"){
      createPrompt(bahamasObject);
    } else{
      createPrompt(mexicoObject);
    }
  })

  $('body').on('click','.letter',function(){
    letter = $(this).html().toLowerCase();
    if(letter == "p"){
      createPrompt(pObject);
    } else{
      createPrompt(cwObject);
    }
  });
