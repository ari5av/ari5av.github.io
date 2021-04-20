$(document).ready(function() {

  Inventory = {
    INV_FIELDS: _.size($('.inv-field')),
    items: [],
    money: {'cp':0,'sp':0,'gp':0,'pp':0,'ep':0,'other':''},

    save_inventory: function() {
      for (i=1;i<=Inventory.INV_FIELDS;i++) {
        Inventory.items[i] = {
          'count': $('#count-'+i).val(),
          'desc': $('#desc-'+i).val(),
          'weight': $('#weight-'+i).val()
        };
      }

      Inventory.money = {
        'cp': $('#cp').val(),
        'sp': $('#sp').val(),
        'gp': $('#gp').val(),
        'pp': $('#pp').val(),
        'ep': $('#ep').val(),
        'other': $('#other-wealth').val()
      };

      try {
        window.localStorage.setItem('items', JSON.stringify(Inventory.items));
        window.localStorage.setItem('money', JSON.stringify(Inventory.money));
        return true;
      } catch (err) {
        console.log("couldn't save: " + err);
        return false;
      }
    },

    load_inventory: function() {
      try {
        Inventory.items = JSON.parse(window.localStorage.getItem('items'));
        Inventory.money = JSON.parse(window.localStorage.getItem('money'));
        console.log(Inventory.items);
        console.log(Inventory.money);
        if (Inventory.items === null) {
          Inventory.items = [];
        }
        if (Inventory.money === null) {
          Inventory.money = {'cp':0,'sp':0,'gp':0,'pp':0,'ep':0,'other':''};
        }

        for (i=1;i<=Inventory.INV_FIELDS;i++) {
          $('#count-'+i).val(Inventory.items[i].count);
          $('#desc-'+i).val(Inventory.items[i].desc);
          $('#weight-'+i).val(Inventory.items[i].weight);
        }
        $('#cp').val(Inventory.money.cp);
        $('#sp').val(Inventory.money.sp);
        $('#gp').val(Inventory.money.gp);
        $('#pp').val(Inventory.money.pp);
        $('#ep').val(Inventory.money.ep);
        $('#other-wealth').text(Inventory.money.other);

        
      } catch (err) {
        Inventory.items = [];
        Inventory.money = {'cp':0,'sp':0,'gp':0,'pp':0,'ep':0,'other':''};
        console.log('couldn\'t load: ' + err);
      }
    },

    clear_inventory: function() {
      for (i=1;i<=Inventory.INV_FIELDS;i++) {
        $('#count-'+i).val('');
        $('#desc-'+i).val('');
        $('#weight-'+i).val('');
      }
      $('#cp').val('');
      $('#sp').val('');
      $('#gp').val('');
      $('#pp').val('');
      $('#ep').val('');
      $('#other-wealth').text('');
    }
        
  };

  Inventory.load_inventory();

  $('#save-top').click(Inventory.save_inventory);
  $('#save-bottom').click(Inventory.save_inventory);
  $('#clear-top').click(Inventory.clear_inventory);
  $('#clear-bottom').click(Inventory.clear_inventory);
});
