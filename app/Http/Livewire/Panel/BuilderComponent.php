<?php

namespace App\Http\Livewire\Panel;

use Illuminate\Support\Facades\Storage;

use Illuminate\Support\Facades\DB;

use chillerlan\QRCode\QRCode;
use chillerlan\QRCode\QROptions;

use Livewire\Component;

use App\Models\Card;

use App\Models\Place;

use App\Models\Galery;

use App\Models\Gift;

use App\Models\Godparent;

use Livewire\WithFileUploads;

class BuilderComponent extends Component
{

    use WithFileUploads;


    public $qrCode;
    
    public $time ;

    public $invitacion;

    //variables Padrinos

    public $arrayPadrinos ;

    public $imagePadrinos;

    public $padrinos;

    public $arrayeditPadrionos = ['photo' => null];
    
    public $pdnos;
    
    public $imagenpadrinosedit ;

    //variables Galeria

    public $arrayGaleria ;

    public $imageGaleria;

    public $galeria;

    public $arrayeditGaleria = ['image' => null];
    
    public $gla;
    
    public $imagengaleriaedit ;


    //variables Eventos
    
    public $arrayEvent ;

    public $imageEvent;

    public $event;

    public $arrayeditEvent = ['image' => null];
    
    public $evnt;
    
    public $imagenventedit ;


    //variables Regalos
    
    public $arrayRegalo;

    public $imagenRegalo;

    public $gift ;

    public $ArrayEdit = ['image' => null] ;

    public $gft ;

    public $imgEditGift ;


    public function mount(Card $slug){

        $options = new QROptions(
            [
              'eccLevel' => QRCode::ECC_L,
              'outputType' => QRCode::OUTPUT_MARKUP_SVG,
              'version' => 5,
            ]
          );

        $this -> invitacion = $slug ;

        $this ->qrCode = (new QRCode($options))->render('http://localhost:8000/invitacions/'.$this -> invitacion->slug);

    }

    public function addPadrino(){

        $this -> validate([
            'arrayPadrinos.name' => 'required',
            'arrayPadrinos.type' => 'required',
            'arrayPadrinos.relationship' => 'required',
            'imagePadrinos' => 'required|image|mimes:png,jpg,jpeg|max:4096',
        ]);

        
        $this -> arrayPadrinos['photo'] = $this -> imagePadrinos -> store('img/padrinos') ;


        $this -> arrayPadrinos['card_id'] = $this -> invitacion -> id ;

        
        $galeria = Godparent::create( $this -> arrayPadrinos );


        $this->reset('arrayPadrinos');

        $this->reset('imagePadrinos');

    }

    public function deletePadrino(Godparent $padrino){


        Storage::disk('public') -> delete($padrino -> photo);
        $padrino -> delete();
        //$this -> emit('deleted');

    }

    public function editPadrino(Godparent $padrino){

        $this -> pdnos = $padrino;
        $this -> arrayeditPadrionos['photo'] = $this -> pdnos -> photo;
        $this -> arrayeditPadrionos['name'] = $this -> pdnos -> name;
        $this -> arrayeditPadrionos['relationship'] = $this -> pdnos -> relationship;
        $this -> arrayeditPadrionos['type'] = $this -> pdnos -> type;
        

    }

    public function updatePadrino(){

        if ( $this -> imagenpadrinosedit ) {
            Storage::disk('public') -> delete($this -> pdnos -> photo);
            $this -> arrayeditPadrionos['photo'] = $this -> imagenpadrinosedit -> store('img/padrinos');
        }

        $this -> pdnos -> update($this -> arrayeditPadrionos);
    }

    public function addGalery(){

        $this -> validate([
            'imageGaleria' => 'required|image|mimes:png,jpg,jpeg|max:4096',
        ]);


        $this -> arrayGaleria['image'] = $this -> imageGaleria -> store('img/galeria') ;


        $this -> arrayGaleria['card_id'] = $this -> invitacion -> id ;

        
        $galeria = Galery::create( $this -> arrayGaleria );


        $this->reset('arrayGaleria');

        $this->reset('imageGaleria');

    }

    public function deleteGalery(Galery $galeria){

        Storage::disk('public') -> delete($galeria -> image);
        $galeria -> delete();
        //$this -> emit('deleted');

    }

    public function editGalery(Galery $galeria){

        $this -> gla = $galeria;
        $this -> arrayeditGaleria['image'] = $this -> gla -> image;
        

    }

