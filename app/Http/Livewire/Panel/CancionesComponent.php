<?php

namespace App\Http\Livewire\Panel;

use Livewire\Component;

use App\Models\Music;

use Illuminate\Support\Facades\Auth;

class CancionesComponent extends Component
{
    public function render()
    {
        $userId = Auth::user() -> id ;

        $musica = $userConfirmados = Music::whereHas('Card', function ($query) use ($userId) {
                            $query->where('user_id', $userId);
                        })->get();


        return view('livewire.panel.canciones-component', compact('musica'))
                    ->layout('layouts.panel');
    }
}
