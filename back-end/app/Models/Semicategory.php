<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SemiCategory extends Model
{
    /** @use HasFactory<\Database\Factories\SemiCategoryFactory> */
    use HasFactory;
    public function semicategory()
    {
        return $this->belongsTo(SubCategory::class);
    }
}
