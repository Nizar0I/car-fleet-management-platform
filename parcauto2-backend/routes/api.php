<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use App\Http\Controllers\VehiculeController;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\CarburantController;
use App\Http\Controllers\MaintenanceController;
use App\Http\Controllers\VignetteController;
use App\Http\Controllers\ReclamationController;
use App\Http\Controllers\Api\ChauffeurController;


// gestion de chauffeur
Route::get('/chauffeurs', [ChauffeurController::class, 'index']);
Route::post('/chauffeurs', [ChauffeurController::class, 'store']);
Route::put('/chauffeurs/{id}', [ChauffeurController::class, 'update']);
Route::delete('/chauffeurs/{id}', [ChauffeurController::class, 'destroy']);
// gestion de reclamtion
Route::get('/reclamations', [ReclamationController::class, 'index']);
Route::post('/reclamations', [ReclamationController::class, 'store']);
Route::put('/reclamations/{id}', [ReclamationController::class, 'update']);
Route::delete('/reclamations/{id}', [ReclamationController::class, 'destroy']);

// gestion de vignettes
Route::get('/vignettes', [VignetteController::class, 'index']);
Route::post('/vignettes', [VignetteController::class, 'store']);
Route::get('/vignettes/download/{id}', [VignetteController::class, 'download']);
Route::delete('/vignettes/{id}', [VignetteController::class, 'destroy']);



//gestion de vehicule
Route::get('/vehicules', [VehiculeController::class, 'index']);
Route::post('/vehicules', [VehiculeController::class, 'store']);
Route::delete('/vehicules/{id}', [VehiculeController::class, 'destroy']);
Route::put('/vehicules/{id}', [VehiculeController::class, 'update']);

//admin login
Route::post('/admin/login', [AdminAuthController::class, 'login']);

//gestion de carburant
Route::get('/carburants', [CarburantController::class, 'index']);
Route::post('/carburants', [CarburantController::class, 'store']);
Route::put('/carburants/{id}', [CarburantController::class, 'update']);
Route::delete('/carburants/{id}', [CarburantController::class, 'destroy']);

//gestion de mantenances
Route::get('/maintenances', [MaintenanceController::class, 'index']);
Route::post('/maintenances', [MaintenanceController::class, 'store']);
Route::put('/maintenances/{id}', [MaintenanceController::class, 'update']);
Route::delete('/maintenances/{id}', [MaintenanceController::class, 'destroy']);

Route::post('/register', function (Request $request) {
    try{
    $request->validate([
        'name' => 'required|string',
        'email' => 'required|email|unique:users',
        'password' => 'required|string|min:6',
    ]);

    $user = \App\Models\User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
    ]);
     // Ajout de log pour tester
        Log::info('USER_CREATED', ['user' => $user]);
     // Peut planter si HasApiTokens absent
    $token = $user->createToken('token')->plainTextToken;

    return response()->json(['token' => $token], 201);
 } catch (\Exception $e) {
        Log::error('Erreur enregistrement', ['message' => $e->getMessage()]);
        return response()->json(['message' => 'Erreur serveur', 'error' => $e->getMessage()], 500);
    }
});


Route::post('/login', function (Request $request) {
    $credentials = $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    if (!Auth::attempt($credentials)) {
        return response()->json(['message' => 'Identifiants invalides'], 401);
    }

    $user = User::where('email', $request->email)->first();
    $token = $user->createToken('token')->plainTextToken;

    return response()->json(['token' => $token]);
});
