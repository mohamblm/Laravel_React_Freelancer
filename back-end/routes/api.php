<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\professionalProfileController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Auth;


Route::middleware('auth:sanctum')->group(function () {
    
    Route::get('/user', function (Request $request) {
        $user = Auth::user()->load('profile'); // Load the related profile

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        return response()->json($user);
    });
    Route::put('/user',[AuthController::class, 'update']);
    Route::post('/logout', [AuthController::class, 'logout']);
    // Route::put('/profile/{profile}', [ProfileController::class, 'update']);
    // Route::apiResource('/users', UserController::class);
    Route::apiResource('/profile', ProfileController::class);
    Route::post('/professionalInformations',[professionalProfileController::class,'store']);
    Route::post('/service',[ServiceController::class,'store']);
});



route::post('/login',[AuthController::class,'login']);
route::post('/singup',[AuthController::class,'singup']);

Route::get('categories',[CategoryController::class,'index']);
Route::get('/services',[ServiceController::class,'index']);
Route::get('/service/{id}',[ServiceController::class,'show']);
Route::post('/verify',[AuthController::class,'verify']);