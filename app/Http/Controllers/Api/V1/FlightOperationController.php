<?php

namespace App\Http\Controllers;
namespace App\Http\Controllers\Api\V1;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FlightOperation;

class FlightOperationController extends Controller
{
    public function getFlightData(Request $request)
    {
        $data = $request->all();

        $flightOperation = FlightOperation::create([
        'TypeID' => $data['type'],
        'Time' => $data['time'],
        'AirlineCodeID' => $data['airline'],
        'CallSign' => $data['callSign'],
        'GateID' => $data['gate'],
        'AirportCodeID' => $data['airport'],
        'AircraftCodeID' => $data['aircraft'],
        ]);

return response()->json(['message'=> 'Data added successfully', 'data' => $flightOperation], 201);


    }

    public function showFlightData()
    {
        $flightOperationData = FlightOperation::all();
    }

}
