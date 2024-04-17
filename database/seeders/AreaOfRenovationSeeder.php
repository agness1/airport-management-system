<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\AreaOfRenovation;

class AreaOfRenovationSeeder extends Seeder
{
   
    public function run(): void
    {
        $areasOfRenovation = [
            ['Area' => 'Main Apron (Main Terminal Hall)'],
            ['Area' => 'Passenger Terminal A'],
            ['Area' => 'Passenger Terminal B'],
            ['Area' => 'Car Park P1'],
            ['Area' => 'Car Park P2'],
            ['Area' => 'Taxiway A'],
            ['Area' => 'Taxiway B'],
            ['Area' => 'Taxiway C'],
            ['Area' => 'Aircraft Parking Stand A1'],
            ['Area' => 'Aircraft Parking Stand A2'],
            ['Area' => 'Aircraft Parking Stand B1'],
            ['Area' => 'Aircraft Parking Stand B2'],
            ['Area' => 'Aircraft Parking Stand C1'],
            ['Area' => 'Aircraft Parking Stand C2'],
            ['Area' => 'Cargo Terminal'],
            ['Area' => 'Baggage Handling Area'],
            ['Area' => 'Security Zone'],
            ['Area' => 'Runway L'],
            ['Area' => 'Runway R']
        ];

        foreach($areasOfRenovation as $area) {
            AreaOfRenovation::create($area);
        }
    }
}
