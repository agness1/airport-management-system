<?php

namespace App\Http\Controllers\Api\V1;
use App\Http\Controllers\Controller;
use App\Models\Emergencies;
use App\Http\Requests\EmergencyRequest;
use Illuminate\Http\Request;

class EmergenciesController extends Controller
{

    public function createEmergencies(EmergencyRequest $request)
    {
        $data = $request->validated();

        $emergencies = Emergencies::create([
            'Title' => $data['title'],
            'Description' => $data['description'],

        ]);

        return response()->json(['message' => 'Data added successfully', 'data' => $emergencies], 201);
    }

    public function showEmergencies()
    {
        $emergenciesData = Emergencies::all();
        $responseData = [];

        foreach ($emergenciesData as $emergenciesItem) {
            $responseData[] = [
                'id' => $emergenciesItem->id,
                'title' => $emergenciesItem->Title,
                'description' => $emergenciesItem->Description,
            ];
        }

        return response()->json($responseData);
    }

    public function deleteEmergencies($id)
    {
        $dataToDelete = Emergencies::find($id);

        if ($dataToDelete) {
            $dataToDelete->delete();
            return response()->json(['message' => 'Data deleted successfully'], 200);
        } else {
            return response()->json(['message' => 'Flight operation not found'], 404);
        }
    }

}
