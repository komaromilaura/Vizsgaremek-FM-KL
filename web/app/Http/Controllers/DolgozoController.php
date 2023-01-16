<?php

namespace App\Http\Controllers;

use App\Exports\DolgozoExport;
use App\Http\Requests\DolgozoRequest;
use App\Models\Dolgozo;

class DolgozoController extends Controller
{
    public function getAll()
    {
        $dolgozok = Dolgozo::with(["mento_allomas", "munkakor"])->get()->toArray();

        return response()->json($dolgozok, 200);
    }

    public function get(Dolgozo $dolgozo)
    {
        return response()->json($dolgozo->load(["mento_allomas", "munkakor"])->toArray(), 200);
    }

    public function addDolgozo(DolgozoRequest $request){
        $dolgozo = new Dolgozo();
        $dolgozo->vezetek_nev = $request->get("vezetek_nev");
        $dolgozo->kereszt_nev = $request->get("kereszt_nev");
        $dolgozo->IVIR = $request->get("IVIR");
        $dolgozo->torzsszam = $request->get("torzsszam");
        $dolgozo->adoazonosito = $request->get("adoazonosito");
        $dolgozo->ir_szam = $request->get("ir_szam");
        $dolgozo->varos = $request->get("varos");
        $dolgozo->kozterulet = $request->get("kozterulet");
        $dolgozo->kozterulet_jellege = $request->get("kozterulet_jellege");
        $dolgozo->hazszam = $request->get("hazszam");
        $dolgozo->epulet_emelet_ajto = $request->get("epulet_emelet_ajto");
        $dolgozo->ceges_email = $request->get("ceges_email");
        $dolgozo->telefon = $request->get("telefon");
        $dolgozo->allomas = $request->get("allomas");
        $dolgozo->munkakorID = $request->get("munkakorID");

        $dolgozo->save();

        return response()->json(["IVIR" => $dolgozo->IVIR], 201);
    }

    public function updateDolgozo(Dolgozo $dolgozo, DolgozoRequest $request)
    {
        $dolgozo->vezetek_nev = $request->get("vezetek_nev");
        $dolgozo->kereszt_nev = $request->get("kereszt_nev");
        $dolgozo->IVIR = $request->get("IVIR");
        $dolgozo->torzsszam = $request->get("torzsszam");
        $dolgozo->adoazonosito = $request->get("adoazonosito");
        $dolgozo->ir_szam = $request->get("ir_szam");
        $dolgozo->varos = $request->get("varos");
        $dolgozo->kozterulet = $request->get("kozterulet");
        $dolgozo->kozterulet_jellege = $request->get("kozterulet_jellege");
        $dolgozo->hazszam = $request->get("hazszam");
        $dolgozo->epulet_emelet_ajto = $request->get("epulet_emelet_ajto");
        $dolgozo->ceges_email = $request->get("ceges_email");
        $dolgozo->telefon = $request->get("telefon");
        $dolgozo->allomas = $request->get("allomas");
        $dolgozo->munkakorID = $request->get("munkakorID");

        $dolgozo->save();

        return response()->json($dolgozo->toArray(), 200);
    }

    public function deleteDolgozo(Dolgozo $dolgozo)
    {
        $dolgozo->delete();

        return response()->json("OK", 204);
    }

    public function fileExport()
    {
        return new DolgozoExport();
    }
}
