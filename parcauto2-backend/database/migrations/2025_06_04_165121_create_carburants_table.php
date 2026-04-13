<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
   public function up(): void
{
    Schema::create('carburants', function (Blueprint $table) {
        $table->id();
        $table->foreignId('vehicule_id')->constrained('vehicules')->onDelete('cascade');
        $table->string('type_carburant');
        $table->float('quantite_litres');
        $table->date('date_remplissage');
        $table->timestamps();
    });
}



    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carburants');
    }
};
