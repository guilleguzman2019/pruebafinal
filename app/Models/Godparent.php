<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Godparent extends Model
{
    use HasFactory;

    protected $guarded = [];


    //RELATIONS
    public function Card()
    {
        return $this -> belongsTo(Card::Class);
    }
}
