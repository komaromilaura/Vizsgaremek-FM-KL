<?php

namespace App\Http\Controllers;

use App\Exports\TuloraExport;
use App\Exports\TuloraMegyenkentExport;
use App\Http\Requests\TuloraRequest;
use App\Models\Tulora;

class TuloraController extends Controller
{
    public function getAll()
    {
        $tulorak = Tulora::with("allomas")->get()->toArray();
        return response()->json($tulorak, 200);
    }

    public function get(Tulora $tulora){
        return response()->json($tulora->load("allomas")->toArray(), 200);
    }

    public function addTulora(TuloraRequest $request)
    {
        $tulora = new Tulora();

        $tulora->mentoallomas = $request->get("mentoallomas");
        $tulora->ev = $request->get("ev");
        $tulora->honap = $request->get("honap");
        $tulora->ment_fel_miatti_tulora = $request->get("ment_fel_miatti_tulora");
        $tulora->egyeb_tulora = $request->get("egyeb_tulora");
        $tulora->orvos_mentotiszt = $request->get("orvos_mentotiszt");
        $tulora->apolo = $request->get("apolo");
        $tulora->mentesiranyitasban_dolg = $request->get("mentesiranyitasban_dolg");
        $tulora->mentogkvezeto = $request->get("mentogkvezeto");
        $tulora->betegszall_iranyitasban_dolg = $request->get("betegszall_iranyitasban_dolg");

        $tulora->save();

        return response()->json(["id" => $tulora->ID], 201);
    }

    public function updateTulora(Tulora $tulora, TuloraRequest $request)
    {
        $tulora->mentoallomas = $request->get("mentoallomas");
        $tulora->ev = $request->get("ev");
        $tulora->honap = $request->get("honap");
        $tulora->ment_fel_miatti_tulora = $request->get("ment_fel_miatti_tulora");
        $tulora->egyeb_tulora = $request->get("egyeb_tulora");
        $tulora->orvos_mentotiszt = $request->get("orvos_mentotiszt");
        $tulora->apolo = $request->get("apolo");
        $tulora->mentesiranyitasban_dolg = $request->get("mentesiranyitasban_dolg");
        $tulora->mentogkvezeto = $request->get("mentogkvezeto");
        $tulora->betegszall_iranyitasban_dolg = $request->get("betegszall_iranyitasban_dolg");

        $tulora->save();

        return response()->json($tulora->toArray(), 200);
    }

    public function deleteTulora(Tulora $tulora)
    {
        $tulora->delete();

        return response()->json("OK", 204);
    }

    public function fileExport()
    {
        return new TuloraExport();
    }

    public function fileExportMegyenkent($megye)
    {
        return new TuloraMegyenkentExport($megye);
    }    
}
