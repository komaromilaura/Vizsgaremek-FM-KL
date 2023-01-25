<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LetszamApiTest extends TestCase
{

    public function testLetszamApiGetAll()
    {
        $response = $this->get('https://localhost:8000/api/letszam');

        $response->assertStatus(200);
    }

    public function testLetszamApiGet()
    {
        $response = $this->get('https://localhost:8000/api/letszam/5');

        $response->assertStatus(200);
    }

    public function testLetszamApiDelete()
    {

        $response = $this->delete('https://localhost:8000/api/letszam/4');

        $response->assertStatus(204);
    }

    public function testLetszamApiPost()
    {
        $response = $this->post('https://localhost:8000/api/letszam', [
            'ID'=> 20,
            'mentoallomas' => "Szombathely",
            'ev' => 2025,
            'negyedev' => 1,
            'kivon_all_szevezett' => 200,
            'kivon_all_betoltott' => 200,
            'mentesiranyitas_szervezett' => 25,
            'mentesiranyitas_betoltott' => 24,
            'betegszall_szervezett' => 4,
            'betegszall_betoltott' => 4,
            'orvos_mentotiszt' => 10,
            'apolo' => 30,
            'mentesiranyitasban_dolg' => 24,
            'mentogkvezeto' => 30,
            'betegszall_iranyitasban_dolg' => 3
        ]);

        $response->assertStatus(201);
    }

    public function testLetszamApiPut()
    {
            $updateId = "8";
            $response = $this->put('https://localhost:8000/api/letszam/' . $updateId, [
                'mentoallomas' => "Szombathely",
                'ev' => 2026,
                'negyedev' => 1,
                'kivon_all_szevezett' => 220,
                'kivon_all_betoltott' => 200,
                'mentesiranyitas_szervezett' => 25,
                'mentesiranyitas_betoltott' => 25,
                'betegszall_szervezett' => 5,
                'betegszall_betoltott' => 5,
                'orvos_mentotiszt' => 10,
                'apolo' => 30,
                'mentesiranyitasban_dolg' => 24,
                'mentogkvezeto' => 30,
                'betegszall_iranyitasban_dolg' => 3
            ]);
    
            $response->assertStatus(200);  
    
    }

}
