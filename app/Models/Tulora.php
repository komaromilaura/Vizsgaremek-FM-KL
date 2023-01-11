<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tulora extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "tulorak";

    protected $primaryKey = 'ID';

    protected $fillable = [
        'ID',
        'mentoallomas',
        'ev',
        'honap',
        'ment_fel_miatti_tulora',
        'egyeb_tulora',
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
