$(document).ready(function() {

  Calculator = {
    PC_FIELDS: _.size($('.pc-field')),
    XP_FIELDS: _.size($('.xp-field')),

    pc_thresholds: {
      easy: [0, 25, 50, 75, 125, 250, 300, 350, 450, 550, 600, 800, 1000, 1100, 1250, 1400, 1600, 2000, 2100, 2400, 2800],
      medium: [0, 50, 100, 150, 250, 500, 600, 750, 900, 1100, 1200, 1600, 2000, 2200, 2500, 2800, 3200, 3900, 4200, 4900, 5700],
      hard: [0, 75, 150, 225, 375, 750, 900, 1100, 1400, 1600, 1900, 2400, 3000, 3400, 3800, 4300, 4800, 5900, 6300, 7300, 8500],
      deadly: [0, 100, 200, 400, 500, 1100, 1400, 1700, 2100, 2400, 2800, 3600, 4500, 5100, 5700, 6400, 7200, 8800, 9500, 10900, 12700]
    },

    get_party_thresholds: function() {
      pc_levels = [0];
      for (i=1;i<=Calculator.PC_FIELDS;i++) {
        pc_levels[i] = +($('#cl-'+i).val());
        if (pc_levels[i] == NaN) {
          pc_levels[i] = 0;
        }
      }

      if (_.every(pc_levels, function(num){ return num==0; })) {
        return {};
      }

      thresholds = {
        easy: 0,
        medium: 0,
        hard: 0,
        deadly: 0
      };

      for (i=1;i<=Calculator.PC_FIELDS;i++) {
        thresholds.easy += Calculator.pc_thresholds.easy[i] * pc_levels[i];
        thresholds.medium += Calculator.pc_thresholds.medium[i] * pc_levels[i];
        thresholds.hard += Calculator.pc_thresholds.hard[i] * pc_levels[i];
        thresholds.deadly += Calculator.pc_thresholds.deadly[i] * pc_levels[i];
      }


      return thresholds;
    },

    get_monster_xp: function() {
      xp = 0;
      for (i=1;i<=Calculator.XP_FIELDS;i++) {
        c = +($('#count-'+i).val());
        x = +($('#xp-'+i).val());
        if (c == NaN || x == NaN || c == 0 || x == 0)
          continue;
        xp += c*x;
      }

      return xp;
    },

    get_monster_count: function() {
      count = 0;
      for (i=1;i<=Calculator.XP_FIELDS;i++) {
        c = +($('#count-'+i).val());
        x = +($('#xp-'+i).val());
        if (c == NaN || x == NaN || c == 0 || x == 0)
          continue;
        count += c;
      }

      return count;
    },

    get_player_count: function() {
      count = 0;
      for (i=1;i<=Calculator.PC_FIELDS;i++) {
        c = +($('#cl-'+i).val());
        if (c == NaN || c == 0)
          continue;
        count += 1;
      }
      
      return count;
    },

    get_multiplier: function(monster_count, player_count) {
      switch(monster_count) {
        case 1:
          if (player_count < 3) return 1.5;
          if (player_count > 5) return 0.5;
          return 1.0;
        case 2:
          if (player_count < 3) return 2.0;
          if (player_count > 5) return 1.0;
          return 1.5;
        case 3:
        case 4:
        case 5:
        case 6:
          if (player_count < 3) return 2.5;
          if (player_count > 5) return 1.5;
          return 2.0;
        case 7:
        case 8:
        case 9:
        case 10:
          if (player_count < 3) return 3.0;
          if (player_count > 5) return 2.0;
          return 2.5;
        case 11:
        case 12:
        case 13:
        case 14:
          if (player_count < 3) return 4.0;
          if (player_count > 5) return 2.5;
          return 3.0;
        default:
          if (player_count < 3) return 5.0;
          if (player_count > 5) return 3.0;
          return 4.0;
      }
    },

    calculate: function() {

      party_thresholds = Calculator.get_party_thresholds();
      if (_.isEmpty(party_thresholds)) {
        $('#output').removeClass().addClass('alert alert-danger').html('<b>Enter at least one PC!</b>');
        return false;
      }
      monster_xp = Calculator.get_monster_xp();
      if (monster_xp == 0) {
        $('#output').removeClass().addClass('alert alert-danger').html('<b>Enter at least one NPC!</b>');
        return false;
      }

      player_count = Calculator.get_player_count();
      monster_count = Calculator.get_monster_count();
      multiplier = Calculator.get_multiplier(monster_count, player_count);

      modified_xp = monster_xp * multiplier;

      if (modified_xp < party_thresholds.easy) {
        difficulty = 'trivial';
      }
      else if (modified_xp < party_thresholds.medium) {
        difficulty = 'easy';
      }
      else if (modified_xp < party_thresholds.hard) {
        difficulty = 'medium';
      }
      else if (modified_xp < party_thresholds.deadly) {
        difficulty = 'hard';
      }
      else {
        difficulty = 'deadly';
      }

      switch(difficulty) {
        case 'trivial':
          message = 'This encounter is <b>trivial</b>.<br />(' + monster_xp + ' XP, or ' + Math.floor(monster_xp/player_count) + ' per player)';
          $('#output').removeClass().addClass('alert alert-success text-center').html(message);
          break;
        case 'easy':
          message = 'This encounter is <b>easy</b>.<br />(' + monster_xp + ' XP, or ' + Math.floor(monster_xp/player_count) + ' per player)';
          $('#output').removeClass().addClass('alert alert-success text-center').html(message);
          break;
        case 'medium':
          message = 'This encounter is <b>medium</b>.<br />(' + monster_xp + ' XP, or ' + Math.floor(monster_xp/player_count) + ' per player)';
          $('#output').removeClass().addClass('alert alert-info text-center').html(message);
          break;
        case 'hard':
          message = 'This encounter is <b>hard</b>.<br />(' + monster_xp + ' XP, or ' + Math.floor(monster_xp/player_count) + ' per player)';
          $('#output').removeClass().addClass('alert alert-warning text-center').html(message);
          break;
        case 'deadly':
          message = 'This encounter is <b>deadly</b>.<br />(' + monster_xp + ' XP, or ' + Math.floor(monster_xp/player_count) + ' per player)';
          $('#output').removeClass().addClass('alert alert-danger text-center').html(message);
          break;
      }

      return false;
    }

  };

  $('#calculate').click(Calculator.calculate);
});
