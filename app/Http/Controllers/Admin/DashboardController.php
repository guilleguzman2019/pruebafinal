<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class DashboardController extends Controller
{
    
    public function __invoke()
    {

        if ( Auth::user() -> role == 2 )
            return redirect() -> route('panel.dashboard');

        return view('admin.dashboard');
    }

}