<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Beszerzes extends Model
{
    use HasFactory;
    
    public $timestamps = false;

    protected $table = "beszerzesek";

    protected $primaryKey = 'megrendelo_szama';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'partnerID',
        'megrendelo_szama',
        'megrend_alairasra_tovabbitva',
        'alairt_megrend_beerkezese',
        'dijbekero_tovabbitasa',
        'munkalap_kiallitasa',
        'szamla_kiallitasa',
        'szamla_tovább_pu_nek_utalasra',
    ];

    public function partner()
    {
        return $this->belongsTo(Partner::class, "partnerID", "ID");
    }
}
