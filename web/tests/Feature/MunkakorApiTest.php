<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MunkakorApiTest extends TestCase
{

    public function testMunkakorApiGetAll()
    {
        $response = $this->get('https://localhost:8000/api/munkakor');

        $response->assertStatus(200);
    }

    public function testMunkakorApiGet()
    {
        $response = $this->get('https://localhost:8000/api/munkakor/4');

        $response->assertStatus(200);
    }
}
