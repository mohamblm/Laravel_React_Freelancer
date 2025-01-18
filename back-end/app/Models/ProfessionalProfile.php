<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfessionalProfile extends Model
{
    /** @use HasFactory<\Database\Factories\ProfessionalProfileFactory> */
    use HasFactory;
    protected $fillable=[
        'user_id',
        'occupation',
        'skills',
        'education',
        'certification',
        'website_url'
    ];
    /**
     * Get the user that owns the profile.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
