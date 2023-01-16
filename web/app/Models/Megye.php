<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Megye extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "megyek";

    protected $primaryKey = 'ID';

    protected $fillable = [
        'ID',
        'megye_nev',
    ];

    public function migransEllatas()
    {
        return $this->hasMany(MigransEllatas::class, "megyeID", "ID");
    }

    public function allomas()
    {
        return $this->hasMany(Megye::class, "megye_id", "ID");
    }
}
