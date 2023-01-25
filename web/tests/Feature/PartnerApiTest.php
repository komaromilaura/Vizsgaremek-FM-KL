<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PartnerApiTest extends TestCase
{

    public function testPartnerApiGetAll()
    {
        $response = $this->get('https://localhost:8000/api/partner');

        $response->assertStatus(200);
    }

    public function testPartnerApiGet()
    {
        $response = $this->get('https://localhost:8000/api/partner/30');

        $response->assertStatus(200);
    }

    public function testPartnerApiDelete()
    {

        $response = $this->delete('https://localhost:8000/api/partner/32');

        $response->assertStatus(204);
    }

    public function testPartnerApiPost()
    {
        $response = $this->post('https://localhost:8000/api/partner', [
            'ID'=> 45,
            'nev' => "Teszt",
            'ir_szam' => 9784,
            'varos' => "Rádóckölked",
            'kozterulet' => "Fő",
            'kozt_jellege' => "utca",
            'hazszam' => "122",
            'epulet_emelet_ajto' => "",
            'helyrajzi_szam' => "",
            'email' => "teszt@email.hu",
            'telefon' => "06301212126",
            'adoszam' => "12345678-1-12"
        ]);

        $response->assertStatus(201);
    }

    public function testPartnerApiPut()
    {
            $updateId = 30;
            $response = $this->put('https://localhost:8000/api/partner/' . $updateId, [
                'nev' => "Teszt Elek",
                'ir_szam' => 9783,
                'varos' => "Egyházasrádóc",
                'kozterulet' => "Kossuth",
                'kozt_jellege' => "utca",
                'hazszam' => "222",
                'epulet_emelet_ajto' => "",
                'helyrajzi_szam' => "",
                'email' => "teszt@email.hu",
                'telefon' => "06301212126",
                'adoszam' => "12345678-1-13"
            ]);
    
            $response->assertStatus(200);  
    
    }


}
