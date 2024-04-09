<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnnouncementType extends Model
{
    use HasFactory;
    protected $table = 'announcement_type';

    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = [
        'Type'
    ];
}
