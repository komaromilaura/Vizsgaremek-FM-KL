<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
            'mentoallomas' => 'required|string',
            'targy' => 'required|string',
            'besz_igeny_datum'=> 'required|date',
            'ajanlat_bekeres'=> 'required|date',
            'engedelyezesre_kuldve'=> 'required|date',
            'engedely_beerkezese'=> 'required|date',
            'megrendelo_kiallitasa'=> 'required|date',            
            'megrendelo_szama'=> [
                'required',
                'string',
                $this->beszerzes !== null ?
                Rule::unique('beszerzesek')->ignoreModel($this->beszerzes) :
                Rule::unique('beszerzesek')
            ],
            'megrend_alairasra_tovabbitva' => 'required|date',
            'alairt_megrend_beerkezese' => 'required|date',
            'dijbekero_tovabbitasa' => 'required|date',
            'munkalap_kiallitasa' => 'required|date',
            'szamla_kiallitasa' => 'required|date',
            'szamla_tovább_pu_nek_utalasra' => 'required|date',
            'partnerID' => 'required|numeric|min:1',
        ];
    }
}
