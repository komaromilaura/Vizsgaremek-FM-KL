<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BeszerzesApiTest extends TestCase
{

    public function testBeszerzesApiGetAll()
    {
        $response = $this->get('https://localhost:8000/api/beszerzes');

        $response->assertStatus(200);
    }

    public function testBeszerzesApiGet()
    {
        $response = $this->get('https://localhost:8000/api/beszerzes/2-2022');

        $response->assertStatus(200);
    }

    public function testBeszerzesApiDelete()
    {

        $response = $this->delete('https://localhost:8000/api/beszerzes/2-2023');

        $response->assertStatus(204);
    }

    public function testBeszerzesApiPost()
    {
        $response = $this->post('https://localhost:8000/api/beszerzes', [
            "mentoallomas" => "Körmend",
            "targy" => "munkaruha",
            "besz_igeny_datum" => "2023-05-05",
            "ajanlat_bekeres" => "2023-05-05",
            "engedelyezesre_kuldve" => "2023-05-05",
            "engedely_beerkezese" => "2023-05-06",
            "megrendelo_kiallitasa" => "2023-05-06",
            "megrendelo_szama" => "1-2023",
            "megrend_alairasra_tovabbitva" => "2023-05-06",
            "alairt_megrend_beerkezese" => "2023-05-07",
            "dijbekero_tovabbitasa" => "2023-05-07",
            "munkalap_kiallitasa" => "2023-05-09",
            "szamla_kiallitasa" => "2023-05-09",
            "szamla_tovább_pu_nek_utalasra" => "2023-05-10",
            "partnerID" => 2
        ]);

        $response->assertStatus(201);
    }

    public function testBeszerzesApiPut()
    {
            $updateId = "2-2022";
            $response = $this->put('https://localhost:8000/api/beszerzes/' . $updateId, [
                "mentoallomas" => "Körmend",
                "targy" => "munkaruha",
                "besz_igeny_datum" => "2023-05-05",
                "ajanlat_bekeres" => "2023-05-05",
                "engedelyezesre_kuldve" => "2023-05-05",
                "engedely_beerkezese" => "2023-05-06",
                "megrendelo_kiallitasa" => "2023-05-06",
                "megrendelo_szama" => "2-2023",
                "megrend_alairasra_tovabbitva" => "2023-05-06",
                "alairt_megrend_beerkezese" => "2023-05-07",
                "dijbekero_tovabbitasa" => "2023-05-07",
                "munkalap_kiallitasa" => "2023-05-09",
                "szamla_kiallitasa" => "2023-05-09",
                "szamla_tovább_pu_nek_utalasra" => "2023-05-10",
                "partnerID" => 2
            ]);
    
            $response->assertStatus(200);  
    
    }


}
