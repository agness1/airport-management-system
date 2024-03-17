<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aircraft extends Model
{
    use HasFactory;
    protected $table = '_aircraft_code';

    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = [
        'AircraftCode'
    ];
}
