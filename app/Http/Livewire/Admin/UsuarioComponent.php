<?php

namespace App\Http\Livewire\Admin;

use Livewire\Component;

use Livewire\WithFileUploads;
use Livewire\WithPagination;
use App\Models\User;

class UsuarioComponent extends Component
{
    use WithPagination;

    protected $paginationTheme = 'bootstrap';

    public  $image ,$createArray, $editArray = ['image' => null], $clt;


    public function save()
    {
        $this -> validate([
            'createArray.name' => 'required',
            'createArray.email' =>'required',
            'createArray.password' =>'required',
            'createArray.role' =>'required',
            
        ]);

        $this -> createArray['password'] = md5($this -> createArray['password']);



        $cliente = User::create( $this -> createArray );


        $this -> reset(['createArray']);
        $this -> emit('saved');
    }

    public function edit(User $usuario)
    {
        $this -> clt = $usuario;
        $this -> editArray['name'] = $usuario -> name;
        $this -> editArray['email'] = $usuario -> email ;
        $this -> editArray['password'] = $usuario -> password ;
        
    }

    public function destroy(User $usuario)
    {
        //Storage::disk('public') -> delete($template -> image);
        $usuario -> delete();
        $this -> emit('deleted');
    }

    public function render()
    {
        $usuarios  = User::orderBy('name') -> paginate(4);
        return view('livewire.admin.usuario-component', compact('usuarios'))
                    ->layout('layouts.admin');
    }
}
