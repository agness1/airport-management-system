<?php

namespace App\Http\Controllers\Api\V1;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Aircraft;
use App\Models\Airline;
use App\Models\Gate;
use App\Models\Type;
use App\Models\Airport;



class FlightResourceController extends Controller
{
    /*
    @return \Illuminate\Http\Response

*/

public function showFlightResources()
{
    $airlines = Airline::all();
    $aircrafts = Aircraft::all();
    $gates = Gate::all();
    $types = Type::all();
    $airports = Airport::all();

    return response()->json([
        'airlines' => $airlines,
        'aircrafts' => $aircrafts,
        'gates' => $gates,
        'types' => $types,
        'airports' => $airports,
    ]);

}


}
