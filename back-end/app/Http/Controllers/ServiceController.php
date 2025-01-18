<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use App\Http\Requests\StoreServiceRequest;
use App\Http\Requests\UpdateServiceRequest;
use Illuminate\Support\Facades\Storage;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $user=$request->user();
        $services = $user->services;
        return response()->json(['services'=>$services]);
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(storeServiceRequest $request, Service $service)
    {
        $service=$request;
        // Validate incoming data
        $validated = $request->validated();

        // Store uploaded images and get their URLs
        $imagePaths = [];
        foreach ($request->file('images_url') as $image) {
            $path = $image->store('services/images', 'public'); // Save to public storage
            $imagePaths[] = $path; // Get the public URL
        }

        // Create the service
        $service = Service::create([
            'user_id' => auth()->id(), // Assuming the user is authenticated
            'title' => $validated['title'],
            'description' => $validated['description'],
            'price' => $validated['price'],
            'category_id' => $validated['category_id'],
            'subcategory_id' => $validated['subcategory_id'],
            'semicategory_id' => $validated['semicategory_id'],
            'image_url' => json_encode($imagePaths), // Store image URLs as JSON
            'status' => 'draft', // Default status
        ]);

        return response()->json(['message' => 'Service created successfully!'], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Service $service,$id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateServiceRequest $request, Service $service,$id)
    {
        $service=Service::findOrFail($id);
        $requestValidated=$request->validated();

        $service->update($requestValidated);

        return response()->json(['message'=>'your update done successfully'], 200);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        //
    }

    // get all services 
    public function getAllServices(){
        $services = Service::where('status','active')->paginate(10);
        return response()->json($services);
    }

    // get one service with its id
    public function showOneService(Service $service,$id){
        try {
            $service = Service::findOrFail($id);
            return $service;
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Service not found'], 404);
        }
    }
}
