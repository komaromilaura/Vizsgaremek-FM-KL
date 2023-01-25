<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class EllenorApiTest extends TestCase
{

    public function testEllenorApiGetAll()
    {
        $response = $this->get('https://localhost:8000/api/ellenor');

        $response->assertStatus(200);
    }

    public function testEllenorApiGet()
    {
        $response = $this->get('https://localhost:8000/api/ellenor/1');

        $response->assertStatus(200);
    }

    public function testEllenorApiDelete()
    {

        $response = $this->delete('https://localhost:8000/api/ellenor/2');

        $response->assertStatus(204);
    }

    public function testEllenorApiPost()
    {
        $response = $this->post('https://localhost:8000/api/ellenor', [
            "ID" => 2,
            "nev" => "Teszt",
            "ir_szam" => 9700,
            "varos" => "Szombazthely",
            "kozterulet" => "Ady Endre",
            "kozt_jellege" => "tér",
            "hazszam" => "48",
            "epulet_emelet_ajto" => "",
            "helyrazi_szam" => "",
            "email" => "teszt@email.hu",
            "telefon" => "teszt",
            "kontakt_szemely" => "teszt" 
        ]);

        $response->assertStatus(201);
    }

    public function testEllenorApiPut()
    {
            $updateId = "1";
            $response = $this->put('https://localhost:8000/api/ellenor/' . $updateId, [
                "ID" => 1,
                "nev" => "Teszt",
                "ir_szam" => 9900,
                "varos" => "Körmend",
                "kozterulet" => "Ady Endre",
                "kozt_jellege" => "tér",
                "hazszam" => "48",
                "epulet_emelet_ajto" => "",
                "helyrazi_szam" => "",
                "email" => "teszt@email.hu",
                "telefon" => "teszt",
                "kontakt_szemely" => "teszt" 
            ]);
    
            $response->assertStatus(200);  
    
    }

}
