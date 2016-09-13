window.onload = function onLoad() {
  var line = new ProgressBar.Line('#progress', {
    color: '#E8BF28'
  });

  function progress() {
    var now = new Date();
    var start = new Date("25 April 1986, 22:23:00");
    console.log(start);
    var end = new Date("25 April 4986, 22:23:00");
    console.log(end);
    var done = (now-start) / (end-start);
    console.log(done);
    document.getElementById("percent").innerHTML = done*100 + "% SAFE";
    return done;
  }

  line.animate(progress());  // Number from 0.0 to 1.0

  setInterval(update, 1000);

  function update() {
    line.set(progress());
  }

};
