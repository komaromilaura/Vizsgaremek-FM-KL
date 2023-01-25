<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DolgozoApiTest extends TestCase
{

    public function testDolgozoApiGetAll()
    {
        $response = $this->get('https://localhost:8000/api/dolgozo');

        $response->assertStatus(200);
    }

    public function testDolgozoApiGet()
    {
        $response = $this->get('https://localhost:8000/api/dolgozo/454545');

        $response->assertStatus(200);
    }

    public function testDolgozoApiDelete()
    {

        $response = $this->delete('https://localhost:8000/api/dolgozo/123124');

        $response->assertStatus(204);
    }

    public function testDolgozoApiPost()
    {
        $response = $this->post('https://localhost:8000/api/dolgozo', [
            "vezetek_nev" => "Kiss",
            "kereszt_nev" => "Béla",
            "IVIR" => 101333,
            "torzsszam" => "T00005",
            "adoazonosito" => 8234567812,
            "ir_szam" => 9784,
            "varos" => "Rádóckölked",
            "kozterulet" => "Fő",
            "kozterulet_jellege" => "utc",
            "hazszam" => "17",
            "epulet_emelet_ajto" => "",
            "ceges_email" => "beci@email.hu",
            "telefon" => "06309876541",
            "allomas" => "Körmend",
            "munkakorID" => 2 
        ]);

        $response->assertStatus(201);
    }

    public function testDolgozoApiPut()
    {
            $updateId = "454545";
            $response = $this->put('https://localhost:8000/api/dolgozo/' . $updateId, [
                "vezetek_nev" => "Kiss",
                "kereszt_nev" => "Béla",
                "IVIR" => 101334,
                "torzsszam" => "T00015",
                "adoazonosito" => 8234567811,
                "ir_szam" => 9784,
                "varos" => "Rádóckölked",
                "kozterulet" => "Fő",
                "kozterulet_jellege" => "utc",
                "hazszam" => "17",
                "epulet_emelet_ajto" => "",
                "ceges_email" => "beci@email.hu",
                "telefon" => "06309876541",
                "allomas" => "Körmend",
                "munkakorID" => 2 
            ]);
    
            $response->assertStatus(200);  
    
    }

}
