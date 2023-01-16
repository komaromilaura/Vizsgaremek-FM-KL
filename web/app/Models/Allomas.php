<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Allomas extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "allomasok";

    protected $primaryKey = 'nev';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'sorszam',
        'nev',
        'megye_id',
        'vezeto',
    ];

    public function megye()
    {
        return $this->belongsTo(Megye::class, "megye_id", "ID");
    }

    public function dolgozo()
    {
        return $this->hasMany(Dolgozo::class, "IVIR", "vezeto");
    }

    public function belsoEllEllSzerv()
    {
        return $this->hasMany(BelsoEllenorzes::class, "ell_szerv", "nev");
    }

    public function belsoEllFelelosSzervEgys()
    {
        return $this->hasMany(BelsoEllenorzes::class, "felelos_szerv_egyseg", "nev");
    }

    public function kulsoEllEllSzerv()
    {
        return $this->hasMany(KulsoEllenorzes::class, "ell_szerv", "nev");
    }

    public function kulsoEllFelelosSzervEgys()
    {
        return $this->hasMany(KulsoEllenorzes::class, "felelos_szerv_egyseg", "nev");
    }

    public function user()
    {
        return $this->belongsTo(User::class, "vezeto", "IVIR");
    }

    public function allashely()
    {
        return $this->hasMany(Allashely::class, "mentoallomas", "nev");
    }

    public function tulora()
    {
        return $this->hasMany(Tulora::class, "mentoallomas", "nev");
    }

    public function letszam()
    {
        return $this->hasMany(Letszam::class, "mentoallomas", "nev");
    }

    public function beszerzes()
    {
        return $this->hasMany(Beszerzes::class, "mentoallomas", "nev");
    }

    public function mozgoorseg()
    {
        return $this->hasMany(Mozgoorseg::class, "mentoallomas", "nev");
    }
}
