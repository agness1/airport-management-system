<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class FlightOperation extends Model {
    use HasFactory;
protected $fillable = [

];


public function airline()
{
    return $this->belongsTo(Airline::class, 'AirlineID', 'id');
}

public function gate()
{
    return $this->hasOne(Gate::class, 'GateID', 'id');
}
public function type()
{
    return $this->belongsTo(Type::class, 'TypeID', 'id');
}
public function airport()
{
    return $this->belongsTo(Airport::class, 'AirportID', 'id');
}
public function aircraft()
{
    return $this->hasOne(Aircraft::class, 'AircraftID', 'id');
}



}
