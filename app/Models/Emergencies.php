<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Emergencies extends Model
{
    use HasFactory;
    protected $table = 'emergencies';

    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = [
'Title',
'Description'
    ];
}
