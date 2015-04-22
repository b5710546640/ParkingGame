var CarStore = Storage.extend({

    ctor: function() {
        this._super();
        this.initWithFile( 'res/CarStore.png' );
        console.log('Car store');
    }

});
