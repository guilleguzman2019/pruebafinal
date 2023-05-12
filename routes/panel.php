<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Panel;

use App\Http\Controllers\OrderController;

use App\Http\Livewire\Panel as Livewire;


Route::get('/', Panel\PanelController::class) -> name('panel.dashboard');


Route::get('/crear', Livewire\CrearInvitacionComponent::class) -> name('panel.crearInvitacion');

Route::get('/confirmados', Livewire\ConfirmadosComponent::class) -> name('panel.confirmados');

Route::get('/canciones', Livewire\CancionesComponent::class) -> name('panel.canciones');

Route::get('/transporte', Livewire\TransporteComponent::class) -> name('panel.transporte');

Route::get('/galeria', Livewire\GaleriaComponent::class) -> name('panel.galeria');

Route::get('/padrinos', Livewire\PadrinosComponent::class) -> name('panel.padrinos');

Route::get('/eventos', Livewire\EventsComponent::class) -> name('panel.eventos');

Route::get('/regalos', Livewire\RegalosComponent::class) -> name('panel.regalos');

Route::get('/invitaciones', Livewire\InvitacionesComponent::class) -> name('panel.invitaciones');

Route::get('/builder/{slug}', [Panel\BuilderInvitationController::class, 'show']) -> name('panel.builder');

Route::get('/notificacion', [OrderController::class, 'notifications']) -> name('notificacion');