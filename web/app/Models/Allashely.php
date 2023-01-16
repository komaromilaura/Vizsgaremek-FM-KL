<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Allashely extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "allashelyek";

    protected $primaryKey = 'ID';

    protected $fillable = [
        'ID',
        'mentoallomas',
        'ev',
        'ho',      
        'szakorvos_szervezett',
        'szakorvos_betoltott',
        'szakorvos_ures',
        'vezeto_mentotiszt_szervezett',
        'vezeto_mentotiszt_betoltott',
        'vezeto_mentotiszt_ures',
        'orvos_mentotiszt_szervezett',
        'orvos_mentotiszt_betoltott',
        'orvos_mentotiszt_ures',
        'foapolo_szervezett',
        'foapolo_betoltott',
        'foapolo_ures',
        'mentoapolo_szervezett',
        'mentoapolo_betoltott',
        'mentoapolo_ures',
        'mentoapolo_osszes_szervezett',
        'mentoapolo_osszes_betoltott',
        'mentoapolo_osszes_ures',
        'allomasvezeto_szervezett',
        'allomasvezeto_betoltott',
        'allomasvezeto_ures',
        'ICS_vezeto_szervezett',
        'ICS_vezeto_betoltott',
        'ICS_vezeto_ures',
        'mentotiszt_szervezett',
        'mentotiszt_betoltott',
        'mentotiszt_ures',
        'mentoapolo2_szervezett',
        'mentoapolo2_betoltott',
        'mentoapolo2_ures',
        'apolo_szervezett',
        'apolo_betoltott',
        'apolo_ures',
        'szolgalatvezeto_szervezett',
        'szolgalatvezeto_betoltott',
        'szolgalatvezeto_ures',
        'apolo2_szervezett',
        'apolo2_betoltott',
        'apolo2_ures',
        'uzemgazdasz_szervezett',
        'uzemgazdasz_betoltott',
        'uzemgazdasz_ures',
        'uzemmernok_szervezett',
        'uzemmernok_betoltott',
        'uzemmernok_ures',
        'oktatas_szervezo_szervezett',
        'oktatas_szervezo_betoltott',
        'oktatas_szervezo_ures',
        'ugyintezo_szervezett',
        'ugyintezo_betoltott',
        'ugyintezo_ures',
        'adminisztrator_szervezett',
        'adminisztrator_betoltott',
        'adminisztrator_ures',
        'adatrogzito_szervezett',
        'adatrogzito_betoltott',
        'adatrogzito_ures',
        'autoszerelo_szakmunkas_szervezett',
        'autoszerelo_szakmunkas_betoltott',
        'autoszerelo_szakmunkas_ures',
        'karbantarto_szervezett',
        'karbantarto_betoltott',
        'karbantarto_ures',
        'kazanfuto_szervezett',
        'kazanfuto_betoltott',
        'kazanfuto_ures',
        'mentogepkocsivezeto_szervezett',
        'mentogepkocsivezeto_betoltott',
        'mentogepkocsivezeto_ures',
        'muszaki_gondnok_szervezett',
        'muszaki_gondnok_betoltott',
        'muszaki_gondnok_ures',
        'garazsmester_szervezett',
        'garazsmester_betoltott',
        'garazsmester_ures',
        'szervezett_gkv_osszesen',
        'betoltott_gkv_osszesen',
        'ures_gkv_osszesen',
        'szervezett_allashely_osszesen',
        'betoltott_allashely_osszesen',
        'ures_allashely_osszesen',
    ];

    public function allomas()
    {
        return $this->belongsTo(Allomas::class, "mentoallomas", "nev");
    }
}
