<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MozgoorsegApiTest extends TestCase
{

    public function testMozgoorsegApiGetAll()
    {
        $response = $this->get('https://localhost:8000/api/mozgoorseg');

        $response->assertStatus(200);
    }

    public function testMozgoorsegApiGet()
    {
        $response = $this->get('https://localhost:8000/api/mozgoorseg/SZ-2');

        $response->assertStatus(200);
    }

    public function testMozgoorsegApiDelete()
    {

        $response = $this->delete('https://localhost:8000/api/mozgoorseg/SZ-3');

        $response->assertStatus(204);
    }

    public function testMozgoorsegApiPost()
    {
        $response = $this->post('https://localhost:8000/api/mozgoorseg', [
            'megrendeloID'=> 31,
            'szerzodesszam' => "SZ-11",
            'rendezveny_neve' => "Teszt buli",
            'rendezveny_datuma' => "2023-02-13",
            'rendezveny_helye' => "Szombathely",
            'mentoallomas' => "Szombathely",
            'roko' => 0,
            'eset' => 0,
            'mentogk' => 0,
            'gyalogorseg' => 1,
            'bevetel' => 250000,
            'koltseg' => 200000,
            'maradvany' => 50000
        ]);

        $response->assertStatus(201);
    }

    public function testMozgoorsegApiPut()
    {
            $updateId = "SZ-2";
            $response = $this->put('https://localhost:8000/api/mozgoorseg/' . $updateId, [
                'megrendeloID'=> 31,
                'szerzodesszam' => "SZ-2",
                'rendezveny_neve' => "Teszt buli",
                'rendezveny_datuma' => "2024-02-14",
                'rendezveny_helye' => "Szombathely",
                'mentoallomas' => "Szombathely",
                'roko' => 0,
                'eset' => 1,
                'mentogk' => 0,
                'gyalogorseg' => 0,
                'bevetel' => 450000,
                'koltseg' => 250000,
                'maradvany' => 200000
            ]);
    
            $response->assertStatus(200);  
    
    }

}
