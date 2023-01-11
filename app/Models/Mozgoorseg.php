<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mozgoorseg extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "mozgoorseg";

    protected $primaryKey = 'szerzodesszam';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'megrendeloID',
        'szerzodesszam',
        'rendezveny_neve',
        'rendezveny_datuma',
        'rendezveny_helye',
        'mentoallomas',
        'roko',
        'eset',
        'mentogk',
        'gyalogorseg',
        'bevetel',
        'koltseg',
        'maradvany',
    ];

    public function megrendelo()
    {
        return $this->belongsTo(Partner::class, "megrendeloID", "ID");
    }

    public function allomas()
    {
        return $this->belongsTo(Allomas::class, "mentoallomas", "nev");
    }
}