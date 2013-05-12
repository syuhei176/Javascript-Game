enchant();
window.onload = function(){
    var game = new Game(320, 320);

    game.fps = 15;
    game.preload("lib/images/chara1.png");
    game.preload("lib/images/chara2.png");
    game.onload = function(){
    	
        var m_bear = new classes["Player"].klass(game);
        classes["Player"].instances.push(m_bear);
    };

    game.start();
    
};
