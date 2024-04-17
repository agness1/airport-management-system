<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RenovationWorkRequest extends FormRequest
{

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
            'area' => 'required',
            'startDate' => 'required|date',
            'endDate' => 'required|date|after_or_equal:startDate',
            'description' => 'required|string|min:20|max:250',
        ];
    }
}
