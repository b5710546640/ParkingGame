var ShipStore = Storage.extend({

    ctor: function() {
        this._super();
        this.initWithFile( 'res/ShipStore.png' );
    }

});
