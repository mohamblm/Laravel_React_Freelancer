<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\professionalProfileController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SearchController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\MessageController;


Route::middleware('auth:sanctum')->group(function () {
    
    Route::get('/user', function (Request $request) {
        $user = Auth::user()->load('profile')->load('professionalprofile'); // Load the related profile

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
    Route::apiResource('/professionalInformations',professionalProfileController::class);
    Route::get('/myservices', [ServiceController::class,'myservices']);
    Route::put('/myservices/{id}', [ServiceController::class,'update']);
    Route::post('/myservices', [ServiceController::class,'store']);
});



route::post('/login',[AuthController::class,'login']);
route::post('/singup',[AuthController::class,'singup']);

Route::get('categories',[CategoryController::class,'index']);

Route::get('/services',[ServiceController::class,'index']);
Route::get('/service/{id}',[ServiceController::class,'showOneService']);

Route::get('search/fetchSuggestions',[SearchController::class,'fetchSuggestions']);

Route::post('/verify',[AuthController::class,'verify']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/send-message', [MessageController::class, 'sendMessage']);
    Route::get('/messages/{receiverId}', [MessageController::class, 'getMessages']);
    Route::get('/chat-users',[MessageController::class,'getChatUsers']);
});