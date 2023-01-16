<?php

namespace App\Http\Controllers;

use App\Exports\BelsoEllenorzesExport;
use App\Exports\BelsoEllenorzesMegyenkentExport;
use App\Http\Requests\BelsoEllenorzesRequest;
use App\Models\BelsoEllenorzes;

class BelsoEllenorzesController extends Controller
{    
    public function getAll()
    {
        $belsoEllenorzesek = BelsoEllenorzes::with(["allomasEllSzerv", "allomasFelelosSzervEgyseg"])->get()->toArray();

        return response()->json($belsoEllenorzesek, 200);
    }

    public function get(BelsoEllenorzes $belsoEllenorzes)
    {
        return response()->json($belsoEllenorzes->load(["allomasEllSzerv", "allomasFelelosSzervEgyseg"])->toArray(), 200);
    }

    public function addBelsoEllenorzes(BelsoEllenorzesRequest $request){
        $belsoEllenorzes = new BelsoEllenorzes();
        $belsoEllenorzes->ell_azon = $request->get("ell_azon");
        $belsoEllenorzes->ell_iktszam = $request->get("ell_iktszam");
        $belsoEllenorzes->ell_szerv = $request->get("ell_szerv");
        $belsoEllenorzes->ell_targya = $request->get("ell_targya");
        $belsoEllenorzes->intezkedest_igenylo_megall = $request->get("intezkedest_igenylo_megall");
        $belsoEllenorzes->ell_javaslat = $request->get("ell_javaslat");
        $belsoEllenorzes->javaslat_alapjan_eloirt_int = $request->get("javaslat_alapjan_eloirt_int");
        $belsoEllenorzes->int_terv_iktszama = $request->get("int_terv_iktszama");
        $belsoEllenorzes->int_terv_jovahagyas_datuma = $request->get("int_terv_jovahagyas_datuma");
        $belsoEllenorzes->felelos_beosztas = $request->get("felelos_beosztas");
        $belsoEllenorzes->felelos_szerv_egyseg = $request->get("felelos_szerv_egyseg");
        $belsoEllenorzes->int_vegrehajt_hatarido = $request->get("int_vegrehajt_hatarido");
        $belsoEllenorzes->hatarido_mod_1 = $request->get("hatarido_mod_1");
        $belsoEllenorzes->hatarido_mod_2 = $request->get("hatarido_mod_2");
        $belsoEllenorzes->feladat_mod_1 = $request->get("feladat_mod_1");
        $belsoEllenorzes->feladat_mod_2 = $request->get("feladat_mod_2");
        $belsoEllenorzes->int_teljesites_1 = $request->get("int_teljesites_1");
        $belsoEllenorzes->int_teljesites_2 = $request->get("int_teljesites_2");
        $belsoEllenorzes->megtett_int = $request->get("megtett_int");
        $belsoEllenorzes->hatidoben_vegre_nem_hajt_int_oka = $request->get("hatidoben_vegre_nem_hajt_int_oka");
        $belsoEllenorzes->nem_telj_kapcsan_tett_lepesek = $request->get("nem_telj_kapcsan_tett_lepesek");
        $belsoEllenorzes->megjegyzes = $request->get("megjegyzes");

        $belsoEllenorzes->save();

        return response()->json(["Ellenőrzés azonosítója" => $belsoEllenorzes->ell_azon], 201);
    }

    public function updateBelsoEllenorzes(BelsoEllenorzes $belsoEllenorzes, BelsoEllenorzesRequest $request)
    {
        $belsoEllenorzes->ell_azon = $request->get("ell_azon");
        $belsoEllenorzes->ell_iktszam = $request->get("ell_iktszam");
        $belsoEllenorzes->ell_szerv = $request->get("ell_szerv");
        $belsoEllenorzes->ell_targya = $request->get("ell_targya");
        $belsoEllenorzes->intezkedest_igenylo_megall = $request->get("intezkedest_igenylo_megall");
        $belsoEllenorzes->ell_javaslat = $request->get("ell_javaslat");
        $belsoEllenorzes->javaslat_alapjan_eloirt_int = $request->get("javaslat_alapjan_eloirt_int");
        $belsoEllenorzes->int_terv_iktszama = $request->get("int_terv_iktszama");
        $belsoEllenorzes->int_terv_jovahagyas_datuma = $request->get("int_terv_jovahagyas_datuma");
        $belsoEllenorzes->felelos_beosztas = $request->get("felelos_beosztas");
        $belsoEllenorzes->felelos_szerv_egyseg = $request->get("felelos_szerv_egyseg");
        $belsoEllenorzes->int_vegrehajt_hatarido = $request->get("int_vegrehajt_hatarido");
        $belsoEllenorzes->hatarido_mod_1 = $request->get("hatarido_mod_1");
        $belsoEllenorzes->hatarido_mod_2 = $request->get("hatarido_mod_2");
        $belsoEllenorzes->feladat_mod_1 = $request->get("feladat_mod_1");
        $belsoEllenorzes->feladat_mod_2 = $request->get("feladat_mod_2");
        $belsoEllenorzes->int_teljesites_1 = $request->get("int_teljesites_1");
        $belsoEllenorzes->int_teljesites_2 = $request->get("int_teljesites_2");
        $belsoEllenorzes->megtett_int = $request->get("megtett_int");
        $belsoEllenorzes->hatidoben_vegre_nem_hajt_int_oka = $request->get("hatidoben_vegre_nem_hajt_int_oka");
        $belsoEllenorzes->nem_telj_kapcsan_tett_lepesek = $request->get("nem_telj_kapcsan_tett_lepesek");
        $belsoEllenorzes->megjegyzes = $request->get("megjegyzes");

        $belsoEllenorzes->save();

        return response()->json($belsoEllenorzes->toArray(), 200);
    }

    public function deleteBelsoEllenorzes(BelsoEllenorzes $belsoEllenorzes)
    {
        $belsoEllenorzes->delete();

        return response()->json("OK", 204);
    }

    public function fileExport()
    {
        return new BelsoEllenorzesExport();
    }

    public function fileExportMegyenkent($megye)
    {
        return new BelsoEllenorzesMegyenkentExport($megye);
    }
}
