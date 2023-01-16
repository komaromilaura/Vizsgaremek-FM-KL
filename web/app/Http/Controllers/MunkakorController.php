<?php

namespace App\Http\Controllers;

use App\Models\Munkakor;

class MunkakorController extends Controller
{
    public function getAll()
    {
        $munkakorok = Munkakor::get()->toArray();
        return response()->json($munkakorok, 200);
    }

    public function get(Munkakor $munkakor){
        return response()->json($munkakor->toArray(), 200);
    }
}
