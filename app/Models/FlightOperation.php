<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class FlightOperation extends Model {
    use HasFactory;

    protected $table = 'flight_operation';

    protected $primaryKey = 'id';

    public $timestamps = false;

protected $fillable = [
'TypeID',
'Time',
'AirlineCodeID',
'CallSign',
'GateID',
'AirportCodeID',
'AircraftCodeID'
];

public function airline()
{
    return $this->belongsTo(Airline::class, 'AirlineCodeID');
}

public function gate()
{
    return $this->belongsTo(Gate::class, 'GateID');
}
public function type()
{
    return $this->belongsTo(Type::class, 'TypeID');
}
public function airport()
{
    return $this->belongsTo(Airport::class, 'AirportCodeID');
}
public function aircraft()
{
    return $this->belongsTo(Aircraft::class, 'AircraftCodeID');
}

}
