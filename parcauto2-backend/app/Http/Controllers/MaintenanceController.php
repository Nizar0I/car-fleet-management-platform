<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Maintenance;
use Illuminate\Http\Request;

class MaintenanceController extends Controller
{
    // 🔍 Lister toutes les maintenances
    public function index()
    {
        return Maintenance::with('vehicule')->get();
    }

    // ➕ Ajouter une maintenance
    public function store(Request $request)
    {
        $validated = $request->validate([
            'vehicule_id' => 'required|exists:vehicules,id',
            'description' => 'required|string',
            'date_maintenance' => 'required|date',
            'cout' => 'required|numeric',
        ]);

        $maintenance = Maintenance::create($validated);
        return response()->json($maintenance, 201);
    }

    // ✏️ Modifier une maintenance
    public function update(Request $request, $id)
    {
        $maintenance = Maintenance::findOrFail($id);

        $validated = $request->validate([
            'vehicule_id' => 'required|exists:vehicules,id',
            'description' => 'required|string',
            'date_maintenance' => 'required|date',
            'cout' => 'required|numeric',
        ]);

        $maintenance->update($validated);
        return response()->json($maintenance);
    }

    // ❌ Supprimer une maintenance
    public function destroy($id)
    {
        $maintenance = Maintenance::findOrFail($id);
        $maintenance->delete();
        return response()->json(['message' => 'Maintenance supprimée']);
    }
}
