$(document).ready(function() {
  var tropes = [
    "alchemists",
    "aliens",
    "amazons",
    "ancient/lost technology",
    "angels",
    "archaeologists",
    "artificial intelligence",
    "assassins",
    "Atlantis",
    "Aztecs",
    "bootleggers",
    "bounty hunters",
    "brothels",
    "butlers",
    "casinos",
    "castles",
    "catacombs",
    "catburglars",
    "centaurs",
    "clones",
    "clowns",
    "con artists",
    "cowboys",
    "crazy scientists",
    "cyborgs",
    "demons",
    "detectives",
    "dinosaurs",
    "dragons",
    "drugs",
    "eldritch abominations",
    "evil trees",
    "faeries",
    "factories/plants",
    "flamingos",
    "floating cities",
    "Four Horsemen",
    "gangsters",
    "genies",
    "ghost hunters",
    "giant apes",
    "giants",
    "golemancers",
    "gun priests",
    "gunslingers",
    "hackers",
    "heaven and hell",
    "hive minds",
    "hospitals",
    "hot air balloons",
    "Igors",
    "Illuminati",
    "Jedi and Sith",
    "krakens",
    "kung fu masters",
    "liches",
    "lizardfolk/saurians",
    "mad gods",
    "magitech",
    "malls",
    "masquerade balls",
    "mechanics",
    "mechs",
    "meteorite metal",
    "militaries",
    "minotaurs",
    "money laundering",
    "motorcycles",
    "mummies",
    "mutants",
    "mysterious orbs",
    "necromancers",
    "nephilim",
    "ninjas",
    "nuclear energy/weapons",
    "old gods",
    "orphans",
    "pandas",
    "pirates",
    "planeswalkers",
    "poachers",
    "policemen",
    "prophecies",
    "psions and psychics",
    "pyramids and pharaohs",
    "rat-men",
    "robots",
    "royalty",
    "rune magic",
    "samurais",
    "sasquatch",
    "secret societies",
    "shamans and witch doctors",
    "skyscrapers and sky bridges",
    "space battles",
    "Spartans",
    "sphinxes",
    "spies",
    "starships",
    "street racers",
    "submarines",
    "super soldiers",
    "supercorporations",
    "swashbucklers",
    "tanks",
    "tattoos",
    "titans",
    "trolls",
    "vampires",
    "vikings",
    "viruses and epidemics",
    "viziers",
    "werewolves",
    "wild gods",
    "yetis",
    "Zeppelins",
    "zombies",
    "zoos/menageries"
  ];
  console.log("tropes length: " + tropes.length);

  $('#generate').click(function() {
    $('#generated').empty();
    for (var i=0;i<3;i++) {
      $('#generated').append(tropes[Math.floor(Math.random()*tropes.length)]).append("<br />");
    }
  });

});