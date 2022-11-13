  // global delegated event listener
  /*document.addEventListener('input', onExpandableTextareaInput)
  document.addEventListener('input', onExpendableSelectInput)

  function Jouer() {
    var Jouer = document.getElementById("Jouer");
    var Page2 = document.getElementById("Page2");
    
    Page2.style.display = Jouer.click ? "block" : "none";
  }*/

  var PLAYER_RESULT = ''

  function Init() {
    document.getElementById("PageJouer").style.display = "block";
    document.getElementById("Homepage").style.display = "none";
    document.getElementById("PageRegles").style.display = "none";
    document.getElementById("PageAPropos").style.display = "none";
    document.getElementById("submitbutton").style.display = 'block';
    document.getElementById("textarea-player").style.display = "block";
    document.getElementById("textarea-player").value = "";
    document.getElementById("result").innerHTML = '';
    document.getElementById('replay').innerHTML = '' ;
      }

  function Rules() {
    document.getElementById("PageRegles").style.display = "block";
    document.getElementById("Homepage").style.display = "none";
    document.getElementById("PageJouer").style.display = "none";
    document.getElementById("PageAPropos").style.display = "none";
  }

  function AboutUs() {
    document.getElementById("PageAPropos").style.display = "block";
    document.getElementById("PageJouer").style.display = "none";
    document.getElementById("Homepage").style.display = "none";
    document.getElementById("PageRegles").style.display = "none";
  }

  function Logout(){
    console.log('here')
    window.location.href = URL_API + "logout";
  }

  function Go() {
    Init()
    get_random_player()
    document.getElementById("life").textContent = 3
    document.getElementById("life").style.color = 'rgba(0, 253, 34, 0.979)'
    result.setAttribute("id", "result");
  }

  function BackToMenu() {
    if (document.getElementById("Homepage").style.display === "none") {
      document.getElementById("PageAPropos").style.display = "none";
      document.getElementById("PageJouer").style.display = "none";
      document.getElementById("Homepage").style.display = "block";
      document.getElementById("PageRegles").style.display = "none"
    } else {
      document.getElementById("PageAPropos").style.display = "none";
      document.getElementById("PageJouer").style.display = "block";
      document.getElementById("Homepage").style.display = "none";
      document.getElementById("PageRegles").style.display = "none";
    }
  }


  function TryPlayerButton() {
    console.log(selected_clubs)
    const player_tried = document.getElementById('textarea-player').value
    console.log(player_tried)
    url_parameters = 'players_with_clubs?clubs=' + selected_clubs.join() + '&player=' + player_tried
    console.log(url_parameters)
    var request_player = new XMLHttpRequest()
    request_player.open('GET', URL_API + url_parameters, true)
    request_player.onload = function () {
      var is_success = JSON.parse(this.response).success
      var result = document.getElementById('result')    
      result.textContent = ''  
      const h1 = document.createElement('h1')
      const h2 = document.createElement('h2')
      if (request_player.status >= 200 && request_player.status < 400) {
        if (is_success) {
          console.log('success')
          h1.textContent = "Bien joué BG !"
          result.appendChild(h1)
          document.getElementById("submitbutton").style.display = "none"
          document.getElementById("replay").innerHTML = '<button value=Jouer encore ?" onclick="Go()">Un nouveau joueur ?</button>'
          var score_value = document.getElementById('score')
          console.log(score_value.textContent)
          var new_score_value = parseInt(score_value.textContent) + 1
          score_value.textContent = new_score_value
        } else {
          var life_value = document.getElementById("life")
          console.log(life_value.textContent)
          var new_life_value = parseInt(life_value.textContent) - 1
          life_value.textContent = new_life_value
          if (new_life_value == 2){
            life_value.style.color = 'orange'
          }
          else if (new_life_value == 1){
            life_value.style.color = 'red'
          }
          if (life_value.textContent > 0) {
            h1.textContent = 'Essaie encore'
            result.appendChild(h1)
            result.style.display = 'block'
          }
          else {
            document.getElementById("submitbutton").style.display = "None"
            document.getElementById("textarea-player").style.display = "None"
            h2.textContent = 'Game Over, it was '
            h1.textContent = PLAYER_RESULT
            h1.style.color = 'red'
            result.appendChild(h2)
            result.appendChild(h1)
            var playagain = document.getElementById("replay")
            playagain.innerHTML = '<button value="Retente ta chance ?" onclick="Go()">Retente ta chance</button>'
            playagain.style.display = 'block'
          }
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
    console.log(array.slice(0,3))
    return array.slice(0,3);
  }


function get_random_player() {
  try {
    document.getElementById('clublist').innerHTML = '' 
  } catch (error) {
    console.error(error);
  }
  var request = new XMLHttpRequest()
  request.open('GET', URL_API + 'random_player', true)
  request.onload = function () {
    var data = JSON.parse(this.response)
    console.log(data)
    PLAYER_RESULT = data.Name
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
}
