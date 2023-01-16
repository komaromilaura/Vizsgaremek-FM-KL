<?php

namespace App\Http\Controllers;

use App\Exports\LetszamExport;
use App\Exports\LetszamMegyenkentExport;
use App\Http\Requests\LetszamRequest;
use App\Models\Letszam;

class LetszamController extends Controller
{
    public function getAll()
    {
        $letszamAdatok = Letszam::with("allomas")->get()->toArray();
        return response()->json($letszamAdatok, 200);
    }

    public function get(Letszam $letszam){
        return response()->json($letszam->load("allomas")->toArray(), 200);
    }

    public function addLetszam(LetszamRequest $request)
    {
        $letszam = new Letszam();

        $letszam->mentoallomas = $request->get("mentoallomas");
        $letszam->ev = $request->get("ev");
        $letszam->negyedev = $request->get("negyedev");
        $letszam->kivon_all_szevezett = $request->get("kivon_all_szevezett");
        $letszam->kivon_all_betoltott = $request->get("kivon_all_betoltott");
        $letszam->mentesiranyitas_szervezett = $request->get("mentesiranyitas_szervezett");
        $letszam->mentesiranyitas_betoltott = $request->get("mentesiranyitas_betoltott");
        $letszam->betegszall_szervezett = $request->get("betegszall_szervezett");
        $letszam->betegszall_betoltott = $request->get("betegszall_betoltott");
        $letszam->orvos_mentotiszt = $request->get("orvos_mentotiszt");
        $letszam->apolo = $request->get("apolo");
        $letszam->mentesiranyitasban_dolg = $request->get("mentesiranyitasban_dolg");
        $letszam->mentogkvezeto = $request->get("mentogkvezeto");
        $letszam->betegszall_iranyitasban_dolg = $request->get("betegszall_iranyitasban_dolg");

        $letszam->save();

        return response()->json(["id" => $letszam->ID], 201);
    }

    public function updateLetszam(Letszam $letszam, LetszamRequest $request)
    {
        $letszam->mentoallomas = $request->get("mentoallomas");
        $letszam->ev = $request->get("ev");
        $letszam->negyedev = $request->get("negyedev");
        $letszam->kivon_all_szevezett = $request->get("kivon_all_szevezett");
        $letszam->kivon_all_betoltott = $request->get("kivon_all_betoltott");
        $letszam->mentesiranyitas_szervezett = $request->get("mentesiranyitas_szervezett");
        $letszam->mentesiranyitas_betoltott = $request->get("mentesiranyitas_betoltott");
        $letszam->betegszall_szervezett = $request->get("betegszall_szervezett");
        $letszam->betegszall_betoltott = $request->get("betegszall_betoltott");
        $letszam->orvos_mentotiszt = $request->get("orvos_mentotiszt");
        $letszam->apolo = $request->get("apolo");
        $letszam->mentesiranyitasban_dolg = $request->get("mentesiranyitasban_dolg");
        $letszam->mentogkvezeto = $request->get("mentogkvezeto");
        $letszam->betegszall_iranyitasban_dolg = $request->get("betegszall_iranyitasban_dolg");
        
        $letszam->save();

        return response()->json($letszam->toArray(), 200);
    }

    public function deleteLetszam(Letszam $letszam)
    {
        $letszam->delete();

        return response()->json("OK", 204);
    }

    public function fileExport()
    {
        return new LetszamExport();
    }

    public function fileExportMegyenkent($megye)
    {
        return new LetszamMegyenkentExport($megye);
    }    
}
