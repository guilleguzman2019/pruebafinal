<?php

namespace App\Http\Livewire\Admin;

use Livewire\WithFileUploads;
use Livewire\WithPagination;
use App\Models\User;

use Livewire\Component;

class ClientComponent extends Component
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
            
        ]);

        $this -> createArray['password'] = md5($this -> createArray['password']);


        $cliente = User::create( $this -> createArray );


        $this -> reset(['createArray']);
        $this -> emit('saved');
    }

    public function edit(User $cliente)
    {
        $this -> clt = $cliente;
        $this -> editArray['name'] = $cliente -> name;
        $this -> editArray['email'] = $cliente -> email ;
        $this -> editArray['password'] = $cliente -> password ;
        
    }

    public function destroy(User $cliente)
    {
        //Storage::disk('public') -> delete($template -> image);
        $cliente -> delete();
        $this -> emit('deleted');
    }

    public function render()
    {
        $clientes  = User::orderBy('name') ->where('role', 2)-> paginate();
        return view('livewire.admin.client-component', compact('clientes'))
                    ->layout('layouts.admin');
    }
}
