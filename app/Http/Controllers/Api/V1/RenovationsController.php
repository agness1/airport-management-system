<?php

namespace App\Http\Controllers\Api\V1;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\Renovations;
use App\Models\AreaOfRenovation;
class RenovationsController extends Controller
{

    public function showAreaOfRenovation()
    {

$area = AreaOfRenovation::all();
return response()->json([
    'area' => $area
]);
    }

    public function createRenovation(Request $request)
    {
        $data = $request->all();

        $renovation = Renovations::create([
            'AreaID' => $data['area'],
            'StartDate' => $data['startDate'],
            'EndDate' => $data['endDate'],
            'Description' => $data['description']
        ]);

        return response()->json(['message' => 'Data added successfully', 'data' => $renovation], 201);
    }

    public function showRenovations()
    {
        $renovationData = Renovations::all();
        $responseData = [];

        foreach ($renovationData as $renovationItem) {
            $responseData[] = [
                'id' => $renovationItem->id,
                'area' => $renovationItem->area->Area,
                'description' => $renovationItem->Description,
                'startDate' => $renovationItem->StartDate,
                'endtDate' => $renovationItem->EndDate,
            ];
        }
        return response()->json($responseData);
    }

    public function deleteRenovations($id)
    {
        $dataToDelete = Renovations::find($id);

        if ($dataToDelete) {
            $dataToDelete->delete();
            return response()->json(['message' => 'Data deleted successfully'], 200);
        } else {
            return response()->json(['message' => 'Flight operation not found'], 404);
        }
    }
}
