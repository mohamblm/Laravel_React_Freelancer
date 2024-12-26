<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Allow all authorized users to make this request
    }

    public function rules(): array
    {
        

        return [
            'user_id' => "required|exists:users,id",
            'first_name' => 'sometimes|required|string|max:255',
            'last_name' => 'sometimes|required|string|max:255',
            'phone' => 'nullable|string|max:15',
            'address' => 'nullable|string|max:500',
            'city' => 'nullable|string|max:255',
            'state' => 'nullable|string|max:255',
            'postal_code' => 'nullable|string|max:20',
            'country' => 'nullable|string|max:255',
            'avatar' => 'nullable|url|max:255',
            'date_of_birth' => 'nullable|date|before:today',
            'bio' => 'nullable|string|max:1000',
        ];
    }

    public function messages(): array
    {
        return [
            'user_id.required' => 'The user ID is required.',
            'user_id.exists' => 'The selected user does not exist.',
            'user_id.unique' => 'A profile already exists for this user.',
            'first_name.required' => 'The first name is required.',
            'last_name.required' => 'The last name is required.',
            'date_of_birth.before' => 'The date of birth must be a past date.',
        ];
    }
}
