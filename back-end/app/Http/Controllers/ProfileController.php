<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;
use App\Http\Requests\StoreProfileRequest;
use App\Http\Requests\UpdateProfileRequest;

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

        return response()->json(['message' => 'Profile created successfully!'], 201);
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
    public function update(UpdateProfileRequest $request, $profileId)
    {
        // return response()->json(['message' => $request->all()], 200);
        $profile = Profile::findOrFail($profileId); // Retrieve the profile being updated
        $validated = $request->validated(); // Get validated data
        if ($request->hasFile('avatar')) {
            $avatarPath = $request->file('avatar')->store('images', 'public'); //save the profile image in public/images folder
            $validated['avatar'] = $avatarPath; // Update photo path in validated data
        }
        $profile->update($validated); // Update the profile with new data

    return response()->json(['message' => 'Profile updated successfully!'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Profile $profile)
    {
        //
    }
}
