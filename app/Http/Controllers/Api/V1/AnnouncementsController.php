<?php


namespace App\Http\Controllers\Api\V1;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Announcements;
use App\Models\AnnouncementType;

class AnnouncementsController extends Controller
{

    public function showAnnouncementType()
    {
    $type = AnnouncementType::all();
    return response()->json([
    'type' => $type
    ]);
    }

    public function createAnnouncements(Request $request)
    {
        $data = $request->all();

        $announcement = Announcements::create([
            'Title' => $data['title'],
            'Description' => $data['description'],
            'AnnouncementTypeID' => $data['type']
        ]);

        return response()->json(['message' => 'Data added successfully', 'data' => $announcement], 201);
    }

    public function showAnnouncements()
    {
        $announcementData = Announcements::all();
        $responseData = [];

        foreach ($announcementData as $announcementItem) {
            $responseData[] = [
                'id' => $announcementItem->id,
                'title' => $announcementItem->Title,
                'description' => $announcementItem->Description,
                'type' => $announcementItem->announcementType->Type
            ];
        }

        return response()->json($responseData);
    }

    public function deleteAnnouncements($id)
    {
        $dataToDelete = Announcements::find($id);

        if ($dataToDelete) {
            $dataToDelete->delete();
            return response()->json(['message' => 'Data deleted successfully'], 200);
        } else {
            return response()->json(['message' => 'Flight operation not found'], 404);
        }
    }
}
