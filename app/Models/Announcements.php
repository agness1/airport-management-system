<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announcements extends Model
{
    use HasFactory;

    protected $table = 'announcements';

    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = [
'Title',
'Description',
'AnnouncementTypeID'
    ];


public function announcementType()
{
return $this->belongsTo(AnnouncementType::class, 'AnnouncementTypeID');
}

}



