URL_API = 'http://app-sellaci.eu-central-1.elasticbeanstalk.com/'
//URL_API = 'http://127.0.0.1:5000/'


function onExpandableTextareaInput({ target:elm }){
    // make sure the input event originated from a textarea and it's desired to be auto-expandable
    if( !elm.classList.contains('autoExpand') || !elm.nodeName == 'textarea' ) return
    
    var minRows = elm.getAttribute('data-min-rows')|0, rows;
    !elm._baseScrollHeight && getScrollHeight(elm)
  
    elm.rows = minRows
    rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16)
    elm.rows = minRows + rows
  }
  
  
  // global delegated event listener
  /*document.addEventListener('input', onExpandableTextareaInput)
  document.addEventListener('input', onExpendableSelectInput)

  function Jouer() {
    var Jouer = document.getElementById("Jouer");
    var Page2 = document.getElementById("Page2");
    
    Page2.style.display = Jouer.click ? "block" : "none";
  }*/

  var timer; 
  var timeLeft = 180;

  function Play() {
    var x = document.getElementById("PageJouer");
    var y = document.getElementById("Homepage");
    var z = document.getElementById("PageRegles");
    var w = document.getElementById("PageAPropos");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      w.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "none";
      w.style.display = "none";
    }
  }

  function Rules() {
    var x = document.getElementById("PageJouer");
    var y = document.getElementById("Homepage");
    var z = document.getElementById("PageRegles");
    var w = document.getElementById("PageAPropos");
    if (z.style.display === "none") {
      z.style.display = "block";
      y.style.display = "none";
      x.style.display = "none";
      w.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "none";
      w.style.display = "none";
    }
  }

  function AboutUs() {
    var x = document.getElementById("PageJouer");
    var y = document.getElementById("Homepage");
    var z = document.getElementById("PageRegles");
    var w = document.getElementById("PageAPropos");
    if (w.style.display === "none") {
      w.style.display = "block";
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
    } else {
      w.style.display = "none";
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "none";
    }
  }

  function Go() {
    var v = document.getElementById("Game");
    var u = document.getElementById('playAgainButton')
      if (v.style.display === "none") {
      v.style.display = "block";
      u.style.display = "none"
    }   
      else {
      v.style.display = "none";
      u.style.display = "block"
      }
  }

  function BackToMenu() {
    var x = document.getElementById("PageJouer");
    var y = document.getElementById("Homepage");
    var z = document.getElementById("PageRegles");
    var w = document.getElementById("PageAPropos");
    if (y.style.display === "none") {
      w.style.display = "none";
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "none"
    } else {
      w.style.display = "none";
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
    }
  }

  function TryPlayerButton() {
    console.log(selected_clubs)
    const player_tried = document.getElementById('player').value
    console.log(player_tried)
    url_parameters = 'players_with_clubs?clubs=' + selected_clubs.join() + '&player=' + player_tried
    console.log(url_parameters)
    var request_player = new XMLHttpRequest()
    request_player.open('GET', URL_API + url_parameters, true)
    request_player.onload = function () {
      var is_success = JSON.parse(this.response).success
      const result = document.getElementById('result')    
      result.textContent = ''  
      const h1 = document.createElement('h1')

      if (request_player.status >= 200 && request_player.status < 400) {
        if (is_success) {
          h1.textContent = 'Bien joué BG !'
          result.appendChild(h1)
        } else {
          h1.textContent = 'Hmmm non désolé mauvais..'
          result.appendChild(h1)
        }
      } else {
        console.log('error')
      }
    }
    request_player.send()
  }


  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array.slice(0,3);
  }


var request = new XMLHttpRequest()
request.open('GET', URL_API + 'random_player', true)
request.onload = function () {
  var data = JSON.parse(this.response)
  console.log(data)
  selected_clubs = shuffle(data.Teams)
  if (request.status >= 200 && request.status < 400) {
    selected_clubs.forEach(club => {
      const club_list = document.getElementById('clublist')      
      const h1 = document.createElement('h1')
      h1.textContent = club
      club_list.appendChild(h1)
    })
  } else {
    console.log('error')
  }
}
request.send()