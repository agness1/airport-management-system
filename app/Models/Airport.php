<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Airport extends Model
{
    use HasFactory;


    protected $table = '_airport_code';

    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = [
        'AirportCode'
    ];
}
