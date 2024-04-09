<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class AreaOfRenovation extends Model
{
    use HasFactory;
    protected $table = 'area_of_renovation';

    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = [
        'Area'
    ];
}
