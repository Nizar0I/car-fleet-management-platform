<?php

namespace App\Http\Controllers;

use App\Models\Carburant;
use Illuminate\Http\Request;

class CarburantController extends Controller
{
    // 🔁 Récupérer tous les carburants
    public function index()
    {
        return Carburant::with('vehicule')->get();
    }

    // ➕ Ajouter un nouveau carburant
    public function store(Request $request)
    {
        $request->validate([
            'vehicule_id' => 'required|exists:vehicules,id',
            'type_carburant' => 'required|string',
            'quantite_litres' => 'required|numeric',
            'date_remplissage' => 'required|date',
        ]);

        $carburant = Carburant::create($request->all());

        return response()->json($carburant, 201);
    }

    // ✏️ Modifier un carburant
    public function update(Request $request, $id)
{
    $carburant = Carburant::findOrFail($id);

    $validated = $request->validate([
        'vehicule_id' => 'required|exists:vehicules,id',
        'type_carburant' => 'required|string',
        'quantite_litres' => 'required|numeric',
        'date_remplissage' => 'required|date',
    ]);

    $carburant->update($validated);

    return response()->json(['message' => 'Carburant mis à jour avec succès !']);
}


    // ❌ Supprimer un carburant
    public function destroy($id)
    {
        $carburant = Carburant::findOrFail($id);
        $carburant->delete();

        return response()->json(['message' => 'Carburant supprimé'], 200);
    }
}
