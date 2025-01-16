<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;
use App\Http\Requests\StoreProfileRequest;
use App\Http\Requests\UpdateProfileRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\User ;
use Illuminate\Support\Facades\Storage;
class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProfileRequest $request)
    {
        $validated = $request->validated();
        if ($request->hasFile('avatar')) {
            $imagePath = $request->file('avatar')->store('images', 'public');
            $validated['avatar'] = $imagePath; // Update photo path in validated data
        }
        Profile::create($validated);
        $user=Auth::user()->load('profile');
        return response()->json(['message' => 'Profile created successfully!','user'=>$user], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Profile $profile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProfileRequest $request,User $user, $profileId)
    {
        // return response()->json(['message' => $request->all()], 200);
        $profile = Profile::findOrFail($profileId); // Retrieve the profile being updated
        $validated = $request->validated(); // Get validated data
        
        if ($request->hasFile('avatar')) {
            // Check if the profile already has an avatar
            if ($profile->avatar) {
                // Delete the existing image from storage
                Storage::disk('public')->delete($profile->avatar);
            }
    
            // Save the new avatar
            $avatarPath = $request->file('avatar')->store('images', 'public'); // Save the new profile image in public/images folder
            $validated['avatar'] = $avatarPath; // Update photo path in validated data
        }
        $profile->update($validated); // Update the profile with new data
        $user=Auth::user()->load('profile');
    return response()->json(['message' => 'Profile updated successfully!', 'user'=>$user], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Profile $profile)
    {
        //
    }
}
