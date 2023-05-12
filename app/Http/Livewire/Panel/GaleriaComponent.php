<?php

namespace App\Http\Livewire\Panel;

use Livewire\Component;

use App\Models\Galery;

use Illuminate\Support\Facades\Auth;

class GaleriaComponent extends Component
{
    public function render()
    {

        $userId = Auth::user() -> id ;

        $galeria = Galery::whereHas('Card', function ($query) use ($userId) {
                            $query->where('user_id', $userId);
                        })->get();


        return view('livewire.panel.galeria-component', compact('galeria'))
                    ->layout('layouts.panel');
    }
}
