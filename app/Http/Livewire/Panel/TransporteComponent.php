<?php

namespace App\Http\Livewire\Panel;

use Livewire\Component;

use App\Models\Transfer;

use Illuminate\Support\Facades\Auth;

class TransporteComponent extends Component
{
    public function render()
    {

        $userId = Auth::user() -> id ;

        $transporte = $userConfirmados = Transfer::whereHas('Card', function ($query) use ($userId) {
                            $query->where('user_id', $userId);
                        })->get();


        return view('livewire.panel.transporte-component', compact('transporte'))
                    ->layout('layouts.panel');
    }
}
