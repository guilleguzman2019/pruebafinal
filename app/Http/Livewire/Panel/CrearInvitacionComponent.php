<?php

namespace App\Http\Livewire\Panel;

use Livewire\Component;

use Illuminate\Support\Str;

use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Redirect;

use Livewire\WithFileUploads;
use Livewire\WithPagination;
use App\Models\Card;
use App\Models\Template;

class CrearInvitacionComponent extends Component
{

    use WithFileUploads;
    use WithPagination;

    protected $paginationTheme = 'bootstrap';

    public $slug, $createArray, $home_bg_desktop, $home_bg_mobile, $editArray = ['image' => null], $imageEdit, $ctgry;



    public function updatedCreateArrayTitle($value)
    {
        $this -> slug = Str::slug($value);
    }

    public function save($id)

    {

        $template = Template::find($id);

        $nombreTemplate = $template -> name ;

        $this -> createArray['home_bg_desktop'] =  '/portadas/'.$nombreTemplate.'.png';

        $this -> createArray['slug'] = Str::slug($this -> createArray['title']) ;

        $this -> createArray['user_id'] = Auth::user() -> id ;

        $this -> createArray['subtitle'] = 'Nos Casamos' ;

        $this -> createArray['history_title'] = 'Nuestra Historia' ;

        $this -> createArray['history_description'] = 'Una propuesta, un Sí y una decisión que tomamos juntos. Nuestro amor ha crecido en nosotros, ha madurado y florecido, a veces sencillo, otras caótico pero siempre maravilloso.

        Así comienza una nueva etapa en nuestras vidas. Somos aventureros, dedicados, fuertes de carácter; los desafíos que hemos enfrentado nos han ayudado a crecer y madurar; debemos agradecer a esos retos porque con ellos nos hemos dado cuenta que juntos podemos lograr lo que nos proponemos.
        
        Tan sólo podemos decir que nuestra vida en estos momentos se encuentra completa y estamos listos para compartir el resto de nuestros días juntos.' ;

        $this -> createArray['instagram_title'] = 'Durante nuestra boda utiliza el hashtag' ;

        $this -> createArray['instagram_hashtag'] = '#BODAMARTIN&LAURA' ;

        $this -> createArray['dresscode_title'] = 'Código de Vestimenta' ;

        $this -> createArray['dresscode_type'] = 1 ;

        $this -> createArray['music_title'] = '¿Qué canciones no pueden faltar?' ;

        $this -> createArray['music_description'] = '¡Ayúdanos sugiriendo las canciones que pensás que no pueden faltar en nuestra boda!' ;

        $this -> createArray['gift_title'] = 'Mesa de Regalos' ;

        $this -> createArray['gift_description'] = 'Tu presencia es nuestro mejor regalo, pero si quieres bendecirnos con algún bien material, aquí te dejamos una lista de regalos que nos gustaría recibir, o bien, también puedes colaborar con nuestra Luna de Miel.' ;

        $this -> createArray['gift_bank'] = 'TITULAR: MATIAS NICOLAS SANCHEZ CBU: 1430001713011714940016 ALIAS: TUERCA.TRUCO.MANIJA Nº DE CUENTA: 1301171494001 CUIT: 23-36988681-9' ;

        $this -> createArray['phrase'] = 'Vayan a buscar sus mejores ropas porque estos que se aman van a dar el si.' ;

        $this -> createArray['transport_private_title'] = 'Transporte Privado' ;

        $this -> createArray['transport_private_description'] = 'Para facilitarte el traslado al lugar del evento contamos con un transporte privado.Para este servicio es necesario que confirmes para reservar tu lugar.' ;

        $this -> createArray['confirm_title'] = 'Confirmacion' ;

        $this -> createArray['confirm_description'] = 'Para poder participar de todo esto, es necesario que confirmes tu asistencia cuanto antes.La fecha límite es el 20 de Marzo del 2023.Completa el siguiente formulario para confirmar tu asistencia.' ;

        $this -> createArray['start_date'] = date('2023-09-07') ;

        $this -> createArray['template_id'] = $id ;

        $this -> createArray['status'] = 0 ;

        $card = Card::create( $this -> createArray );

        $slug = $card ->slug ;


        $this -> reset(['createArray']);
        $this -> emit('saved');

        Redirect::to('http://localhost:8000/panel/builder/'.$slug);
    }

    public function render()
    {
        $invitaciones = Card::orderBy('title') -> paginate();
        $templates = Template::orderBy('name') -> with('categories')->get() ;

        return view('livewire.panel.crear-invitacion-component', compact('invitaciones', 'templates'))
                    ->layout('layouts.panel');

    }
}
