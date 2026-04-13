<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vehicule extends Model
{
    public function vignettes()
{
    return $this->hasMany(Vignette::class);
}

    protected $fillable = [
        'marque',
        'modele',
        'immatriculation',
        'date_acquisition',
        'kilometrage',
    ];
}

