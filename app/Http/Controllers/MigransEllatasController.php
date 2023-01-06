<?php

namespace App\Http\Controllers;

use App\Exports\MigransElllatasExport;
use App\Http\Requests\MigransEllatasRequest;
use App\Models\MigransEllatas;

class MigransEllatasController extends Controller
{
    public function getAll()
    {
        $migransEllatasok = MigransEllatas::with("megye")->get()->toArray();
        return response()->json($migransEllatasok, 200);
    }

    public function get(MigransEllatas $migransEllatas){
        return response()->json($migransEllatas->load("megye")->toArray(), 200);
    }

    public function addMigransEllatas(MigransEllatasRequest $request)
    {
        $migransEllatas = new MigransEllatas();

        $migransEllatas->megyeID = $request->get("megyeID");
        $migransEllatas->ev = $request->get("ev");
        $migransEllatas->honap = $request->get("honap");
        $migransEllatas->fo = $request->get("fo");
        $migransEllatas->megtett_km = $request->get("megtett_km");

        $migransEllatas->save();

        return response()->json(["id" => $migransEllatas->ID], 201);
    }

    public function updateMigransEllatas(MigransEllatas $migransEllatas, MigransEllatasRequest $request)
    {
        $migransEllatas->megyeID = $request->get("megyeID");
        $migransEllatas->ev = $request->get("ev");
        $migransEllatas->honap = $request->get("honap");
        $migransEllatas->fo = $request->get("fo");
        $migransEllatas->megtett_km = $request->get("megtett_km");

        $migransEllatas->save();

        return response()->json($migransEllatas->toArray(), 200);
    }

    public function deleteMigransEllatas(MigransEllatas $migransEllatas)
    {
        $migransEllatas->delete();

        return response()->json("OK", 204);
    }

    public function fileExport()
    {
        return new MigransElllatasExport;
    }
}
