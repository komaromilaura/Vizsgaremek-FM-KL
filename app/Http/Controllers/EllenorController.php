<?php

namespace App\Http\Controllers;

use App\Http\Requests\EllenorRequest;
use App\Models\Ellenor;

class EllenorController extends Controller
{
    public function getAll()
    {
        $ellenorok = Ellenor::with("kulsoEllenorzes")->get()->toArray();

        return response()->json($ellenorok, 200);
    }

    public function get(Ellenor $ellenor)
    {
        return response()->json($ellenor->load("kulsoEllenorzes")->toArray(), 200);
    }

    public function addEllenor(EllenorRequest $request){
        $ellenor = new ellenor();
        $ellenor->nev = $request->get("nev");
        $ellenor->ir_szam = $request->get("ir_szam");
        $ellenor->varos = $request->get("varos");
        $ellenor->kozterulet = $request->get("kozterulet");
        $ellenor->kozt_jellege = $request->get("kozt_jellege");
        $ellenor->hazszam = $request->get("hazszam");
        $ellenor->epulet_emelet_ajto = $request->get("epulet_emelet_ajto");
        $ellenor->helyrazi_szam = $request->get("helyrazi_szam");
        $ellenor->email = $request->get("email");
        $ellenor->telefon = $request->get("telefon");
        $ellenor->kontakt_szemely = $request->get("kontakt_szemely");

        $ellenor->save();

        return response()->json(["id" => $ellenor->ID], 201);
    }

    public function updateEllenor(Ellenor $ellenor, EllenorRequest $request)
    {
        $ellenor->nev = $request->get("nev");
        $ellenor->ir_szam = $request->get("ir_szam");
        $ellenor->varos = $request->get("varos");
        $ellenor->kozterulet = $request->get("kozterulet");
        $ellenor->kozt_jellege = $request->get("kozt_jellege");
        $ellenor->hazszam = $request->get("hazszam");
        $ellenor->epulet_emelet_ajto = $request->get("epulet_emelet_ajto");
        $ellenor->helyrazi_szam = $request->get("helyrazi_szam");
        $ellenor->email = $request->get("email");
        $ellenor->telefon = $request->get("telefon");
        $ellenor->kontakt_szemely = $request->get("kontakt_szemely");

        $ellenor->save();

        return response()->json($ellenor->toArray(), 200);
    }

    public function deleteEllenor(Ellenor $ellenor)
    {
        $ellenor->delete();

        return response()->json("OK", 204);
    }
}
