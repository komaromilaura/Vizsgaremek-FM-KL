<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MigransEllatasRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'megyeID' => 'required|numeric|min:1',
            'ev' => 'required|numeric|min:2000|max:2050',
            'honap' => 'required|numeric|min:1|max:12',
            'fo' => 'required|numeric|min:0',
            'megtett_km' => 'required|numeric|min:0',
        ];
    }
}
