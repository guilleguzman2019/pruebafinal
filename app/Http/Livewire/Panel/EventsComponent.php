<?php

namespace App\Http\Livewire\Panel;

use Livewire\Component;

use Illuminate\Support\Facades\Auth;

use App\Models\Place;

class EventsComponent extends Component
{
    public function render()
    {

        $userId = Auth::user() -> id ;

        $eventos = Place::whereHas('Card', function ($query) use ($userId) {
                            $query->where('user_id', $userId);
                        })->get();


        return view('livewire.panel.events-component', compact('eventos'))
                    ->layout('layouts.panel');
    }
}