    public function updateGalery(){

        if ( $this -> imagengaleriaedit ) {
            Storage::disk('public') -> delete($this -> gla -> image);
            $this -> arrayeditGaleria['image'] = $this -> imagengaleriaedit -> store('img/galeria');
        }

        $this -> gla -> update($this -> arrayeditGaleria);
    }

   

    public function addEvent(){

        $this -> validate([
            'arrayEvent.title' => 'required',
            'arrayEvent.start_date' => 'required',
            'arrayEvent.place_name' => 'required',
            'arrayEvent.address' => 'required',
            'arrayEvent.google_maps' => 'required',
            'imageEvent' => 'required|image|mimes:png,jpg,jpeg|max:4096',
        ]);


        $this -> arrayEvent['image'] = $this -> imageEvent -> store('img/Eventos') ;


        $this -> arrayEvent['card_id'] = $this -> invitacion -> id ;

        //$this -> arrayEvent['start_date'] =  date('Y-m-d') ;

        
        $event = Place::create( $this -> arrayEvent );


        $this->reset('arrayEvent');

        $this->reset('imageEvent');

    }

    public function deleteEvent(Place $event){

        Storage::disk('public') -> delete($event -> image);
        $event -> delete();
        //$this -> emit('deleted');

    }

    public function editEvent(Place $event){

        $this -> evnt = $event;
        $this -> arrayeditEvent['image'] = $this -> evnt -> image;
        $this -> arrayeditEvent['title'] = $this -> evnt -> title;
        $this -> arrayeditEvent['start_date'] = $this -> evnt -> start_date;
        $this -> arrayeditEvent['place_name'] = $this -> evnt -> place_name;
        $this -> arrayeditEvent['address'] =$this -> evnt -> address;
        $this -> arrayeditEvent['google_maps'] = $this -> evnt -> google_maps;

    }

    public function updateEvent(){

        if ( $this -> imagenventedit ) {
            Storage::disk('public') -> delete($this -> evnt -> image);
            $this -> arrayeditEvent['image'] = $this -> imagenventedit -> store('img/Eventos');
        }

        $this -> evnt -> update($this -> arrayeditEvent);
    }


    

    public function addGift(){

        $this -> validate([
            'arrayRegalo.title' => 'required',
            'arrayRegalo.description' => 'required',
            'arrayRegalo.precio' => 'required',
            'arrayRegalo.link' => 'required',
            'imagenRegalo' => 'required|image|mimes:png,jpg,jpeg|max:4096',
        ]);

        $this -> arrayRegalo['image'] = $this -> imagenRegalo -> store('img/Gifts') ;


        $this -> arrayRegalo['card_id'] = $this -> invitacion -> id ;

        
        $event = Gift::create( $this -> arrayRegalo );

        $this->reset('arrayRegalo');

        $this->reset('imagenRegalo');


    }

    public function deleteGift(Gift $regalo){

        Storage::disk('public') -> delete($regalo -> image);
        $regalo -> delete();
        //$this -> emit('deleted');

    }

    public function editGift(Gift $regalo){


        $this -> gft = $regalo;

        $this -> ArrayEdit['image'] = $this ->gft -> image;
        $this -> ArrayEdit['title'] = $this ->gft -> description;
        $this -> ArrayEdit['description'] = $this ->gft -> description;
        $this -> ArrayEdit['precio'] = $this ->gft -> precio;
        $this -> ArrayEdit['link'] = $this ->gft -> link;

    }

    public function updateGift(){

        if ( $this -> imgEditGift ) {
            Storage::disk('public') -> delete($this -> gft -> image);
            $this -> ArrayEdit['image'] = $this -> imgEditGift -> store('img/Gifts');
        }

        $this -> gft -> update($this -> ArrayEdit);
    }

    
    public function render()
    {

        $regalos = Gift::orderBy('id')
                                -> where('card_id', $this -> invitacion -> id)
                                -> get();
                                
        $fotos = Galery::orderBy('image')
                                -> where('card_id', $this -> invitacion -> id)
                                ->get();

        $events = Place::orderBy('title')
                                -> where('card_id', $this -> invitacion -> id)
                                ->get();

        $pa = Godparent::orderBy('name')
                                -> where('card_id', $this -> invitacion -> id)
                                ->get();


        return view('livewire.panel.builder-component' , compact('events','fotos', 'regalos','pa'))
                    ->layout('layouts.builder');
    }
}