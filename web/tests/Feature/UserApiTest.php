<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserApiTest extends TestCase
{

    public function testUserApiGet()
    {
        $response = $this->get('https://localhost:8000/api/user/121212');

        $response->assertStatus(200);
    }
}
