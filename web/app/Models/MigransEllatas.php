<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MigransEllatas extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "migransellatas";

    protected $primaryKey = 'ID';

    protected $fillable = [
        'ID',
        'megyeID',
        'ev',
        'honap',
        'fo',
        'megtett_km',
    ];

    public function megye()
    {
        return $this->belongsTo(Megye::class, "megyeID", "ID");
    }
}