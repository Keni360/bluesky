window.onload = function(){
    
        var teste = document.querySelector('#nuvens');
    
    
            //Classe nuvem
            var nuvem = function(id){
                this.posX = 0;
                this.posY = 0;
                //this.draw = "<span class='nuvens' id='"+this.id+"'></span>"
                this.elemento = document.querySelector(id);
                this.posX = this.elemento.style.left;
                    
                 //metodo reponsável pela animação da nuvem
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
                nuvem2.posX = 650;
            var nuvem3 = new nuvem("#nuvem3");
            var nuvem4 = new nuvem("#nuvem4");
            function update(){
               nuvem1.mover(-150, 20);
               nuvem2.mover(-400, 200);
               nuvem3.mover(-600, 300);
               nuvem4.mover(-100, 400);
            }

            setInterval(update,16);
                
   /*================================================
    *   Slideshow 
    * ===============================================
    */
   
         var Slideshow = function(elemento){
            this.elemento = elemento;
            this.slideshow = document.querySelector(elemento);
            this.slideshow.childElementCount;
            this.i = 1;
            this.slideAtual = document.querySelector(elemento+" :nth-child("+this.i+")");
            this.totalSlides = this.slideshow.childElementCount;
            this.ultimoSlide = document.querySelector(elemento+":last-child");
            
             this.playSlide = function(){
                 
                this.slideAtual = document.querySelector(elemento+":nth-child("+this.i+")");
                 
                 
                 //Se o slide atual for o primeiro
                 if(this.slideAtual.previousElementSibling == null){
                    //escondento ultimo slide  
                    this.ultimoSlide.style.left = "100%";
                    //mostre o primeiro slide
                    this.slideAtual.style.left = "0%";
                    
                    this.i++;
                 }
                 
                 //Se ainda houver mais slides
                 if(this.slideAtual.previousElementSibling != null)
                 {
                    //esconda o slide anterior
                    this.slideAtual.previousElementSibling.style.left = "100%";
                    
                    //mostre o slide atual
                    this.slideAtual.style.left = "0%";
                    
                    this.i++;
                    
                 }
                 //Se não houver mais slides 
                 if(this.slideAtual.nextElementSibling == null)
                 {
                     //zere o contador
                     this.i =1; 
                     
                     
                 }
                 
                 
             }
             
             
            }
                

        //var slideOutdoor = new Slideshow("#slideshow");
        //document.querySelector(slideOutdoor.elemento+" :nth-child(1)").style.opacity = 1;
        var slide = new Slideshow("#slideshow section");
        
        setInterval(function(){
            slide.playSlide();        
        },8000)
        
        
        //alert(slide.slideAtual);
   
        
        
   /*================================================
    *   Mokup selector
    * ===============================================
    */
        var mokupNote = document.querySelector(".mokup-note img");
        var mokupCel = document.querySelector(".mokup-cel img");
        var containerLayout = document.querySelector("#container-layouts");
        var lastImg =  containerLayout.firstElementChild.firstElementChild.getAttribute("alt"); //retorna captura o titulo da primeira imagem do container - layout
        containerLayout.addEventListener("click",function(e){
                var layoutAtual = e.target.parentElement;
                var img = layoutAtual.firstElementChild.getAttribute("alt");
                lastImg = img;
                ultimoLayoutAtivo.srcMob = mokupCel.getAttribute("src");
                mokupNote.setAttribute("src","img/"+img+".png");
                mokupCel.setAttribute("src","img/"+img+"-mobile.png");
            //alert(layoutAtual.firstElementChild.getAttribute("src"));
                
                
        },false);
        
        containerLayout.addEventListener("mouseover",function(e){
                var layoutMouseHover = e.target.parentElement;
                var img = layoutMouseHover.firstElementChild.getAttribute("alt");
                mokupNote.setAttribute("src","img/"+img+".png");
                mokupCel.setAttribute("src","img/"+img+"-mobile.png");
            //alert(layoutAtual.firstElementChild.getAttribute("src"));
                
                
        },false);
        
    containerLayout.addEventListener("mouseout",function(e){
                
                
                mokupNote.setAttribute("src","img/"+lastImg+".png");
                mokupCel.setAttribute("src","img/"+lastImg+"-mobile.png");
            //alert(layoutAtual.firstElementChild.getAttribute("src"));
                
                
        },false);
        
        
        /*
                FOrmulario de contato
        */
        
        var btn = document.querySelector(".btn-submit");
        
        btn.addEventListener("click",function(e){
                e.preventDefault();
                alert("clicou");
        },false);
        
    }   