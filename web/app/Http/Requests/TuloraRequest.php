<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class TuloraRequest extends FormRequest
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
            'mentoallomas' => [
                'required',
                'string',
                Rule::notIn(['-1']),
            ],
            'ev' => 'required|numeric|min:2000|max:2050',
            'honap' => 'required|numeric|min:1|max:12',
            'ment_fel_miatti_tulora' => 'required|numeric|min:0',
            'egyeb_tulora' => 'required|numeric|min:0',   
            'orvos_mentotiszt' => 'required|numeric|min:0',      
            'apolo' => 'required|numeric|min:0',      
            'mentesiranyitasban_dolg' => 'required|numeric|min:0',      
            'mentogkvezeto' => 'required|numeric|min:0',      
            'betegszall_iranyitasban_dolg' => 'required|numeric|min:0'   
        ];
    }
}
