function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getUTCDate();
    var mt = today.getUTCMonth();
    var y = today.getUTCFullYear();
    const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember"];
    var mtN = monthNames[mt];
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
      h + ":" + m;
    document.querySelector('.day').innerHTML = d+". "+mtN+" "+y;
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