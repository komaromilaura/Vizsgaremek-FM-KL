<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
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
            'IVIR' => [
                'required',
                'numeric',
                'min:100000',
                'max:999999',
                $this->user !== null ?
                Rule::unique('users')->ignoreModel($this->user) :
                Rule::unique('users')
            ],
            'Vezetek_nev' => 'required|string',
            'Kereszt_nev' => 'required|string',
            'Jelszo' => 'required|string',
            'Vas' => "required|boolean",
            'Gyor' => "required|boolean",
            'Zala' => "required|boolean",
            'Admin' => "required|boolean",            
            'Admin' => "nullable|boolean",            
        ];
    }
}
