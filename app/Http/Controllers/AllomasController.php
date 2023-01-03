<?php

namespace App\Http\Controllers;

use App\Models\Allomas;

class AllomasController extends Controller
{
    public function getAll()
    {
        $allomasok = Allomas::with(["megye", "user"])->get()->toArray();
        return response()->json($allomasok, 200);
    }

    public function get(Allomas $allomas){
        return response()->json($allomas->load(["megye", "user"])->toArray(), 200);
    }
}
