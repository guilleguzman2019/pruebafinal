<?php

namespace App\Http\Livewire\Panel;

use Livewire\Component;

use Illuminate\Support\Facades\Auth;

use App\Models\GodParent;

class PadrinosComponent extends Component
{
    public function render()
    {

        $userId = Auth::user() -> id ;

        $padrinos = GodParent::whereHas('Card', function ($query) use ($userId) {
                            $query->where('user_id', $userId);
                        })->get();


        return view('livewire.panel.padrinos-component', compact('padrinos'))
                    ->layout('layouts.panel');
    }
}
