<?php

namespace App\Http\Controllers;

use App\Models\ProfessionalProfile;
use App\Http\Requests\StoreProfessionalProfileRequest;
use App\Http\Requests\UpdateProfessionalProfileRequest;

class ProfessionalProfileController extends Controller
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
    public function store(StoreProfessionalProfileRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ProfessionalProfile $professionalProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProfessionalProfileRequest $request, ProfessionalProfile $professionalProfile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProfessionalProfile $professionalProfile)
    {
        //
    }
}
