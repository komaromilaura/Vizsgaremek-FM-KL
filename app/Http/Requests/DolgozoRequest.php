<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DolgozoRequest extends FormRequest
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
            'vezetek_nev' => 'required|string',
            'kereszt_nev' => 'required|string',
            'IVIR' => 'required|numeric|min:111111|max:999999',
            'torzsszam' => 'required|numeric|min:0',
            'adoazonosito' => 'required|numeric|min:8000000000|max:8999999999',
            'ir_szam' => 'required|numeric|min:1111|max:9999',
            'varos' => 'required|string',
            'kozterulet' => 'required|string',
            'kozterulet_jellege' => 'required|string',
            'hazszam' => 'required|string',
            'epulet_emelet_ajto' => 'nullable|string',
            'ceges_email' => 'required|email',
            'telefon' => 'required|string',
            'allomas' => 'required|string',
            'munkakorID' => 'required|numeric',            
        ];
    }
}
