<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LetszamRequest extends FormRequest
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
            'negyedev' => 'required|numeric|min:1|max:4',
            'kivon_all_szevezett' => 'required|numeric|min:0',
            'kivon_all_betoltott' => 'required|numeric|min:0',
            'mentesiranyitas_szervezett' => 'required|numeric|min:0',
            'mentesiranyitas_betoltott' => 'required|numeric|min:0',
            'betegszall_szervezett' => 'required|numeric|min:0',
            'betegszall_betoltott' => 'required|numeric|min:0',
            'orvos_mentotiszt' => 'required|numeric|min:0',
            'apolo' => 'required|numeric|min:0',
            'mentesiranyitasban_dolg' => 'required|numeric|min:0',
            'mentogkvezeto' => 'required|numeric|min:0',
            'betegszall_iranyitasban_dolg' => 'required|numeric|min:0',
        ];
    }
}
