<?php

namespace Tests\Feature;

use Tests\TestCase;

class RegistrationTest extends TestCase
{


    public function test_user_can_register()
    {
        $response = $this->post('http://localhost:8000/api/signup', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => 'password3@',
            'role' => '3'
        ]);

        $response->assertStatus(302);

    }
}
