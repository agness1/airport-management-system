<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Renovations extends Model
{
    use HasFactory;

    protected $table = 'renovation_works';

    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = [
'AreaID',
'StartDate',
'EndDate',
'Description',
    ];


public function area()
{
return $this->belongsTo(AreaOfRenovation::class, 'AreaID');
}
}
