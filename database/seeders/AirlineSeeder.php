<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Airline;

class AirlineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $airlines = [
            ['AirlineCode' => 'AAL'], // American Airlines
            ['AirlineCode' => 'DAL'], // Delta Air Lines
            ['AirlineCode' => 'UAL'], // United Airlines
            ['AirlineCode' => 'CSN'], // China Southern Airlines
            ['AirlineCode' => 'SWA'], // Southwest Airlines
            ['AirlineCode' => 'CES'], // China Eastern Airlines
            ['AirlineCode' => 'RYR'], // Ryanair
            ['AirlineCode' => 'UAE'], // Emirates
            ['AirlineCode' => 'DLH'], // Lufthansa
            ['AirlineCode' => 'AFR'], // Air France
            ['AirlineCode' => 'THY'], // Turkish Airlines
            ['AirlineCode' => 'BAW'], // British Airways
            ['AirlineCode' => 'QTR'], // Qatar Airways
            ['AirlineCode' => 'IGO'], // IndiGo
            ['AirlineCode' => 'EZY'], // EasyJet
            ['AirlineCode' => 'CCA'], // Air China
            ['AirlineCode' => 'SIA'], // Singapore Airlines
            ['AirlineCode' => 'CPA'], // Cathay Pacific
            ['AirlineCode' => 'CAL'], // China Airlines
            ['AirlineCode' => 'WZZ'], // Wizz Air
            ['AirlineCode' => 'LOT'], // LOT Polish Airlines
        ];

        foreach($airlines as $airline) {
            Airline::create($airline);
        }
    }
}
