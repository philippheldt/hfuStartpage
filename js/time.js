function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
      h + ":" + m
    var t = setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i
    };
    return i;
  }


    function showhide() {
        var d = new Date();
        var s = document.getElementsByClassName(+d.getDay());
        var si;
       for(var i =0; i<=s.length; i++){
           si= s[i]
           si.style.display = (si.style.display == 'block') ? 'none' : 'block';
       }
      }

    
    showhide();