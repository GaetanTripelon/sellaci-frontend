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
