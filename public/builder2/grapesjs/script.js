var final = invitacionId ;

console.log(final);

// init del grapesjs

const editor = grapesjs.init({
    height: '100%',
    showOffsets: 1,
    allowScripts: 1,
    noticeOnUnload: 0,
    storageManager: false,
    lang: 'es',
    mediaCondition: 'max-width',
     assetManager: {
      assets: '/grapesjs/img/',
      
      headers: {
        'XSRF-TOKEN': csrf
      },
      uploadFile: function (e) {
        var files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
        var formData = new FormData();
  
        // Agregar archivos al objeto FormData
        for (var i in files) {
          formData.append('files[]', files[i]);
        }
  
        // Enviar la solicitud POST al controlador de Laravel
        fetch('/upload/assets', {
          method: 'POST',
          body: formData,
          headers: {
            'X-CSRF-TOKEN': csrf // token CSRF obtenido de Laravel
          }
        })
        .then(response => response.json())
        .then(data => {
          // Agregar el archivo cargado a la lista de activos

          console.log(data);

          data.forEach(function(d) {

             var numero = Math.random() ;

             console.log(d);

            editor.AssetManager.add([
              {
                src: 'http://localhost:8000/'+d,
                name: numero,
                type: 'image'
              }
            ]);

          });

        })
        .catch(error => {
          console.error('Error al cargar el archivo:', error);
        });
      }
  },
  
    container: '#gjs',
    fromElement: true,
    plugins: [],
    pluginsOpts: {
    
    },
    canvas: {
      styles: ['https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css',
                'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css',
                'https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@500&display=swap" rel="stylesheet"',
                'https://fonts.googleapis.com/css2?family=Meow+Script&display=swap" rel="stylesheet"',
                'https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"',
                'https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"',
                'https://fonts.googleapis.com/css2?family=Oooh+Baby&display=swap" rel="stylesheet"',
                'https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap" rel="stylesheet',
                'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
                'prueba.css'],
      scripts: ['https://code.jquery.com/jquery-3.4.1.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js',
                'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/owl.carousel.min.js'
               ]
    }
  });
  
  
  const dc = editor.DomComponents;
  
  const bm = editor.BlockManager;
  
  
  //Comienzo portada western

  var portadahtml = componentes['portadaWestern'].components ;
  
  var portadacss = componentes['portadaWestern'].style;
  
  bm.add( 'Portada', {
    label: `
            <img src="https://i.postimg.cc/nrwnJ8td/portada.png" width="100%" height="100%">
            <br>
            <br>
            <div class="gjs-block-label">
              Portada
            </div> 
                  `,
    category: 'Portada',
    content: {
      type: 'Portada',
      activeOnRender: true,
      style: {
        'background-image': `url('${window.origin}/images/image-placeholder.png')`,
        'min-height': '200px',
        'background-size': 'cover',
        'background-position': 'center center',
        'background-repeat': 'no-repeat',
        'height': '100vh',
        'position':'relative',
        'display':'flex',
        'flex-direction':'column',
        'justify-content':'center',
        'background-size': 'auto',
        'align-items': 'center',
        'box-shadow': 'inset 0 0 0 2000px rgb(7 7 7 / 51%)'
  
      }
    }
  });
  
  
  dc.addType('Portada', {
    extend: 'default',
    model: {
      defaults: function () {
        return {
          name: 'Portada',
          type: 'image-block',
          components: portadahtml,
          styles: portadacss,
          void: false,
          droppable: false
        }
      }
    },
    view: {
      init () {
        this.listenTo(this.model, 'active', this.onActive)
        this.listenTo(this.model, 'change:src', this.updateImage)
      },
      events: {
        dblclick: 'onActive'
      },
      onActive () {
        editor.runCommand('open-assets', {
          target: this.model,
          types: ['image'],
          accept: 'image/*'
        })
      },
      updateImage (model, url) {
        if (url) {
          const style = model.getStyle()
  
          model.setStyle({
            'background-image': style['background-color'] || `url("${url}") `,
            'background-size': style['background-size'] || 'cover',
            'background-position': style['background-position'] || 'center center',
            'background-repeat': style['background-repeat'] || 'no-repeat',
            'min-height': style['min-height'] || '200px',
            'height' : style['height'] || '100vh',
            'position': style['position'] || 'relative',
            'display': style['display'] || 'flex',
            'flex-direction': style['flex-direction'] || 'column',
            'justify-content': style['justify-content'] || 'center',
            'background-size': style['background-size'] || 'auto',
            'align-items': style['align-items'] ||'center',
            'box-shadow': style['box-shadow'] || 'inset 0 0 0 2000px rgb(7 7 7 / 51%)'
  
          })
        }
      }
    }
  });


  //Comienzo portada boho

  var portadaBohohtml = componentes['portadaBoho'].components;
  
  var portadaBohocss = componentes['portadaBoho'].style;
  
  bm.add( 'PortadaBoho', {
    label: `
            <img src="https://i.postimg.cc/hvBJ1zJk/portadaboho.png" width="100%" height="100%">
            <br>
            <br>
            <div class="gjs-block-label">
            Portada Boho
            </div> 
                  `,
    category: 'Portada',
    content: {
      type: 'PortadaBoho',
      activeOnRender: true,
      style: {
        'background-image': `url('${window.origin}/images/image-placeholder.png')`,
        'min-height': '200px',
        'background-size': 'cover',
        'background-position': 'center center',
        'background-repeat': 'no-repeat',
        'height': '100vh',
        'position':'relative',
        'display':'flex',
        'flex-direction':'column',
        'justify-content':'center',
        'box-shadow': 'inset 0 0 0 2000px rgba(50, 25, 5, 0.3)'
  
      }
    }
  });
  
  
  dc.addType('PortadaBoho', {
    extend: 'default',
    model: {
      defaults: function () {
        return {
          name: 'PortadaBoho',
          components: portadaBohohtml,
          styles: portadaBohocss,
          void: false,
          droppable: false
        }
      }
    },
    view: {
      init () {
        this.listenTo(this.model, 'active', this.onActive)
        this.listenTo(this.model, 'change:src', this.updateImage)
      },
      events: {
        dblclick: 'onActive'
      },
      onActive () {
        editor.runCommand('open-assets', {
          target: this.model,
          types: ['image'],
          accept: 'image/*'
        })
      },
      updateImage (model, url) {
        if (url) {
          const style = model.getStyle()
  
          model.setStyle({
            'background-image': style['background-color'] || `url("${url}")`,
            'background-size': style['background-size'] || 'cover',
            'background-position': style['background-position'] || 'center center',
            'background-repeat': style['background-repeat'] || 'no-repeat',
            'min-height': style['min-height'] || '200px',
            'height' : style['height'] || '100vh',
            'position': style['position'] || 'relative',
            'display': style['display'] || 'flex',
            'flex-direction': style['flex-direction'] || 'column',
            'justify-content': style['justify-content'] || 'center',
            'box-shadow': style['box-shadow'] || 'inset 0 0 0 2000px rgba(7, 7, 7, 0.3)'
  
          })
        }
      }
    }
  });


  // Comienzo  Historia western
  
  var historiahtml = componentes['historiaWestern'].components ;
  
  var historiacss = componentes['historiaWestern'].style;
  
  var historialabel = componentes['historiaWestern'].label;
  
  bm.add('historia', {
    label: historialabel,
    category: 'Historia',
    content: {
      type: 'historia',
      activeOnRender: true,
      
    }
  });
  
  dc.addType('historia', {
    extend: 'default',
    model: {
      defaults: function () {
        return {
          name: 'Historia',
          type: 'historia',
          components: historiahtml,
          styles: historiacss,
          void: false,
          droppable: false
        }
      }
    },
    view: {
      init () {
        
      },
      events: {
        dblclick: ''
      }
    }
  })
  

  //Comienza  historia Boho

  var historiabohohtml = componentes['historiaBoho'].components;
  
  var historiabohocss = componentes['historiaBoho'].style;
  
  var historiaboholabel = componentes['historiaBoho'].label;
  
  bm.add('historiaboho', {
    label: historiaboholabel,
    category: 'Historia',
    content: {
      type: 'historiaboho',
      activeOnRender: true,
      
    }
  });
  
  dc.addType('historiaboho', {
    extend: 'default',
    model: {
      defaults: function () {
        return {
          name: 'historiaboho',
          type: 'historiaboho',
          components: historiabohohtml,
          styles: historiabohocss,
          void: false,
          droppable: false
        }
      }
    },
    view: {
      init () {
        
      },
      events: {
        dblclick: ''
      }
    }
  })

   //Comienza  historia romantic

   var historiaromantichtml = componentes['historiaRomantic'].components;
  
  var historiaromanticcss = componentes['historiaRomantic'].style;
  
  var historiaromanticlabel = componentes['historiaRomantic'].label;
  
  bm.add('historiaromantic', {
    label: historiaromanticlabel,
    category: 'Historia',
    content: {
      type: 'historiaromantic',
      activeOnRender: true,
      
    }
  });
  
  dc.addType('historiaromantic', {
    extend: 'default',
    model: {
      defaults: function () {
        return {
          name: 'historiaromantic',
          type: 'historiaromantic',
          components: historiaromantichtml,
          styles: historiaromanticcss,
          void: false,
          droppable: false
        }
      }
    },
    view: {
      init () {
        
      },
      events: {
        dblclick: ''
      }
    }
  })

    //Comienza  historia chic

    var historiachichtml = componentes['historiaChic'].components;
  
    var historiachiccss = componentes['historiaChic'].style;
    
    var historiachiclabel = componentes['historiaChic'].label;
    
    bm.add('historiachic', {
      label: historiachiclabel,
      category: 'Historia',
      content: {
        type: 'historiachic',
        activeOnRender: true,
        
      }
    });
    
    dc.addType('historiachic', {
      extend: 'default',
      model: {
        defaults: function () {
          return {
            name: 'historiachic',
            type: 'historiachic',
            components: historiachichtml,
            styles: historiachiccss,
            void: false,
            droppable: false
          }
        }
      },
      view: {
        init () {
          
        },
        events: {
          dblclick: ''
        }
      }
    })

  //declaracion de variables

  const defaultType = dc.getType("default");
  
  const defaultView = defaultType.view;
  
  
  
  // Comienzo  Hashtag western
  
  var Hashtaghtml = componentes['hashtagWestern'].components;
  
  var Hashtagcss = componentes['hashtagWestern'].style;
  
  var Hashtaglabel = componentes['hashtagWestern'].label;
  
  bm.add('Hashtag', {
    label: Hashtaglabel,
    category: 'Hashtag',
    content: {
      type: 'Hashtag',
      activeOnRender: true,
      
    }
  });
  
  dc.addType('Hashtag', {
    extend: 'default',
    model: {
      defaults: function () {
        return {
          name: 'Hashtag',
          type: 'Hashtag',
          components: Hashtaghtml,
          styles: Hashtagcss,
          void: false,
          droppable: false
        }
      }
    },
    view: {
      init () {
        
      },
      events: {
        dblclick: ''
      }
    }
  })


 // Comienzo  Hashtag boho

 var Hashtagbohohtml = componentes['hashtagBoho'].components;
  
 var Hashtagbohocss = componentes['hashtagBoho'].style;
 
 var Hashtagboholabel = componentes['hashtagBoho'].label;
 
 bm.add('Hashtagboho', {
   label: Hashtagboholabel,
   category: 'Hashtag',
   content: {
     type: 'Hashtagboho',
     activeOnRender: true,
     
   }
 });
 
 dc.addType('Hashtagboho', {
   extend: 'default',
   model: {
     defaults: function () {
       return {
         name: 'Hashtagboho',
         type: 'Hashtagboho',
         components: Hashtagbohohtml,
         styles: Hashtagbohocss,
         void: false,
         droppable: false
       }
     }
   },
   view: {
     init () {
       
     },
     events: {
       dblclick: ''
     }
   }
 })

 // Comienzo  Hashtag chic

 var Hashtagchichtml = componentes['hashtagChic'].components;
  
 var Hashtagchiccss = componentes['hashtagChic'].style;
 
 var Hashtagchiclabel = componentes['hashtagChic'].label;
 
 bm.add('Hashtagchic', {
   label: Hashtagchiclabel,
   category: 'Hashtag',
   content: {
     type: 'Hashtagchic',
     activeOnRender: true,
     
   }
 });
 
 dc.addType('Hashtagchic', {
   extend: 'default',
   model: {
     defaults: function () {
       return {
         name: 'Hashtagchic',
         type: 'Hashtagchic',
         components: Hashtagchichtml,
         styles: Hashtagchiccss,
         void: false,
         droppable: false
       }
     }
   },
   view: {
     init () {
       
     },
     events: {
       dblclick: ''
     }
   }
 })
 

