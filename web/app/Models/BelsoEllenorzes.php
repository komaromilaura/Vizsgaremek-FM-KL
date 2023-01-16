<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BelsoEllenorzes extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "belso_ell";

    protected $primaryKey = 'ell_azon';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'ell_azon',
        'ell_iktszam',
        'ell_szerv',
        'ell_targya',
        'intezkedest_igenylo_megall',
        'ell_javaslat',
        'javaslat_alapjan_eloirt_int',
        'int_terv_iktszama',
        'int_terv_jovahagyas_datuma',
        'felelos_beosztas',
        'felelos_szerv_egyseg',
        'int_vegrehajt_hatarido',
        'hatarido_mod_1',
        'hatarido_mod_2',
        'feladat_mod_1',
        'feladat_mod_2',
        'int_teljesites_1',
        'int_teljesites_2',
        'megtett_int',
        'hatidoben_vegre_nem_hajt_int_oka',
        'nem_telj_kapcsan_tett_lepesek',
        'megjegyzes',
    ];

    public function allomasEllSzerv()
    {
        return $this->belongsTo(Allomas::class, "ell_szerv", "nev");
    }

    public function allomasFelelosSzervEgyseg()
    {
        return $this->belongsTo(Allomas::class, "felelos_szerv_egyseg", "nev");
    }
}
