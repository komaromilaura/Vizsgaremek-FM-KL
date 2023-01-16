<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Letszam extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "letszam";

    protected $primaryKey = 'ID';

    protected $fillable = [
        'ID',
        'mentoallomas',
        'ev',
        'negyedev',
        'kivon_all_szevezett',
        'kivon_all_betoltott',
        'mentesiranyitas_szervezett',
        'mentesiranyitas_betoltott',
        'betegszall_szervezett',
        'betegszall_betoltott',
        'orvos_mentotiszt',
        'apolo',
        'mentesiranyitasban_dolg',
        'mentogkvezeto',
        'betegszall_iranyitasban_dolg',
    ];

    public function allomas()
    {
        return $this->belongsTo(Allomas::class, "mentoallomas", "nev");
    }
}
