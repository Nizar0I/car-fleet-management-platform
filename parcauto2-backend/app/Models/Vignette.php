<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Vignette extends Model
{
    use HasFactory;

    protected $fillable = [
        'vehicule_id', 'annee', 'date_generation', 'fichier_pdf',
    ];

    public function vehicule()
    {
        return $this->belongsTo(Vehicule::class);
    }


}





