<?php

namespace App\Http\Controllers;

use App\Models\ProfessionalProfile;
use App\Http\Requests\StoreProfessionalProfileRequest;
use App\Http\Requests\UpdateProfessionalProfileRequest;
use Illuminate\Http\Request;
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
        // $occupationsJson = $request->input('occupations'); // Get the JSON data from FormData
        // $occupations = json_decode($occupationsJson, true); // Decode the JSON into an array
        $educationjson=$request->input('education');
        $education=json_decode($educationjson,true);
        
        $certificationjson=$request->input('certification');
        $certification=json_decode($certificationjson,true);

        if(count($education)<1){
            $educationjson=null;
        }
        if(count($certification)<1){
            $certificationjson=null;
        }

        ProfessionalProfile::create([
            'user_id'=>$request['user_id'],
            'occupation'=>$request->input('occupations'),
            'skills'=>$request->input('skills'),
            'education'=>$educationjson,
            'certification'=>$certificationjson,
            'website_url'=>$request->input('website_url'),
        ]);
        return response()->json(['message' => 'Your Professonal Profile completed successfully!'], 200);
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
