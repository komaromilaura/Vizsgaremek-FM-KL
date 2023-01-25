<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TuloraApiTest extends TestCase
{

    public function testTuloraApiGetAll()
    {
        $response = $this->get('https://localhost:8000/api/tulora');

        $response->assertStatus(200);
    }

    public function testTuloraApiGet()
    {
        $response = $this->get('https://localhost:8000/api/tulora/4');

        $response->assertStatus(200);
    }

    public function testTuloraApiDelete()
    {

        $response = $this->delete('https://localhost:8000/api/tulora/8');

        $response->assertStatus(204);
    }

    public function testTuloraApiPost()
    {
        $response = $this->post('https://localhost:8000/api/tulora', [
            'ID'=> 45,
            'mentoallomas' => "Körmend",
            'ev' => 2024,
            'honap' => 12,
            'ment_fel_miatti_tulora' => 100,
            'egyeb_tulora' => 50,
            'orvos_mentotiszt' => 20,
            'apolo' => 80,
            'mentesiranyitasban_dolg' => 10,
            'mentogkvezeto' => 25,
            'betegszall_iranyitasban_dolg' => 15
        ]);

        $response->assertStatus(201);
    }

    public function testTuloraApiPut()
    {
            $updateId = 4;
            $response = $this->put('https://localhost:8000/api/tulora/' . $updateId, [
                'mentoallomas' => "Körmend",
                'ev' => 2025,
                'honap' => 12,
                'ment_fel_miatti_tulora' => 100,
                'egyeb_tulora' => 50,
                'orvos_mentotiszt' => 20,
                'apolo' => 80,
                'mentesiranyitasban_dolg' => 10,
                'mentogkvezeto' => 25,
                'betegszall_iranyitasban_dolg' => 15
            ]);
    
            $response->assertStatus(200);  
    
    }

}
