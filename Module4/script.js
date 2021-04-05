( function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


  for (name in names) {

    var new_name = names[name];

    if (new_name.toLowerCase().charAt(0) == 'j') {
      byeSpeaker.speak(new_name);
    }
    else {
      helloSpeaker.speak(new_name);
    }

  }
})();
