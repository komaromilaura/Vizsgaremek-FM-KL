<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AllashelyApiTest extends TestCase
{
    public function testAllashelyApiGetAll()
    {
        $response = $this->get('https://localhost:8000/api/allashely');

        $response->assertStatus(200);
    }

    public function testAllashelyApiGet()
    {
        $response = $this->get('https://localhost:8000/api/allashely/7');

        $response->assertStatus(200);
    }

    public function testAllashelyApiDelete()
    {

        $response = $this->delete('https://localhost:8000/api/allashely/6');

        $response->assertStatus(204);
    }

    public function testAllashelyApiPost()
    {
        $response = $this->post('https://localhost:8000/api/allashely', [
            "ID" => 1,
            "mentoallomas" => "Szombathely",
            "ev" => 2025,
            "ho" => 1,
            "szakorvos_szervezett" => 3,
            "szakorvos_betoltott" => 3,
            "szakorvos_ures" => 0,
            "vezeto_mentotiszt_szervezett" => 3,
            "vezeto_mentotiszt_betoltott" => 3,
            "vezeto_mentotiszt_ures" => 0,
            "orvos_mentotiszt_szervezett" => 6,
            "orvos_mentotiszt_betoltott" => 6,
            "orvos_mentotiszt_ures" => 0,
            "foapolo_szervezett" => 3,
            "foapolo_betoltott" => 3,
            "foapolo_ures" => 0,
            "mentoapolo_szervezett" => 200,
            "mentoapolo_betoltott" => 200,
            "mentoapolo_ures" => 0,
            "mentoapolo_osszes_szervezett" => 200,
            "mentoapolo_osszes_betoltott" => 200,
            "mentoapolo_osszes_ures" => 0,
            "allomasvezeto_szervezett" => 30,
            "allomasvezeto_betoltott" => 30,
            "allomasvezeto_ures" => 0,
            "ICS_vezeto_szervezett" => 3,
            "ICS_vezeto_betoltott" => 3,
            "ICS_vezeto_ures" => 0,
            "mentotiszt_szervezett" =>100 ,
            "mentotiszt_betoltott" => 100,
            "mentotiszt_ures" => 0,
            "mentoapolo2_szervezett" => 150,
            "mentoapolo2_betoltott" => 150,
            "mentoapolo2_ures" => 0,
            "apolo_szervezett" => 350,
            "apolo_betoltott" => 350,
            "apolo_ures" => 0,
            "szolgalatvezeto_szervezett" => 4,
            "szolgalatvezeto_betoltott" => 4,
            "szolgalatvezeto_ures" => 0,
            "apolo2_szervezett" => 350,
            "apolo2_betoltott" => 350,
            "apolo2_ures" => 0,
            "uzemgazdasz_szervezett" => 3,
            "uzemgazdasz_betoltott" => 3,
            "uzemgazdasz_ures" => 0,
            "uzemmernok_szervezett" => 3,
            "uzemmernok_betoltott" => 3,
            "uzemmernok_ures" => 0,
            "oktatas_szervezo_szervezett" => 1,
            "oktatas_szervezo_betoltott" => 1,
            "oktatas_szervezo_ures" => 0,
            "ugyintezo_szervezett" => 3,
            "ugyintezo_betoltott" => 3,
            "ugyintezo_ures" => 0,
            "adminisztrator_szervezett" => 17,
            "adminisztrator_betoltott" => 16,
            "adminisztrator_ures" => 1,
            "adatrogzito_szervezett" => 3,
            "adatrogzito_betoltott" => 3,
            "adatrogzito_ures" => 0,
            "autoszerelo_szakmunkas_szervezett" => 3,
            "autoszerelo_szakmunkas_betoltott" => 3,
            "autoszerelo_szakmunkas_ures" => 0,
            "karbantarto_szervezett" => 1,
            "karbantarto_betoltott" => 1,
            "karbantarto_ures" => 0,
            "kazanfuto_szervezett" => 1,
            "kazanfuto_betoltott" => 1,
            "kazanfuto_ures" => 0,
            "mentogepkocsivezeto_szervezett" => 150,
            "mentogepkocsivezeto_betoltott" => 150,
            "mentogepkocsivezeto_ures" => 0,
            "muszaki_gondnok_szervezett" => 1,
            "muszaki_gondnok_betoltott" => 1,
            "muszaki_gondnok_ures" => 0,
            "garazsmester_szervezett" => 3,
            "garazsmester_betoltott" => 3,
            "garazsmester_ures" => 0,
            "szervezett_gkv_osszesen" => 2,
            "betoltott_gkv_osszesen" => 2,
            "ures_gkv_osszesen" => 0,
            "szervezett_allashely_osszesen" => 350,
            "betoltott_allashely_osszesen" => 340,
            "ures_allashely_osszesen" => 10
        ]);

        $response->assertStatus(201);
    }

    public function testAllashelyApiPut()
    {
            $updateId = "7";
            $response = $this->put('https://localhost:8000/api/allashely/' . $updateId, [
                "ID" => 1,
            "mentoallomas" => "Szombathely",
            "ev" => 2026,
            "ho" => 1,
            "szakorvos_szervezett" => 3,
            "szakorvos_betoltott" => 3,
            "szakorvos_ures" => 0,
            "vezeto_mentotiszt_szervezett" => 3,
            "vezeto_mentotiszt_betoltott" => 3,
            "vezeto_mentotiszt_ures" => 0,
            "orvos_mentotiszt_szervezett" => 6,
            "orvos_mentotiszt_betoltott" => 6,
            "orvos_mentotiszt_ures" => 0,
            "foapolo_szervezett" => 3,
            "foapolo_betoltott" => 3,
            "foapolo_ures" => 0,
            "mentoapolo_szervezett" => 200,
            "mentoapolo_betoltott" => 200,
            "mentoapolo_ures" => 0,
            "mentoapolo_osszes_szervezett" => 200,
            "mentoapolo_osszes_betoltott" => 200,
            "mentoapolo_osszes_ures" => 0,
            "allomasvezeto_szervezett" => 30,
            "allomasvezeto_betoltott" => 30,
            "allomasvezeto_ures" => 0,
            "ICS_vezeto_szervezett" => 3,
            "ICS_vezeto_betoltott" => 3,
            "ICS_vezeto_ures" => 0,
            "mentotiszt_szervezett" =>100 ,
            "mentotiszt_betoltott" => 100,
            "mentotiszt_ures" => 0,
            "mentoapolo2_szervezett" => 150,
            "mentoapolo2_betoltott" => 150,
            "mentoapolo2_ures" => 0,
            "apolo_szervezett" => 350,
            "apolo_betoltott" => 350,
            "apolo_ures" => 0,
            "szolgalatvezeto_szervezett" => 4,
            "szolgalatvezeto_betoltott" => 4,
            "szolgalatvezeto_ures" => 0,
            "apolo2_szervezett" => 350,
            "apolo2_betoltott" => 350,
            "apolo2_ures" => 0,
            "uzemgazdasz_szervezett" => 3,
            "uzemgazdasz_betoltott" => 3,
            "uzemgazdasz_ures" => 0,
            "uzemmernok_szervezett" => 3,
            "uzemmernok_betoltott" => 3,
            "uzemmernok_ures" => 0,
            "oktatas_szervezo_szervezett" => 1,
            "oktatas_szervezo_betoltott" => 1,
            "oktatas_szervezo_ures" => 0,
            "ugyintezo_szervezett" => 3,
            "ugyintezo_betoltott" => 3,
            "ugyintezo_ures" => 0,
            "adminisztrator_szervezett" => 17,
            "adminisztrator_betoltott" => 16,
            "adminisztrator_ures" => 1,
            "adatrogzito_szervezett" => 3,
            "adatrogzito_betoltott" => 3,
            "adatrogzito_ures" => 0,
            "autoszerelo_szakmunkas_szervezett" => 3,
            "autoszerelo_szakmunkas_betoltott" => 3,
            "autoszerelo_szakmunkas_ures" => 0,
            "karbantarto_szervezett" => 1,
            "karbantarto_betoltott" => 1,
            "karbantarto_ures" => 0,
            "kazanfuto_szervezett" => 1,
            "kazanfuto_betoltott" => 1,
            "kazanfuto_ures" => 0,
            "mentogepkocsivezeto_szervezett" => 150,
            "mentogepkocsivezeto_betoltott" => 150,
            "mentogepkocsivezeto_ures" => 0,
            "muszaki_gondnok_szervezett" => 1,
            "muszaki_gondnok_betoltott" => 1,
            "muszaki_gondnok_ures" => 0,
            "garazsmester_szervezett" => 3,
            "garazsmester_betoltott" => 3,
            "garazsmester_ures" => 0,
            "szervezett_gkv_osszesen" => 2,
            "betoltott_gkv_osszesen" => 2,
            "ures_gkv_osszesen" => 0,
            "szervezett_allashely_osszesen" => 350,
            "betoltott_allashely_osszesen" => 340,
            "ures_allashely_osszesen" => 10
            ]);
    
            $response->assertStatus(200);  
    
    }
}
