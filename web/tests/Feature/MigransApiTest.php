<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MigransApiTest extends TestCase
{

    public function testMigransApiGetAll()
    {
        $response = $this->get('https://localhost:8000/api/migrans');

        $response->assertStatus(200);
    }

    public function testMigransApiGet()
    {
        $response = $this->get('https://localhost:8000/api/migrans/4');

        $response->assertStatus(200);
    }

    public function testMigransApiDelete()
    {

        $response = $this->delete('https://localhost:8000/api/migrans/6');

        $response->assertStatus(204);
    }

    public function testMigransApiPost()
    {
        $response = $this->post('https://localhost:8000/api/migrans', [
            'megyeID'=> 1,
            'ev' => 2024,
            'honap' => 3,
            'fo' => 10,
            'megtett_km' => 78 
        ]);

        $response->assertStatus(201);
    }

    public function testMigransApiPut()
    {
            $updateId = 3;
            $response = $this->put('https://localhost:8000/api/migrans/' . $updateId, [
                'megyeID'=> 1,
                'ev' => 2025,
                'honap' => 3,
                'fo' => 10,
                'megtett_km' => 78 
            ]);
    
            $response->assertStatus(200);  
    
    }

}
