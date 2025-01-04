<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    /** @use HasFactory<\Database\Factories\SubCategoryFactory> */
    use HasFactory;
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function semicategories()
    {
        return $this->hasMany(SemiCategory::class,'subcategory_id');
    }
}
