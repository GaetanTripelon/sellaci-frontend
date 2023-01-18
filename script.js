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
    document.getElementById("submitbutton").style.display = 'block';
    document.getElementById("textarea-player").style.display = "block";
    document.getElementById("textarea-player").value = "";
    document.getElementById("result").innerHTML = '';
    document.getElementById('replay').innerHTML = '' ;
    document.getElementById("first_letter_text").style.display = "none"
      }

  function Logout(){
    window.location = "index.html";
  }

  function Go() {
    Init()
    get_random_player()
    document.getElementById("who").style.display = "block"
    document.getElementById("enterthename").style.display = "block"
    document.getElementById("abandon").style.display = "block"
    document.getElementById("retourmenu").style.display = "none"
    document.getElementById("life").textContent = 3
    document.getElementById("life").style.color = 'rgba(0, 253, 34, 0.979)'
    result.setAttribute("id", "result");
    document.getElementById("first_letter_button").style.display= "block"
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
          //return_success('clement.tailleur@gmail.com', 'TEST', 2)
          h1.textContent = "Bien joué BG !"
          h1.style.color = '#fff'
          h1.style.fontWeight = 'bold'
          result.appendChild(h1)
          document.getElementById("submitbutton").style.display = "none"
          document.getElementById("replay").innerHTML = '<button value=Jouer encore ?" id="myBtn4" class="animate" onclick="Go()">Un nouveau joueur ?</button>'
          document.getElementById("abandon").style.display = "none"
          document.getElementById("retourmenu").style.display = "block"
          document.getElementById("first_letter_button").style.display = "none"
          document.getElementById("nobtn").style.display = "none"
          document.getElementById("yesbtn").style.display = "none"
          document.getElementById("first_letter_text").style.display = "none"
          var score_value = document.getElementById('score')
          console.log(score_value.textContent)
          var new_score_value = parseInt(score_value.textContent) + 1
          score_value.textContent = new_score_value

          //var request_success = new XMLHttpRequest()
          //request_success.open('GET', URL_API + url_parameters, true)
          //request_success.send()
        } else {
          var life_value = document.getElementById("life")
          console.log(life_value.textContent)
          var new_life_value = parseInt(life_value.textContent) - 1
          life_value.textContent = new_life_value
          if (new_life_value == 2){
            life_value.style.color = 'orange'
          }
          else if (new_life_value == 1){
            life_value.style.color = '#454545'
          }
          if (life_value.textContent > 0) {
            h1.textContent = 'Essaie encore'
            result.appendChild(h1)
            result.style.display = 'block'
          }
          else {
            document.getElementById("submitbutton").style.display = "None"
            document.getElementById("textarea-player").style.display = "None"
            document.getElementById("who").style.display = "None"
            document.getElementById("enterthename").style.display = "None"
            document.getElementById("first_letter_button").style.display = "none"
            document.getElementById("nobtn").style.display = "none"
            document.getElementById("yesbtn").style.display = "none"
            h2.textContent = 'Game Over, it was '
            h1.textContent = PLAYER_RESULT
            h2.style.color = 'white'
            h2.style.marginTop = '5%'
            h1.style.color = '#454545'
            h1.style.fontWeight = 'bold'
            result.appendChild(h2)
            result.appendChild(h1)
            var playagain = document.getElementById("replay")
            var score_value = document.getElementById('score')
            console.log(score_value.textContent)
            var new_score_value = parseInt(score_value.textContent) - (score_value.textContent)
            score_value.textContent = new_score_value
            playagain.innerHTML = '<button value="Retente ta chance ?" id="myBtn3" class="animate" onclick="Go()">Retente ta chance</button>'
            playagain.style.display = 'block'
            document.getElementById("abandon").style.display = "None"
            document.getElementById("retourmenu").style.display = "block"
          }
        }
      } else {
        console.log('error')
      }
    }
    request_player.send()
  }

  function ShowPlayer_TryAgain() {
      var result = document.getElementById('result')    
      result.textContent = ''  
      const h1 = document.createElement('h1')
      const h2 = document.createElement('h2')
            document.getElementById("submitbutton").style.display = "none"
            document.getElementById("who").style.display = "none"
            document.getElementById("enterthename").style.display = "none"
            document.getElementById("first_letter_button").style.display = "none"
            document.getElementById("nobtn").style.display = "none"
            document.getElementById("yesbtn").style.display = "none"
            h2.textContent = 'Game Over, it was '
            h1.textContent = PLAYER_RESULT
            h2.style.color = 'white'
            h2.style.marginTop = '5%'
            h2.style.fontStyle = 'italic'
            h1.style.color = '#454545'
            h1.style.fontWeight = 'bold'
            result.appendChild(h2)
            result.appendChild(h1)
            document.getElementById("replay").innerHTML = '<button value=Nouvelle Partie ?" class="animate" id="myBtn3" onclick="Go()">Retente ta chance</button>'
            document.getElementById("abandon").style.display = "None"
            document.getElementById("retourmenu").style.display = "block"
            var score_value = document.getElementById('score')
            console.log(score_value.textContent)
            var new_score_value = parseInt(score_value.textContent) - (score_value.textContent)
            score_value.textContent = new_score_value
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
    PLAYER_RESULT = data.ShortName
    console.log(data.Level)
    document.getElementById('clublevel').innerHTML = 'Niveau de difficulté : ' + data.Level + '/6'
    selected_clubs = data.Teams
    if (request.status >= 200 && request.status < 400) {
      document.getElementById("first_letter_text").innerHTML =  '<span style="color:#fff; font-weight:normal">Première lettre</span><br>' + data.Indication_First_Letter
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

// Example POST method implementation:
async function postData(url = '', data = {}) {
  const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
      'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data) 
  });
  return response.json();
}


function return_success(email, player, level){
  data = {
      "email": email,
      "player_name": player,
      "level": level
  }

  console.log('return success')
  console.log(data)

  postData(URL_API + "return_success_player", data);
}
function helpMe(){
  document.getElementById("first_letter_button").style.display = "block"
  alert ("Tu vas perdre un point, tu es sûr ?")
  document.getElementById("yesbtn").style.display = "block"
  document.getElementById("nobtn").style.display = "block"
  document.getElementById("first_letter_button").style.display = "none"
}
function showIndicator(){
  document.getElementById("first_letter_text").style.display = "block"
  document.getElementById("nobtn").style.display = "none"
  document.getElementById("yesbtn").style.display = "none"
  var score_value = document.getElementById('score')
  console.log(score_value.textContent)
  var new_score_value = parseInt(score_value.textContent) - 1
  score_value.textContent = new_score_value
}
function dontShowIndicator(){
  document.getElementById("first_letter_button").style.display = "block"
  document.getElementById("nobtn").style.display = "none"
  document.getElementById("yesbtn").style.display = "none"
}