<?php
namespace App\Http\Controllers;

use App\Models\Vignette;
use App\Models\Vehicule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Barryvdh\DomPDF\Facade\Pdf;


class VignetteController extends Controller
{
    // Lister toutes les vignettes
    public function index()
    {
        return Vignette::with('vehicule')->get();
    }
    public function store(Request $request)
{
    try {
        $request->validate([
            'vehicule_id' => 'required|exists:vehicules,id',
            'annee' => 'required|integer',
        ]);

        $vehicule = Vehicule::findOrFail($request->vehicule_id);

        $data = [
            'vehicule' => $vehicule,
            'annee' => $request->annee,
            'date_generation' => now()->format('d/m/Y')
        ];

        $pdf = PDF::loadView('vignettes.pdf', $data);
        $pdfName = 'vignette_' . $vehicule->id . '_' . $request->annee . '.pdf';
        $pdfPath = 'vignettes/' . $pdfName;
        Storage::disk('public')->put($pdfPath, $pdf->output());


        $vignette = Vignette::create([
            'vehicule_id' => $vehicule->id,
            'annee' => $request->annee,
            'date_generation' => now(),
            'fichier_pdf' => $pdfName
        ]);

        return response()->json(['message' => 'Vignette générée', 'vignette' => $vignette]);
    } catch (\Exception $e) {
        return response()->json([
            'message' => 'Erreur génération',
            'error' => $e->getMessage()
        ], 500);
    }


}
    // Télécharger le PDF
public function download($id)
{

    $vignette = Vignette::findOrFail($id);
    $filePath = storage_path('app/public/vignettes/' . $vignette->fichier_pdf);

    if (!file_exists($filePath)) {
        return response()->json(['message' => 'Fichier introuvable'], 404);
    }

    return response()->file($filePath, [
        'Content-Type' => 'application/pdf',
        'Content-Disposition' => 'attachment; filename="' . $vignette->fichier_pdf . '"',
    ]);
}

public function destroy($id)
{
    $vignette = Vignette::findOrFail($id);

    $pdfPath = storage_path('app/public/vignettes/' . $vignette->fichier_pdf);
    if (file_exists($pdfPath)) {
        unlink($pdfPath);
    }

    $vignette->delete();

    return response()->json(['message' => 'Vignette supprimée']);
}








    // Enregistrer une nouvelle vignette (avec génération PDF)
    // public function store(Request $request)
    // {
    //     $request->validate([
    //         'vehicule_id' => 'required|exists:vehicules,id',
    //         'annee' => 'required|integer',
    //     ]);

    //     $vehicule = Vehicule::findOrFail($request->vehicule_id);

    //     // Contenu du PDF
    //     $data = [
    //         'vehicule' => $vehicule,
    //         'annee' => $request->annee,
    //         'date_generation' => now()->format('d/m/Y')
    //     ];

    //     $pdf = pdf::loadView('vignettes.pdf', $data);


    //     $pdfName = 'vignette_' . $vehicule->id . '_' . $request->annee . '.pdf';
    //     $path = 'vignettes/' . $pdfName;

    //     // Sauvegarde dans storage/app/vignettes/
    //     Storage::put($path, $pdf->output());

    //     $vignette = Vignette::create([
    //         'vehicule_id' => $vehicule->id,
    //         'annee' => $request->annee,
    //         'date_generation' => now(),
    //         'fichier_pdf' => $pdfName
    //     ]);

    //     return response()->json(['message' => 'Vignette générée', 'vignette' => $vignette]);
    // }


}

