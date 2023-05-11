<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Card extends Model
{
    use HasFactory;
    use Sluggable;

    protected $guarded = [];


    //RELATIONS
    public function template()
    {
        return $this -> belongsTo(Template::class); 
    }

    public function godparents()
    {
        return $this -> hasMany(Godparent::Class); 
    }

    public function hosts()
    {
        return $this -> hasMany(Host::Class); 
    }

    public function music()
    {
        return $this -> hasMany(Music::Class); 
    }

    public function places()
    {
        return $this -> hasMany(Place::Class); 
    }

    public function gift()
    {
        return $this -> hasMany(Gift::Class); 
    }

    public function galery()
    {
        return $this -> hasMany(Galery::Class); 
    }

    public function transports()
    {
        return $this -> hasMany(Transport::Class); 
    }

    public function user()
    {
        return $this -> belongsTo(User::Class); 
    }


    //FRIENDLY
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
