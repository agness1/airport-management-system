<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('flight_operation', function (Blueprint $table) {
            $table->id('FlightOperation');
            $table->foreignId('TypeID')->references('id')->on('_type')->cascadeOnDelete();
            $table->time('Time');
            $table->foreignId('AirlineCodeID')->references('id')->on('_airline_code')->cascadeOnDelete();
            $table->string('CallSign', 5)->unique();
            $table->foreignId('GateID')->references('id')->on('_gate')->cascadeOnDelete();
            $table->foreignId('AirportCodeID')->references('id')->on('_airport_code')->cascadeOnDelete();
            $table->foreignId('AircraftCodeID')->references('id')->on('_aircraft_code')->cascadeOnDelete();
        });

    }



    public function down(): void
    {
       Schema::dropIfExists('flight_operation');
    }
};
