<?php
namespace App\Http\Controllers;
namespace App\Http\Controllers\Api\V1;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FlightOperation;
use App\Models\Aircraft;
use App\Models\Airline;
use App\Models\Gate;
use App\Models\Type;
use App\Models\Airport;

    class FlightOperationController extends Controller
    {

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


    public function createFlightData(Request $request)
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

        $responseData= [];

        foreach($flightOperationData as $flightOperationItem) {

            $responseData[] = [
            'id' => $flightOperationItem->id,
            'airline' => $flightOperationItem->airline->AirlineCode,
            'type' => $flightOperationItem->type->Type,
            'time' => $flightOperationItem->Time,
            'callSign' => $flightOperationItem->CallSign,
            'gate' => $flightOperationItem->gate->Gate,
            'airport' => $flightOperationItem->airport->AirportCode,
            'aircraft' => $flightOperationItem->aircraft->AircraftCode,
            ];

        }


    return response()->json($responseData);

    }

    public function deleteFlightData ($id)
    {
        $flightOperation = FlightOperation::find($id);

        if($flightOperation) {
            $flightOperation->delete();
            return response() -> json(['message' => 'Data deleted successfully'], 200);
        } else {
            return response()-> json(['message' => 'Flight operation not found'], 404);
        }
    }

}
