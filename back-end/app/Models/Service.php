<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Service extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'category_id',
        'subcategory_id',
        'semicategory_id',
        'title',
        'description',
        'price',
        'status',
        'image_url',
    ];

    /**
     * Define the relationship with the User model (Service provider).
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Define the relationship with the Category model.
     */
    // public function category()
    // {
    //     return $this->belongsTo(Category::class);
    // }
}
