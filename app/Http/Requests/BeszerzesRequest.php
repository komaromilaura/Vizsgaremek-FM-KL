<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BeszerzesRequest extends FormRequest
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
            'partnerID' => 'required|numeric|min:1',
            'megrendelo_szama' => 'required|string',
            'megrend_alairasra_tovabbitva' => 'required|date',
            'alairt_megrend_beerkezese' => 'required|date',
            'dijbekero_tovabbitasa' => 'required|date',
            'munkalap_kiallitasa' => 'required|date',
            'szamla_kiallitasa' => 'required|date',
            'szamla_tovább_pu_nek_utalasra' => 'required|date',
        ];
    }
}
