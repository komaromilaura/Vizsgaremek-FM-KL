<?php

namespace App\Http\Controllers;

use App\Models\Megye;

class MegyeController extends Controller
{
    public function getAll()
    {
        $megyek = Megye::with("migransEllatas")->get()->toArray();
        return response()->json($megyek, 200);
    }

    public function get(Megye $megye){
        return response()->json($megye->load("migransEllatas")->toArray(), 200);
    }
}
