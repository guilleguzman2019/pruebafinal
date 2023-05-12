<?php

namespace App\Http\Livewire\Panel;

use Livewire\Component;

use Illuminate\Support\Facades\Auth;

use App\Models\Confirmation;

class ConfirmadosComponent extends Component
{
    public function render()
    {

        $userId = Auth::user() -> id ;

        $confirmados = $userConfirmados = Confirmation::whereHas('Card', function ($query) use ($userId) {
                            $query->where('user_id', $userId);
                        })->get();


        return view('livewire.panel.confirmados-component', compact('confirmados'))
                    ->layout('layouts.panel');
    }
}
