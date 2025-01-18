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
    
        $requestValidated=$request->validated();

        $educationjson=$requestValidated['education'];
        $education=json_decode($educationjson,true);
        
        $certificationjson=$requestValidated['certification'];
        $certification=json_decode($certificationjson,true);

        if(count($education)<1){
            $educationjson=null;
        }
        if(count($certification)<1){
            $certificationjson=null;
        }

        ProfessionalProfile::create($requestValidated);
        $user=$request->user()->load('profile')->load('professionalprofile');
        return response()->json(['message' => 'Your Professonal Profile completed successfully!','user'=>$user], 200);
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
    public function update(UpdateProfessionalProfileRequest $request, ProfessionalProfile $professionalProfile ,$id)
    {
        $requestValidated=$request->validated();// check data is it valide

        $professionalProfile=ProfessionalProfile::findOrFail($id); // find the professional profile with id


        
        $education=json_decode($requestValidated['education'],true);// decode jon form to array 
        if(count($education)<1){ // check if the array empty to make it null . we want stock it with value null 
            $requestValidated['education']=null;
        }

        $certification=json_decode($requestValidated['certification'],true);
        if(count($certification)<1){
            $requestValidated['certification']=null;
        }

        $professionalProfile->update($requestValidated);
        $user=$request->user()->load('profile')->load('professionalprofile'); //get the user with his persional profile and professional profile
        return response()->json(['message' => 'Your Professonal Profile updated successfully!','user'=>$user], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProfessionalProfile $professionalProfile)
    {
        //
    }
}
