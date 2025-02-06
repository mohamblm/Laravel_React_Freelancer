<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\Semicategory;


class SearchController extends Controller
{
    public function fetchSuggestions(Request $request){
        $query = $request->input('query');
        if (!$query) {
            return response()->json([
                'message' => $query,
            ]);
        }
        $services = Service::select('title')
            ->where('title' , 'LIKE' ,"%{$query}%")
            ->take(8)
            ->get(); 

        $semiCategories = Semicategory::select('name' ,'id')
            ->where('name' , 'LIKE' , "%{$query}%")
            ->take(8)
            ->get();   
    
        return response()->json([
            'semiCategories' => $semiCategories,
            'services' => $services
        ]);
    }
}
