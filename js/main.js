
        var teste = document.querySelector('#nuvens');
    
    
            //Classe nuvem
            var nuvem = function(id){
                this.posX = 0;
                this.posY = 0;
                //this.draw = "<span class='nuvens' id='"+this.id+"'></span>"
                this.elemento = document.querySelector(id);
                this.posX = this.elemento.style.left;
                    
                 /*metodo reponsável pela animação da nuvem*/
                this.mover = function(x,y){
                    
                    this.posX+=1;
                    this.elemento.style.left = this.posX;
                    
                        
                        if(this.posX > document.body.clientWidth ){
                               this.posX = x;
                                
                        }
                }
            
                
            }   
            
            
            var nuvem1 = new nuvem("#nuvem1");
            var nuvem2 = new nuvem("#nuvem2");
            var nuvem3 = new nuvem("#nuvem3");
            var nuvem4 = new nuvem("#nuvem4");
            function update(){
               nuvem1.mover(-150, 20);
               nuvem2.mover(-400, 200);
               nuvem3.mover(-600, 300);
               nuvem4.mover(-100, 400);
            }

            setInterval(update,16);
                
        
            
            
            
