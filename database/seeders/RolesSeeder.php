<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            ['Role' => 'Administrator'],
            ['Role' => 'Flight Operations Manager '],
            ['Role' => 'Terminal Manager'],
            ['Role' => 'Airport Ground Manager'],
        ];

        foreach($roles as $role) {
            Role::create($role);
        }
    }
}
