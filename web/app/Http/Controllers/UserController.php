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

    public function updatePassword(User $user, UserRequest $request)
    {
        $user->password = base64_encode($request->get("password"));
        
        $user->save();

        return response()->json($user->toArray(), 200);
    }
}