<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Airport;
class AirportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $airportCodes = [
            ['AirportCode' => 'ATL'], // Hartsfield-Jackson Atlanta International Airport
            ['AirportCode' => 'PEK'], // Beijing Capital International Airport
            ['AirportCode' => 'DXB'], // Dubai International Airport
            ['AirportCode' => 'LAX'], // Los Angeles International Airport
            ['AirportCode' => 'HND'], // Haneda Airport (Tokyo International Airport)
            ['AirportCode' => 'ORD'], // O'Hare International Airport (Chicago)
            ['AirportCode' => 'LHR'], // Heathrow Airport (London)
            ['AirportCode' => 'HKG'], // Hong Kong International Airport
            ['AirportCode' => 'PVG'], // Shanghai Pudong International Airport
            ['AirportCode' => 'CDG'], // Charles de Gaulle Airport (Paris)
            ['AirportCode' => 'DFW'], // Dallas/Fort Worth International Airport
            ['AirportCode' => 'AMS'], // Amsterdam Airport Schiphol
            ['AirportCode' => 'FRA'], // Frankfurt Airport
            ['AirportCode' => 'IST'], // Istanbul Airport
            ['AirportCode' => 'CGK'], // Soekarno-Hatta International Airport (Jakarta)
            ['AirportCode' => 'SIN'], // Singapore Changi Airport
            ['AirportCode' => 'CAN'], // Guangzhou Baiyun International Airport
            ['AirportCode' => 'DEN'], // Denver International Airport
            ['AirportCode' => 'BKK'], // Suvarnabhumi Airport (Bangkok)
            ['AirportCode' => 'WAW'], // Warsaw Chopin Airport (Warsaw)
        ];

        foreach($airportCodes as $airportCode) {
        Airport::create($airportCode);
        };
    }


}
