<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AllashelyRequest extends FormRequest
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
            'ev' => 'required|numeric|min:2000|max:2050',
            'ho' => 'required|numeric|min:1|max:12',      
            'szakorvos_szervezett' => 'required|numeric|min:0',
            'szakorvos_betoltott' => 'required|numeric|min:0',
            'szakorvos_ures' => 'required|numeric',
            'vezeto_mentotiszt_szervezett' => 'required|numeric|min:0',
            'vezeto_mentotiszt_betoltott' => 'required|numeric|min:0',
            'vezeto_mentotiszt_ures' => 'required|numeric',
            'orvos_mentotiszt_szervezett' => 'required|numeric|min:0',
            'orvos_mentotiszt_betoltott' => 'required|numeric|min:0',
            'orvos_mentotiszt_ures' => 'required|numeric',
            'foapolo_szervezett' => 'required|numeric|min:0',
            'foapolo_betoltott' => 'required|numeric|min:0',
            'foapolo_ures' => 'required|numeric',
            'mentoapolo_szervezett' => 'required|numeric|min:0',
            'mentoapolo_betoltott' => 'required|numeric|min:0',
            'mentoapolo_ures' => 'required|numeric',
            'mentoapolo_osszes_szervezett' => 'required|numeric|min:0',
            'mentoapolo_osszes_betoltott' => 'required|numeric|min:0',
            'mentoapolo_osszes_ures' => 'required|numeric',
            'allomasvezeto_szervezett' => 'required|numeric|min:0',
            'allomasvezeto_betoltott' => 'required|numeric|min:0',
            'allomasvezeto_ures' => 'required|numeric',
            'ICS_vezeto_szervezett' => 'required|numeric|min:0',
            'ICS_vezeto_betoltott' => 'required|numeric|min:0',
            'ICS_vezeto_ures' => 'required|numeric',
            'mentotiszt_szervezett' => 'required|numeric|min:0',
            'mentotiszt_betoltott' => 'required|numeric|min:0',
            'mentotiszt_ures' => 'required|numeric',
            'mentoapolo2_szervezett' => 'required|numeric|min:0',
            'mentoapolo2_betoltott' => 'required|numeric|min:0',
            'mentoapolo2_ures' => 'required|numeric',
            'apolo_szervezett' => 'required|numeric|min:0',
            'apolo_betoltott' => 'required|numeric|min:0',
            'apolo_ures' => 'required|numeric',
            'szolgalatvezeto_szervezett' => 'required|numeric|min:0',
            'szolgalatvezeto_betoltott' => 'required|numeric|min:0',
            'szolgalatvezeto_ures' => 'required|numeric',
            'apolo2_szervezett' => 'required|numeric|min:0',
            'apolo2_betoltott' => 'required|numeric|min:0',
            'apolo2_ures' => 'required|numeric',
            'uzemgazdasz_szervezett' => 'required|numeric|min:0',
            'uzemgazdasz_betoltott' => 'required|numeric|min:0',
            'uzemgazdasz_ures' => 'required|numeric',
            'uzemmernok_szervezett' => 'required|numeric|min:0',
            'uzemmernok_betoltott' => 'required|numeric|min:0',
            'uzemmernok_ures' => 'required|numeric',
            'oktatas_szervezo_szervezett' => 'required|numeric|min:0',
            'oktatas_szervezo_betoltott' => 'required|numeric|min:0',
            'oktatas_szervezo_ures' => 'required|numeric',
            'ugyintezo_szervezett' => 'required|numeric|min:0',
            'ugyintezo_betoltott' => 'required|numeric|min:0',
            'ugyintezo_ures' => 'required|numeric',
            'adminisztrator_szervezett' => 'required|numeric|min:0',
            'adminisztrator_betoltott' => 'required|numeric|min:0',
            'adminisztrator_ures' => 'required|numeric',
            'adatrogzito_szervezett' => 'required|numeric|min:0',
            'adatrogzito_betoltott' => 'required|numeric|min:0',
            'adatrogzito_ures' => 'required|numeric',
            'autoszerelo_szakmunkas_szervezett' => 'required|numeric|min:0',
            'autoszerelo_szakmunkas_betoltott' => 'required|numeric|min:0',
            'autoszerelo_szakmunkas_ures' => 'required|numeric',
            'karbantarto_szervezett' => 'required|numeric|min:0',
            'karbantarto_betoltott' => 'required|numeric|min:0',
            'karbantarto_ures' => 'required|numeric',
            'kazanfuto_szervezett' => 'required|numeric|min:0',
            'kazanfuto_betoltott' => 'required|numeric|min:0',
            'kazanfuto_ures' => 'required|numeric',
            'mentogepkocsivezeto_szervezett' => 'required|numeric|min:0',
            'mentogepkocsivezeto_betoltott' => 'required|numeric|min:0',
            'mentogepkocsivezeto_ures' => 'required|numeric',
            'muszaki_gondnok_szervezett' => 'required|numeric|min:0',
            'muszaki_gondnok_betoltott' => 'required|numeric|min:0',
            'muszaki_gondnok_ures' => 'required|numeric',
            'garazsmester_szervezett' => 'required|numeric|min:0',
            'garazsmester_betoltott' => 'required|numeric|min:0',
            'garazsmester_ures' => 'required|numeric',
            'szervezett_gkv_osszesen' => 'required|numeric|min:0',
            'betoltott_gkv_osszesen' => 'required|numeric|min:0',
            'ures_gkv_osszesen' => 'required|numeric',
            'szervezett_allashely_osszesen' => 'required|numeric|min:0',
            'betoltott_allashely_osszesen' => 'required|numeric|min:0',
            'ures_allashely_osszesen' => 'required|numeric',
        ];
    }
}
