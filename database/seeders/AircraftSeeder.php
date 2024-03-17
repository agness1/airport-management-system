<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Aircraft;
class AircraftSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $aircraftCodes = [
            ['AircraftCode' => 'B39M'], // Boeing 737 MAX
            ['AircraftCode' => 'B738'], // Boeing 737-800
            ['AircraftCode' => 'A319'], // Airbus A319
            ['AircraftCode' => 'A321'], // Airbus A321
            ['AircraftCode' => 'E75L'], // Embraer E175LR
            ['AircraftCode' => 'B753'], // Boeing 757-33N
            ['AircraftCode' => 'B788'], // Boeing 787-8 Dreamliner
            ['AircraftCode' => 'B777'], // Boeing 777
            ['AircraftCode' => 'A388'], // Airbus A380
        ];

        foreach($aircraftCodes as $aircraft) {
            Aircraft::create($aircraft);
        }
    }
}
