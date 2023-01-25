<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MegyeApiTest extends TestCase
{

    public function testMegyeApiGetAll()
    {
        $response = $this->get('https://localhost:8000/api/megye');

        $response->assertStatus(200);
    }

    public function testMegyeApiGet()
    {
        $response = $this->get('https://localhost:8000/api/megye/2');

        $response->assertStatus(200);
    }

}
