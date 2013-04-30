  
  (function(){

    if(!window.classes) window.classes = {};


  
  function c_player(game) {
        var sprite = new Sprite(32, 32);
        sprite.image = game.assets["lib/images/chara1.png"];
        sprite.x = 0;
        sprite.y = 0;
    game.rootScene.addChild(sprite);


  var current_state = "g17pc94gad003";
    
  
    function enterFrame() {
    
      
     
      
    if(current_state == "g17pc94gad003") {
            
            
              current_state = "g17pc94gad001";
    }
          
     
      
    }
  
    function right() {
    
      
    if(current_state == "g17pc94gad001") {
            sprite.x++;
            
              current_state = "g17pc94gad001";
    }
          
     
     
      
      
    }
  
    function left() {
    
      
    if(current_state == "g17pc94gad001") {
            sprite.x--;
            
              current_state = "g17pc94gad001";
    }
          
     
     
      
      
    }
  
    function hitevent() {
    
      
     
      
      
    }
  

  sprite.addEventListener("enterframe", function(){
    enterFrame();
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
                        }
                      }
}
        window.classes["player"] = {
                            klass : c_player,
          instances : []};

    
  }());
