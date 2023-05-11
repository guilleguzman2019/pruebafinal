<?php

use Illuminate\Support\Facades\Route;

Route::get('redirect', function() {
    if ( Auth::user() -> role == 1 ) {
        return redirect() -> route('admin.dashboard');
    } else {
        return redirect() -> route('panel.dashboard');
    }
});

Route::get('/', function () {
    return view('welcome');
});

Route::get('/prueba', function () {
    return view('prueba');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified'
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
