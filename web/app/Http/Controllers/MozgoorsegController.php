<?php

namespace App\Http\Controllers;

use App\Exports\MozgoorsegExport;
use App\Exports\MozgoorsegMegyenkentExport;
use App\Http\Requests\MozgoorsegRequest;
use App\Models\Mozgoorseg;

class MozgoorsegController extends Controller
{
    public function getAll()
    {
        $mozgoorsegek = Mozgoorseg::with(["allomas", "megrendelo"])->get()->toArray();
        return response()->json($mozgoorsegek, 200);
    }

    public function get(Mozgoorseg $mozgoorseg){
        return response()->json($mozgoorseg->load(["allomas", "megrendelo"])->toArray(), 200);
    }

    public function addMozgoorseg(MozgoorsegRequest $request)
    {
        $mozgoorseg = new Mozgoorseg();

        $mozgoorseg->megrendeloID = $request->get("megrendeloID");
        $mozgoorseg->szerzodesszam = $request->get("szerzodesszam");
        $mozgoorseg->rendezveny_neve = $request->get("rendezveny_neve");
        $mozgoorseg->rendezveny_datuma = $request->get("rendezveny_datuma");
        $mozgoorseg->rendezveny_helye = $request->get("rendezveny_helye");
        $mozgoorseg->mentoallomas = $request->get("mentoallomas");
        $mozgoorseg->roko = $request->get("roko");
        $mozgoorseg->eset = $request->get("eset");
        $mozgoorseg->mentogk = $request->get("mentogk");
        $mozgoorseg->gyalogorseg = $request->get("gyalogorseg");
        $mozgoorseg->bevetel = $request->get("bevetel");
        $mozgoorseg->koltseg = $request->get("koltseg");
        $mozgoorseg->maradvany = $request->get("maradvany");

        $mozgoorseg->save();

        return response()->json(["szerzodes szam" => $mozgoorseg->szerzodesszam], 201);
    }

    public function updateMozgoorseg(Mozgoorseg $mozgoorseg, MozgoorsegRequest $request)
    {
        $mozgoorseg->megrendeloID = $request->get("megrendeloID");
        $mozgoorseg->szerzodesszam = $request->get("szerzodesszam");
        $mozgoorseg->rendezveny_neve = $request->get("rendezveny_neve");
        $mozgoorseg->rendezveny_datuma = $request->get("rendezveny_datuma");
        $mozgoorseg->rendezveny_helye = $request->get("rendezveny_helye");
        $mozgoorseg->mentoallomas = $request->get("mentoallomas");
        $mozgoorseg->roko = $request->get("roko");
        $mozgoorseg->eset = $request->get("eset");
        $mozgoorseg->mentogk = $request->get("mentogk");
        $mozgoorseg->gyalogorseg = $request->get("gyalogorseg");
        $mozgoorseg->bevetel = $request->get("bevetel");
        $mozgoorseg->koltseg = $request->get("koltseg");
        $mozgoorseg->maradvany = $request->get("maradvany");
                
        $mozgoorseg->save();

        return response()->json($mozgoorseg->toArray(), 200);
    }

    public function deleteMozgoorseg(Mozgoorseg $mozgoorseg)
    {
        $mozgoorseg->delete();

        return response()->json("OK", 204);
    }

    public function fileExport()
    {
        return new MozgoorsegExport();
    }

    public function fileExportMegyenkent($megye)
    {
        return new MozgoorsegMegyenkentExport($megye);
    }  
}
