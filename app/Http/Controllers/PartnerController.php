<?php

namespace App\Http\Controllers;

use App\Exports\PartnerExport;
use App\Http\Requests\PartnerRequest;
use App\Models\Partner;
use Maatwebsite\Excel\Facades\Excel;

class PartnerController extends Controller
{
    public function getAll()
    {
        $partnerek = Partner::with("beszerzes")->get()->toArray();

        return response()->json($partnerek, 200);
    }

    public function get(Partner $partner)
    {
        return response()->json($partner->load("beszerzes")->toArray(), 200);
    }

    public function addPartner(PartnerRequest $request){
        $partner = new Partner();
        $partner->nev = $request->get("nev");
        $partner->ir_szam = $request->get("ir_szam");
        $partner->varos = $request->get("varos");
        $partner->kozterulet = $request->get("kozterulet");
        $partner->kozt_jellege = $request->get("kozt_jellege");
        $partner->hazszam = $request->get("hazszam");
        $partner->epulet_emelet_ajto = $request->get("epulet_emelet_ajto");
        $partner->helyrazi_szam = $request->get("helyrazi_szam");
        $partner->email = $request->get("email");
        $partner->telefon = $request->get("telefon");
        $partner->adoszam = $request->get("adoszam");

        $partner->save();

        return response()->json(["id" => $partner->ID], 201);
    }

    public function updatePartner(Partner $partner, PartnerRequest $request)
    {
        $partner->nev = $request->get("nev");
        $partner->ir_szam = $request->get("ir_szam");
        $partner->varos = $request->get("varos");
        $partner->kozterulet = $request->get("kozterulet");
        $partner->kozt_jellege = $request->get("kozt_jellege");
        $partner->hazszam = $request->get("hazszam");
        $partner->epulet_emelet_ajto = $request->get("epulet_emelet_ajto");
        $partner->helyrazi_szam = $request->get("helyrazi_szam");
        $partner->email = $request->get("email");
        $partner->telefon = $request->get("telefon");
        $partner->adoszam = $request->get("adoszam");

        $partner->save();

        return response()->json($partner->toArray(), 200);
    }

    public function deletePartner(Partner $partner)
    {
        $partner->delete();

        return response()->json("OK", 204);
    }

    public function fileExport() 
    {
        return new PartnerExport();
    }
}
