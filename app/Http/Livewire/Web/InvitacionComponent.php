<?php

namespace App\Http\Livewire\Web;

use Livewire\Component;

use Illuminate\Support\Str;

use Livewire\WithFileUploads;
use Livewire\WithPagination;

use App\Models\Card;

use App\Models\Place;

use App\Models\Galery;

use App\Models\Gift;

use App\Models\Godparent;

use App\Models\Music;

use App\Models\Transfer;

use App\Models\Confirmation;

use Illuminate\Support\Facades\Auth;

class InvitacionComponent extends Component
{

    use WithFileUploads;
    use WithPagination;

    protected $paginationTheme = 'bootstrap';


    public $card, $titulo, $fecha, $historia, $image;

    public $event ;

    public $cantidaEvent ;

    public $arrayPlaces;

    public $time ;

    public $music ;

    public $arraymusica;

    public $arraytransfer;

    public $arrayconfirmation ;

    public $imgPortadaDesktop ;


    public $ArrayInvitacion = [] ;


    public function mount(Card $slug)
    {


        $this -> card = $slug;

        if ($this -> card -> status == '0')
            {
                return abort(404);
            }

        $this -> ArrayInvitacion['status'] = $this ->card -> status ;

        $this -> ArrayInvitacion['home_bg_desktop'] = $this ->card -> home_bg_desktop ;

        $this -> ArrayInvitacion['title'] = $this ->card -> title ;

        $this -> ArrayInvitacion['subtitle'] = $this ->card -> subtitle ;

        $this -> ArrayInvitacion['history_title'] = $this ->card -> history_title ;

        $this -> ArrayInvitacion['history_description'] = $this ->card -> history_description ;

        $this -> ArrayInvitacion['instagram_title'] = $this ->card -> instagram_title ;

        $this -> ArrayInvitacion['instagram_hashtag'] = $this ->card -> instagram_hashtag ;

        $this -> ArrayInvitacion['dresscode_title'] = $this ->card -> dresscode_title ;

        $this -> ArrayInvitacion['dresscode_type'] = $this ->card -> dresscode_type ;

        $this -> ArrayInvitacion['music_title'] = $this ->card -> music_title ;

        $this -> ArrayInvitacion['music_description'] = $this ->card -> music_description ;

        $this -> ArrayInvitacion['gift_title'] = $this ->card -> gift_title ;

        $this -> ArrayInvitacion['gift_description'] = $this ->card -> gift_description ;

        $this -> ArrayInvitacion['gift_bank'] = $this ->card -> gift_bank ;

        $this -> ArrayInvitacion['phrase'] = $this ->card -> phrase ;

        $this -> ArrayInvitacion['transport_private_title'] = $this ->card -> transport_private_title ;

        $this -> ArrayInvitacion['transport_private_description'] = $this ->card -> transport_private_description ;

        $this -> ArrayInvitacion['confirm_title'] = $this ->card -> confirm_title ;


        $this -> ArrayInvitacion['confirm_description'] = $this ->card -> confirm_description ;


        $this -> time = date('Y-m-d',strtotime($this -> card -> start_date));

        $this -> fecha = $this ->time ;



    }

    public function eliminar($id)
    {

        dd($id);

        $place = Place::find($id);
        
        $place->delete();

    }

    public function actualizar(){


        if ( $this -> imgPortadaDesktop ) {


            $this -> ArrayInvitacion['home_bg_desktop'] = $this -> imgPortadaDesktop -> store('img/portadas');

        }



        foreach ($this ->ArrayInvitacion as $clave => $valor) {

            $this->card->$clave = $valor;

            $this->card->save();
        }

    }


    

    public function addEvent()
    {



        if ( $this -> imageEvent ) {
            $this -> event['image'] = $this -> imageEvent -> store('img/eventos');
        }

        $this -> event['card_id'] = $this -> card -> id;

        $event = Place::create( $this -> event );




    }

    public function changeTime(){

        $this->card = Card::find($this->card -> id);

        $this->card -> start_date = date('Y-m-d', strtotime($this -> time));

        $this->card->save();


    }

    public function musica_invitation(){


        $this->card = Card::find($this->card -> id);

        $this->card -> music_invitation = $this -> music -> store('music/invitaciones');

        $this->card->save();

    }

    public function create_music(){

        $this -> arraymusica['card_id'] = $this -> card -> id;

        $musica = Music::create( $this -> arraymusica );

        $this->reset('arraymusica');


    }

    public function create_confirmation(){

        $this -> arrayconfirmation['card_id'] = $this -> card -> id;

        $confi = Confirmation::create( $this -> arrayconfirmation );

        $this->reset('arrayconfirmation');

    }


    public function create_transfer(){


        $this -> arraytransfer['card_id'] = $this -> card -> id;

        $musica = Transfer::create( $this -> arraytransfer );

        $this->reset('arraytransfer');

    }

    public function render()
    {
        $regalos = Gift::orderBy('title')
                                -> where('card_id', $this -> card -> id)
                                ->get();

        $fotos = Galery::orderBy('image')
                                -> where('card_id', $this -> card -> id)
                                -> get();

        $events = Place::orderBy('title')
                                -> where('card_id', $this -> card -> id)
                                -> paginate();

         $pa = Godparent::orderBy('name')
                                -> where('card_id', $this -> card -> id)
                                ->get();

        if ($this-> card -> template -> name == 'Boho') {

            return view('template.boho' , compact('events', 'fotos', 'regalos', 'pa'))
                        ->extends('layouts.invitacion') 
                        ->section('content');
        }
    
        if ($this-> card -> template -> name == 'Chic') {
    
            return view('template.Chic' , compact('events', 'fotos', 'regalos', 'pa'))
                        ->extends('layouts.invitacion') 
                        ->section('content');
        }
    
        if ($this-> card -> template -> name == 'Romantic') {
    
            return view('template.romantic' , compact('events', 'fotos', 'regalos', 'pa'))
                        ->extends('layouts.invitacion') 
                        ->section('content');
        }
    
        if ($this-> card -> template -> name == 'Western') {
    
          return view('template.western' , compact('events', 'fotos', 'regalos', 'pa'))
                        ->extends('layouts.invitacion') 
                        ->section('content');
        }


    }
}

