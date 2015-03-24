var BoardGame = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ));
        this.setPosition( new cc.Point( 0, 0 ) );
        console.log( 'GameLayer created' );
        console.log( 'Initialized' );
        
        this.ship = new Ship();
        this.ship.setPosition( new cc.Point( 0, 0 ) );
        
        this.addKeyboardHandlers();
        this.addChild( this.ship );
        this.ship.scheduleUpdate();

        this.car = new Car();
        this.car.setPosition( new cc.Point( 200, 200 ) );
        
        this.addKeyboardHandlers();
        this.addChild( this.car );
        this.car.scheduleUpdate();

        this.airplane = new Airplane();
        this.airplane.setPosition( new cc.Point( 200, 200 ) );
        
        this.addKeyboardHandlers();
        this.addChild( this.airplane );
        this.airplane.scheduleUpdate();

        this.ufo = new Ufo();
        this.ufo.setPosition( new cc.Point( 200, 200 ) );
        
        this.addKeyboardHandlers();
        this.addChild( this.ufo );
        this.ufo.scheduleUpdate();

        return true;
    }

});
 
var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new BoardGame();
        layer.init();
        this.addChild( layer );
    }
});