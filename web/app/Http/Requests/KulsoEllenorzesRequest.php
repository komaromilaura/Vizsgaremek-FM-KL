<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class KulsoEllenorzesRequest extends FormRequest
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
            'ellenorzest_vegzoID' => [
                'required',
                'numeric',
                Rule::notIn(['-1'])
            ],
            'ell_azon' => [
                'required',
                'string',
                $this->kulsoEllenorzes !== null ?
                Rule::unique('kulso_ell')->ignoreModel($this->kulsoEllenorzes) :
                Rule::unique('kulso_ell')
            ],
            'ell_iktszam' => 'nullable|string',
            'ell_szerv' => [
                'required',
                'string',
                Rule::notIn(['-1']),
            ],
            'kapcsolattarto_neve' => 'required|string',
            'kapcsolattarto_tel' => 'required|string',
            'ell_targya' => 'required|string',
            'intezkedest_igenylo_megall' => 'required|string',
            'ell_javaslat' => 'required|string',
            'javaslat_alapjan_eloirt_int' => 'required|string',
            'int_terv_iktszama' => 'required|string',
            'int_terv_jovahagyas_datuma' => 'required|date',
            'felelos_beosztas' => 'required|string',
            'felelos_szerv_egyseg' => [
                'required',
                'string',
                Rule::notIn(['-1']),
            ],
            'int_vegrehajt_hatarido' => 'required|date',
            'hatarido_mod_1' => 'required|boolean',
            'hatarido_mod_2' => 'nullable|date',
            'feladat_mod_1' => 'required|boolean',
            'feladat_mod_2' => 'nullable|string',
            'int_teljesites_1' => 'required|boolean',
            'int_teljesites_2' => 'nullable|date',
            'megtett_int' => 'required|string',
            'hatidoben_vegre_nem_hajt_int_oka' => 'nullable|string',
            'nem_telj_kapcsan_tett_lepesek' => 'nullable|string',
            'megjegyzes' => 'nullable|string',
        ];
    }
}
