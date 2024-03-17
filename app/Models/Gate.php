<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gate extends Model
{
    use HasFactory;
    protected $table = '_gate';

    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = [
        'Gate'
    ];
}
