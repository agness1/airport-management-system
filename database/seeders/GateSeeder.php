<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Gate;

class GateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $gateNames = [
            ['Gate' => 'G1'],
            ['Gate' => 'A2'],
            ['Gate' => 'B3'],
            ['Gate' => 'C4'],
            ['Gate' => 'D5'],
            ['Gate' => 'E6'],
            ['Gate' => 'F7'],
            ['Gate' => 'H8'],
            ['Gate' => 'J9'],
            ['Gate' => 'K10']
        ];
        foreach($gateNames as $gateName) {
            Gate::create($gateName);
            };
    }
}
