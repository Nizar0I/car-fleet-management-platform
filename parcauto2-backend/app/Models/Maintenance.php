<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Maintenance extends Model
{
    use HasFactory;

    protected $fillable = [
        'vehicule_id', 'description', 'date_maintenance', 'cout'
    ];

    public function vehicule()
    {
        return $this->belongsTo(Vehicule::class);
    }
}
