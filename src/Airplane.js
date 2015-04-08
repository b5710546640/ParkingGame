var Airplane = Vehicle.extend({

    ctor: function() {
        this._super();
        this.initWithFile( 'res/airplane.png' );
    }

});
