enchant();
window.onload = function(){
    var game = new Game(320, 320);

    game.fps = 15;
    game.preload("lib/images/chara1.png");
    game.onload = function(){
    	
    	for(var key in classes) {
        	var m_bear = new classes[key].klass(game);
        	classes[key].instances.push(m_bear);
    	}
    	/*
        bear.frame = 5;
        game.rootScene.addChild(bear);

        bear.addEventListener("enterframe", function(){
            this.x += 1;

            this.frame = this.age % 2 + 6;
        });

        bear.addEventListener("touchstart", function(){
            game.rootScene.removeChild(bear);
        });
        */
    };

    /**
     * Game#start
     * ゲームを開始する。この関数を実行するまで、ゲームは待機状態となる。
     * 代わりに Game#debug を使うことで、デバッグモードで起動することができる。
     * Game#pause(); で一時停止し、 Game#resume(); で再開することができる。
     */
    game.start();
};
