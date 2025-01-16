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
    public function index()
    {
    
        $services = Service::where('status','active')->paginate(4);
        return response()->json($services);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $service=$request;
        // Validate incoming data
        $validated = $request->validate([

            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'category_id' => 'required|integer|exists:categories,id',
            'subcategory_id' => 'required|integer|exists:sub_categories,id',
            'semicategory_id' => 'required|integer|exists:semi_categories,id',
            'images_url' => 'required|array',
            'images_url.*' => 'file|mimes:jpeg,png,jpg,gif|max:4048', // Validate each file
        ]);

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
        try {
            $service = Service::findOrFail($id);
            return $service;
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Service not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateServiceRequest $request, Service $service)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        //
    }
}
