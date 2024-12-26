<?php

namespace App\Http\Controllers;

use App\Models\Profile;
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
        // $validated = $request->validated();
        // Profile::create($validated);

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
        
        $profile = Profile::findOrFail($profileId); // Retrieve the profile being updated
        $validated = $request->validated(); // Get validated data
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
