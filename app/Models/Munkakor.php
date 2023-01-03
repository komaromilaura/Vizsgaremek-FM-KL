<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Munkakor extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "munkakorok";

    protected $primaryKey = 'ID';

    protected $fillable = [
        'ID',
        'munkakor',
        'alapber',
    ];

    public function dolgozo()
    {
        return $this->hasMany(Dolgozo::class, "munkakorID", "ID");
    }
}
