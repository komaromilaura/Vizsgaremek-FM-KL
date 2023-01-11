<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;

class UserController extends Controller
{
    public function get(User $user)
    {
        return response()->json($user->toArray(), 200);
    }

    public function updateUser(User $user, UserRequest $request)
    {
        $user->IVIR = $request->get("IVIR");
        $user->Vezetek_nev = $request->get("Vezetek_nev");
        $user->Vezetek_nev = $request->get("Vezetek_nev");
        $user->Kereszt_nev = $request->get("Kereszt_nev");
        $user->Jelszo = base64_encode($request->get("Jelszo"));
        $user->Vas = $request->get("Vas");
        $user->Gyor = $request->get("Gyor");
        $user->Zala = $request->get("Zala");
        $user->Admin = $request->get("Admin");
        $user->Aktiv = $request->get("Aktiv");

        $user->save();

        return response()->json($user->toArray(), 200);
    }
}