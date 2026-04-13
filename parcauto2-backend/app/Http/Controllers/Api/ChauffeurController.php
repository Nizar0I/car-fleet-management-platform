<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Chauffeur;

class ChauffeurController extends Controller
{
    public function index()
    {
        return Chauffeur::all();
    }

    public function store(Request $request)
    {
        $chauffeur = Chauffeur::create($request->all());
        return response()->json($chauffeur, 201);
    }

    public function show($id)
    {
        return Chauffeur::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $chauffeur = Chauffeur::findOrFail($id);
        $chauffeur->update($request->all());
        return response()->json($chauffeur, 200);
    }

    public function destroy($id)
    {
        Chauffeur::destroy($id);
        return response()->json(null, 204);
    }
}
