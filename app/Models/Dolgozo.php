<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dolgozo extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "dolgozok";

    protected $primaryKey = 'IVIR';
    public $incrementing = false;

    protected $fillable = [
        'vezetek_nev',
        'kereszt_nev',
        'IVIR',
        'torzsszam',
        'adoazonosito',
        'ir_szam',
        'varos',
        'kozterulet',
        'kozterulet_jellege',
        'hazszam',
        'epulet_emelet_ajto',
        'ceges_email',
        'telefon',
        'allomas',
        'munkakorID',
    ];

    public function allomas()
    {
        return $this->belongsTo(Allomas::class, "allomas", "nev");
    }

    public function munkakor()
    {
        return $this->belongsTo(Munkakor::class, "munkakorID", "ID");
    }
}
