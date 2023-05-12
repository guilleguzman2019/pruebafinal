var componentes = {

  "portadaWestern": {

    "nombre": "Portada",
    "label": ``,
    "components": `<div data-gjs-highlightable="false">
                    <img class="foto1" src="https://eventdate.es/wp-content/uploads/2022/09/lineas-1-izquierda-285x1024.png"  width="160" height="400" data-gjs-layerable="false">
                    <img class="foto2" src="https://eventdate.es/wp-content/uploads/2022/09/lineas-1-derecha.png"  width="160" height="400" data-gjs-layerable="false">
                    <div class="contenedor-texto" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                    <h1 class="texto-portada" data-gjs-highlightable="false">
                        Juan y Carla
                    </h1>
                    </div>
                  </div>`,

    "style":`.texto-portada{
                text-align:center;
                color:white;
                font-size:80px;
                font-family:'Noto Serif Display';
                font-weight: 700;
                font-style: italic;
            }
            .foto1{
                position:absolute;
                top:50%;
                left:0%;
            }
            .foto2{
                position:absolute;
                top:0%;
                right:0%;
            }
            .contenedor-texto{

              width: fit-content;
            }
            `,
  },

  "portadaBoho": {

    "nombre": "PortadaBoho",
    "label": `
            
          `,
    "components": ` <img class="foto_boho1" src="https://eleve11.ar/wp-content/uploads/2022/08/hojas.png"  width="160" height="400" data-gjs-layerable="false">
                    <img class="foto_boho2" src="https://eleve11.ar/wp-content/uploads/2022/08/hojas-2.png"  width="160" height="400" data-gjs-layerable="false">
                    <div data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false">
                    <h1 class="texto-portada-boho" data-gjs-highlightable="false">
                        Juan y Carla
                    </h1>
                    </div>
                  
                `,
    "style":`.texto-portada-boho{
                text-align:center;
                color:white;
                font-family: 'Meow Script';
                font-size: 120px;
                font-weight: 300;
                text-transform: capitalize;
            }
            .foto_boho1{
              
              position: absolute;
              width: 272px;
              top: 2px;
              left: 0px;
            }
            .foto_boho2{
              
              position: absolute;
              width: 239px;
              top: 456px;
              right: 2px;
            }
            `,
  },

  "portadaChic":{

    "nombre": "PortadaChic",
    "label": `
            
          `,
    "components": ` 
                    <div data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false">
                    <h1 class="texto-portada-chic" data-gjs-highlightable="false">
                        Juan y Carla
                    </h1>
                    </div>
                  
                `,
    "style":`.texto-portada-chic{

                color: #FFFFFF;
                font-family: 'Oooh Baby', cursive;
                font-size: 120px;
                font-weight: 300;
                text-transform: capitalize;
            }
            `,

  },

  "portadaRomantic":{

  },

  "historiaWestern": {

    "nombre": "HistoriaWestern",
    "label": `
            <img src="https://i.postimg.cc/SRXLpt1y/historia.png" width="100%" height="100%">
            <br>
            <br>
            <div class="gjs-block-label">
            Historia Western
            </div> 
                `,
    "components": `<section class="sectionHistoriaWestern" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                    <div class="container" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="row text-xs-center" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <div class="col-md-12 text-center" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                          <br>
                          <h2 class="tituloHistoriaWestern" data-gjs-highlightable="false">Nuestra Historia</h2>
                          <br>
                          <p class="textoHistoriaWestern" data-gjs-highlightable="false">Una propuesta, un Sí y una decisión que tomamos juntos. Nuestro amor ha crecido en nosotros, ha madurado y florecido, a veces sencillo, otras caótico pero siempre maravilloso.<br>
                  
                            Así comienza una nueva etapa en nuestras vidas. Somos aventureros, dedicados, fuertes de carácter; los desafíos que hemos enfrentado nos han ayudado a crecer y madurar; debemos agradecer a esos retos porque con ellos nos hemos dado cuenta que juntos podemos lograr lo que nos proponemos.<br>
                            
                            Tan sólo podemos decir que nuestra vida en estos momentos se encuentra completa y estamos listos para compartir el resto de nuestros días juntos.</p>
                      </div>
                    </div>
                  </section>`,
    "style":`
                .sectionHistoriaWestern{
  
                  background-color: #333333;
                
                  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
                  padding: 4% 4% 7% 4%;
                }
                
                @media only screen and (max-width: 768px) {
                
                  #sectionHistoriaWestern{
                  
                  
                    padding: 6% 3% 12% 3%;
                  }
                }
                
                
                .tituloHistoriaWestern{
                
                    color: #FFFFFF;
                    font-family: "Noto Serif Display", Sans-serif;
                    font-size: 40px;
                    font-weight: 400;
                    font-style: italic;
                    margin-bottom: 35px;
                }
                
                @media only screen and (max-width: 768px) {
                
                  .tituloHistoriaWestern{
                
                    font-size: 28px;
                  
                }
                }
                
                .textoHistoriaWestern{
                
                    text-align: center;
                    color: #FFFFFF;
                    font-family: "Montserrat", Sans-serif;
                    font-size: 15px;
                    font-weight: 300;
                    font-style: normal;
                    line-height: 28px;
                }`,
  },

  "historiaBoho" : {
    
    "nombre": "HistoriaBoho",
    "components": `<section class="sectionHistoriaBoho" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                  <div class="container" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                    <div class="row text-xs-center" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="col-md-12 text-center" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                        <br>
                        <h2 class="tituloHistoriaBoho" data-gjs-highlightable="false">Nuestra Historia</h2>
                        <br>
                        <p class="textoHistoriaBoho" data-gjs-highlightable="false">Una propuesta, un Sí y una decisión que tomamos juntos. Nuestro amor ha crecido en nosotros, ha madurado y florecido, a veces sencillo, otras caótico pero siempre maravilloso.<br>
                
                          Así comienza una nueva etapa en nuestras vidas. Somos aventureros, dedicados, fuertes de carácter; los desafíos que hemos enfrentado nos han ayudado a crecer y madurar; debemos agradecer a esos retos porque con ellos nos hemos dado cuenta que juntos podemos lograr lo que nos proponemos.<br>
                          
                          Tan sólo podemos decir que nuestra vida en estos momentos se encuentra completa y estamos listos para compartir el resto de nuestros días juntos.</p>
                    </div>
                  </div>
                </section>`,

    "style": `.sectionHistoriaBoho{

              background-color: white;
              
              transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
              padding: 4% 4% 7% 4%;
              }
    
              @media only screen and (max-width: 768px) {
              
              .sectionHistoriaBoho{
              
              
              padding: 6% 3% 12% 3%;
              }
              }
    
    
              .tituloHistoriaBoho{
              
              color: black;
              font-family: "Meow Script", Sans-serif;
              font-size: 55px;
              font-weight: 400;
              font-style: italic;
              margin-bottom: 35px;
              }
    
              @media only screen and (max-width: 768px) {
              
              .tituloHistoriaBoho{
              
              font-size: 40px;
              
              }
              }
    
              .textoHistoriaBoho{
              
                  text-align: center;
                  color: black;
                  font-family: "Playfair Display", Sans-serif;
                  font-size: 20px;
                  font-weight: 500 !important;
                  font-style: italic;
              }
    
              @media only screen and (max-width: 768px) {
              
                  .textoHistoriaBoho{
                  
                  font-size: 17px;
                  
                  }
                  }`,
    "label": `
            <img src="https://i.postimg.cc/QCjhkdKC/historiaboho.png" width="100%" height="100%">
            <br>
            <br>
            <div class="gjs-block-label">
            Historia Boho
            </div> 
                `
  },

  "historiaChic" : {

    "nombre": "HistoriaChic",
    "components": `<section class="sectionHistoriaChic" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                  <div class="container" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                    <div class="row text-xs-center" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="col-md-12 text-center" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                        <br>
                        <h2 class="tituloHistoriaChic" data-gjs-highlightable="false">Nuestra Historia</h2>
                        <br>
                        <p class="textoHistoriaChic" data-gjs-highlightable="false">Una propuesta, un Sí y una decisión que tomamos juntos. Nuestro amor ha crecido en nosotros, ha madurado y florecido, a veces sencillo, otras caótico pero siempre maravilloso.<br>
                
                          Así comienza una nueva etapa en nuestras vidas. Somos aventureros, dedicados, fuertes de carácter; los desafíos que hemos enfrentado nos han ayudado a crecer y madurar; debemos agradecer a esos retos porque con ellos nos hemos dado cuenta que juntos podemos lograr lo que nos proponemos.<br>
                          
                          Tan sólo podemos decir que nuestra vida en estos momentos se encuentra completa y estamos listos para compartir el resto de nuestros días juntos.</p>
                    </div>
                  </div>
                </section>`,

    "style": `.sectionHistoriaChic{

              background-color: white;
              
              transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
              padding: 4% 4% 7% 4%;
              }
    
              @media only screen and (max-width: 768px) {
              
              .sectionHistoriaChic{
              
              
              padding: 6% 3% 12% 3%;
              }
              }
    
    
              .tituloHistoriaChic{
              
                color: black;
                font-family: "Playfair Display SC", Sans-serif;
                font-size: 35px;
                font-weight: 400;
                margin-bottom: 35px;
              }
    
              @media only screen and (max-width: 768px) {
              
              .tituloHistoriaChic{
              
              font-size: 30px;
              
              }
              }
    
              .textoHistoriaChic{
              
                text-align: center;
                color: #212121;
                font-family: "Playfair Display", Sans-serif;
                font-size: 20px;
                font-weight: 500 !important;
                font-style: italic;
                padding: 5% 5% 5% 5%;
                background-color: #E7E7E7;
              }
    
              @media only screen and (max-width: 768px) {
              
                  .textoHistoriaChic{
                  
                  font-size: 17px;
                  
                  }
                  }`,
    "label": `
            <img src="https://i.postimg.cc/Dyp0NM58/historiachic.png" width="100%" height="100%">
            <br>
            <br>
            <div class="gjs-block-label">
            Historia Chic
            </div> 
                `

  },

  "historiaRomantic": {

    "nombre": "HistoriaRomantic",
    "components": `<section class="sectionHistoriaRomantic" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                  <div class="container" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                    <div class="row text-xs-center" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="col-md-12 text-center" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                        <br>
                        <h2 class="tituloHistoriaRomantic" data-gjs-highlightable="false">Nuestra Historia</h2>
                        <br>
                        <p class="textoHistoriaRomantic" data-gjs-highlightable="false">Una propuesta, un Sí y una decisión que tomamos juntos. Nuestro amor ha crecido en nosotros, ha madurado y florecido, a veces sencillo, otras caótico pero siempre maravilloso.<br>
                
                          Así comienza una nueva etapa en nuestras vidas. Somos aventureros, dedicados, fuertes de carácter; los desafíos que hemos enfrentado nos han ayudado a crecer y madurar; debemos agradecer a esos retos porque con ellos nos hemos dado cuenta que juntos podemos lograr lo que nos proponemos.<br>
                          
                          Tan sólo podemos decir que nuestra vida en estos momentos se encuentra completa y estamos listos para compartir el resto de nuestros días juntos.</p>
                    </div>
                  </div>
                </section>`,

    "style": `.sectionHistoriaRomantic{

              background-color: white;
              
              transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
              padding: 4% 4% 7% 4%;
              }
    
              @media only screen and (max-width: 768px) {
              
              .sectionHistoriaRomantic{
              
              
              padding: 6% 3% 12% 3%;
              }
              }
    
    
              .tituloHistoriaRomantic{
              
                color: #212121;
                font-family: "Playfair Display", Sans-serif;
                font-size: 35px;
                font-weight: 700;
                text-transform: uppercase;
              }
    
              @media only screen and (max-width: 768px) {
              
              .tituloHistoriaRomantic{
              
              font-size: 30px;
              
              }
              }
    
              .textoHistoriaRomantic{
              
                text-align: center;
                color: #212121;
                font-family: "Montserrat", Sans-serif;
                font-size: 18px;
                font-weight: 300;
                font-style: normal;
                line-height: 26px;
                letter-spacing: 0.4px;
              }
    
              @media only screen and (max-width: 768px) {
              
                  .textoHistoriaRomantic{
                  
                  font-size: 15px;
                  
                  }
                  }`,
    "label": `
            <img src="https://i.postimg.cc/cJvdn1Nm/historia-Romantic.png" width="100%" height="100%">
            <br>
            <br>
            <div class="gjs-block-label">
            Historia Romantic
            </div> 
                `

  },

  "hashtagWestern": {

    "nombre":"Hashtag",
    "label": `<img src="https://i.postimg.cc/C5Hp44ff/hashtag.png" width="100%" height="100%">
              <br>
              <br>
              <div class="gjs-block-label">
              Hashtag
              </div> `,

    "components": `<section class="sectionHashtagWestern" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                    <div class="container" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="row text-xs-center p-t-1 p-b-4" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <div class="col-md-12 text-center" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                          <br>
                          <h3 class="tituloHashtagWestern" data-gjs-highlightable="false">Durante nuestra boda utiliza el hashtag</h3>
                          <br>
                          <h5 class="hashtagWestern" data-gjs-highlightable="false">#BODAMARTIN&LAURA</h5>
                          <br>
                          <a class="botonHashtagWestern" data-gjs-highlightable="false">VER MURAL</a>
                      </div>
                    </div>
                  </section>`,
    "style": `.sectionHashtagWestern{

                background-color: white;
                padding: 4% 4% 4% 4%;
            
            }
  
            @media only screen and (max-width: 768px) {
            
              .sectionHashtagWestern{
            
                padding: 8% 0% 12% 0%;
              
            }
            }
            
            .tituloHashtagWestern{
            
            
                color: #000000;
                font-family: "Noto Serif Display", Sans-serif;
                font-size: 35px;
                font-weight: 700;
                font-style: italic;
            }
            
            
            @media only screen and (max-width: 768px) {
            
              .tituloHashtagWestern{
            
                font-size: 25px;
              
            }
            }
            
            .hashtagWestern{
            
                margin-bottom: 40px;
                color: #D7B7A2;
                font-family: "Montserrat", Sans-serif;
                font-size: 25px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 5px;
                text-align: center;
            }
            
            @media only screen and (max-width: 768px) {
            
              .hashtagWestern{
            
                margin-bottom: 20px;
                font-size: 23px;
              
            }
            }
            
            
            .botonHashtagWestern{
            
                font-family: "Montserrat", Sans-serif;
                font-size: 11px;
                font-weight: 600;
                color: black;
                background-color: #E7D8CB;
                border-radius: 100px 100px 100px 100px;
                padding: 15px 40px 12px 40px;
                border-color: white;
                text-decoration:none;
            }`
  },

  "hashtagBoho": {

    "nombre": `hashtagboho`,
     "components": `<section class="sectionHashtagBoho" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="container" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                        <div class="row text-xs-center p-t-1 p-b-4" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                          <div class="col-md-12 text-center" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                            <br>
                            <h3 class="tituloHashtagBoho" data-gjs-highlightable="false">Durante nuestra boda utiliza el hashtag</h3>
                            <br>
                            <div class="divHashtagBoho" data-gjs-editable="false" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                              <h5 class="hashtagBoho" data-gjs-highlightable="false">#BODAMARTIN&LAURA</h5>
                            </div>
                            <br>
                            <a class="botonHashtagBoho" data-gjs-highlightable="false">VER MURAL</a>
                        </div>
                      </div>
                    </section>`,
     "style": `.sectionHashtagBoho{

                background-color: #ECE7E3;;
                padding: 4% 4% 4% 4%;
                
                }
                
                @media only screen and (max-width: 768px) {
                
                .sectionHashtagBoho{
                
                padding: 8% 0% 12% 0%;
                
                }
                }
                
                .tituloHashtagBoho{
                
                
                    color: #212121;
                    font-family: "Meow Script", Sans-serif;
                    font-size: 55px;
                    font-weight: 300;
                    font-style: italic;
                }

                .botonHashtagBoho{

                  font-family: "Montserrat", Sans-serif;
                  font-size: 12px;
                  font-weight: 500;
                  background-color: #AE4F10;
                  border-radius: 100px 100px 100px 100px;
                  padding: 15px 40px 12px 40px;
                  color:white;
                  border: 0px solid rgba(255, 0, 0, 0);
                  text-decoration:none;
              }
                
                
                @media only screen and (max-width: 768px) {
                
                .tituloHashtagBoho{
                
                font-size: 33px;
                
                }
                }

                .hashtagBoho{

                  font-family: "Playfair Display", Sans-serif;
                    font-size: 25px;
                    font-weight: 700;
                    text-transform: uppercase;


                }
                
                .divHashtagBoho{
                    width: fit-content;
                    margin: 0 auto 40px;
                    background-color: white;
                    padding: 8px;
                    color: #000000;
                    border-radius: 9px;
                    
                }`,
     "label": `<img src="https://i.postimg.cc/V6fCGMTP/hashtagboho.png" width="100%" height="100%">
            <br>
            <br>
            <div class="gjs-block-label">
            Hashtag Boho
            </div> `
    
  },

  "hashtagChic": {

    "nombre": `hashtagchic`,
     "components": `<section class="sectionHashtagChic" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="container" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                        <div class="row text-xs-center p-t-1 p-b-4" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                          <div class="col-md-12 text-center" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                            <br>
                            <h3 class="tituloHashtagChic" data-gjs-highlightable="false">Durante nuestra boda utiliza el hashtag</h3>
                            <br>
                            <div class="divHashtagChic" data-gjs-editable="false" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                              <h5 class="hashtagChic" data-gjs-highlightable="false">#BODAMARTIN&LAURA</h5>
                            </div>
                            <br>
                            <a class="botonHashtagChic" data-gjs-highlightable="false">VER MURAL</a>
                        </div>
                      </div>
                    </section>`,
     "style": `.sectionHashtagChic{

                background-color: white;
                padding: 4% 4% 4% 4%;
                
                }
                
                @media only screen and (max-width: 768px) {
                
                .sectionHashtagChic{
                
                padding: 8% 0% 12% 0%;
                
                }
                }
                
                .tituloHashtagChic{
                
                
                  color: #212121;
                  font-family: "Playfair Display SC", Sans-serif;
                  font-size: 33px;
                  font-weight: 300;
                }

                .botonHashtagChic{

                  font-family: "Montserrat", Sans-serif;
                  font-size: 12px;
                  font-weight: 500;
                  background-color: white;
                  border-radius: 100px 100px 100px 100px;
                  padding: 15px 40px 12px 40px;
                  color:black;
                  border: 3px solid black;
                  text-decoration:none;
              }
                
                
                @media only screen and (max-width: 768px) {
                
                .tituloHashtagChic{
                
                font-size: 27px;
                
                }
                }

                .hashtagChic{

                    font-family: "Montserrat", Sans-serif;
                    font-size: 23px;
                    font-weight: 700;
                    text-transform: uppercase;


                }
                
                .divHashtagChic{
                    width: fit-content;
                    margin: 0 auto 40px;
                    background-color: white;
                    padding: 12px 12px 8px 12px;
                    color: white;
                    background-color: black;
                    border-radius: 9px;
                    
                }`,
     "label": `<img src="https://i.postimg.cc/rmwgc9Kn/hashtagchic.png" width="100%" height="100%">
            <br>
            <br>
            <div class="gjs-block-label">
            Hashtag Chic
            </div> `

  },

  "hashtagRomantic": {

  },

  "vestimentaWestern": {

    "nombre":"Vestimenta",
    "label": `<img src="https://i.postimg.cc/JhC3Jq6n/vestimenta.png" width="100%" height="100%">
              <br>
              <br>
              <div class="gjs-block-label">
              Vestimenta
              </div> `,
    "components": `<section id="vestimenta" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                    <div class="container" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="row text-xs-center p-t-1 p-b-4" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <div class="col-md-12 text-center" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                          <br>
                          <h3 class="titulohashtag text-light" data-gjs-highlightable="false">Codigo de Vestimenta</h3>
                          <br>
                          <h5 class="hashtag" data-gjs-highlightable="false">CASUAL-CHIC</h5>
                          <br>

                          <!-- Button trigger modal -->
                          <button type="button" class="botonhashtag" data-gjs-highlightable="false" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Ver Vestimenta
                          </button>

                          <!-- Modal -->
                          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                            <div class="modal-dialog" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                              <div class="modal-content" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                                <div class="modal-header" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                                  <h1 class="modal-title fs-5" id="exampleModalLabel" data-gjs-highlightable="false">Formal</h1>
                                  <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
                                </div>
                                <div class="modal-body" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                                  <img src="https://cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/CLB7QMKYIBFYRPZ5UOHYUQHZRY.jpg"  width="300" height="300" data-gjs-highlightable="false">
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                  </section>`,

    "style": `#vestimenta{

              background-color: #333333;
              padding: 4% 4% 4% 4%;
            
            }
            
            @media only screen and (max-width: 768px) {
            
            #vestimenta{
            
              padding: 8% 0% 12% 0%;
            
            }
            }
            .titulohashtag{


              color: #000000;
              font-family: "Noto Serif Display", Sans-serif;
              font-size: 35px;
              font-weight: 700;
              font-style: italic;
          }
          
          
          @media only screen and (max-width: 768px) {
          
            .titulohashtag{
          
              font-size: 25px;
             
          }
          }
          
          .hashtag{
          
              margin-bottom: 40px;
              color: #D7B7A2;
              font-family: "Montserrat", Sans-serif;
              font-size: 25px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 5px;
              text-align: center;
          }
          
          @media only screen and (max-width: 768px) {
          
            .hashtag{
          
              margin-bottom: 20px;
              font-size: 23px;
             
          }
          }
          
          
          .botonhashtag{
          
              font-family: "Montserrat", Sans-serif;
              font-size: 11px;
              font-weight: 600;
              color: black;
              background-color: #E7D8CB;
              border-radius: 100px 100px 100px 100px;
              padding: 15px 40px 12px 40px;
              border-color: white;
          }`
  },

  "vestimentaBoho": {

    "nombre": `VestimentaBoho`,
    "components": `<section id="vestimenta" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                     <div class="container" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                       <div class="row text-xs-center p-t-1 p-b-4" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                         <div class="col-md-12 text-center" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                           <br>
                           <h3 class="titulovestimenta text-dark" data-gjs-highlightable="false">Codigo de Vestimenta</h3>
                           <br>
                           <div class="code" data-gjs-editable="false" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                             <h5 class="titulocode" data-gjs-highlightable="false">CASUAL-CHIC</h5>
                           </div>
                           <br>

                           <!-- Button trigger modal -->
                          <button type="button" class="botonvestimenta" data-gjs-highlightable="false" data-bs-toggle="modal" data-bs-target="#exampleModalboho">
                          VER EJEMPLO
                          </button>

                          <!-- Modal -->
                          <div class="modal fade" id="exampleModalboho" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                            <div class="modal-dialog" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                              <div class="modal-content" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                                <div class="modal-header" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                                  <h1 class="modal-title fs-5" id="exampleModalLabel" data-gjs-highlightable="false">Formal</h1>
                                  <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
                                </div>
                                <div class="modal-body" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                                  <img src="https://cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/CLB7QMKYIBFYRPZ5UOHYUQHZRY.jpg"  width="300" height="300" data-gjs-highlightable="false">
                                </div>
                              </div>
                            </div>
                          </div>


                       </div>
                     </div>
                   </section>`,
    "style": `#vestimenta{

               background-color: white;
               padding: 4% 4% 4% 4%;
               
               }
     
               @media only screen and (max-width: 768px) {
               
               #vestimenta{
               
               padding: 8% 0% 12% 0%;
               
               }
               }

               .botonvestimenta{

                 font-family: "Montserrat", Sans-serif;
                 font-size: 12px;
                 font-weight: 500;
                 background-color: #AE4F10;
                 border-radius: 100px 100px 100px 100px;
                 padding: 15px 40px 12px 40px;
                 color:white;
                 border: 0px solid rgba(255, 0, 0, 0);
             }

               .titulocode{

                 color: #000000;
                 font-family: "Montserrat", Sans-serif;
                 font-size: 25px;
                 font-weight: 800;
                 text-transform: uppercase;
                 text-align: center;
                 
             }

             .code{
               width: fit-content;
               border-radius: 9px;
               margin: 0 auto;
               background-color: #ECE7E3;
               padding: 12px 14px 8px 14px;
             }

               .titulovestimenta{
                 color: #212121;
                 font-family: "Meow Script", Sans-serif;
                 font-size: 55px;
                 font-weight: 300;
             }`,
    "label": `<img src="https://i.postimg.cc/9fp6H5xw/vestimentaboho.png" width="100%" height="100%">
               <br>
               <br>
               <div class="gjs-block-label">
               Historia
               </div> `
   
  },

  "vestimentaChic": {

  },

  "vestimentaRomantic": {

  },

  "cancionesWestern": {
    
    "nombre":"Canciones",
    "label": ` <img src="https://i.postimg.cc/44bJTbhg/canciones.png" width="100%" height="100%">
              <br>
              <br>
              <div class="gjs-block-label">
              Canciones
              </div> `,

    "components": `<section class="canciones" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                  <div class="container-fluid" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                    <div class="row text-xs-center p-t-1 p-b-4" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="col-2" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false"></div>
                      <div class="col-sm-12 col-md-8 text-center" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <br>
                        <h3 class="tituloCancion"  data-gjs-layerable="false" data-gjs-highlightable="false">¿Qué canciones no pueden faltar?</h3>
                        <br>
                        <span class="textocanciones"  data-gjs-layerable="false" data-gjs-highlightable="false">¡Ayúdanos sugiriendo las canciones que pensás que no pueden faltaren nuestra boda!</span>
                        <br>
                        <form class="formCancionWestern" data-gjs-type="form" data-gjs-highlightable="false">

                        <div class="row mt-4 p-4" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                          <div class="col-sm-12 col-md-4 p-1" style="text-align: start;"  data-gjs-layerable="false" data-gjs-highlightable="false" data-gjs-droppable="false">

                            <label class="labelform p-1" for="inputEmail4"  data-gjs-layerable="false" data-gjs-highlightable="false">Nombre de la Cancion*</label>
                            <input type="text" class="form-control inputEmail4" placeholder="" name="nombrecancion"  data-gjs-layerable="false" data-gjs-highlightable="false">

                          </div>
                          <div class="col-sm-12 col-md-4 p-1" style="text-align: start;"  data-gjs-layerable="false" data-gjs-highlightable="false" data-gjs-droppable="false">

                            <label class="labelform p-1" for="inputEmail4"  data-gjs-layerable="false" data-gjs-highlightable="false">Author*</label>
                            <input type="text" class="form-control inputEmail4" placeholder="" name="autor" data-gjs-layerable="false" data-gjs-highlightable="false">

                          </div>
                          <div class="col-sm-12 col-md-4 p-1" style="text-align: start;"  data-gjs-layerable="false" data-gjs-highlightable="false" data-gjs-droppable="false">

                            <label class="labelform p-1" for="inputEmail4"  data-gjs-layerable="false" data-gjs-highlightable="false">Link de Spotify *</label>
                            <input type="text" class="form-control inputEmail4"  placeholder="" name="link"  data-gjs-layerable="false" data-gjs-highlightable="false">

                          </div>

                          <div class="col-12 mt-5" data-gjs-layerable="false" data-gjs-highlightable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-hoverable="false" data-gjs-droppable="false">

                            <button class="botonhashtag" type="submit"  data-gjs-layerable="false" data-gjs-highlightable="false">ENVIAR</button>

                          </div>

                        </div>
                      </div>
                      </form>
                      <div class="col-2" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false" data-gjs-droppable="false"></div>
                  </div>
                  </section>`,

  "style": `.canciones{

            padding: 4% 4% 4% 4%;
            background-color: white;
          }
  
        @media only screen and (max-width: 768px) {
        
          #canciones{
          
            padding: 8% 5% 8% 5%;
          
          }
          }
        
        
        .tituloCancion{
        
          color: #000000;
          font-family: "Noto Serif Display", Sans-serif;
          font-size: 35px;
          font-weight: 700;
          font-style: italic;
          margin-bottom: 20px;
        
        }
        
        @media only screen and (max-width: 768px) {
        
          .tituloCancion{
          
            font-size: 25px;
          
          }
          }
          .botonhashtag{

            font-family: "Montserrat", Sans-serif;
            font-size: 11px;
            font-weight: 600;
            color: black;
            background-color: #E7D8CB;
            border-radius: 100px 100px 100px 100px;
            padding: 15px 40px 12px 40px;
            border-color: white;
        }
        .inputEmail4{

          font-family: "Montserrat", Sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: black; 
          background-color: #E7D8CB;
          padding: 15px 15px 15px 15px;
          border-style: solid;
          border-width: 0px 0px 0px 0px;
          border-radius: 100px 100px 100px 100px;
          height:50px;
        }
        `
  },

  "cancionesBoho": {

    "nombre" : `cancionesboho`,
    "components" : `<section class="cancionesboho" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                    <div class="container-fluid" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="row text-xs-center p-t-1 p-b-4" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <div class="col-2" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false"></div>
                        <div class="col-sm-12 col-md-8 text-center" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                          <br>
                          <h3 class="tituloCancion" data-gjs-highlightable="false">¿Qué canciones no pueden faltar?</h3>
                          <br>
                          <span class="textocanciones" data-gjs-highlightable="false">¡Ayúdanos sugiriendo las canciones que pensás que no pueden faltaren nuestra boda!</span>
                          <br>
                          <form class="form_cancion" data-gjs-type="form" data-gjs-highlightable="false">
                          <div class="row mt-4 p-4" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                            <div class="col-sm-12 col-md-4 p-1" style="text-align: start;" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                
                              <label class="labelform p-1"  data-gjs-highlightable="false">Nombre de la Cancion*</label>
                              <input type="text" class="form-control inputcancion nombrecancion"  placeholder="" name="nombrecancion" value="" data-gjs-highlightable="false">
                
                            </div>

                            <div class="col-sm-12 col-md-4 p-1" style="text-align: start;" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                
                              <label class="labelform p-1"  data-gjs-highlightable="false">Author*</label>
                              <input type="text" class="form-control inputcancion autor"  placeholder="" name="autor" data-gjs-highlightable="false">
                
                            </div>

                            <div class="col-sm-12 col-md-4 p-1" style="text-align: start;" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                
                              <label class="labelform p-1"  data-gjs-highlightable="false">Link de Spotify, Youtube, etc*</label>
                              <input type="text" class="form-control inputcancion link"  placeholder="" name="link" data-gjs-highlightable="false">
                
                            </div>
                
                            <div class="col-12 mt-5" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                
                              <button class="botonhashtag" type="submit" data-gjs-highlightable="false">ENVIAR</button>
                
                            </div>

                          </div>
                        </div>
                        </form>
                        <div class="col-2" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false"></div>
                    </div>
                    </section>`,
    "style" : `.cancionesboho{

                padding: 4% 4% 4% 4%;
                background-color: #ECE7E3;
                }
                
                @media only screen and (max-width: 768px) {
                
                .cancionesboho{
                
                padding: 8% 5% 8% 5%;
                
                }
                }
                
                .inputcancion{

                  font-family: "Montserrat", Sans-serif;
                  font-size: 14px;
                  font-weight: 500;
                  color: black; 
                  background-color: rgb(231, 216, 203);
                  padding: 15px 15px 15px 15px;
                  border-style: solid;
                  border-width: 0px 0px 0px 0px;
                  border-radius: 100px 100px 100px 100px;
                  height:50px;
                  }
                
                .tituloCancion{
                
                    color: #212121;
                    font-family: "Meow Script", Sans-serif;
                    font-size: 55px;
                    font-weight: 300;
                    margin-bottom: 20px;
                
                }
                
                .textocanciones{
                
                    color: #212121;
                    font-family: "Playfair Display", Sans-serif;
                    font-size: 20px;
                
                }
                
                
                @media only screen and (max-width: 768px) {
                
                .tituloCancion{
                
                font-size: 33px;
                
                }
                }`,
    "label" : ` <img src="https://i.postimg.cc/XJbnwGxM/cancionesboho.png" width="100%" height="100%">
                <br>
                <br>
                <div class="gjs-block-label">
                </div> `
  },

  "cancionesChic":{

  },

  "cancionesRomantic":{

  },

  "transporteWestern": {
    
    "nombre":"Transporte",
    "label": `<img src="https://i.postimg.cc/bYbZStDC/transporte.png" width="100%" height="100%">
              <br>
              <br>
              <div class="gjs-block-label">
              Transporte
              </div> `,
  "components": `<section id="canciones" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                <div class="container-fluid" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                  <div class="row text-xs-center p-t-1 p-b-4" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                    <div class="col-2" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false"></div>
                    <div class="col-sm-12 col-md-8 text-center" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                      <br>
                      <h3 class="tituloCancion" data-gjs-highlightable="false">Transporte Privado</h3>
                      <br>
                      <span class="textocanciones" data-gjs-highlightable="false">Para facilitarte el traslado al lugar del evento contamos con un transporte privado.Para este servicio es necesario que confirmes para reservar tu lugar.</span>
                      <br>
                      <div class="divtransporte" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <form class="form_transporte" data-gjs-type="form" data-gjs-highlightable="false">

                          <div class="form-group text-left" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                            <label class="labelform" for="inputEmail4" data-gjs-highlightable="false">Nombre Completo*</label>
                            <input data-gjs-type="input" class="form-control inputEmail4" name="nombre" data-gjs-highlightable="false">
                          </div>

                          <div class="form-group text-left" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                            <label class="labelform" for="inputEmail4" data-gjs-highlightable="false">Numero de personas*</label>
                            <input data-gjs-type="input" class="form-control inputEmail4" name="cantidadpersonas" data-gjs-highlightable="false">
                          </div>
                          <br>
                          
                          <input class="botonhashtag" type="submit" data-gjs-highlightable="false" value="Enviar">
          
                        </form>
                      </div>
                    </div>
                    <div class="col-2" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false"></div>
                  </div>
                </section>`,
  "style": `#canciones{

              padding: 4% 4% 4% 4%;
              background-color: white;
            }

            @media only screen and (max-width: 768px) {
            
              #canciones{
              
                padding: 8% 5% 8% 5%;
              
              }
              }

            .form-group{

              margin-bottom: 1rem;

            }
            
            
            .tituloCancion{
            
              color: #000000;
              font-family: "Noto Serif Display", Sans-serif;
              font-size: 35px;
              font-weight: 700;
              font-style: italic;
              margin-bottom: 20px;
            
            }
            
            @media only screen and (max-width: 768px) {
            
              .tituloCancion{
              
                font-size: 25px;
              
              }
              }
              .inputEmail4{

                font-family: "Montserrat", Sans-serif;
                font-size: 14px;
                font-weight: 500;
                color: black; 
                background-color: #E7D8CB;
                padding: 15px 15px 15px 15px;
                border-style: solid;
                border-width: 0px 0px 0px 0px;
                border-radius: 100px 100px 100px 100px;
                height:50px;
              }
              .divtransporte {
                margin: 0% 20% 0% 20%;
                padding: 40px 0px 30px 0px;
              }
              @media only screen and (max-width: 768px){
                .divtransporte {
                    margin: 0% 0% 0% 0%;
                    padding: ;
                }
              }

            .botonhashtag {
              font-family: "Montserrat", Sans-serif;
              font-size: 11px;
              font-weight: 600;
              color: black;
              background-color: #E7D8CB;
              border-radius: 100px 100px 100px 100px;
              padding: 15px 40px 12px 40px;
              border-color: white;
          }`
  },

  "transporteBoho": {

    "nombre": ``,
    "components" : `<section id="transporte" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="container-fluid" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <div class="row text-xs-center p-t-1 p-b-4" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                          <div class="col-2" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false"></div>
                          <div class="col-sm-12 col-md-8 text-center" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false" data-gjs-editable="false">
                            <br>
                            <h3 class="titulotransporte">Transporte Privado</h3>
                            <br>
                            <span class="textotransporte" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">Para facilitarte el traslado al lugar del evento contamos con un transporte privado.Para este servicio es necesario que confirmes para reservar tu lugar.</span>
                            <br>
                            <div class="divtransporte" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                              <form class="formTransporteBoho" data-gjs-type="form" data-gjs-highlightable="false">
                                <div class="form-group text-left" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false" data-gjs-editable="false">
                                  <label class="labelform" for="inputEmail4">Nombre completo*</label>
                                  <input type="text" class="form-control inputTransporte"  name="nombre" aria-describedby="emailHelp" placeholder="">
                                  
                                </div>
                                <div class="form-group text-left" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false" data-gjs-editable="false">
                                  <label class="labelform" for="inputEmail4">Numero de personas*</label>
                                  <input type="text" class="form-control inputTransporte"  name="cantidadpersonas" placeholder="">
                                </div>
                                <br>
                                <button class="botonhashtag" type="submit">CONFIRMACION</button>
                
                              </form>
                            </div>
                          </div>
                          <div class="col-2" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false"></div>
                      </div>
                      </section>`,
    "style": `.divtransporte{

                margin: 0% 20% 0% 20%;
                padding: 40px 0px 30px 0px;
                }
                
                
                @media only screen and (max-width: 768px) {
                
                .divtransporte{
                
                
                margin: 0% 0% 0% 0%;
                padding: 
                
                }
                }
                #transporte{

                  padding: 4% 4% 4% 4%;
                  background-color: #ECE7E3;
                  }
                  
                  @media only screen and (max-width: 768px) {
                  
                  #transporte{
                  
                  padding: 8% 5% 8% 5%;
                  
                  }
                  }
                  
                  
                  .titulotransporte{
                  
                      color: #212121;
                      font-family: "Meow Script", Sans-serif;
                      font-size: 55px;
                      font-weight: 300;
                      margin-bottom: 20px;
                  
                  }

                  .inputTransporte{

                    font-family: Montserrat, sans-serif;
                    font-size: 14px;
                    font-weight: 500;
                    color: black;
                    background-color: white;
                    padding-top: 15px;
                    padding-right: 15px;
                    padding-bottom: 15px;
                    padding-left: 15px;
                    border-top-style: solid;
                    border-right-style: solid;
                    border-bottom-style: solid;
                    border-left-style: solid;
                    border-top-width: 0px;
                    border-right-width: 0px;
                    border-bottom-width: 0px;
                    border-left-width: 0px;
                    border-top-left-radius: 100px;
                    border-top-right-radius: 100px;
                    border-bottom-right-radius: 100px;
                    border-bottom-left-radius: 100px;
                    height: 50px;
                  }
                  
                  .textotransporte{
                  
                      color: #212121;
                      font-family: "Playfair Display", Sans-serif;
                      font-size: 20px;
                  
                  }
                  
                  
                  @media only screen and (max-width: 768px) {
                  
                  .tituloCancion{
                  
                  font-size: 33px;
                  
                  }
                  }`,
    "label": `<img src="https://i.postimg.cc/rpJCQXkh/transporteboho.png" width="100%" height="100%">
              <br>
              <br>
              <div class="gjs-block-label">
              Historia
              </div> `
  },

  "transporteChic": {

  },

  "transporteRomantic": {

  },

  "regaloWestern": {
    
    "nombre": "Regalos",
    "components": `<section class="divregalos" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                <div class="container" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                  <div class="row text-xs-center p-t-1 p-b-3" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                    <div class="col-md-12 text-center" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                      <br>
                      <h3 class="tituloregalo" data-gjs-highlightable="false">Mesa de Regalo 2</h3>
                      <br>
                      <div class="divtexto" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <span class="textoregalo" data-gjs-highlightable="false">Tu presencia es nuestro mejor regalo, pero si quieres bendecirnos con algún bien material, aquí te dejamos una lista de regalos que nos gustaría recibir, o bien, también puedes colaborar con nuestra Luna de Miel.</span>
                      </div>
                      
                      <br>
                      <div class="switcher mt-5 mb-5" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                        <input type="radio" name="balance" value="yin" id="yin" class="switcher__input switcher__input--yin" checked="">
                        <label  for="yin" class="switcher__label yin" data-gjs-highlightable="false">VER DATOS</label>
                        
                        <input type="radio" name="balance" value="yang" id="yang"  class="switcher__input switcher__input--yang">
                        <label  for="yang" class="switcher__label yang" data-gjs-highlightable="false">VER LISTA</label>
                        
                        <span class="switcher__toggle" data-gjs-highlightable="false"></span>
                      </div>
                      <br>
                      <span class="datosbancarios pb-4" data-gjs-highlightable="false">
                        TITULAR: MATIAS NICOLAS SANCHEZ
                        CBU: 1430001713011714940016
                        ALIAS: TUERCA.TRUCO.MANIJA
                        Nº DE CUENTA: 1301171494001
                        CUIT: 23-36988681-9</span>
                        <br>
                        
                          <div data-gjs-type="listaregalos"></div>
                    </div>
                  </div>
                </div>
              </section>`,
    "label": `<img src="https://i.postimg.cc/rz6N8XH8/regalos.png" width="100%" height="100%">
              <br>
              <br>
              <div class="gjs-block-label">
              Regalos
              </div> `,

    "style": `
              .swiper-container-regalo {
                width: 306px;
                height: 565px;
            }
              .swiper-slide {
                  text-align: center;
                  font-size: 18px;
                  background: #f0f8ff00;
                  /* Center slide text vertically */
                  display: -webkit-box;
                  display: -ms-flexbox;
                  display: -webkit-flex;
                  display: flex;
                  -webkit-box-pack: center;
                  -ms-flex-pack: center;
                  -webkit-justify-content: center;
                  justify-content: center;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  -webkit-align-items: center;
                  align-items: center;
                  width:100%;
                  height: 90%;
              }

              .swiper-button-next{
                  position:absolute;
                  top:330px;
              }

              .swiper-button-prev {
                  position:absolute;
                  top:330px;
              }
              .regalos{

                padding: 1px 79px 1px 79px;
                
              }
    
          @media only screen and (max-width: 768px) {
          
            .regalos{
            
              padding: 1px 15px 1px 15px;
            
            }
            }
          
          .divregalos{
          
            padding: 4% 0% 6% 0%;
            background-color: #D7B7A2;
            position:relative;
          }
          
          @media only screen and (max-width: 768px) {
          
            .divregalos{
            
              padding: 10% 5% 14% 5%;
            
            }
            }

            .datosbancarios{

              font-family: "Montserrat", Sans-serif;
            font-size: 13px;
            font-weight: 700;
            }

            .swiper-container {
              width: 308px;
              height: 537px;
          }

          .card-img-top{

            width:300px !important;
            height:300px !important;
          }

            .contenregalo{

              overflow:hidden;
              height: 610px;
              width:100%;
            }
          
          
            .tituloregalo{
          
              color: #FFFFFF;
              font-family: "Noto Serif Display", Sans-serif;
              font-size: 37px;
              font-weight: 700;
              font-style: italic;
            }
          
          
            @media only screen and (max-width: 768px) {
          
              .tituloregalo{
              
                font-size: 28px;
              
              }
              }
          
          
          .textoregalo{
          
            text-align: center;
              color: #FFFFFF;
              font-family: "Montserrat", Sans-serif;
              font-size: 16px;
              font-weight: 300;
              font-style: normal;
              line-height: 28px;
          }
          .divtexto{

            margin-bottom: 10px;
          }

          .botonhashtag{

            font-family: "Montserrat", Sans-serif;
            font-size: 11px;
            font-weight: 600;
            color: black;
            background-color: #E7D8CB;
            border-radius: 100px 100px 100px 100px;
            padding: 15px 40px 12px 40px;
            border-color: white;
        }
          
          
          .switcher {
            display: inline-block;
            height: 51px;
            margin-top: 3px;
            padding: 6px;
            background: #ffffff00;
            border-radius: 2px;
            width: 210px;
            border-radius: 30px;
            border: solid 1px #ddd;
            position: relative;
            border: 3px solid white;
          }
          
          .switcher__input {
            display: none;
          }
          
          .switcher__label {
            float: left;
            width: 50%;
            font-size: 12px;
            line-height: 30px;
            color: #000 !important;
            text-align: center;
            cursor: pointer;
            position: inherit;
            z-index: 10;
            transition: color 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
            will-change: transform;
            padding: 3px 0px 0px 0px;
            font-family: "Montserrat", Sans-serif;
          }
          
          .switcher__toggle {
            position: absolute;
            float: left;
            height: 37px;
            width: 50%;
            font-size: 12px;
            line-height: 30px;
            cursor: pointer;
            background-color: white;
            border-radius: 30px;
            left: 5px;
            top: 4px;
            transition: left 0.25s cubic-bezier(0.4, 0.0, 0.2, 1);
            will-change: transform;
            color:black
          }
          
          .switcher__input:checked + .switcher__label {
            color: #fff;
          }
          
          .switcher__input--yang:checked ~ .switcher__toggle {
            left: 100px;
          }
          
          .swiper-button-next{
            position:absolute;
            top:330px;
        }

        .swiper-button-prev {
            position:absolute;
            top:330px;
        }`
  },

  "regaloBoho":{

  },

  "regaloChic":{

  },

  "regaloRomantic":{

  },

  "mensajeWestern": {

    "nombre": "Mensaje",
    "label": `<img src="https://i.postimg.cc/9Xyppzw0/dedicatoria.png" width="100%" height="100%">
              <br>
              <br>
              <div class="gjs-block-label">
              Mensaje
              </div> `,
    "components": `<div id="main-bg" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                    <div class="container" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="row" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <div class="col-12 text-center pt-5" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                          <div class="divdedicatoria" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                            <h4 class="textodedicatoria" data-gjs-highlightable="false">Vayan poniendose sus mejores trajes que estos novios se casan</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`,
    "style": `#main-bg{
              width: 100%;
              height: 200px;
              background-repeat: no-repeat;
              background-position: center;
              -webkit-background-size: cover;
              -moz-background-size: cover;
              background-size: cover;
              background: url(https://eleve11.ar/wp-content/uploads/2022/09/jonathan-borba-PjFIGt4t9Cw-unsplash-scaled.jpg)no-repeat center center fixed;
              box-shadow: inset 0 0 0 2000px rgba(7, 7, 7, 0.3);
            }
    
    
            .textodedicatoria{
            
              text-align: center;
              color: #FFFFFF;
              font-family: "Noto Serif Display", Sans-serif;
              font-size: 18px;
              font-weight: 500;
              font-style: italic;
            
            }
            
            @media only screen and (max-width: 768px) {
            
              .textodedicatoria{
            
              
                font-size: 15px;
                
              }
              }
            
            .divdedicatoria{
            
              padding: 50px 0px 50px 0px;
            }`
  },

  "mensajeBoho":{

  },

  "mensajeChic":{

  },

  "mensajeRomantic":{

  },

  "contadorWestern": {

    "nombre": "Contador",
    "components": `<div class="contadorfinal" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="container-fluid p-0" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <div class="row" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                          <div class="col-12 text-center" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                            <div class="contenedor_contador" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                              <div data-gjs-type="countdown"></div>
                            </div>
                    
                          </div>
                        </div>
                      </div>
                    </div>`,
    "label": `  <img src="https://i.postimg.cc/CKZtLYP8/contador.png" width="100%" height="100%">
                <br>
                <br>
                <div class="gjs-block-label">
                Contador
                </div> `,
    "style": `
              .contadorfinal{

              padding: 60px 0px 40px 0px;
              background-repeat: no-repeat;
              background-position: center;
              -webkit-background-size: cover;
              -moz-background-size: cover;
              background-size: cover;
              background: url(https://eleve11.ar/wp-content/uploads/2022/09/jonathan-borba-PjFIGt4t9Cw-unsplash-scaled.jpg)no-repeat center center fixed;
              box-shadow: rgb(7 7 7 / 67%) 0px 0px 0px 2000px inset;
            }
    
    
            .contenedor_contador{
              width: 100%;
            }`
  },

  "contadorBoho":{

  },

  "contadorChic":{

  },

  "contadorRomantic":{

  },

  "confirmacionWestern": {

    "nombre": "confirmacion",
    "label": `<img src="https://i.postimg.cc/j2JdzGSn/confirmacion.png" width="100%" height="100%">
              <br>
              <br>
              <div class="gjs-block-label">
              confirmacion
              </div> `,
    "components" : `<section id="confirmacion" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false">
                      <div class="container-fuild" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false">
                        <div class="row " data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false">
                          <div class="col-sm-12 col-md-6 text-center text-light" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false">
                            <div class="divconfirmacion text-sm-center text-md-left" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false">
                              <h1 class="tituloconfirmacion" data-gjs-highlightable="false">Confirmacion</h1>
              
                              <p class="textoconfirmacion " data-gjs-highlightable="false">Para poder participar de todo esto, es necesario que confirmes tu asistencia cuanto antes.
                                La fecha límite es el 20 de Marzo del 2023.
                                Completa el siguiente formulario para confirmar tu asistencia.</p>
                            </div>
                          </div>

                          <div class="col-sm-12 col-md-6 text-center text-light" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false">
                            <div class="divformconfirmacion" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false">
                              <form class="form_confirmados" data-gjs-type="form" data-gjs-highlightable="false">
                                <div class="form-group text-left" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false">
                                  <div class="form-check form-check-inline" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false">
                                    <input class="form-check-input" type="radio"  name="asiste" id="inlineRadio1" value="si">
                                    <label class="form-check-label" for="inlineRadio1" data-gjs-highlightable="false">Si puedo</label>
                                  </div>
                                  <div class="form-check form-check-inline" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false">
                                    <input class="form-check-input" type="radio" name="asiste" id="inlineRadio2" value="no">
                                    <label class="form-check-label" for="inlineRadio2" data-gjs-highlightable="false">No puedo</label>
                                  </div>
                                  
                                </div>
                                <div class="form-group text-left" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false">
                                  <input type="text" class="form-control inputEmail4"  name="nombrecompleto" placeholder="nombre completo">
                                  
                                </div data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false">
                                <div class="form-group text-left" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false">
                                  <input type="text" class="form-control inputEmail4" name="dato"  placeholder="ingrese algun dato importante">
                                </div>
                                <br>
                                <button class="botonhashtag" type="submit">CONFIRMACION</button>
                
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>`,
    "style": ` #confirmacion{

                background-color: #212121;
                padding: 5% 10% 5% 10%;
            
              }
            
              @media only screen and (max-width: 768px) {
            
                .confirmacion{
              
                
                  padding: 5% 3% 5% 3%;
                  
                }
            
              }
            
            
              .divconfirmacion{
            
                padding: 0% 0% 0% 20%;
              }
            
            
              @media only screen and (max-width: 768px) {
            
                .divconfirmacion{
              
                
                  padding: 5% 3% 5% 3%;
                  
                }
            
                
              }
            
              .tituloconfirmacion{
            
                margin-bottom: 50px;
                color: #FFFFFF;
                font-family: "Noto Serif Display", Sans-serif;
                font-size: 35px;
                font-weight: 700;
                font-style: italic;
              }
            
              @media only screen and (max-width: 768px) {
            
                .tituloconfirmacion{
              
                
                  font-size: 27px;
                  
                }
            
                
              }
            
            
              .textoconfirmacion{
            
                text-align: left;
                color: #FFFFFF;
                font-family: "Montserrat", Sans-serif;
                font-size: 16px;
                font-weight: 300;
                font-style: normal;
                line-height: 28px;
              }
            
            
              @media only screen and (max-width: 768px) {
            
                .textoconfirmacion{
              
                
                  font-size: 14px;
                  
                }
            
                
              }
            
            
            
              .divformconfirmacion{
            
                margin: 2% 19% 0% 9%;
                padding: 0px 0px 0px 0px;
              }
            
            
              @media only screen and (max-width: 768px) {
            
                .divformconfirmacion{
              
                
                  padding: 0px;
                  margin:0px;
                  
                }
            
              }
              .botonhashtag{

                font-family: "Montserrat", Sans-serif;
                font-size: 11px;
                font-weight: 600;
                color: black;
                background-color: #E7D8CB;
                border-radius: 100px 100px 100px 100px;
                padding: 15px 40px 12px 40px;
                border-color: white;
                text-decoration:none;
            }
            .inputEmail4{

              font-family: "Montserrat", Sans-serif;
              font-size: 14px;
              font-weight: 500;
              color: black; 
              background-color: #E7D8CB;
              padding: 15px 15px 15px 15px;
              border-style: solid;
              border-width: 0px 0px 0px 0px;
              border-radius: 100px 100px 100px 100px;
              margin: 6px 0px 0px 0px;
              height:50px;
            }`
  },

  "confirmacionBoho":{

  },

  "confirmacionChic":{

  },

  "confirmacionRomantic":{

  },

  "galeriaWestern": {

    "nombre": `galeria2`,
    "label": ``,
    "components": `<section class="galeria2" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                    <div class="container" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="row text-xs-center" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <div class="col-md-12 text-center m-0 p-0" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                          <div class="carousel-wrap" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                            <div class="owl-carousel galeria" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                              <div class="item" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false"><img class="img_galeria" src="https://eleve11.ar/wp-content/uploads/jet-engine-forms/1/2022/09/Sin-titulo-1_Mesa-de-trabajo-1-576x1024.jpg"></div>
                              <div class="item" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false"><img class="img_galeria" src="https://eleve11.ar/wp-content/uploads/jet-engine-forms/17/2022/09/jonathan-borba-2hAsvqV9H3s-unsplash-1024x683.jpg"></div>
                              <div class="item" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false"><img class="img_galeria" src="https://eleve11.ar/wp-content/uploads/jet-engine-forms/17/2022/09/jonathan-borba-cbOhH4dn31w-unsplash-1-683x1024.jpg"></div>
                              <div class="item" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false"><img class="img_galeria" src="https://eleve11.ar/wp-content/uploads/jet-engine-forms/1/2022/09/Sin-titulo-1_Mesa-de-trabajo-1-576x1024.jpg"></div>
                              <div class="item" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false"><img class="img_galeria" src="https://eleve11.ar/wp-content/uploads/jet-engine-forms/1/2022/09/Sin-titulo-1_Mesa-de-trabajo-1-576x1024.jpg"></div>
                            </div>
                          </div>
                      </div>
                    </div>
                  </section>`,
    "style": `.galeria2{

              padding: 4% 6% 4% 6%;
              background-color: #D7B7A2;
            
          }
  
          @media only screen and (max-width: 768px) {
          
            .galeria2{
          
              padding: 9% 8% 10% 9%;
            
          }
          }
          .img_galeria{

            height: 500px;
            object-fit: cover;
          }
          
          .owl-carousel{
            display: flex !important;  // to override display:bloc i added !important
            flex-direction: row;   
            justify-content: center;  // to center you carousel
        }
        .owl-carousel .item {
          position: relative;
          z-index: 100; 
          -webkit-backface-visibility: hidden; 
        }
        
        /* end fix */
        .owl-nav > div {
          margin-top: -26px;
          position: absolute;
          top: 50%;
          color: #cdcbcd;
        }
        
        .owl-nav i {
          font-size: 52px;
        }
        
        .owl-nav .owl-prev {
          left: -30px;
        }
        
        .owl-nav .owl-next {
          right: -30px;
        }
        
        `
  },

  "galeriaBoho":{

  },

  "galeriaChic":{

  },

  "galeriaRomantic":{

  },

  "eventoWestern": {

    "nombre": "eventos2",
    "components": `<section class="eventos2" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                    <div class="container" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="row text-xs-center" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <div class="col-md-12 text-center m-0 p-0" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                          <div class="carousel-wrap" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                            <div class="owl-carousel eventos_owl" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                  
                              <div class="card p-4" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                                <img class="card-img-top" src="https://eleve11.ar/wp-content/uploads/jet-engine-forms/1/2022/09/registro-civi-3-1024x768.jpeg" alt="Card image cap">
                                <div class="card-body" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                                  <h5 class="card-title">CEREMONIA</h5>
                                  <div class="divhorario" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                                    <span>30/12/2023 19:00hs</span>
                                  </div>
                                  <h5 class="card-lugar">REGISTRO CIVIL CENTRAL</h5>
                                  <span class="card-text">Blvr. Chacabuco 737, Córdoba</span>
                                  <br>
                                  <br>
                                  <a href="#" class="botonhashtag">VER UBICACION</a>
                                </div>
                              </div>
                              
                              <div class="card p-4" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                                <img class="card-img-top" src="https://eleve11.ar/wp-content/uploads/2022/09/Catedral-4.jpg" alt="Card image cap">
                                <div class="card-body" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                                  <h5 class="card-title">BODA</h5>
                                  <div class="divhorario" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                                    <span>30/12/2023 19:00hs</span>
                                  </div>
                                  <h5 class="card-lugar">CATEGRAL DE CORDOBA</h5>
                                  <span class="card-text">Blvr. Chacabuco 737, Córdoba</span>
                                  <br>
                                  <br>
                                  <a href="#" class="botonhashtag">VER UBICACION</a>
                                </div>
                              </div>
                              
                              <div class="card p-4" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                                <img class="card-img-top" src="https://eleve11.ar/wp-content/uploads/2022/09/3602_17670fotoalgr.jpg" alt="Card image cap">
                                <div class="card-body" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                                  <h5 class="card-title">RECEPCION</h5>
                                  <div class="divhorario" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                                    <span>30/12/2023 19:00hs</span>
                                  </div>
                                  <h5 class="card-lugar">BOLGHERI</h5>
                                  <span class="card-text">Blvr. Chacabuco 737, Córdoba</span>
                                  <br>
                                  <br>
                                  <a href="#" class="botonhashtag">VER UBICACION</a>
                                </div>
                              </div>
                  
                            </div>
                          </div>
                      </div>
                    </div>
                    </section>`,
    "label": ``,
    "style": `.eventos2{

              padding: 4% 6% 4% 6%;
              background-color: #D7B7A2;
            }
    
    
            @media only screen and (max-width: 768px) {
            
              .eventos2{
            
                padding: 15% 10% 15% 10%;
                background-color: #D7B7A2;
              }
              }
            
            .card{
            
              height: 550px;
            }

            .card-img-top{

              height: 250px !important;
            }
            
            .card-title{
            
              color: #000000;
              font-family: "Montserrat", Sans-serif;
              font-size: 18px;
              font-weight: 700;
              text-transform: uppercase;
            }

            .botonhashtag {
              font-family: "Montserrat", Sans-serif;
              font-size: 11px;
              font-weight: 600;
              color: black;
              background-color: #E7D8CB;
              border-radius: 100px 100px 100px 100px;
              padding: 15px 40px 12px 40px;
              border-color: white;
          }
            
            .divhorario{
            
              margin: 0 auto;
              background-color: #F5F5F5;
              border-radius: 100px 100px 100px 100px;
              width: 180px;
              margin-bottom: 13px;
            
            }
            .owl-nav > div {
              margin-top: -26px;
              position: absolute;
              top: 50%;
              color: #cdcbcd;
            }
            
            .owl-nav i {
              font-size: 52px;
            }
            
            .owl-nav .owl-prev {
              left: -30px;
            }
            
            .owl-nav .owl-next {
              right: -30px;
            }`,
  },

  "eventoBoho":{

  },

  "eventoChic":{

  },

  "eventoRomantic":{

  },

  "listaRegalosWestern": {

    "nombre": "listaRegalos",
    "label": ``,
    "components": `<div class="carousel-wrap re contenregalo pt-4" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false" style="display:none;">
                    <div class="owl-carousel regalos" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
      
                      <div class="card p-4" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <img class="card-img-top" src="https://eleve11.ar/wp-content/uploads/jet-engine-forms/1/2022/09/D_NQ_NP_885930-MLA47397157459_092021-O.webp" alt="Card image cap">
                        <div class="card-body" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                          <h5 class="card-title">LAMPARA COLGANTE</h5>
                          <span class="card-text">Lampara Campana Colgante 40cm Nórdica Escandinaba Madera</span>
                          <h5 class="cardprecio mt-3">$36452</h5>
                          <br>
                          <a href="" class="botonhashtag">REGALAR</a>
                        </div>
                      </div>
                      
                      <div class="card p-4" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <img class="card-img-top" src="https://eleve11.ar/wp-content/uploads/jet-engine-forms/1/2022/09/D_NQ_NP_885930-MLA47397157459_092021-O.webp" alt="Card image cap">
                        <div class="card-body" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                          <h5 class="card-title">LAMPARA COLGANTE</h5>
                          <span class="card-text">Lampara Campana Colgante 40cm Nórdica Escandinaba Madera</span>
                          <h5 class="cardprecio mt-3">$36452</h5>
                          <br>
                          <a href="" class="botonhashtag">REGALAR</a>
                        </div>
                      </div>
                      
        
                    </div>
                  </div>`,
    "style": `.owl-carousel{
              display: flex !important;  // to override display:bloc i added !important
              flex-direction: row;   
              justify-content: center;  // to center you carousel
            }
            
            .card{

              height: 550px;
            }
            
            .card-img-top{

              height: 250px !important;
            }
            .botonhashtag{

              font-family: "Montserrat", Sans-serif;
              font-size: 11px;
              font-weight: 600;
              color: black;
              background-color: #E7D8CB;
              border-radius: 100px 100px 100px 100px;
              padding: 15px 40px 12px 40px;
              border-color: white;
              text-decoration:none;
          }
          .owl-nav > div {
            margin-top: -26px;
            position: absolute;
            top: 50%;
            color: #cdcbcd;
          }
          
          .owl-nav i {
            font-size: 52px;
          }
          
          .owl-nav .owl-prev {
            left: -30px;
          }
          
          .owl-nav .owl-next {
            right: -30px;
          }`
  },

  "listaRegalosBoho":{

  },

  "listaRegalosChic":{

  },

  "listaRegalosRomantic":{

  },

  "padrinosWestern" : {

    "nombre": `padrinosWestern`,
    "label": `
              <img src="https://i.postimg.cc/522nPmCW/padrinoswestern.png" alt="Girl in a jacket" width="100%" height="100%">
              <br>
              <br>
              <div class="gjs-block-label">
              padrinos
              </div> `,
    "components": `<section class="padrinos" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="container" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <div class="row text-xs-center p-t-1 p-b-4" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                          <div class="col-md-12 text-center" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                            <br>
                            <h3 class="titulopadrino" data-gjs-highlightable="false">Padrinos</h3>
                            <br>
                            <div class="carousel-wrap" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                            <div class="owl-carousel padrinos-owl owl-theme" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                              <div class="item" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                                <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" class="image-cover" width="150">
                                <br>
                                <h5 class="titulopadrinos" >Hermano del Novio</h5>
                                <h2 class="nombrepadrino" >Juan Carlos</h2>
                              </div>
                              <div class="item" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                                <img class="image-cover" src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg"  width="150">
                                <br>
                                <h5 class="titulopadrinos" >Hermano del Novio</h5>
                                <h2 class="nombrepadrino" >Juan Carlos</h2>
                              </div>

                              <div class="item" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                                <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" class="image-cover" width="150">
                                <br>
                                <h5 class="titulopadrinos" >Hermano del Novio</h5>
                                <h2 class="nombrepadrino" >Juan Carlos</h2>
                              </div>
                              <div class="item" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                                <img class="image-cover" src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg"  width="150">
                                <br>
                                <h5 class="titulopadrinos" >Hermano del Novio</h5>
                                <h2 class="nombrepadrino" >Juan Carlos</h2>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>`,
    "style": `.padrinos{

              background-color: #d7b7a2;
              padding: 4% 10% 4% 10%;
          
          }

          @media only screen and (max-width: 768px) {
          
            .padrinos{
          
              padding: 8% 0% 12% 0%;
            
          }
          }

          .image-cover{

            width: 280px !important;
            height: 280px !important;
            border-radius: 50%;
            margin: 20px;
            margin: 0 auto ;
            object-fit: cover;
            object-position: center right;
          }

          .titulopadrino{
              color: rgb(0, 0, 0);
              font-family: "Noto Serif Display", sans-serif;
              font-size: 35px;
              font-weight: 700;
              font-style: italic;
              margin-bottom: 20px;
          }

          .nombrepadrino{

            color: #000000;
            font-family: "Montserrat", Sans-serif;
            font-size: 16px;
            font-weight: 500;
          }
  
          .titulopadrinos{
          
          
            color: #000000;
            font-family: "Montserrat", Sans-serif;
            font-size: 18px;
            font-weight: 700;
            text-transform: uppercase;
          }

  
  
          @media only screen and (max-width: 768px) {
          
            .titulopadrino{
          
              font-size: 25px;
            
          }
          }
          
          .owl-carousel .item {
            position: relative;
            z-index: 100; 
            -webkit-backface-visibility: hidden; 
          }
          
          /* end fix */
          .owl-nav > div {
            margin-top: -26px;
            position: absolute;
            top: 50%;
            color: #cdcbcd;
          }
          
          .owl-nav i {
            font-size: 52px;
          }
          
          .owl-nav .owl-prev {
            left: -30px;
          }
          
          .owl-nav .owl-next {
            right: -30px;
          }
          `
  },

  "padrinosBoho" : {

  },

  "padrinosChic" : {

  },

  "padrinosRomantic" : {

  },

  "recomendacionesWestern": {

    "nombre":"recomendacioneswestern",
    "label": `<img src="https://i.postimg.cc/SxJv4vS6/recomendaciones.png" width="100%" height="100%">
              <br>
              <br>
              <div class="gjs-block-label">
              
              </div> `,
    "components": `<section id="recomendaciones" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false">
                    <div class="container" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="row text-xs-center p-t-1 p-b-4" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <div class="col-md-12 text-center" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                          <br>
                          <h3 class="titulorecomendacion text-light" data-gjs-highlightable="false">Recomendaciones</h3>
                          <br>
                          
                          <div class="accordion accordion-flush" id="accordionFlushExample">

                            <div class="accordion-item mb-3">
                              <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed tituloaccordion" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                  
                                  HOSPEDAJE
                                </button>
                              </h2>
                              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                  <div class="container p-3">
                                    <div class="row">
                                      <div class="col-12 col-md-6" >
                                        <img class="img-hospedaje" src="https://eventdate.es/wp-content/uploads/jet-engine-forms/1/2022/10/2020-10-21.jpg" alt="Girl in a jacket" width="300" height="150">
                                      </div>
                                      <div class="col-12 col-md-6" >
                                        <div class="pb-3" data-gjs-editable="false">
                                          <span class="text-start nombrelugar">LA XIQUELLA</span>
                                        </div>
                                        <div class="pb-3" data-gjs-editable="false">
                                          <span class="text-start textolugar">Veïnat Vilallonga Mas El Xiquillo, 17176 Sant Esteve d'en Bas, Girona, España</span>
                                        </div>
                                        <div class="pb-3" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false" data-gjs-editable="false">
                                          <span class="text-start textlugar">Tel: +34667718004</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                              <div class="accordion-item mb-3">
                              <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed tituloaccordion" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseOne">
                                  
                                  TRANSPORTE
                                </button>
                              </h2>
                              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                  <div class="container p-3">
                                    <div class="row">
                                      <div class="col-12 col-md-6" >
                                        <img class="img-hospedaje" src="https://eventdate.es/wp-content/uploads/jet-engine-forms/1/2022/10/2020-10-21.jpg" alt="Girl in a jacket" width="300" height="150">
                                      </div>
                                      <div class="col-12 col-md-6" >
                                        <div class="pb-3" data-gjs-editable="false">
                                          <span class="text-start nombrelugar">LA XIQUELLA</span>
                                        </div>
                                        <div class="pb-3" data-gjs-editable="false">
                                          <span class="text-start textolugar">Veïnat Vilallonga Mas El Xiquillo, 17176 Sant Esteve d'en Bas, Girona, España</span>
                                        </div>
                                        <div class="pb-3" data-gjs-hoverable="false" data-gjs-layerable="false"  data-gjs-highlightable="false" data-gjs-droppable="false" data-gjs-editable="false">
                                          <span class="text-start textlugar">Tel: +34667718004</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </section>`,

    "style": `#recomendaciones{

              background-color: rgb(51, 51, 51);
              padding: 4% 18% 8% 18%;
            
            }
            
            @media only screen and (max-width: 768px) {
            
            #recomendaciones{
            
              padding: 8% 5% 12% 5%;
            
            }
            }

            .textolugar{

              color: #000000;
              font-family: "Montserrat", Sans-serif;
              font-size: 14px;
              font-weight: 700;
              line-height: 20px;
            }

            .accordion-button:not(.collapsed) {
              
              background-color: #e7f1ff00 !important;
              color: black !important;
              
            }

            .accordion-flush .accordion-item .accordion-button {
              border-radius: 19px !important;
          }

          .accordion-item{

            border-radius: 19px !important;

          }

            .accordion-button:focus {
              box-shadow: none !important;
              border-color: rgba(0,0,0,.125) !important;
          }

            .accordion {
              --bs-accordion-btn-icon: url("https://cdn-icons-png.flaticon.com/512/61/61932.png");
              --bs-accordion-btn-active-icon: url("https://cdn-icons-png.flaticon.com/512/25/25637.png");
          }


            .tituloaccordion{

              color: #000000;
              font-family: "Montserrat", Sans-serif;
              font-size: 17px;
              font-weight: 800 !important;
            }

            .nombrelugar{

              color: #000000;
              font-family: "Montserrat", Sans-serif;
              font-size: 16px;
              font-weight: 700;
              text-transform: uppercase;

            }

            .img-hospedaje{
              object-fit: cover;
              border-radius: 10px 10px 10px 10px;
            }

            .titulorecomendacion{


              color: #000000;
              font-family: "Noto Serif Display", Sans-serif;
              font-size: 35px;
              font-weight: 700;
              font-style: italic;
              margin-bottom: 24px;
          }
          
          
          @media only screen and (max-width: 768px) {
          
            .titulorecomendacion{
          
              font-size: 25px;
             
          }
          }
          .panel-group .panel {
            border-radius: 0;
            box-shadow: none;
            border-color: #EEEEEE;
          }
          
          .panel-default > .panel-heading {
            padding: 0;
            border-radius: 0;
            color: #212121;
            background-color: #FAFAFA;
            border-color: #EEEEEE;
          }
          
          .panel-title {
            font-size: 14px;
          }
          
          .panel-title > a {
            display: block;
            padding: 15px;
            text-decoration: none;
          }
          
          .more-less {
            float: right;
            color: #212121;
          }
          
          .panel-default > .panel-heading + .panel-collapse > .panel-body {
            border-top-color: #EEEEEE;
          }
          `
  },

  "divisionChic": {

    'nombre': ``,
    'label': `<img src="https://i.postimg.cc/RFqNgW9r/divisionchic.png" width="100%" height="100%">
                <br>
                <br>
                <div class="gjs-block-label">
                Division
                </div> `,

    'components': `<div class="terminacion"></div>`,
    'style' : `.terminacion{

                background-color: #ECE7E300;
                background-image: url(https://eleve11.ar/wp-content/uploads/2022/09/terminacion-1.png);
                background-position: center center;
                background-repeat: no-repeat;
                background-size: auto;
            
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
                margin-top: -164px;
                margin-bottom: 0px;
                padding: 0% 0% 15% 0%;
                position:relative;
                z-index: 99999;
            }
  
            @media only screen and (max-width: 768px) {
            
                .terminacion {
                    
                    margin-top: -135px;
                    padding: 1% 0% 36% 0%;
                }
              
            }`

  }


}