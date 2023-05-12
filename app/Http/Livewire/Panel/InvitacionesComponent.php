<?php

namespace App\Http\Livewire\Panel;

use Livewire\Component;

use Illuminate\Support\Facades\Auth;

use App\Models\Card;

class InvitacionesComponent extends Component
{
    public function render()
    {
        $userId = Auth::user() -> id ;

        $invitaciones = Card::where('user_id', $userId)->get();

        return view('livewire.panel.invitaciones-component', compact('invitaciones'))
                    ->layout('layouts.panel');
    }
}
