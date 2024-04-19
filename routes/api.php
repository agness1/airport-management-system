<?php

use App\Http\Controllers\Api\V1\FlightOperationController;
use App\Http\Controllers\Api\V1\FlightResourceController;
use App\Http\Controllers\Api\V1\RenovationsController;
use App\Http\Controllers\Api\V1\AnnouncementsController;
use App\Http\Controllers\Api\V1\EmergenciesController;
use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\StatusController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->group(function () {


    Route::get('/user', function (Request $request) {
        return $request->user();
    });

 Route::post('/logout', [AuthController::class, 'logout']);

});


Route::post('/signup', [AuthController::class, 'signup']);

Route::post('/login', [AuthController::class, 'login']);


Route::get('/roles', [AuthController::class, 'showRoleLists']);



Route::get('flightResourcesData', [FlightOperationController::class, 'showFlightResources']);

Route::post('createFlightOperationData', [FlightOperationController::class, 'createFlightData']);

Route::get('flightData', [FlightOperationController::class, 'showFlightData']);

Route::delete('flight-operations/{id}', [FlightOperationController::class, 'deleteFlightData']);

Route::get('areaOfRenovation', [RenovationsController::class, 'showAreaOfRenovation']);

Route::post('createRenovationsData', [RenovationsController::class, 'createRenovation']);

Route::get('showRenovationsData', [RenovationsController::class, 'showRenovations']);

Route::delete('renovation/{id}', [RenovationsController::class, 'deleteRenovations']);

Route::post('createAnnouncementsData', [AnnouncementsController::class, 'createAnnouncements']);

Route::get('showAnnouncementsData', [AnnouncementsController::class, 'showAnnouncements']);

Route::delete('announcements/{id}', [AnnouncementsController::class, 'deleteAnnouncements']);

Route::get('announcementType', [AnnouncementsController::class, 'showAnnouncementType']);

Route::post('createEmergenciesData', [EmergenciesController::class, 'createEmergencies']);

Route::get('showEmergenciesData', [EmergenciesController::class, 'showEmergencies']);

Route::delete('emergencies/{id}', [EmergenciesController::class, 'deleteEmergencies']);

Route::get('showStatus', [StatusController::class, 'showStatus']);

Route::post('updateStatus', [StatusController::class, 'updateStatus']);


