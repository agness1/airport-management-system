<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\type;
class TypeSeeder extends Seeder
{
    public function run(): void
    {
        $types = [
            ['Type' => 'Arrival'],
            ['Type' => 'Departure']
        ];
        foreach($types as $type) {
            Type::create($type);
        }
    }
}