// Comienzo  Vestimenta western
  
  var Vestimentahtml = componentes['vestimentaWestern'].components;
  
  var Vestimentacss = componentes['vestimentaWestern'].style;
  
  var Vestimentalabel = componentes['vestimentaWestern'].label;
  
  bm.add('Vestimenta', {
    label: Vestimentalabel,
    category: 'Vestimenta',
    content: {
      type: 'Vestimenta',
      activeOnRender: true,
      
    }
  });
  
  dc.addType('Vestimenta', {
    extend: 'default',
    model: {
      defaults: function () {
        return {
          name: 'Vestimenta',
          type: 'Vestimenta',
          components: Vestimentahtml,
          styles: Vestimentacss,
          void: false,
          droppable: false
        }
      }
    },
    view: {
      init () {
        
      },
      events: {
        dblclick: ''
      }
    }
  })
  

  // Comienzo  Vestimenta boho

  var Vestimentabohohtml = componentes['vestimentaBoho'].components;
  
  var Vestimentabohocss = componentes['vestimentaBoho'].style;
  
  var Vestimentaboholabel = componentes['vestimentaBoho'].label;
  
  bm.add('vestimentaboho', {
    label: Vestimentaboholabel,
    category: 'Vestimenta',
    content: {
      type: 'vestimentaboho',
      activeOnRender: true,
      
    }
  });
  
  dc.addType('vestimentaboho', {
    extend: 'default',
    model: {
      defaults: function () {
        return {
          name: 'vestimentaboho',
          type: 'vestimentaboho',
          components: Vestimentabohohtml,
          styles: Vestimentabohocss,
          void: false,
          droppable: false
        }
      }
    },
    view: {
      init () {
        
      },
      events: {
        dblclick: ''
      }
    }
  })

  
  // Comienzo  Canciones western
  
  var Canciones = componentes['cancionesWestern'].components;
  
  var Cancionescss = componentes['cancionesWestern'].style;
  
  var Cancioneslabel = componentes['cancionesWestern'].label;
  
  bm.add('Canciones', {
    label: Cancioneslabel,
    category: 'Canciones',
    content: {
      type: 'Canciones',
      activeOnRender: true,
      
    }
  });

  const scriptWestern = function(props) {

    console.log(props.myprop1);
    console.log(props.myprop2);

      // Seleccionar el formulario y agregar el controlador de eventos "submit"
      $('.formCancionWestern').submit(function(event) {
        // Prevenir el comportamiento predeterminado del formulario
        event.preventDefault();
    
        // Obtener los datos del formulario
        var formData = $(this).serialize();

        console.log(formData);

        formData += '&card_id=' + props.myprop1;
        formData += '&_token=' + props.myprop2;
    
        // Enviar los datos al servidor mediante una solicitud AJAX
        $.post('/canciones', formData, function(response) {
          // Manejar la respuesta del servidor aquí
          console.log(response);
          if(response.status == 'success'){

            console.log('entro');

            alert('Cancion enviada correctamente');

            document.getElementsByClassName('form-control').value = '';
          }
        });
      });
  };
  
  dc.addType('Canciones', {
    extend: 'default',
    model: {
      defaults: function () {
        return {
          name: 'Canciones',
          type: 'Canciones',
          components: Canciones,
          styles: Cancionescss,
          void: false,
          droppable: false,
          myprop1: final,
          myprop2: csrf,
          script: scriptWestern,
          'script-props': ['myprop1','myprop2'],
        }
      }
    },
    view: {
      init () {
        
      },
      events: {
        dblclick: ''
      }
    }
  })
  

  // Comienzo Canciones boho

  var Cancionesbohohtml = componentes['cancionesBoho'].components;
  
  var Cancionesbohocss = componentes['cancionesBoho'].style;
  
  var Cancionesboholabel = componentes['cancionesBoho'].label;
  
  bm.add('cancionesboho', {
    label: Cancionesboholabel,
    category: 'Canciones',
    content: {
      type: 'cancionesboho',
      activeOnRender: true,
      
    }
  });

  const script5 = function(props) {

    console.log(props.myprop1);
    console.log(props.myprop2);

      // Seleccionar el formulario y agregar el controlador de eventos "submit"
      $('.form_cancion').submit(function(event) {
        // Prevenir el comportamiento predeterminado del formulario
        event.preventDefault();
    
        // Obtener los datos del formulario
        var formData = $(this).serialize();

        console.log(formData);

        formData += '&card_id=' + props.myprop1;
        formData += '&_token=' + props.myprop2;
    
        // Enviar los datos al servidor mediante una solicitud AJAX
        $.post('/canciones', formData, function(response) {
          // Manejar la respuesta del servidor aquí
          console.log(response);
          if(response.status == 'success'){

            console.log('entro');

            alert('Cancion enviada correctamente');

            document.getElementsByClassName('form-control').value = '';
          }
        });
      });
  };
  
  dc.addType('cancionesboho', {
    extend: 'default',
    model: {
      defaults: function () {
        return {
          name: 'cancionesboho',
          type: 'cancionesboho',
          components: Cancionesbohohtml,
          styles: Cancionesbohocss,
          void: false,
          droppable: false,
          myprop1: final,
          myprop2: csrf,
          script: script5,
          'script-props': ['myprop1','myprop2'],
        }
      }
    },
    view: {
      init () {
        
      },
      events: {
        dblclick: ''
      }
    }
  })

  
  // Comienzo Transporte western
  
  var Transportehtml = componentes['transporteWestern'].components;
  
  var transportecss = componentes['transporteWestern'].style;
  
  var transportelabel = componentes['transporteWestern'].label;
  
  bm.add('Transporte', {
    label: transportelabel,
    category: 'Transporte',
    content: {
      type: 'Transporte',
      activeOnRender: true,
      
    }
  });


  const script4 = function(props) {

    console.log(props.myprop1);
    console.log(props.myprop2);

      // Seleccionar el formulario y agregar el controlador de eventos "submit"
      $('.form_transporte').submit(function(event) {
        // Prevenir el comportamiento predeterminado del formulario
        event.preventDefault();
    
        // Obtener los datos del formulario
        var formData = $(this).serialize();

        console.log(formData);

        formData += '&card_id=' + props.myprop1;
        formData += '&_token=' + props.myprop2;
    
        // Enviar los datos al servidor mediante una solicitud AJAX
        $.post('/transporte', formData, function(response) {
          // Manejar la respuesta del servidor aquí
          console.log(response);
        });
      });
  
    
  };
  
  dc.addType('Transporte', {
    extend: 'default',
    model: {
      defaults: function () {
        return {
          name: 'Transporte',
          type: 'Transporte',
          components: Transportehtml ,
          styles: transportecss ,
          void: false,
          droppable: false,
          myprop1: final,
          myprop2: csrf,
          script: script4,
          'script-props': ['myprop1','myprop2'],
        }
      }
    },
    view: {
      init () {
        
      },
      events: {
        dblclick: ''
      }
    }
  })
  
  
  // Comienzo Transporte boho

  var Transportebohohtml = componentes['transporteBoho'].components;
  
  var transportebohocss = componentes['transporteBoho'].style;
  
  var transporteboholabel = componentes['transporteBoho'].label;
  
  bm.add('transporteboho', {
    label: transporteboholabel,
    category: 'Transporte',
    content: {
      type: 'transporteboho',
      activeOnRender: true,
      
    }
  });

  const scriptTransporteBoho = function(props) {

    console.log(props.myprop1);
    console.log(props.myprop2);

      // Seleccionar el formulario y agregar el controlador de eventos "submit"
      $('.formTransporteBoho').submit(function(event) {
        // Prevenir el comportamiento predeterminado del formulario
        event.preventDefault();
    
        // Obtener los datos del formulario
        var formData = $(this).serialize();

        console.log(formData);

        formData += '&card_id=' + props.myprop1;
        formData += '&_token=' + props.myprop2;
    
        // Enviar los datos al servidor mediante una solicitud AJAX
        $.post('/transporte', formData, function(response) {
          // Manejar la respuesta del servidor aquí
          console.log(response);
          if(response.status == 'success'){

            console.log('entro');

            alert('Cancion enviada correctamente');

            document.getElementsByClassName('form-control').value = '';
          }
        });
      });
  };
  
  dc.addType('transporteboho', {
    extend: 'default',
    model: {
      defaults: function () {
        return {
          name: 'transporteboho',
          type: 'transporteboho',
          components: Transportebohohtml ,
          styles: transportebohocss ,
          void: false,
          droppable: false,
          myprop1: final,
          myprop2: csrf,
          script: scriptTransporteBoho,
          'script-props': ['myprop1','myprop2'],
        }
      }
    },
    view: {
      init () {
        
      },
      events: {
        dblclick: ''
      }
    }
  })

  
  // Comienzo  Regalos western
  
  var regaloshtml = componentes['regaloWestern'].components;
  
  var  regaloscss = componentes['regaloWestern'].style;
  
  var regaloslabel = componentes['regaloWestern'].label;
  
  const script = function() {
    
    $(document).ready(function() {
  
      $('.yang').click(function() {
  
        $("#yang").prop("checked", true);
        $("#yin").prop("checked", false);
       
        $('.contenregalo').show();           
          
        $('.datosbancarios').hide(); 
          
      });
    
      $('.yin').click(function() {
  
        $("#yang").prop("checked", false);
        $("#yin").prop("checked", true);
            
        $('.contenregalo').hide();           
          
        $('.datosbancarios').show(); 
          
      });
    });
  
  };
  
  bm.add('regalos', {
    label: regaloslabel,
    category: 'regalos',
    content: {
      type: 'regalos',
      activeOnRender: true,
      
    }
  });
  
  dc.addType('regalos', {
    extend: 'default',
    model: {
      defaults: function () {
        return {
          name: 'regalos',
          type: 'regalos',
          components: regaloshtml ,
          styles: regaloscss ,
          script,
          void: false,
          droppable: false
        }
      }
    },
    view: {
      init () {
        
      },
      events: {
        dblclick: ''
      }
    }
  })
  

  
  // Comienzo Mensaje western
  
  var mensajehtml = componentes['mensajeWestern'].components;
  
  var mensajecss = componentes['mensajeWestern'].style;
  
  var mensajelabel = componentes['mensajeWestern'].label;
  
  bm.add('mensaje', {
    label: mensajelabel,
    category: 'mensaje',
    content: {
      type: 'mensaje',
      activeOnRender: true,
      
    }
  });
  
  dc.addType('mensaje', {
    extend: 'default',
    model: {
      defaults: function () {
        return {
          name: 'mensaje',
          type: 'mensaje',
          components: mensajehtml ,
          styles: mensajecss ,
          void: false,
          droppable: false
        }
      }
    },
    view: {
      init () {
        
      },
      events: {
        dblclick: ''
      }
    }
  })
  

  
  // Comienzo Contador western
  
  var contadorhtml = componentes['contadorWestern'].components;
  
  var contadorcss = componentes['contadorWestern'].style;
  
  var contadorlabel = componentes['contadorWestern'].label;
  
  bm.add('contador', {
    label: contadorlabel,
    category: 'contador',
    content: {
      type: 'contador',
      activeOnRender: true,
      
    }
  });
  
  dc.addType('contador', {
    extend: 'default',
    model: {
      defaults: function () {
        return {
          name: 'contador',
          type: 'contador',
          components: contadorhtml ,
          styles: contadorcss ,
          void: false,
          droppable: false
        }
      }
    },
    view: {
      init () {
        
      },
      events: {
        dblclick: ''
      }
    }
  })
  
  
  // Comienzo Confirmacion western
  
  var confirmacionhtml = componentes['confirmacionWestern'].components;
  
  var confirmacioncss = componentes['confirmacionWestern'].style;
  
  var confirmacionlabel = componentes['confirmacionWestern'].label;
  
  bm.add('confirmacion', {
    label: confirmacionlabel,
    category: 'confirmacion',
    content: {
      type: 'confirmacion',
      activeOnRender: true,
      
    }
  });

  const script6 = function(props) {

    console.log(props.myprop1);
    console.log(props.myprop2);

      // Seleccionar el formulario y agregar el controlador de eventos "submit"
      $('.form_confirmados').submit(function(event) {
        // Prevenir el comportamiento predeterminado del formulario
        event.preventDefault();
    
        // Obtener los datos del formulario
        var formData = $(this).serialize();

        console.log(formData);

        formData += '&card_id=' + props.myprop1;
        formData += '&_token=' + props.myprop2;
    
        // Enviar los datos al servidor mediante una solicitud AJAX
        $.post('/confirmados', formData, function(response) {
          // Manejar la respuesta del servidor aquí
          console.log(response);
          if(response.status == 'success'){

            console.log('entro');

            alert('Confirmados enviado correctamente');

            document.getElementsByClassName('form-control').value = '';
          }
        });
      });
  };
  
  dc.addType('confirmacion', {
    extend: 'default',
    model: {
      defaults: function () {
        return {
          name: 'confirmacion',
          type: 'confirmacion',
          components: confirmacionhtml ,
          styles: confirmacioncss ,
          void: false,
          droppable: false,
          myprop1: final,
          myprop2: csrf,
          script: script6,
          'script-props': ['myprop1','myprop2'],
        }
      }
    },
    view: {
      init () {
        
      },
      events: {
        dblclick: ''
      }
    }
  })
  

  //Comienzo padrinos western

  var padrinosWesternhtml = componentes['padrinosWestern'].components;
  
  var padrinosWesterncss = componentes['padrinosWestern'].style;

  var padrinosWesternlabel = componentes['padrinosWestern'].label;
  
  bm.add('padrinosWestern', {
    label: padrinosWesternlabel,
    category: "padrinos",
    content: {
          type: 'padrinosWestern'
    }
  });
  
  
  
  dc.addType("padrinosWestern", {
    model: {
      defaults: {
        components: padrinosWesternhtml ,
        styles: padrinosWesterncss,
        droppable: false,
        traits: [
          
          {
            type: "number",
            name: "cantidadEvent",
            label: "N° de Padrinos",
            placeholder: '0-100',
            min: 0, // Minimum number value
            max: 100, // Maximum number value
            changeProp: 1,
          },
        ],
        script: function () {
  
          const cantidadEvent = "{[ cantidadEvent ]}";
  
          $('.padrinos-owl').owlCarousel({
            loop: false,
            margin: 1,
            nav: true,
            navText: [
              '<i class="fa fa-angle-left" aria-hidden="true"></i>',
              '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            autoplay: false,
            autoplayHoverPause: true,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 2
              },
              1000: {
                items: 2
              }
            }
          })
          
        },
      },
    },
  
    isComponent: (el) => {
      if (el.className && el.className.includes("swiper-container")) {
        return {
          type: "padrinosWestern",
        };
      }
    },
  
    view: defaultView.extend({
      init({ model }) {
        this.listenTo(model, "change:cantidadEvent", this.onActive);
        this.listenTo(model, "change:cantidadEvent", this.updateScript);
        this.listenTo(model, "change:cantidadEvent", this.onStyle);
      },
      onActive (model) {
  
        var cantidad = this.model.get("cantidadEvent");
  
        html = `<section class="padrinos" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                  <div class="container" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                    <div class="row text-xs-center p-t-1 p-b-4" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="col-md-12 text-center" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <br>
                        <h3 class="titulopadrino" data-gjs-highlightable="false">Padrinos</h3>
                        <br>
                        <div class="carousel-wrap" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <div class="owl-carousel padrinos-owl owl-theme" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">`;
  
        for (i=1; i<=cantidad; i++) {
  
          html += `<div class="item" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                    <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" class="image-cover" width="150">
                    <br>
                    <h5 class="titulopadrinos" >Hermano del Novio</h5>
                    <h2 class="nombrepadrino" >Juan Carlos</h2>
                  </div>`;
  
        };
  
        html += `</div>
                  </div>
                </div>
              </div>
            </section>`;
  
        
        const content = model.components(html);
  
      },
  
      onStyle (model){
  
        var css = ``;
  
        //const content = model.setStyle(css);
  
  
      }
  
  
    }),
  });
  
  
  // Comienzo galeria western
  
  var galeria2html = componentes['galeriaWestern'].components;
  
  var galeria2css = componentes['galeriaWestern'].style;
  
  bm.add('Galeria', {
    label: `
          <img src="https://i.postimg.cc/V6qKdNjJ/galeria.png" alt="Girl in a jacket" width="100%" height="100%">
          <br>
          <br>
          <div class="gjs-block-label">
          Galeria
          </div> `,
    category: "Galeria",
    content: {
          type: 'Galeria'
    }
  });
  
  const defaultType3 = dc.getType("default");
  
  const defaultView3 = defaultType.view;
  
  dc.addType("Galeria", {
    model: {
      defaults: {
        components: galeria2html ,
        styles: galeria2css,
        droppable: false,
        traits: [
          
          {
            type: "number",
            name: "cantidadEvent",
            label: "N° de Fotos",
            placeholder: '0-100',
            min: 0, // Minimum number value
            max: 100, // Maximum number value
            changeProp: 1,
          },
        ],
        script: function () {

          const initLib = function(){

            const owl = $('.galeria').owlCarousel({
              loop: false,
              margin: 10,
              nav: true,
              navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
              ],
              autoplay: true,
              autoplayHoverPause: true,
              responsive: {
                0: {
                  items: 1
                },
                600: {
                  items: 3
                },
                1000: {
                  items: 3
                }
              }
            });
          }
  
          if(typeof owl == 'undefined'){

            console.log('hola');

            const script1 = document.createElement('script');

            script1.onload = initLib();

            script1.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.0/jquery.min.js";

            const script2 = document.createElement('script');

            //script2.onload = initLib;

            script2.src = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/owl.carousel.min.js";
          }

          else{

            initLib();
          }
          
          
        },
      },
    },
  
    isComponent: (el) => {
      if (el.className && el.className.includes("swiper-container")) {
        return {
          type: "Galeria2",
        };
      }
    },
  
    view: defaultView.extend({
      init({ model }) {
        this.listenTo(model, "change:cantidadEvent", this.onActive);
        this.listenTo(model, "change:cantidadEvent", this.updateScript);
        this.listenTo(model, "change:cantidadEvent", this.onStyle);
      },
      onActive (model) {
  
        var cantidad = this.model.get("cantidadEvent");
  
        html = `<section class="galeria2" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                <div class="container" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                  <div class="row text-xs-center" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                    <div class="col-md-12 text-center m-0 p-0" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="carousel-wrap" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <div class="owl-carousel galeria" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">`;
  
        for (i=1; i<=cantidad; i++) {
  
          html += ` <div class="item" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false"><img class="img_galeria" src="https://eleve11.ar/wp-content/uploads/jet-engine-forms/1/2022/09/Sin-titulo-1_Mesa-de-trabajo-1-576x1024.jpg"></div>`;
  
        };
  
        html += ` </div>
                  </div>
              </div>
            </div>
          </section>`
  
        
        const content = model.components(html);
  
      },
  
      onStyle (model){
  
        var css = `.galeria3{

                  padding: 4% 4% 4% 4% !important;
                  background-color: #D7B7A2 !important;
                  position:relative !important;

          }
          .swiper-container {
            width: 330px;
            height: 400px;
                  }
            .swiper-slide {
                text-align: center;
                font-size: 18px;
                background: #fff;
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
                width:50px;
            }
            .swiper-slide img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .swiper-button-next{
                position:absolute;
                top:330px;
            }

            .swiper-button-prev {
                position:absolute;
                top:330px;
            }


            .divgaleria{

                padding: 31px 0px 30px 0px;
                overflow: hidden;
            }
            .img_galeria{

              height: 500px;
              object-fit: cover;
            }`;
  
        //const content = model.setStyle(css);
  
  
      }
  
  
    }),
  });
  
  
  // Comienzo eventos western
  
  var eventos2html = componentes['eventoWestern'].components;
  
  var eventos2css = componentes['eventoWestern'].style;
  
  bm.add('eventos', {
    label: `
          <img src="https://i.postimg.cc/rwRCDmTq/eventos.png" alt="Girl in a jacket" width="100%" height="100%">
          <br>
          <br>
          <div class="gjs-block-label">
          eventos
          </div> `,
    category: "eventos",
    content: {
          type: 'eventos'
    }
  });
  
  const defaultType4 = dc.getType("default");
  
  const defaultView4 = defaultType.view;
  
  dc.addType("eventos", {
    model: {
      defaults: {
        components: eventos2html ,
        styles: eventos2css,
        droppable: false,
        traits: [
          
          {
            type: "number",
            name: "cantidadEvent",
            label: "N° de Eventos",
            placeholder: '0-100',
            min: 0, // Minimum number value
            max: 100, // Maximum number value
            changeProp: 1,
          },
        ],
        script: function () {
  
          const cantidadEvent = "{[ cantidadEvent ]}";
  
          $('.eventos_owl').owlCarousel({
            loop: false,
            margin: 10,
            nav: true,
            navText: [
              '<i class="fa fa-angle-left" aria-hidden="true"></i>',
              '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 3
              },
              1000: {
                items: 3
              }
            }
          })
          
        },
      },
    },
  
    isComponent: (el) => {
      if (el.className && el.className.includes("swiper-container")) {
        return {
          type: "eventos2",
        };
      }
    },
  
    view: defaultView.extend({
      init({ model }) {
        this.listenTo(model, "change:cantidadEvent", this.onActive);
        this.listenTo(model, "change:cantidadEvent", this.updateScript);
        this.listenTo(model, "change:cantidadEvent", this.onStyle);
      },
      onActive (model) {
  
        var cantidad = this.model.get("cantidadEvent");
  
        html = `<section class="eventos2" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                  <div class="container " data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                    <div class="row text-xs-center" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                      <div class="col-md-12 text-center m-0 p-0" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                        <div class="carousel-wrap" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                          <div class="owl-carousel eventos_owl" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">`;
  
        for (i=1; i<=cantidad; i++) {
  
          html += `<div class="card p-4" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
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
                    </div>`;
  
        };
  
        html += ` </div>
                  </div>
              </div>
            </div>
          </section>`
  
        
        const content = model.components(html);
  
      },
  
      onStyle (model){
  
  
        var css = `.eventos2{
                  
                  padding: 4% 0px 4% 0px;
                  background-color: #D7B7A2;
                  }


                  @media only screen and (max-width: 768px) {

                    .eventos2{
                  
                      padding: 9% 10% 10% 10%;
                    
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
              }
  
                .owl-carousel{
                  display: flex !important;  // to override display:bloc i added !important
                  flex-direction: row;   
                  justify-content: center;  // to center you carousel
              }`;
  
        //const content = model.setStyle(css);
  
  
      }
  
  
    }),
  });
  
  
  // Comienzo listaRegalos western
  
  var listaregaloshtml = componentes['listaRegalosWestern'].components;
  
  var listaregaloscss = componentes['eventoWestern'].style;
  
  
  const defaultType5 = dc.getType("default");
  
  const defaultView5 = defaultType.view;
  
  dc.addType("listaregalos", {
    model: {
      defaults: {
        components: listaregaloshtml ,
        styles: listaregaloscss,
        droppable: false,
        traits: [
          
          {
            type: "number",
            name: "cantidadEvent",
            label: "N° de Regalos",
            placeholder: '0-100',
            min: 0, // Minimum number value
            max: 100, // Maximum number value
            changeProp: 1,
          },
        ],
        script: function () {
  
          const cantidadEvent = "{[ cantidadEvent ]}";
  
          $('.regalos').owlCarousel({
            loop: false,
            margin: 10,
            nav: true,
            navText: [
              '<i class="fa fa-angle-left" aria-hidden="true"></i>',
              '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            autoplay: false,
            autoplayHoverPause: true,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 3
              },
              1000: {
                items: 3
              }
            }
          })
          
        },
      },
    },
  
    isComponent: (el) => {
      if (el.className && el.className.includes("swiper-container")) {
        return {
          type: "listaregalos",
        };
      }
    },
  
    view: defaultView.extend({
      init({ model }) {
        this.listenTo(model, "change:cantidadEvent", this.onActive);
        this.listenTo(model, "change:cantidadEvent", this.updateScript);
        this.listenTo(model, "change:cantidadEvent", this.onStyle);
      },
      onActive (model) {
  
        var cantidad = this.model.get("cantidadEvent");
  
        html = `<div class="carousel-wrap re contenregalo pt-4" style="display:none;" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                  <div class="owl-carousel regalos" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">`;
  
        for (i=1; i<=cantidad; i++) {
  
          html += `<div class="card p-4" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                    <img class="card-img-top" src="https://eleve11.ar/wp-content/uploads/jet-engine-forms/1/2022/09/D_NQ_NP_885930-MLA47397157459_092021-O.webp" alt="Card image cap">
                    <div class="card-body" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                      <h5 class="card-title">LAMPARA COLGANTE</h5>
                      <span class="card-text">Lampara Campana Colgante 40cm Nórdica Escandinaba Madera</span>
                      <h5 class="cardprecio mt-3">$36452</h5>
                      <br>
                      <a href="" class="botonhashtag">REGALAR</a>
                    </div>
                  </div>`;
  
        };
  
        html += `</div>
                </div>`
  
        
        const content = model.components(html);
  
      },
  
      onStyle (model){
  
        console.log('hola');
  
        var css = `.owl-carousel{
                    display: flex !important;  // to override display:bloc i added !important
                    flex-direction: row;   
                    justify-content: center;  // to center you carousel
                  }
        
                  .card{
  
                    height: 550px;
                  }
        
                  .card-img-top{
  
                    height: 250px !important;
                  }`;
  
        //const content = model.setStyle(css);
  
  
      }
  
  
    }),
  });

  // Comienzo recomendacion western

  var recomendacionhtml = componentes['recomendacionesWestern'].components;
  
  var recomendacioncss = componentes['recomendacionesWestern'].style;

  var recomendacionlabel = componentes['recomendacionesWestern'].label;

  bm.add('recomendacion', {
    label: recomendacionlabel,
    category: 'recomendacion',
    content: {
      type: 'recomendacion',
      activeOnRender: true,
      
    }
  });

  const script2 = function() {

  };
  
  dc.addType('recomendacion', {
    extend: 'default',
    model: {
      defaults: function () {
        return {
          name: 'recomendacion',
          type: 'recomendacion',
          components: recomendacionhtml,
          styles: recomendacioncss,
          void: false,
          droppable: false,
          script: script2,
        }
      }
    },
    view: {
      init () {
        
      },
      events: {
        dblclick: ''
      }
    }
  })
  

  // Comienzo component division chic

  var divisionhtml = componentes['divisionChic'].components ;
  
  var divisioncss = componentes['divisionChic'].style;
  
  var divisionlabel = componentes['divisionChic'].label;
  
  bm.add('division', {
    label: divisionlabel,
    category: 'division',
    content: {
      type: 'division',
      activeOnRender: true,
      
    }
  });
  
  dc.addType('division', {
    extend: 'default',
    model: {
      defaults: function () {
        return {
          name: 'division',
          type: 'division',
          components: divisionhtml,
          styles: divisioncss,
          void: false,
          droppable: false
        }
      }
    },
    view: {
      init () {
        
      },
      events: {
        dblclick: ''
      }
    }
  })

  // Comienzo Component countdown
  
  let c = {
  
    // Default style
    defaultStyle: true,
  
    // Default start time, eg. '2018-01-25 00:00'
    startTime: '',
  
    // Text to show when the countdown is ended
    endText: 'EXPIRED',
  
    // Date input type, eg, 'date', 'datetime-local'
    dateInputType: 'date',
  
    // Countdown class prefix
    countdownClsPfx: 'countdown',
  
    // Countdown label
    labelCountdown: 'Countdown',
  
    // Countdown category label
    labelCountdownCategory: 'Extra',
  
    // Days label text used in component
    labelDays: 'days',
  
    // Hours label text used in component
    labelHours: 'hours',
  
    // Minutes label text used in component
    labelMinutes: 'minutes',
  
    // Seconds label text used in component
    labelSeconds: 'seconds',
  };
  
  const domc = editor.DomComponents;
  const defaultType99 = domc.getType('default');
  const textType = domc.getType('text');
  const defaultModel = defaultType99.model;
  const defaultView99 = defaultType99.view;
  const textModel = textType.model;
  const textView = textType.view;
  const pfx = c.countdownClsPfx;
  const COUNTDOWN_TYPE = 'countdown';
  
  domc.addType(COUNTDOWN_TYPE, {
  
    model: {
      defaults: {
        ...defaultModel.prototype.defaults,
        startfrom: c.startTime,
        endText: c.endText,
        droppable: false,
        styles: `<style>
        .${pfx} {
          text-align: center;
          
        }
    
        .${pfx}-block {
          display: inline-block;
          margin: 0 25px;
          padding: 10px;
        }
    
        .${pfx}-digit {
          font-size: 4rem;
        }
    
        .${pfx}-endtext {
          font-size: 5rem;
        }
    
        .${pfx}-cont,
        .${pfx}-block {
          display: inline-block;
          font-family: "Noto Serif Display", Sans-serif !important;
          color:white !important;
        }
      </style>`,
        traits: [{
          label: 'Start',
          name: 'startfrom',
          changeProp: 1,
          type: c.dateInputType,
        },{
          label: 'End text',
          name: 'endText',
          changeProp: 1,
        }],
        script: function() {
          var startfrom = '{[ startfrom ]}';
          var endTxt = '{[ endText ]}';
          var countDownDate = new Date(startfrom).getTime();
          var countdownEl = this.querySelector('[data-js=countdown]');
          var endTextEl = this.querySelector('[data-js=countdown-endtext]');
          var dayEl = this.querySelector('[data-js=countdown-day]');
          var hourEl = this.querySelector('[data-js=countdown-hour]');
          var minuteEl = this.querySelector('[data-js=countdown-minute]');
          var secondEl = this.querySelector('[data-js=countdown-second]');
          var oldInterval = this.gjs_countdown_interval;
          if(oldInterval) {
            oldInterval && clearInterval(oldInterval);
          }
  
          var setTimer = function (days, hours, minutes, seconds) {
            dayEl.innerHTML = days < 10 ? '0' + days : days;
            hourEl.innerHTML = hours < 10 ? '0' + hours : hours;
            minuteEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
            secondEl.innerHTML = seconds < 10 ? '0' + seconds : seconds ;
          }
  
          var moveTimer = function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / 86400000);
            var hours = Math.floor((distance % 86400000) / 3600000);
            var minutes = Math.floor((distance % 3600000) / 60000);
            var seconds = Math.floor((distance % 60000) / 1000);
  
            setTimer(days, hours, minutes, seconds);
  
            /* If the count down is finished, write some text */
            if (distance < 0) {
              clearInterval(interval);
              endTextEl.innerHTML = endTxt;
              countdownEl.style.display = 'none';
              endTextEl.style.display = '';
            }
          };
  
          if (countDownDate) {
            var interval = setInterval(moveTimer, 1000);
            this.gjs_countdown_interval = interval;
            endTextEl.style.display = 'none';
            countdownEl.style.display = '';
            moveTimer();
          } else {
            setTimer(0, 0, 0, 0);
          }
        }
      },
    }, 
      isComponent(el) {
        if(el.getAttribute &&
          el.getAttribute('data-gjs-type') == COUNTDOWN_TYPE) {
          return {
            type: COUNTDOWN_TYPE
          };
        }
      },
  
      view: defaultView.extend({
      init() {
        this.listenTo(this.model, 'change:startfrom change:endText', this.updateScript);
        const comps = this.model.get('components');
  
        // Add a basic countdown template if it's not yet initialized
        if (!comps.length) {
          comps.reset();
          comps.add(`
            <span data-js="countdown" class="${pfx}-cont" >
              <div class="${pfx}-block" >
                <div data-js="countdown-day" class="${pfx}-digit" ></div>
                <div class="${pfx}-label" >${c.labelDays}</div>
              </div>
              <div class="${pfx}-block" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                <div data-js="countdown-hour" class="${pfx}-digit" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false"></div>
                <div class="${pfx}-label" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">${c.labelHours}</div>
              </div>
              <div class="${pfx}-block" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                <div data-js="countdown-minute" class="${pfx}-digit" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false"></div>
                <div class="${pfx}-label" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">${c.labelMinutes}</div>
              </div>
              <div class="${pfx}-block" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">
                <div data-js="countdown-second" class="${pfx}-digit" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false"></div>
                <div class="${pfx}-label" data-gjs-hoverable="false" data-gjs-layerable="false" data-gjs-editable="false" data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-droppable="false">${c.labelSeconds}</div>
              </div>
            </span>
            <span data-js="countdown-endtext" class="${pfx}-endtext"></span>
          `);
        }
  
      }
    }),
  });
  


  // Comienzo  formulario
  
  dc.addType('form', {
    isComponent: el => el.tagName == 'FORM',
  
    model: {
      defaults: {
        tagName: 'form',
        droppable: ':not(form)',
        draggable: ':not(form)',
        attributes: { method: 'get' },
        traits: [{
          type: 'select',
          name: 'method',
          options: [
            {value: 'get', name: 'GET'},
            {value: 'post', name: 'POST'},
          ],
        }, {
          name: 'action',
        }],
      },
    },
  
    view: {
      events: {
        // The submit of the form might redirect the user from the editor so
        // we should always prevent the default here.
        submit: (e) => e.preventDefault(),
      }
    },
  });
  
  // Comienzo  input

  dc.addType('input', {
    isComponent: el => el.tagName == 'INPUT',
  
    model: {
      defaults: {
        tagName: 'input',
        droppable: false,
        highlightable: false,
        attributes: { type: 'text' },
        traits: [
          {
            name: 'name',
          },
          {
            name: 'placeholder',
          },
          {
            type: 'select',
            name: 'type',
            options: [
              { value: 'text' },
              { value: 'email' },
              { value: 'password' },
              { value: 'number' },
            ]
          },
          {
            type: 'checkbox',
            name: 'required',
          }
        ],
      },
    },
  
    extendFnView: ['updateAttributes'],
    view: {
      updateAttributes() {
        this.el.setAttribute('autocomplete', 'off');
      },
    }
  });
  
  const checkIfInPreview = (ev) => {
    if (!editor.Commands.isActive('preview')) {
      ev.preventDefault();
    }
  };
  
  // Comienzo  boton
  
  dc.addType('button', {
    extend: 'input',
    isComponent: el => el.tagName == 'button',
  
    model: {
      defaults: {
        tagName: 'button',
        attributes: { type: 'button' },
        text: 'Send',
        traits: [
          {
            name: 'text',
            changeProp: true,
          }, {
            type: 'select',
            name: 'type',
            options: [
              { value: 'button' },
              { value: 'submit' },
              { value: 'reset' },
            ]
        }]
      },
  
      init() {
        const comps = this.components();
        const tChild =  comps.length === 1 && comps.models[0];
        const chCnt = (tChild && tChild.is('textnode') && tChild.get('content')) || '';
        const text = chCnt || this.get('text');
        this.set('text', text);
        this.on('change:text', this.__onTextChange);
        (text !== chCnt) && this.__onTextChange();
      },
  
      __onTextChange() {
        this.components(this.get('text'));
      },
    },
  
    view: {
      events: {
        click: checkIfInPreview,
      },
    },
  });
  
  
  
  var  cmmd = editor.Commands;
  var  pnm = editor.Panels;
  
  
  /* ABSOLUTE AND DEFAULT MODE BUTTON */
  cmmd.add('change_mode', {
    run: function(editor) {
      console.log("----> Drag Mode On <----");
      editor.getModel().set('dmode', 'absolute');
    },
    stop: function(editor) {
      console.log("----> Drag Mode Off <----");
      editor.getModel().set('dmode', 'default');
    },
  });

  /* CLEAN CANVA */
  cmmd.add('clean-canvas', {
    run: function(editor) {

        editor.DomComponents.clear(); // Elimina todos los componentes del lienzo
        editor.CssComposer.clear(); // Elimina todas las reglas CSS del lienzo
        editor.UndoManager.clear(); // Elimina todo el historial del editor
      
    },
    stop: function(editor) {
      
      editor.UndoManager.add(editor.getHtml());
    },
  });
  
  
  pnm.addButton('options', [{
    className: 'fa fa-hand-rock-o',
    command: 'change_mode',
    attributes: {
      title: 'Drag Mode'
    }
  }]);

  editor.Panels.addButton('options', {
    id: 'clean-canvas',
    className: 'fa fa-trash',
    command: 'clean-canvas',
    attributes: {
      title: 'Limpiar lienzo'
    }
  });
  
  //boton personalizado

  if(invitacionStatus == '0'){

    editor.Panels.addPanel({
      id: 'my-custom-panel',
      visible: true,
      buttons: [{
        id: 'my-custom-button',
        className: 'my-custom-button',
        label: 'Compartir invitacion',
        command: function() {
          
          window.location.href = href;
        }
      }]
    });


  }
  else{

    editor.Panels.addPanel({
      id: 'my-custom-panel',
      visible: true,
      buttons: [{
        id: 'my-custom-button',
        className: 'my-custom-button',
        label: 'Compartir invitacion',
        command: function() {

          $('.btn-modal').click();

        }
      }]
    });

  }
  
  editor.Panels.addPanel({
    id: 'my-custom-panel',
    visible: true,
    buttons: [{
      id: 'my-custom-button',
      className: 'my-custom-button',
      label: 'Compartir invitacion',
      command: function() {
        
        window.location.href = href;
      }
    }]
  });

  editor.Panels.addButton('options', {
    id: 'export',
    className: 'fa fa-download',
    command: 'export',
    attributes: {
      title: 'Exportar diseño'
    }
  });
  
  // Definir la función que se ejecutará cuando se haga clic en el botón
  editor.Commands.add('export', {
    run: function(editor, sender) {
      const json = editor.getProjectData();
      console.log(json);
    }
  });

  
  
  const categories = editor.BlockManager.getCategories();

  categories.each(category => {
      category.set('open', false).on('change:open', opened => {
          opened.get('open') && categories.each(category => {
              category !== opened && category.set('open', false)
          })
      })
  })


  let styleManager = editor.StyleManager;
    let typographySector = styleManager.getSector('typography');
    let fontProperty = styleManager.getProperty('typography', 'font-family');
    console.log(fontProperty);
    let list = fontProperty.get('options');
    list.push({ value: 'Playfair Display', name: 'Playfair Display' });
    list.push({ value: 'Noto Serif Display', name: 'Noto Serif Display' });
    list.push({ value: 'Meow Script', name: 'Meow Script' });
    list.push({ value: 'Montserrat', name: 'Montserrat' });
    list.push({ value: 'Oooh Baby', name: 'Oooh Baby' });
    list.push({ value: 'Playfair Display SC', name: 'Playfair Display SC' });
    fontProperty.set('options', list);
    styleManager.render();


    editor.StyleManager.addProperty('typography',{
      name: 'font-style',
      type: 'select',
      defaults: 'normal',
      options: [
        {value: 'normal', name: 'Normal'},
        {value: 'italic', name: 'Italic'},
        {value: 'oblique', name: 'Oblique'}
      ]
    }, { at: 3 });


    editor.Panels.addButton('options', {
      id: 'save',
      className: 'fa fa-save',
      command: 'save',
      attributes: {
        title: 'Guardar paguina'
      }
    });

    editor.Commands.add('save', {
      run: function(editor, sender) {

          var html = editor.getHtml();
          var css = editor.getCss();
          var csrfToken = csrf ;

        $.ajax({
          url: '/guardar-html-css/' + slug,
          method: 'POST',
          data: {
            html: html,
            css: css
          },
          headers: {
            'X-CSRF-TOKEN': csrfToken // agrega el token CSRF como encabezado de la petición
          },
          success: function(response) {
            // Aquí puedes agregar código que se ejecute en caso de que la petición se haya enviado con éxito
            console.log(response);
          },
          error: function(xhr, status, error) {
            // Aquí puedes agregar código que se ejecute en caso de que la petición haya fallado
            console.log(error);
          }
        });
      }
    });


    if (html === '') {

      console.log(nombreTemplate);

      var template = template[nombreTemplate];

      console.log(template);

      editor.loadProjectData(template);

    }
    else{

      editor.setComponents(he.decode(html));

      editor.setStyle(he.decode(css));
    }
    
    


    

  


    

    

