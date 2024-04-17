<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\AnnouncementType;

class AnnouncementTypeSeeder extends Seeder
{
    public function run(): void
    {
        $types = [
            ['Type' => 'Ground'],
            ['Type' => 'Terminal']
        ];
        foreach($types as $type) {
            AnnouncementType::create($type);
        }
    }
}
