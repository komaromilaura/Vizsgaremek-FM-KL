<?php

namespace App\Http\Controllers;

use App\Exports\BeszerzesExport;
use App\Http\Requests\BeszerzesRequest;
use App\Models\Beszerzes;

class BeszerzesController extends Controller
{
    public function getAll()
    {
        $beszerzesek = Beszerzes::with(["partner", "allomas"])->get()->toArray();
        return response()->json($beszerzesek, 200);
    }

    public function get(Beszerzes $beszerzes){
        return response()->json($beszerzes->load(["partner", "allomas"])->toArray(), 200);
    }

    public function addBeszerzes(BeszerzesRequest $request)
    {
        $beszerzes = new Beszerzes();
        $beszerzes->mentoallomas = $request->get("mentoallomas");
        $beszerzes->targy = $request->get("targy");
        $beszerzes->besz_igeny_datum = $request->get("besz_igeny_datum");
        $beszerzes->ajanlat_bekeres = $request->get("ajanlat_bekeres");
        $beszerzes->engedelyezesre_kuldve = $request->get("engedelyezesre_kuldve");
        $beszerzes->engedely_beerkezese = $request->get("engedely_beerkezese");
        $beszerzes->megrendelo_kiallitasa = $request->get("megrendelo_kiallitasa");
        $beszerzes->megrendelo_szama = $request->get("megrendelo_szama");
        $beszerzes->megrend_alairasra_tovabbitva = $request->get("megrend_alairasra_tovabbitva");
        $beszerzes->alairt_megrend_beerkezese = $request->get("alairt_megrend_beerkezese");
        $beszerzes->dijbekero_tovabbitasa = $request->get("dijbekero_tovabbitasa");
        $beszerzes->munkalap_kiallitasa = $request->get("munkalap_kiallitasa");
        $beszerzes->szamla_kiallitasa = $request->get("szamla_kiallitasa");
        $beszerzes->szamla_tovább_pu_nek_utalasra = $request->get("szamla_tovább_pu_nek_utalasra");
        $beszerzes->partnerID = $request->get("partnerID");

        $beszerzes->save();

        return response()->json(["megrendelo_szama" => $beszerzes->megrendelo_szama], 201);
    }

    public function updateBeszerzes(Beszerzes $beszerzes, BeszerzesRequest $request)
    {
        $beszerzes->mentoallomas = $request->get("mentoallomas");
        $beszerzes->targy = $request->get("targy");
        $beszerzes->besz_igeny_datum = $request->get("besz_igeny_datum");
        $beszerzes->ajanlat_bekeres = $request->get("ajanlat_bekeres");
        $beszerzes->engedelyezesre_kuldve = $request->get("engedelyezesre_kuldve");
        $beszerzes->engedely_beerkezese = $request->get("engedely_beerkezese");
        $beszerzes->megrendelo_kiallitasa = $request->get("megrendelo_kiallitasa");
        $beszerzes->megrendelo_szama = $request->get("megrendelo_szama");
        $beszerzes->megrend_alairasra_tovabbitva = $request->get("megrend_alairasra_tovabbitva");
        $beszerzes->alairt_megrend_beerkezese = $request->get("alairt_megrend_beerkezese");
        $beszerzes->dijbekero_tovabbitasa = $request->get("dijbekero_tovabbitasa");
        $beszerzes->munkalap_kiallitasa = $request->get("munkalap_kiallitasa");
        $beszerzes->szamla_kiallitasa = $request->get("szamla_kiallitasa");
        $beszerzes->szamla_tovább_pu_nek_utalasra = $request->get("szamla_tovább_pu_nek_utalasra");
        $beszerzes->partnerID = $request->get("partnerID");
        $beszerzes->save();

        return response()->json($beszerzes->toArray(), 200);
    }

    public function deleteBeszerzes(Beszerzes $beszerzes)
    {
        $beszerzes->delete();

        return response()->json("OK", 204);
    }

    public function fileExport()
    {
        return new BeszerzesExport;
    }
}
