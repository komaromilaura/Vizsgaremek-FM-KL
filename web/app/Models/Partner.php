<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "partnerek";

    protected $primaryKey = 'ID';

    protected $fillable = [
        'ID',
        'nev',
        'ir_szam',
        'varos',
        'kozterulet',
        'kozt_jellege',
        'hazszam',
        'epulet_emelet_ajto',
        'helyrazi_szam',
        'email',
        'telefon',
        'adoszam',
    ];

    public function beszerzes()
    {
        return $this->hasMany(Beszerzes::class, "partnerID", "ID");
    }

    public function mozgoorseg()
    {
        return $this->hasMany(Mozgoorseg::class, "megrendeloID", "ID");
    }
}
