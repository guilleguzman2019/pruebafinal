<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Panel;

//use App\Http\Controllers\OrderController;

//use App\Http\Livewire\Panel as Livewire;




Route::get('/', Panel\PanelController::class) -> name('panel.dashboard');