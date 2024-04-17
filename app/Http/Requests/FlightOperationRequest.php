<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class flightOperationRequest extends FormRequest
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
            'time' => 'required',
            'airline' => 'required',
            'callSign' => 'required|min:5|max:5',
            'aircraft' => 'required',
            'airport' => 'required',
            'gate' => 'required',
            'type' => 'required',
        ];
    }
}
