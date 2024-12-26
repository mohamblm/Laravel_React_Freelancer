<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request): JsonResponse
    {
        $validatedData = $request->validated(); // Fetch validated data.

        // Create the user
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
            'profile_image' => $validatedData['profile_image'] ?? null,
            'phone_number' => $validatedData['phone_number'] ?? null,
            'role' => $validatedData['role'],
        ]);

        return response()->json(['user' => $user], 201);
        // return 'ok';
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {   
        // get the user from data base
        $show_user = User::find($user);
        // $show_user = User::findOrFail($id);
        // $show_user = User::where($user)->get();
        

        return $show_user;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user): JsonResponse
{
    // Retrieve validated data
    $validated = $request->validated();

    // // Update user fields
    $user->name = $validated['name'];
    $user->email = $validated['email'];

    // // Update password if provided
    if (!empty($validated['password'])) {
        $user->password = Hash::make($validated['password']);
    }

    // // Handle profile image if provided
    // if ($request->hasFile('profile_image')) {
    //     // Delete the old profile image if it exists
    //     if ($user->profile_image && \Storage::exists('public/' . $user->profile_image)) {
    //         \Storage::delete('public/' . $user->profile_image);
    //     }

    //     // Store the new profile image
    //     $image = $request->file('profile_image');
    //     $imagePath = $image->store('profile_images', 'public');
    //     $user->profile_image = $imagePath;
    // }

    // // Update optional fields
    $user->phone_number = $validated['phone_number'] ?? $user->phone_number; // Keep existing if not provided
    $user->role = $validated['role'] ?? $user->role; // Keep existing if not provided

    // // Save the updated user
    $user->save();

    // Return a success response
    return response()->json([
        'message' => 'User updated successfully.',
        'user' => $user,
    ]);
    return response()->json([
        'message' => 'User updated successfully.'
    ]);
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
    
}
