<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        // 'description',
        // 'icon',
    ];

    /**
     * Get the services associated with the category.
     */
    public function services()
    {
        return $this->hasMany(Service::class);
    }
}
