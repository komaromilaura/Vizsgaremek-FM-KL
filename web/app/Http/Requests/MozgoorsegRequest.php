<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class MozgoorsegRequest extends FormRequest
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
            'megrendeloID' => 'required|numeric|min:1',
            'szerzodesszam'=> [
                'required',
                'string',
                $this->mozgoorseg !== null ?
                Rule::unique('mozgoorseg')->ignoreModel($this->mozgoorseg) :
                Rule::unique('mozgoorseg')
            ],
            'rendezveny_neve' => 'required|string',
            'rendezveny_datuma' => 'required|date',
            'rendezveny_helye' => 'required|string',
            'mentoallomas' => 'required|string',
            'roko' => 'required|numeric|min:0',
            'eset' => 'required|numeric|min:0',
            'mentogk' => 'required|numeric|min:0',
            'gyalogorseg' => 'required|numeric|min:0',
            'bevetel' => 'required|numeric|min:0',
            'koltseg' => 'required|numeric|min:0',
            'maradvany' => 'required|numeric|min:0',
        ];
    }
}
