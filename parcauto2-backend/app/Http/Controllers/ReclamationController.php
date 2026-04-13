<?php

namespace App\Http\Controllers;

use App\Models\Reclamation;
use Illuminate\Http\Request;

class ReclamationController extends Controller
{
    // Lister toutes les réclamations
    public function index()
    {
        return Reclamation::all();
    }

    // Enregistrer une nouvelle réclamation
    public function store(Request $request)
    {
        $request->validate([
            'nom_complet' => 'required|string',
            'marque_auto' => 'required|string',
            'immatriculation' => 'required|string',
            'description' => 'required|string',
        ]);

        $reclamation = Reclamation::create($request->all());

        return response()->json(['message' => 'Réclamation ajoutée', 'reclamation' => $reclamation], 201);
    }

    // Mettre à jour une réclamation
    public function update(Request $request, $id)
    {
        $reclamation = Reclamation::findOrFail($id);

        $reclamation->update($request->all());

        return response()->json(['message' => 'Réclamation mise à jour', 'reclamation' => $reclamation]);
    }

    // Supprimer une réclamation
    public function destroy($id)
    {
        $reclamation = Reclamation::findOrFail($id);
        $reclamation->delete();

        return response()->json(['message' => 'Réclamation supprimée']);
    }
}
