<?php

namespace App\Http\Controllers;

use App\Models\Vehicule;
use Illuminate\Http\Request;

class VehiculeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // Lister tous les véhicules
    public function index()
    {
        return Vehicule::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
      //Ajouter un véhicule
     public function store(Request $request)
    {
        $request->validate([
            'marque' => 'required',
            'modele' => 'required',
            'immatriculation' => 'required|unique:vehicules',
            'date_acquisition' => 'required|date',
            'kilometrage' => 'required|integer',
        ]);

        return Vehicule::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Vehicule $vehicule)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vehicule $vehicule)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    //Ajouter un véhicule
    public function update(Request $request, $id)
{
    $vehicule = Vehicule::findOrFail($id);

    $request->validate([
        'marque' => 'required',
        'modele' => 'required',
        'immatriculation' => 'required',
        'date_acquisition' => 'required|date',
        'kilometrage' => 'required|integer',
    ]);

    $vehicule->update($request->all());

    return response()->json(['message' => 'Véhicule mis à jour']);
}


    /**
     * Remove the specified resource from storage.
     */
     // Supprimer un véhicule
    public function destroy($id)
    {
        $vehicule = Vehicule::findOrFail($id);
        $vehicule->delete();

        return response()->json(['message' => 'Véhicule supprimé']);
    }
}
