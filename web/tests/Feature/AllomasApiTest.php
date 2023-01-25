<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AllomasApiTest extends TestCase
{

    public function testAllomasApiGetAll()
    {
        $response = $this->get('https://localhost:8000/api/allomas');

        $response->assertStatus(200);
    }

    public function testAllomasApiGet()
    {
        $response = $this->get('https://localhost:8000/api/allomas/Csorna');

        $response->assertStatus(200);
    }
}
