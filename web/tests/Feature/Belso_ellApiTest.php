<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class Belso_ellApiTest extends TestCase
{

    public function testBelso_ellApiGetAll()
    {
        $response = $this->get('https://localhost:8000/api/belso_ell');

        $response->assertStatus(200);
    }

    public function testBelso_ellApiGet()
    {
        $response = $this->get('https://localhost:8000/api/belso_ell/2022-4');

        $response->assertStatus(200);
    }

    public function testBelso_ellApiDelete()
    {

        $response = $this->delete('https://localhost:8000/api/belso_ell/2022-3');

        $response->assertStatus(204);
    }

    public function testBelso_ellApiPost()
    {
        $response = $this->post('https://localhost:8000/api/belso_ell', [
            "ell_azon" => "2023-05",
            "ell_iktszam" => "4-1/2023",
            "ell_szerv" => "Szombathely",
            "ell_targya" => "teszt",
            "intezkedest_igenylo_megall" => "teszt",
            "ell_javaslat" => "teszt",
            "javaslat_alapjan_eloirt_int" => "teszt",
            "int_terv_iktszama" => "4-2/2023",
            "int_terv_jovahagyas_datuma" => "2023-05-02",
            "felelos_beosztas" => "állomásvezető",
            "felelos_szerv_egyseg" => "Szombathely",
            "int_vegrehajt_hatarido" => "2023-06-10",
            "hatarido_mod_1" => 1,
            "hatarido_mod_2" => "2023-07-10",
            "feladat_mod_1" => 1,
            "feladat_mod_2" => "teszt",
            "int_teljesites_1" => 1,
            "int_teljesites_2" => "2023-08-11",
            "megtett_int" => "teszt",
            "hatidoben_vegre_nem_hajt_int_oka" => "teszt",
            "nem_telj_kapcsan_tett_lepesek" => "teszt",
            "megjegyzes" => "teszt" 

        ]);

        $response->assertStatus(201);
    }

    public function testBelso_ellApiPut()
    {
            $updateId = "2022-4";
            $response = $this->put('https://localhost:8000/api/belso_ell/' . $updateId, [
                "ell_azon" => "2022-4",
                "ell_iktszam" => "5-1/2023",
                "ell_szerv" => "Szombathely",
                "ell_targya" => "teszt",
                "intezkedest_igenylo_megall" => "teszt",
                "ell_javaslat" => "teszt",
                "javaslat_alapjan_eloirt_int" => "teszt",
                "int_terv_iktszama" => "5-2/2023",
                "int_terv_jovahagyas_datuma" => "2023-05-02",
                "felelos_beosztas" => "állomásvezető",
                "felelos_szerv_egyseg" => "Szombathely",
                "int_vegrehajt_hatarido" => "2023-06-10",
                "hatarido_mod_1" => 1,
                "hatarido_mod_2" => "2023-07-10",
                "feladat_mod_1" => 1,
                "feladat_mod_2" => "teszt",
                "int_teljesites_1" => 1,
                "int_teljesites_2" => "2023-08-11",
                "megtett_int" => "teszt",
                "hatidoben_vegre_nem_hajt_int_oka" => "teszt",
                "nem_telj_kapcsan_tett_lepesek" => "teszt",
                "megjegyzes" => "teszt" 
            ]);
    
            $response->assertStatus(200);  
    
    }

}
