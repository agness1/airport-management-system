<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class announcementRequest extends FormRequest
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
            'type' => 'required',
            'title' => 'required|min:5|max:20',
            'description' => 'required|min:20|max:250',
        ];
    }
}
