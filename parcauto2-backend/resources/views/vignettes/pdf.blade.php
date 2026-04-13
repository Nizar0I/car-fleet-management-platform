
<!-- resources/views/vignettes/pdf.blade.php -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Vignette</title>
</head>
<body>
  <h1>Vignette Année {{ $annee }}</h1>
  <p>Immatriculation : {{ $vehicule->immatriculation }}</p>
  <p>Marque : {{ $vehicule->marque }}</p>
  <p>Modèle : {{ $vehicule->modele }}</p>
  <p>Date de génération : {{ $date_generation }}</p>
</body>
</html>

{{-- <!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Vignette {{ $vehicule->immatriculation }}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 30px;
            background-color: #f7f7f7;
        }
        .vignette {
            border: 2px dashed #444;
            padding: 20px;
            background-color: #fff;
            display: inline-block;
            width: 400px;
            margin: auto;
        }
        h1 {
            color: #007bff;
        }
        .info {
            text-align: left;
            margin-top: 20px;
            font-size: 16px;
        }
        .info strong {
            display: inline-block;
            width: 140px;
        }
    </style>
</head>
<body>
    <div class="vignette">
        <h1>🧾 Vignette Annuelle</h1>

        <div class="info">
            <p><strong>Immatriculation :</strong> {{ $vehicule->immatriculation }}</p>
            <p><strong>Marque :</strong> {{ $vehicule->marque }}</p>
            <p><strong>Modèle :</strong> {{ $vehicule->modele }}</p>
            <p><strong>Année :</strong> {{ $vignette->annee }}</p>
            <p><strong>Date Génération :</strong> {{ $vignette->date_generation }}</p>
        </div>
    </div>
</body>
</html> --}}
