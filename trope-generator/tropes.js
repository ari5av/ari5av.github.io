$(document).ready(function() {
  var settings = [
    "Atlantis",
    "bazaars",
    "brothels",
    "casinos",
    "castles",
    "catacombs",
    "caverns",
    "city streets",
    "elemental planes",
    "factories/plants",
    "Feywild",
    "floating cities",
    "heaven",
    "hell",
    "haunted houses",
    "hospitals",
    "labor camps",
    "libraries",
    "malls",
    "masquerade balls",
    "prisons",
    "space stations",
    "tent cities",
    "trailer parks",
    "Underdark",
  ];
  var people = [
    "alchemists",
    "amazons",
    "angels",
    "archaeologists",
    "assassins",
    "astrologers/fortune tellers",
    "astronomers",
    "Aztecs",
    "beggars",
    "bootleggers",
    "bounty hunters",
    "butlers",
    "catburglars",
    "clones",
    "clowns",
    "con artists",
    "cowboys",
    "crazy scientists",
    "demons",
    "detectives",
    "explorers",
    "flamencos",
    "gangsters",
    "genetics/geneticists",
    "genies",
    "ghost hunters",
    "goblins",
    "golemancers",
    "gun priests",
    "gunslingers",
    "hackers",
    "Igors",
    "Illuminati",
    "Jedi and Sith",
    "journalists",
    "kung fu masters",
    "lawyers",
    "lizardfolk/saurians",
    "mad gods",
    "mad scientists",
    "mechanics",
    "mountain men",
    "musicians",
    "necromancers",
    "nephilim",
    "ninjas",
    "orphans",
    "pirates",
    "planeswalkers",
    "poachers",
    "policemen",
    "prostitutes",
    "pyramids and pharaohs",
    "priests/priestesses",
    "psions and psychics",
    "psychologists",
    "rat-men",
    "royalty",
    "samurais",
    "secret agents",
    "shamans and witch doctors",
    "slaves",
    "smugglers",
    "snake men",
    "Spartans",
    "spies",
    "street racers",
    "super soldiers",
    "superheroes",
    "swashbucklers",
    "tourists",
    "twins/triplets",
    "vampires",
    "vikings",
    "viziers",
    "warlords",
    "werewolves",
  ];
  var genres = [
    "cyberpunk",
    "dieselpunk",
    "doomsday",
    "historical fiction",
    "magepunk",
    "magitech",
    "modern",
    "sci-fi",
    "steampunk",
    "swords and sorcery",
  ];
  var transportation = [
    "gyrocopters",
    "hot air balloons",
    "mechs",
    "motorcycles",
    "starships",
    "submarines",
    "trains",
    "Zeppelins",
  ];
  var tropes = [
    "aliens",
    "ancient/lost technology",
    "artificial intelligence",
    "centaurs",
    "cyborgs",
    "dinosaurs",
    "disembodied voices",
    "dragons",
    "drugs",
    "eldritch abominations",
    "evil trees",
    "faeries",
    "flamingos",
    "Four Horsemen",
    "giant apes",
    "giants",
    "hive minds",
    "kitty cats and puppy dogs",
    "krakens",
    "leather",
    "liches",
    "lions, tigers, and bears",
    "meteorite metal",
    "militaries",
    "minotaurs",
    "money laundering",
    "mummies",
    "mutants",
    "mysterious orbs",
    "nuclear energy/weapons",
    "old gods",
    "opera",
    "pandas",
    "prophecies",
    "robots",
    "rune magic",
    "sasquatch",
    "secret societies",
    "skyscrapers and sky bridges",
    "space battles",
    "sphinxes",
    "supercorporations",
    "tanks",
    "tattoos",
    "titans",
    "trolls",
    "viruses and epidemics",
    "wild gods",
    "yetis",
    "zombies",
    "zoos/menageries"
  ];
  // console.log("tropes length: " + tropes.length);

  $('#generate').click(function() {
    var these_ones = [];
    $('#generated').empty();
    var i=0;
    $('#generated').append("<h3>Settings</h3>");
    do {
      var this_one = settings[Math.floor(Math.random()*settings.length)];
      if (!these_ones.includes(this_one)) {
        $('#generated').append(this_one).append("<br />");
        these_ones[i++] = this_one;
      }
    } while (i<2);
    
    these_ones = [];
    i=0;
    $('#generated').append("<h3>People</h3>");
    do {
      var this_one = people[Math.floor(Math.random()*people.length)];
      if (!these_ones.includes(this_one)) {
        $('#generated').append(this_one).append("<br />");
        these_ones[i++] = this_one;
      }
    } while (i<2);
    
    $('#generated').append("<h3>Genre</h3>");
    var this_one = genres[Math.floor(Math.random()*genres.length)];
    $('#generated').append(this_one).append("<br />");
    
    these_ones = [];
    i=0;
    $('#generated').append("<h3>Transportation</h3>");
    do {
      var this_one = transportation[Math.floor(Math.random()*transportation.length)];
      if (!these_ones.includes(this_one)) {
        $('#generated').append(this_one).append("<br />");
        these_ones[i++] = this_one;
      }
    } while (i<2);
    
    these_ones = [];
    i=0;
    $('#generated').append("<h3>Tropes</h3>");
    do {
      var this_one = tropes[Math.floor(Math.random()*tropes.length)];
      if (!these_ones.includes(this_one)) {
        $('#generated').append(this_one).append("<br />");
        these_ones[i++] = this_one;
      }
    } while (i<3);
  });
});
