var myNodelist = document.getElementsByTagName("LI");
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }

  var close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
 
  
  function newElement() { 
    var li = document.createElement("li");   
    var inputValue = document.getElementById("Input").value; 
    var e = document.createTextNode(inputValue);
 
    li.appendChild(e); 
        if (inputValue === '') {
        alert("chưa có thông tin");
        } else {
        document.getElementById("UL").appendChild(li);
        }

    document.getElementById("Input").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

        for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
        }
  }