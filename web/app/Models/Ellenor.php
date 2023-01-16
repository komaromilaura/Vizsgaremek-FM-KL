<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ellenor extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "kulso_ellenorok";

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
        'kontakt_szemely',
    ];

    public function kulsoEllenorzes()
    {
        return $this->hasMany(KulsoEllenorzes::class, "ellenorzest_vegzoID", "ID");
    }
}
