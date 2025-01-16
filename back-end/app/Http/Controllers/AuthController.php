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
        $user_id=$user->id;
        $email=$user->email;
        $verifyUrl="http://localhost:3000/verify?id=$user_id&email=$email";
        // $token = $user->createToken('main')->plainTextToken;
        // return response(compact('user', 'token'));
        return response(['verifyUrl'=>$verifyUrl]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        // Attempt authentication
        if (!Auth::attempt($credentials)) {
            return response([
                'errors' => ['errors' => 'Provided email or password is incorrect.']
            ], 422);
        }

        // Retrieve the authenticated user
        /** @var \App\Models\User $user */
        $user = Auth::user();

        // Check if the user's email is verified
        if (is_null($user->email_verified_at)) {
            $user_id=$user->id;
            $email=$user->email;
            $verifyUrl="http://localhost:3000/verify?id=$user_id&email=$email";
            return response([
                'errors' => ['errors' => 'Your email address is not verified. Please folow the link below to verify your account.'],
                'verifyUrl'=>$verifyUrl
            ], 403);
        }

        // Load the user's profile 
        $user->load('profile');

        // Generate the token
        $token = $user->createToken('main')->plainTextToken;

        // Return the user data and token
        return response(compact('user', 'token'));
    }


    public function logout(Request $request)
    {
        /** @var \App\Models\User $user */
        $user = $request->user();
        $user->currentAccessToken('main')->delete();
        return ['message'=>'you are logout successfuly'];
    }
    public function update(Request $request)
    {
        /** @var \App\Models\User $user */
        $role = $request['user_role'];
        $user = $request->user();
       
        $user->role = $role;
        $user->save();
        // $user = $request->user();
        return ['user'=>$user , 'message'=>'Congratulation you are can now salling in GoFreelancer'];
    }

    public function verify(Request $request)
    {
        $id=$request['id'];
        $email=$request['email'];

        // Validate the query parameters
        if (!$id || !$email) {
            return response()->json(['message' => 'Missing required parameters.'], 400);
        }

        // Check if the user exists
        $user = User::where('id', $id)->where('email', $email)->whereNull('email_verified_at')->first();

        if ($user) {
            $user->email_verified_at=now();
            $user->save();
            return response()->json(['message' => 'User email verified successfully!'], 200);
        } else {
            return response()->json(['message' => 'You dont have an account. you should create one.'], 404);
        }


        return ['user'=>$user , 'message'=>'Congratulation you can now salling in GoFreelancer'];
    }
}
