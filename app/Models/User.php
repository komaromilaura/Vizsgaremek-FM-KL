<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    use HasFactory;

    public $timestamps = false;

    protected $table = "users";

    protected $primaryKey = 'IVIR';
    public $incrementing = false;

    protected $fillable = [
        'IVIR',
        'Vezetek_nev',
        'Kereszt_nev',        
        'Jelszo',
        'Vas',
        'Gyor',
        'Zala',
        'Admin',
        'Aktiv'
    ];

    public function allomas()
    {
        return $this->belongsTo(Allomas::class, "allomas", "nev");
    }

}
