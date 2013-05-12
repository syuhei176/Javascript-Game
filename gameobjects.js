  
  (function(){

    if(!window.classes) window.classes = {};


  
  function c_Player(game) {
        var sprite = new Sprite(32, 32);
        sprite.image = game.assets["lib/images/chara1.png"];
        sprite.x = 0;
        sprite.y = 0;
    game.rootScene.addChild(sprite);
    function create(name) {
    	if(classes[name]) {
        	var m_bear = new classes[name].klass(game);
        	classes[name].instances.push(m_bear);
          return m_bear;
    	}else{
    		console.error("Error in 「create」");
    	}
    }
    function moveright(d) {
    	if(!d) d = 1;
    	sprite.x += d;
    }
    function moveleft(d) {
    	if(!d) d = 1;
    	sprite.x -= d;
    }
    function moveup(d) {
    	if(!d) d = 1;
    	sprite.y -= d;
    }
    function movedown(d) {
    	if(!d) d = 1;
    	sprite.y += d;
    }
    function setPosition(x, y) {
    	sprite.x = x;
    	sprite.y = y;
    }


  var current_state = "l17qb3apal005";
    
  
    function enterFrame() {
    
      
    if(current_state == "l17qb3apal005") {
            setPosition(100, 200);
            
              current_state = "l17qb3apal007";
    }
          
     
     
      
     
      
      
    }
  
    function right() {
    
      
     
      
    if(current_state == "l17qb3apal007") {
            moveright(1);
            
              current_state = "l17qb3apal007";
    }
          
     
     
      
      
    }
  
    function left() {
    
      
     
      
    if(current_state == "l17qb3apal007") {
            moveleft(1);
            
              current_state = "l17qb3apal007";
    }
          
     
     
      
      
    }
  
    function up() {
    
      
     
      
    if(current_state == "l17qb3apal007") {
            
            var tama = create("Tama");
tama.setPosition(sprite.x, sprite.y);
              current_state = "z17qb4kail001";
    }
          
     
     
      
      
    }
  
    function hitevent() {
    
      
     
      
     
      
      
    }
  

  sprite.addEventListener("enterframe", function(){
    enterFrame();
       if(game.input.up) {
         up();
       }
       if(game.input.left) {
         left();
       }
       if(game.input.right) {
         right();
       }
       
  });
                      return {
                        getSprite : function() {
                          return sprite;
                        },
                         setPosition : setPosition
                      }
}
        window.classes["Player"] = {
                            klass : c_Player,
          instances : []};

    

  
  function c_Tama(game) {
        var sprite = new Sprite(32, 32);
        sprite.image = game.assets["lib/images/chara2.png"];
        sprite.x = 0;
        sprite.y = 0;
    game.rootScene.addChild(sprite);
    function create(name) {
    	if(classes[name]) {
        	var m_bear = new classes[name].klass(game);
        	classes[name].instances.push(m_bear);
          return m_bear;
    	}else{
    		console.error("Error in 「create」");
    	}
    }
    function moveright(d) {
    	if(!d) d = 1;
    	sprite.x += d;
    }
    function moveleft(d) {
    	if(!d) d = 1;
    	sprite.x -= d;
    }
    function moveup(d) {
    	if(!d) d = 1;
    	sprite.y -= d;
    }
    function movedown(d) {
    	if(!d) d = 1;
    	sprite.y += d;
    }
    function setPosition(x, y) {
    	sprite.x = x;
    	sprite.y = y;
    }


  var current_state = "l17qb3apal00b";
    
  
    function enterFrame() {
    
      
    if(current_state == "l17qb3apal00b") {
            sprite.x = 100;
sprite.y = 160;
            sprite.x = 0;
sprite.y = 0;

              current_state = "l17qb3apal00d";
    }
          
     
     
      
    if(current_state == "l17qb3apal00d") {
            
            sprite.y--;
              current_state = "z17qb4kail005";
    }
          
     
     
      
    if(current_state == "z17qb4kail005") {
            
            sprite.y--;
              current_state = "z17qb4kail005";
    }
          
     
      
    }
  
    function right() {
    
      
     
      
     
      
      
    }
  
    function left() {
    
      
     
      
     
      
      
    }
  
    function up() {
    
      
     
      
     
      
      
    }
  
    function hitevent() {
    
      
     
      
     
      
      
    }
  

  sprite.addEventListener("enterframe", function(){
    enterFrame();
       if(game.input.up) {
         up();
       }
       if(game.input.left) {
         left();
       }
       if(game.input.right) {
         right();
       }
       
  });
                      return {
                        getSprite : function() {
                          return sprite;
                        },
                         setPosition : setPosition
                      }
}
        window.classes["Tama"] = {
                            klass : c_Tama,
          instances : []};

    
  }());
