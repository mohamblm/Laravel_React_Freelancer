<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfessionalProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_id'=>'required|exists:professional_profiles,user_id',
            'occupation'=>'json',
            'skills'=>'json',
            'education'=>'nullable|json',
            'certification'=>'nullable|json',
            'website_url'=>'nullable|url'
        ];
    }
}
