<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PartnerRequest extends FormRequest
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
            'nev' => 'required|string',
            'ir_szam' => 'required|numeric|min:1000|max:9999',
            'varos' => 'required|string',
            'kozterulet' => 'nullable|string',
            'kozt_jellege' => 'nullable|string',
            'hazszam' => 'nullable|string',
            'epulet_emelet_ajto' => 'nullable|string',
            'helyrazi_szam' => 'nullable|string',
            'email' => 'nullable|email',
            'telefon' => 'nullable|string',
            'adoszam' => [
                'required',
                'string',
                'size:13',
                $this->partner !== null ?
                Rule::unique('partnerek')->ignoreModel($this->partner) :
                Rule::unique('partnerek')
            ],
        ];
    }
}