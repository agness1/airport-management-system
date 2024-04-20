<?php

namespace App\Http\Controllers\Api\V1;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Status;

class StatusController extends Controller
{

    public function showStatus ()
    {
    $status = Status::First();

    return response()->json($status);

    }

    public function updateStatus (Request $request)

    {
        $request->validated([
            'status' => 'required|in:open,closed',
            'part' => 'required|in:terminal,rwyl,rwyr',
        ]);

        $status = Status::first();

        if (!$status) {
            return response()->json(['error' => 'No status found.'], 404);
        }

        switch ($request->part) {
            case 'terminal':
                $status->update(['Terminal' => $request->status]);
                break;
            case 'rwyl':
                $status->update(['RWYL' => $request->status]);
                break;
            case 'rwyr':
                $status->update(['RWYR' => $request->status]);
                break;
            default:
                return response()->json(['error' => 'Invalid part.'], 400);
        }

        return response()->json($status);

    }

}
