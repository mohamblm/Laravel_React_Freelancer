<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SingupRequest;
// use Illuminate\Http\JsonResponse;
use App\Models\User ;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function singup(SingupRequest $request)
    {
        $validatedData = $request->validated();

        /** @var \App\Models\User $user */
        $user = User::create([
            'user_name' => $validatedData['user_name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
            'role' => $validatedData['role'],
        ]);

        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
        // return response(['meas'=>$validatedData]);
    }

    public function login(LoginRequest $request)

    {
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'errors' => ['errors'=>'Provided email or password is incorrect']
            ], 422);
        }

        /** @var \App\Models\User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
        // return ['message'=>'naddi'];
    }

    public function logout(Request $request)
    {
        /** @var \App\Models\User $user */
        $user = $request->user();
        $user->currentAccessToken('main')->delete();
        return ['message'=>'you are logout successfuly'];
    }
}
