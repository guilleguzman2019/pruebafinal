<?php

namespace App\Http\Livewire\Panel;

use Livewire\Component;

use Illuminate\Support\Facades\Auth;

use App\Models\Gift;

class RegalosComponent extends Component
{
    public function render()
    {

        $userId = Auth::user() -> id ;

        $regalos = Gift::whereHas('Card', function ($query) use ($userId) {
                            $query->where('user_id', $userId);
                        })->get();


        return view('livewire.panel.regalos-component', compact('regalos'))
                    ->layout('layouts.panel');
    }
}
