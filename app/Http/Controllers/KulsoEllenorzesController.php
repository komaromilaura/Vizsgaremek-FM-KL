<?php

namespace App\Http\Controllers;

use App\Exports\KulsoEllenorzesExport;
use App\Http\Requests\KulsoEllenorzesRequest;
use App\Models\KulsoEllenorzes;

class KulsoEllenorzesController extends Controller
{
    public function getAll()
    {
        $kulsoEllenorzesek = KulsoEllenorzes::with(["allomasEllSzerv", "allomasFelelosSzervEgyseg", "ellenor"])->get()->toArray();

        return response()->json($kulsoEllenorzesek, 200);
    }

    public function get(KulsoEllenorzes $kulsoEllenorzes)
    {
        return response()->json($kulsoEllenorzes->load(["allomasEllSzerv", "allomasFelelosSzervEgyseg", "ellenor"])->toArray(), 200);
    }

    public function addkulsoEllenorzes(KulsoEllenorzesRequest $request){
        $kulsoEllenorzes = new KulsoEllenorzes();
        $kulsoEllenorzes->ellenorzest_vegzoID = $request->get("ellenorzest_vegzoID");
        $kulsoEllenorzes->ell_azon = $request->get("ell_azon");
        $kulsoEllenorzes->ell_iktszam = $request->get("ell_iktszam");
        $kulsoEllenorzes->ell_szerv = $request->get("ell_szerv");
        $kulsoEllenorzes->kapcsolattarto_neve = $request->get("kapcsolattarto_neve");
        $kulsoEllenorzes->kapcsolattarto_tel = $request->get("kapcsolattarto_tel");
        $kulsoEllenorzes->ell_targya = $request->get("ell_targya");
        $kulsoEllenorzes->intezkedest_igenylo_megall = $request->get("intezkedest_igenylo_megall");
        $kulsoEllenorzes->ell_javaslat = $request->get("ell_javaslat");
        $kulsoEllenorzes->javaslat_alapjan_eloirt_int = $request->get("javaslat_alapjan_eloirt_int");
        $kulsoEllenorzes->int_terv_iktszama = $request->get("int_terv_iktszama");
        $kulsoEllenorzes->int_terv_jovahagyas_datuma = $request->get("int_terv_jovahagyas_datuma");
        $kulsoEllenorzes->felelos_beosztas = $request->get("felelos_beosztas");
        $kulsoEllenorzes->felelos_szerv_egyseg = $request->get("felelos_szerv_egyseg");
        $kulsoEllenorzes->int_vegrehajt_hatarido = $request->get("int_vegrehajt_hatarido");
        $kulsoEllenorzes->hatarido_mod_1 = $request->get("hatarido_mod_1");
        $kulsoEllenorzes->hatarido_mod_2 = $request->get("hatarido_mod_2");
        $kulsoEllenorzes->feladat_mod_1 = $request->get("feladat_mod_1");
        $kulsoEllenorzes->feladat_mod_2 = $request->get("feladat_mod_2");
        $kulsoEllenorzes->int_teljesites_1 = $request->get("int_teljesites_1");
        $kulsoEllenorzes->int_teljesites_2 = $request->get("int_teljesites_2");
        $kulsoEllenorzes->megtett_int = $request->get("megtett_int");
        $kulsoEllenorzes->hatidoben_vegre_nem_hajt_int_oka = $request->get("hatidoben_vegre_nem_hajt_int_oka");
        $kulsoEllenorzes->nem_telj_kapcsan_tett_lepesek = $request->get("nem_telj_kapcsan_tett_lepesek");
        $kulsoEllenorzes->megjegyzes = $request->get("megjegyzes");

        $kulsoEllenorzes->save();

        return response()->json(["Ellenőrzés azonosítója" => $kulsoEllenorzes->ell_azon], 201);
    }

    public function updatekulsoEllenorzes(KulsoEllenorzes $kulsoEllenorzes, KulsoEllenorzesRequest $request)
    {
        $kulsoEllenorzes->ellenorzest_vegzoID = $request->get("ellenorzest_vegzoID");
        $kulsoEllenorzes->ell_azon = $request->get("ell_azon");
        $kulsoEllenorzes->ell_iktszam = $request->get("ell_iktszam");
        $kulsoEllenorzes->ell_szerv = $request->get("ell_szerv");
        $kulsoEllenorzes->kapcsolattarto_neve = $request->get("kapcsolattarto_neve");
        $kulsoEllenorzes->kapcsolattarto_tel = $request->get("kapcsolattarto_tel");
        $kulsoEllenorzes->ell_targya = $request->get("ell_targya");
        $kulsoEllenorzes->intezkedest_igenylo_megall = $request->get("intezkedest_igenylo_megall");
        $kulsoEllenorzes->ell_javaslat = $request->get("ell_javaslat");
        $kulsoEllenorzes->javaslat_alapjan_eloirt_int = $request->get("javaslat_alapjan_eloirt_int");
        $kulsoEllenorzes->int_terv_iktszama = $request->get("int_terv_iktszama");
        $kulsoEllenorzes->int_terv_jovahagyas_datuma = $request->get("int_terv_jovahagyas_datuma");
        $kulsoEllenorzes->felelos_beosztas = $request->get("felelos_beosztas");
        $kulsoEllenorzes->felelos_szerv_egyseg = $request->get("felelos_szerv_egyseg");
        $kulsoEllenorzes->int_vegrehajt_hatarido = $request->get("int_vegrehajt_hatarido");
        $kulsoEllenorzes->hatarido_mod_1 = $request->get("hatarido_mod_1");
        $kulsoEllenorzes->hatarido_mod_2 = $request->get("hatarido_mod_2");
        $kulsoEllenorzes->feladat_mod_1 = $request->get("feladat_mod_1");
        $kulsoEllenorzes->feladat_mod_2 = $request->get("feladat_mod_2");
        $kulsoEllenorzes->int_teljesites_1 = $request->get("int_teljesites_1");
        $kulsoEllenorzes->int_teljesites_2 = $request->get("int_teljesites_2");
        $kulsoEllenorzes->megtett_int = $request->get("megtett_int");
        $kulsoEllenorzes->hatidoben_vegre_nem_hajt_int_oka = $request->get("hatidoben_vegre_nem_hajt_int_oka");
        $kulsoEllenorzes->nem_telj_kapcsan_tett_lepesek = $request->get("nem_telj_kapcsan_tett_lepesek");
        $kulsoEllenorzes->megjegyzes = $request->get("megjegyzes");


        $kulsoEllenorzes->save();

        return response()->json($kulsoEllenorzes->toArray(), 200);
    }

    public function deletekulsoEllenorzes(KulsoEllenorzes $kulsoEllenorzes)
    {
        $kulsoEllenorzes->delete();

        return response()->json("OK", 204);
    }

    public function fileExport()
    {
        return new KulsoEllenorzesExport;
    }
}
