<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateServiceRequest extends FormRequest
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
            'status'=>'string',
            'title' => 'string|max:255',
            'description' => 'string',
            'price' => 'numeric|min:0',
            'category_id' => 'integer|exists:categories,id',
            'subcategory_id' => 'integer|exists:sub_categories,id',
            'semicategory_id' => 'integer|exists:semi_categories,id',
            'images_url' => 'array',
            'images_url.*' => 'file|mimes:jpeg,png,jpg,gif|max:4048', // Validate each file
        ];
    }
}
