<?php

namespace App\Http\Livewire\Admin;

use Illuminate\Support\Facades\Storage;
use Livewire\Component;
use Livewire\WithFileUploads;
use Livewire\WithPagination;
use App\Models\Category;

class CategoryComponent extends Component
{
    use WithFileUploads;
    use WithPagination;

    protected $paginationTheme = 'bootstrap';

    public $createArray, $image, $editArray = ['image' => null], $imageEdit, $ctgry;

    public function save()
    {
        $this -> validate([
            'createArray.name' => 'required',
            'image' => 'required|image|mimes:png,jpg,jpeg|max:4096',
        ]);

        $this -> createArray['image'] = $this -> image -> store('img/categories');

        Category::create( $this -> createArray );

        $this -> reset(['image', 'createArray']);
        $this -> emit('saved');
    }

    public function edit(Category $id)
    {

        $this -> ctgry = $id;
        $this -> editArray['name'] = $this ->ctgry -> name;
        $this -> editArray['image'] = $this ->ctgry -> image;
    }

    public function update()
    {
        $this -> validate([
            'editArray.name' => 'required',
            'imageEdit' => 'nullable|image|mimes:png,jpg,jpeg|max:4096',
        ]);

        if ( $this -> imageEdit ) {
            Storage::disk('public') -> delete($this -> ctgry -> image);
            $this -> editArray['image'] = $this -> imageEdit -> store('img/categories');
        }

        $this -> ctgry -> update($this -> editArray);
        $this -> emit('updated');
    }

    public function destroy(Category $category)
    {
        Storage::disk('public') -> delete($category -> image);
        $category -> delete();
        $this -> emit('deleted');
    }

    public function render()
    {
        $categories = Category::orderBy('name') -> paginate(4);
        return view('livewire.admin.category-component', compact('categories'))
                    ->layout('layouts.admin');
    }
}
