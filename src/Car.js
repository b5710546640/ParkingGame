var Car = Vehicle.extend({

    ctor: function() {
        this._super();
        this.initWithFile( 'res/car.png' );
    }

});
