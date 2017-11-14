$(document).ready(function() {

  Inventory = {
    INV_FIELDS: _.size($('.inv-field')),

    save_inventory: function() {
      console.log('saved!');
      return false;
    }
  };

  $('#save').click(Inventory.save_inventory);
});
