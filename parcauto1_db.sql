-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 13 nov. 2025 à 14:12
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `parcauto1_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', 'admin@example.com', '$2y$12$BsPSlXJb4dHwFYlTQV1qQ.5mM1N/HGMgIRHu.03y8TKj4dNf9L7WG', '2025-05-31 13:33:24', '2025-05-31 13:33:24'),
(5, 'lalaoui', 'Lalaoui@gmail.com', '$2y$12$NxKaiGvRSCFbsHmxCr6YK.g15YwfGe7gbLZBjw62MMYhduCxBJ2H.', '2025-06-01 17:45:05', '2025-06-01 17:45:05');

-- --------------------------------------------------------

--
-- Structure de la table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `carburants`
--

CREATE TABLE `carburants` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `vehicule_id` bigint(20) UNSIGNED NOT NULL,
  `type_carburant` varchar(255) NOT NULL,
  `quantite_litres` double NOT NULL,
  `date_remplissage` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `carburants`
--

INSERT INTO `carburants` (`id`, `vehicule_id`, `type_carburant`, `quantite_litres`, `date_remplissage`, `created_at`, `updated_at`) VALUES
(2, 4, 'Essence', 40, '2025-06-20', '2025-06-04 16:53:47', '2025-07-14 10:34:22'),
(3, 7, 'Essence', 25, '2025-06-20', '2025-06-04 16:54:30', '2025-07-14 10:34:13'),
(8, 15, 'Diesel', 30, '2025-06-10', '2025-06-05 13:54:14', '2025-06-05 13:54:14');

-- --------------------------------------------------------

--
-- Structure de la table `chauffeurs`
--

CREATE TABLE `chauffeurs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nom_complet` varchar(255) NOT NULL,
  `cin` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `chauffeurs`
--

INSERT INTO `chauffeurs` (`id`, `nom_complet`, `cin`, `email`, `telephone`, `created_at`, `updated_at`) VALUES
(2, 'Mohssin lefouri', 'EE1258963', 'nizar@gmail.com', '0625875295', '2025-06-21 13:33:02', '2025-06-21 13:33:02'),
(3, 'Rachid', 'EE488888', 'Rachid@gmail.com', '0691365827', '2025-06-21 18:07:01', '2025-06-21 18:07:33'),
(4, 'Amin Moinim', 'EE965885', 'Amin@gmail.com', '07896286666', '2025-06-28 12:15:12', '2025-06-28 12:15:12'),
(5, 'Kaoutar', 'EE96489', 'Kaoutar@gmail.com', '079995736', '2025-07-08 11:16:52', '2025-07-08 11:16:52'),
(10, 'Lalaoui', 'EE896299', 'Lalaoui@gmail.com', '0789653658', '2025-07-10 11:25:32', '2025-07-10 11:25:32'),
(11, 'Nizar Moutamin', 'EE896256', 'Motamid@gmail.com', '078965235', '2025-07-14 21:20:08', '2025-07-14 21:20:08');

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `maintenances`
--

CREATE TABLE `maintenances` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `vehicule_id` bigint(20) UNSIGNED NOT NULL,
  `description` varchar(255) NOT NULL,
  `date_maintenance` date NOT NULL,
  `cout` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `maintenances`
--

INSERT INTO `maintenances` (`id`, `vehicule_id`, `description`, `date_maintenance`, `cout`, `created_at`, `updated_at`) VALUES
(5, 6, 'renouvellement de pnneaux', '2025-05-31', 1500, '2025-06-06 16:43:01', '2025-06-07 12:30:08'),
(6, 4, 'vidange', '2025-06-20', 300, '2025-06-07 12:14:39', '2025-06-07 12:14:39'),
(7, 9, 'pneaux', '2025-07-17', 1500, '2025-07-08 11:23:07', '2025-07-08 11:23:07');

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_05_23_175009_create_personal_access_tokens_table', 2),
(5, '2025_05_24_190042_create_vehicules_table', 3),
(6, '2025_05_31_134828_create_admins_table', 4),
(7, '2025_06_04_165121_create_carburants_table', 5),
(8, '2025_06_05_224854_create_maintenances_table', 6),
(9, '2025_06_11_105910_create_vignettes_table', 7),
(10, '2025_06_19_185716_create_reclamations_table', 8),
(11, '2025_06_21_132548_create_chauffeurs_table', 9);

-- --------------------------------------------------------

--
-- Structure de la table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 8, 'token', '814428a32b6881fb1c9be58b37420ac9fd0235c9d3623ba83563ecb38e3d6f94', '[\"*\"]', NULL, NULL, '2025-05-23 16:56:17', '2025-05-23 16:56:17'),
(2, 'App\\Models\\User', 8, 'token', 'e82c362c20752600222e576ee93388f2768b42c73fc56d649c453eacb41e1ecf', '[\"*\"]', NULL, NULL, '2025-05-23 16:56:57', '2025-05-23 16:56:57'),
(3, 'App\\Models\\User', 8, 'token', '2fa8c195dbe685e30092147e5d2207c03a8b249deea343309e0757e86af227fc', '[\"*\"]', NULL, NULL, '2025-05-23 17:49:12', '2025-05-23 17:49:12'),
(4, 'App\\Models\\User', 8, 'token', '94e266e21196388e8d8ba8c331638ad15b8523fc0f5c515e47c2f88e9b7beea8', '[\"*\"]', NULL, NULL, '2025-05-23 18:31:20', '2025-05-23 18:31:20'),
(5, 'App\\Models\\User', 8, 'token', '1c859e5e6cc5bc60905464056e70bc27acd7767d8326b56a93a590fdae43fb2e', '[\"*\"]', NULL, NULL, '2025-05-23 19:31:03', '2025-05-23 19:31:03'),
(6, 'App\\Models\\User', 9, 'token', '253b25747a04fff8769e87e9677f4a8b31367f95f13b3cd3a6ef8c0150ac46eb', '[\"*\"]', NULL, NULL, '2025-05-24 19:07:46', '2025-05-24 19:07:46'),
(7, 'App\\Models\\User', 9, 'token', '1a48382d5aa0df454ca80564e02d25e7fef6cf5d77e97ed91d28678d60d517d2', '[\"*\"]', NULL, NULL, '2025-05-24 19:08:32', '2025-05-24 19:08:32'),
(8, 'App\\Models\\User', 8, 'token', '0d19f23bd18fbc8532411cc8acd208e7d6a1772c74bf004d954bb96a20da1bea', '[\"*\"]', NULL, NULL, '2025-05-25 16:50:39', '2025-05-25 16:50:39'),
(9, 'App\\Models\\User', 8, 'token', '223035b02969d3b74ceecc95021d2ae873f55bb572d0d2c69255875e0cc50cd8', '[\"*\"]', NULL, NULL, '2025-05-29 13:20:09', '2025-05-29 13:20:09'),
(10, 'App\\Models\\User', 8, 'token', '5da7b3e3f4f8a3b961363d785d22cf8506b6580bae83983492e531c6a272b79a', '[\"*\"]', NULL, NULL, '2025-05-30 10:54:04', '2025-05-30 10:54:04'),
(11, 'App\\Models\\User', 8, 'token', '028668c71118a4cbf87c2da6bdb956c2b219b901986f65f6cdb28112557b4fd8', '[\"*\"]', NULL, NULL, '2025-05-30 11:55:34', '2025-05-30 11:55:34'),
(12, 'App\\Models\\Admin', 1, 'admin-token', 'ef04a4b45eb90d2351c814f1978da250e0e77075886e1cd66ceb4560a0bef994', '[\"*\"]', NULL, NULL, '2025-05-31 13:53:19', '2025-05-31 13:53:19'),
(13, 'App\\Models\\Admin', 1, 'admin-token', '40670b004aad5185a46ed075d00ea8e1481b496e04ad615a5f43b9cdff89bfaf', '[\"*\"]', NULL, NULL, '2025-06-01 11:46:26', '2025-06-01 11:46:26'),
(14, 'App\\Models\\Admin', 5, 'admin-token', 'ba2bd5c5781cf61e55aaeeb9479c94d213cc62e62d3fe02d42d80733051cde17', '[\"*\"]', NULL, NULL, '2025-06-01 18:01:25', '2025-06-01 18:01:25'),
(15, 'App\\Models\\Admin', 5, 'admin-token', '9575ef6b99776797b951803752a736c312dfe9d34129da3c4d60efa34528fe3e', '[\"*\"]', NULL, NULL, '2025-06-01 18:54:42', '2025-06-01 18:54:42'),
(16, 'App\\Models\\Admin', 5, 'admin-token', 'd1ae0ee8f0b66e887cea8e9d98a30b50389717f43ae2050e33ec37b796560206', '[\"*\"]', NULL, NULL, '2025-06-01 18:59:33', '2025-06-01 18:59:33'),
(17, 'App\\Models\\Admin', 5, 'admin-token', 'a735db6b2e23a692dff0d435df20f3dcee1e56ccc94ea93ca561ad50573dc6dd', '[\"*\"]', NULL, NULL, '2025-06-01 19:21:05', '2025-06-01 19:21:05'),
(18, 'App\\Models\\Admin', 5, 'admin-token', 'ae4e2b9a60cd7d0503603ae12b0816c58081dbe427d9b7e0d3ea40fc0d654a5a', '[\"*\"]', NULL, NULL, '2025-06-01 19:21:40', '2025-06-01 19:21:40'),
(19, 'App\\Models\\Admin', 5, 'admin-token', 'bde693c7db2cd08119870f8d09fac9127a90d5be2631cda02c218e9e57cd6e63', '[\"*\"]', NULL, NULL, '2025-06-01 19:34:14', '2025-06-01 19:34:14'),
(20, 'App\\Models\\Admin', 5, 'admin-token', 'ba945c7d5b3f53ab4131b004cead1b8017f942e8e768c1ded278fbc6ac1ab4d8', '[\"*\"]', NULL, NULL, '2025-06-01 19:35:54', '2025-06-01 19:35:54'),
(21, 'App\\Models\\Admin', 5, 'admin-token', '24b523c693d50aa65e0e802461bedefe6c9f264aaf17c8c0fa901db61f2d57b9', '[\"*\"]', NULL, NULL, '2025-06-03 09:11:09', '2025-06-03 09:11:09'),
(22, 'App\\Models\\Admin', 5, 'admin-token', 'c7392121d644075d29006412c2f56d36239ffa84d31a274c44dd3b628874a7cd', '[\"*\"]', NULL, NULL, '2025-06-03 09:11:26', '2025-06-03 09:11:26'),
(23, 'App\\Models\\Admin', 5, 'admin-token', 'c93d199c113c4a079051e9a538bea927ffdf3826007a3706e7874d552c28bcc4', '[\"*\"]', NULL, NULL, '2025-06-04 15:27:57', '2025-06-04 15:27:57'),
(24, 'App\\Models\\Admin', 5, 'admin-token', '35e24265020326f1965165e166dbeb0eafca8fd5ad947454a6fbaee8ca7bc59e', '[\"*\"]', NULL, NULL, '2025-06-05 11:37:30', '2025-06-05 11:37:30'),
(25, 'App\\Models\\Admin', 5, 'admin-token', '02796f48284ed09af53bc07587bc6fe1ba09b778e4a4b84bc56374420a024a24', '[\"*\"]', NULL, NULL, '2025-06-06 18:18:10', '2025-06-06 18:18:10'),
(26, 'App\\Models\\Admin', 5, 'admin-token', 'fbc007bf0b1d42ac5d21e49ca37ace6997712eaa9c0ca6b5de4a63fed48a3c3c', '[\"*\"]', NULL, NULL, '2025-06-06 18:46:11', '2025-06-06 18:46:11'),
(27, 'App\\Models\\Admin', 5, 'admin-token', '5babf25d584763d8fd67380c84c87ade6c4c83cb8706ff0d709a6817952fef88', '[\"*\"]', NULL, NULL, '2025-06-06 18:48:30', '2025-06-06 18:48:30'),
(28, 'App\\Models\\Admin', 5, 'admin-token', '91c50217a3ecbe1d35c2011cfbb0633e09ae3365beb9c51c3092cf63980e1c70', '[\"*\"]', NULL, NULL, '2025-06-07 12:10:24', '2025-06-07 12:10:24'),
(29, 'App\\Models\\Admin', 5, 'admin-token', 'b334ea131af2bad524544ea5cb82cccf46b4be41b2dc83a99aec6a893137a476', '[\"*\"]', NULL, NULL, '2025-06-07 12:32:04', '2025-06-07 12:32:04'),
(30, 'App\\Models\\Admin', 5, 'admin-token', '61e3874e990d04c9e2e23659b4c953358cf675e2d7d0552c9be299d1dd669923', '[\"*\"]', NULL, NULL, '2025-06-10 08:19:21', '2025-06-10 08:19:21'),
(31, 'App\\Models\\Admin', 5, 'admin-token', 'fc1b867a46ea14f2adf8beecabe9ee494281e280f365f1e5b4c3daf02572619f', '[\"*\"]', NULL, NULL, '2025-06-10 08:52:06', '2025-06-10 08:52:06'),
(32, 'App\\Models\\Admin', 5, 'admin-token', '55ad41415ee7de5283547df5b2a7dd8e05312ab04ec43c8d93b235989e7ac6b0', '[\"*\"]', NULL, NULL, '2025-06-11 09:53:40', '2025-06-11 09:53:40'),
(33, 'App\\Models\\Admin', 5, 'admin-token', '31961def20890600c8781410c5105095b8b2cb9a7f6bb95e55e41a6e15f91e05', '[\"*\"]', NULL, NULL, '2025-06-12 19:37:08', '2025-06-12 19:37:08'),
(34, 'App\\Models\\Admin', 5, 'admin-token', '9b79bd7fe2be9bdbfbfb0cc30efaa3c667d1c4d71b3aefa99a4b52009c5c9ecf', '[\"*\"]', NULL, NULL, '2025-06-13 09:57:17', '2025-06-13 09:57:17'),
(35, 'App\\Models\\Admin', 5, 'admin-token', '9b077a31381c9dde843e89e76172bd6e6afd24b6e5eedb3c617d867b1cc12354', '[\"*\"]', NULL, NULL, '2025-06-15 09:39:12', '2025-06-15 09:39:12'),
(36, 'App\\Models\\Admin', 5, 'admin-token', 'ad65aeaee81d0072e31c0699f44901f5b65af8a46249adb9a1437ab8641db6e6', '[\"*\"]', NULL, NULL, '2025-06-15 18:57:07', '2025-06-15 18:57:07'),
(37, 'App\\Models\\Admin', 5, 'admin-token', '29aef377533dcfc3de44e3e8bbda600e08357ba91fa442c036550aca1c2697c8', '[\"*\"]', NULL, NULL, '2025-06-16 13:22:53', '2025-06-16 13:22:53'),
(38, 'App\\Models\\Admin', 5, 'admin-token', 'a12a8049f6e27008a1419baf45bbed01b87b1b7bfc22f527e7fbffa253a64088', '[\"*\"]', NULL, NULL, '2025-06-18 11:36:44', '2025-06-18 11:36:44'),
(39, 'App\\Models\\Admin', 5, 'admin-token', 'ac3b6201f479dacfb63bda645fcc458c314c25d59f0b8723d8d2a0e3e4d03273', '[\"*\"]', NULL, NULL, '2025-06-19 11:04:49', '2025-06-19 11:04:49'),
(40, 'App\\Models\\Admin', 5, 'admin-token', 'df3d7c200c56409c6a56d0952c20303629924eef753491aa3b1df56a8b4e2e4d', '[\"*\"]', NULL, NULL, '2025-06-20 09:52:49', '2025-06-20 09:52:49'),
(41, 'App\\Models\\Admin', 5, 'admin-token', '6306d7767e255f412121bc82cc39782bf44e13c83c823320c66ad49b048fb858', '[\"*\"]', NULL, NULL, '2025-06-25 11:00:49', '2025-06-25 11:00:49'),
(42, 'App\\Models\\Admin', 5, 'admin-token', 'dac85aa50d2314b786cec56247647c18e8f71a823e651f5c6c63f0636c0ac57a', '[\"*\"]', NULL, NULL, '2025-06-25 11:15:06', '2025-06-25 11:15:06'),
(43, 'App\\Models\\Admin', 5, 'admin-token', '8a9e01fe6d9e0e949d3d31d82bccaa4bd0f8774cc0c576cc83a5abc6674ec525', '[\"*\"]', NULL, NULL, '2025-06-25 12:00:40', '2025-06-25 12:00:40'),
(44, 'App\\Models\\Admin', 5, 'admin-token', 'e41b5e23f675f8d32e8087a5af2831092089bc5af47429a1ddd882df0ad430ea', '[\"*\"]', NULL, NULL, '2025-06-28 11:18:23', '2025-06-28 11:18:23'),
(45, 'App\\Models\\Admin', 5, 'admin-token', '1634c915814b3ab6048ad484ab974559dcc357445e09198bae0e32bc65963f7e', '[\"*\"]', NULL, NULL, '2025-06-29 09:36:23', '2025-06-29 09:36:23'),
(46, 'App\\Models\\Admin', 5, 'admin-token', 'db7f1ccf48d30b32c7ae20914d8518894533066552ecf55f5e1f23d4d9ee041d', '[\"*\"]', NULL, NULL, '2025-07-08 11:17:43', '2025-07-08 11:17:43'),
(47, 'App\\Models\\Admin', 5, 'admin-token', 'ed10926f553c0c5cac1863580e93759b4d58e138747a49896b77995fd786bb83', '[\"*\"]', NULL, NULL, '2025-07-08 12:01:48', '2025-07-08 12:01:48'),
(48, 'App\\Models\\Admin', 5, 'admin-token', '2c6acf94d683c9af8cdb92ebe9f12009230a64bb66c8730c7845c6ae8f34633a', '[\"*\"]', NULL, NULL, '2025-07-10 12:25:00', '2025-07-10 12:25:00'),
(49, 'App\\Models\\Admin', 5, 'admin-token', '712908687f89d1176d89743da512c73333d40bf1d02d2c47c8405cc9bd0341a4', '[\"*\"]', NULL, NULL, '2025-07-10 13:15:39', '2025-07-10 13:15:39'),
(50, 'App\\Models\\Admin', 5, 'admin-token', 'af38e07e9f4b81bda19a8738e2825df52e2f374b5655b3c520b0c1adff74ddd3', '[\"*\"]', NULL, NULL, '2025-07-14 21:20:55', '2025-07-14 21:20:55');

-- --------------------------------------------------------

--
-- Structure de la table `reclamations`
--

CREATE TABLE `reclamations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nom_complet` varchar(255) NOT NULL,
  `marque_auto` varchar(255) NOT NULL,
  `immatriculation` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `reclamations`
--

INSERT INTO `reclamations` (`id`, `nom_complet`, `marque_auto`, `immatriculation`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Mohamed naboulssi', 'Honda', 'MM7885L85', 'prbleme de moteur', '2025-06-19 18:28:55', '2025-06-20 10:24:03'),
(3, 'Lalaoui Nizar', 'Mercedes', 'MM78692B45', 'probleme de rous', '2025-06-20 10:31:27', '2025-06-20 10:31:27'),
(7, 'Nizar', 'Mercides', 'MM4589M6', 'avoir un rendez vous', '2025-07-08 11:51:27', '2025-07-08 11:51:27');

-- --------------------------------------------------------

--
-- Structure de la table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('0ucnDH0I4vb6ZruO7WZHpGpMJCEk9ZavHDfTMLER', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiS3J5VlZNaW13QU1kSWh5Y1RxUE5IRzB0eFV5eUhHaEVuQmk0aGoybyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1748945272),
('3iYNBJnhk8iVt0fbMxfjPq344GSvtgzPuccFjIE7', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiemZJT1U4OFdDaFp6dlRzc0JrNk5IbjZMWFZCdzQ3M0VROWdvQnJ1eCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1749056950),
('9eBrOjdcXxCXc2qt3RwZTbFhExG6QF7TTVgWGO24', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVXExelZ2RThUSUc3UzB0Q1NtcUo0TldjOUlvUHNieWdXVWljYkhJWiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1748022927),
('AHaQgCVJhybpJFfv0UJg6MvPLLwuftsMQcpH0hjc', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNXBPVUFwQUxWVjRDakt0b09sT0tnTDVwdmJxV3p0Tnl0cVp1MmpSbCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1749760585),
('cb4yTjurxcIikK0nvHhuQg8q77OERHV0XaYRsSc5', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidlhINlRENWlDazZ6SjVKNkRJYUxwTGw4ZURXa0d1eGUyQjYzVlpVeiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1750334417),
('cnoNvdywtnoB9D1yvhczaV5SrT5a088Wv9YDqj8D', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieFczcGU1eTJ5NHFWUG1RTTh2c0dBNnBJczRCZnUwanBINHJZVjQ5WCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1748528341),
('jt5NuniusjnmQjniv0vWqM0JcA07PHM4P4LZuAYh', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUFRLN1daRFo2OVJtZThENzlSZFU3VW5abjFXV0pYek14cTlzdjZJdyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1749812166),
('mSPODdMR6vaJDyKv4hHx57FpS4RkKdkEogkNZfSb', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZ2RIQWpyd0xWdm5yTkg2RVZBU1FZR1Y1QTI1eVVMdVlvMGg5Q0Y3dCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1748196755),
('nYLpeLYModISbuXdqTtj5iQJf1FPWWJRDnLf5D1i', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYlNyM2VPSGxheFZ1cGlRVzZaQWJXTHdnWjVpYm4xeW02eEx1dnEwdyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1748606003),
('oeFmmqBOjpponkOXRn4Qo0kK2VaOM1FyjxTwbx1T', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiZDBhdnhWQTZ1WlJUYUJRdFl6T3FvNklBOVBhUWVyRnl6TDJSelUxeSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1749645801),
('RUmrw03OrUcxNWjKzRCTZHNPbvk0YbrEaaIIPmpV', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTWJteGQwc2FDWnVQOFFZRFhjSW9qcE9PVHVGNTZtQ3hRUkhqNzE4NyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1749908234),
('uftbyHy7AgOYgRBhYsuQPuc0iJr4hbEfRGU86hlC', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiekZoNlRjOTlmaHZJWmV2NE1GMkRWSmozeGFPS2tXYUp3TmVNVTlhTyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1748010170);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(8, 'lalaoui', 'lalaoui@gmail.com', NULL, '$2y$12$.emX4fQuQqVlX/bpztJs1eEzFJ.4iOn87asylDR0IPW9qHyiJ/FaW', NULL, '2025-05-23 16:56:16', '2025-05-23 16:56:16'),
(9, 'amin', 'amin@gmail.com', NULL, '$2y$12$CGnqrqevH3vP6jbhZIGj4ufwpImLn.8ZQ54PF87nD37v/DUqjcCpm', NULL, '2025-05-24 19:07:46', '2025-05-24 19:07:46');

-- --------------------------------------------------------

--
-- Structure de la table `vehicules`
--

CREATE TABLE `vehicules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `marque` varchar(255) NOT NULL,
  `modele` varchar(255) NOT NULL,
  `immatriculation` varchar(255) NOT NULL,
  `date_acquisition` date NOT NULL,
  `kilometrage` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `vehicules`
--

INSERT INTO `vehicules` (`id`, `marque`, `modele`, `immatriculation`, `date_acquisition`, `kilometrage`, `created_at`, `updated_at`) VALUES
(3, 'Raunaut', '2014', 'MM78596', '2025-05-20', 201555, '2025-05-25 17:21:44', '2025-05-29 14:30:30'),
(4, 'fiat', '2013', 'MM89628', '2025-05-21', 200000, '2025-05-25 17:29:17', '2025-05-25 17:29:17'),
(5, 'Honda', '2019', 'MM78598', '2020-01-25', 230000, '2025-05-25 17:31:21', '2025-05-29 13:51:55'),
(6, 'honda', '2010', 'MA58936', '2025-03-13', 500000, '2025-05-25 17:32:21', '2025-05-25 17:32:21'),
(7, 'toyota', '2015', 'WWM85963', '2023-05-12', 900000, '2025-05-25 17:37:10', '2025-05-25 17:37:10'),
(9, 'hondai', '2007', 'MMl5892', '2025-05-15', 200258, '2025-05-29 14:29:38', '2025-05-29 14:29:38'),
(15, 'Mercidece', '2015', 'MM59494', '2025-06-13', 95888, '2025-06-05 13:46:04', '2025-06-05 13:46:04'),
(16, 'Ford', '2020', 'MM78589', '2025-06-14', 80000, '2025-06-06 17:03:15', '2025-06-06 17:03:15');

-- --------------------------------------------------------

--
-- Structure de la table `vignettes`
--

CREATE TABLE `vignettes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `vehicule_id` bigint(20) UNSIGNED NOT NULL,
  `annee` int(11) NOT NULL,
  `date_generation` date NOT NULL,
  `fichier_pdf` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `vignettes`
--

INSERT INTO `vignettes` (`id`, `vehicule_id`, `annee`, `date_generation`, `fichier_pdf`, `created_at`, `updated_at`) VALUES
(11, 3, 2025, '2025-06-15', 'vignette_3_2025.pdf', '2025-06-15 20:52:50', '2025-06-15 20:52:50'),
(12, 15, 2025, '2025-06-15', 'vignette_15_2025.pdf', '2025-06-15 20:54:09', '2025-06-15 20:54:09'),
(15, 16, 2025, '2025-07-08', 'vignette_16_2025.pdf', '2025-07-08 11:21:30', '2025-07-08 11:21:30');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Index pour la table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Index pour la table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Index pour la table `carburants`
--
ALTER TABLE `carburants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carburants_vehicule_id_foreign` (`vehicule_id`);

--
-- Index pour la table `chauffeurs`
--
ALTER TABLE `chauffeurs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `chauffeurs_cin_unique` (`cin`),
  ADD UNIQUE KEY `chauffeurs_email_unique` (`email`);

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Index pour la table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `maintenances`
--
ALTER TABLE `maintenances`
  ADD PRIMARY KEY (`id`),
  ADD KEY `maintenances_vehicule_id_foreign` (`vehicule_id`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Index pour la table `reclamations`
--
ALTER TABLE `reclamations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Index pour la table `vehicules`
--
ALTER TABLE `vehicules`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vehicules_immatriculation_unique` (`immatriculation`);

--
-- Index pour la table `vignettes`
--
ALTER TABLE `vignettes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vignettes_vehicule_id_foreign` (`vehicule_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `carburants`
--
ALTER TABLE `carburants`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `chauffeurs`
--
ALTER TABLE `chauffeurs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `maintenances`
--
ALTER TABLE `maintenances`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT pour la table `reclamations`
--
ALTER TABLE `reclamations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `vehicules`
--
ALTER TABLE `vehicules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT pour la table `vignettes`
--
ALTER TABLE `vignettes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `carburants`
--
ALTER TABLE `carburants`
  ADD CONSTRAINT `carburants_vehicule_id_foreign` FOREIGN KEY (`vehicule_id`) REFERENCES `vehicules` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `maintenances`
--
ALTER TABLE `maintenances`
  ADD CONSTRAINT `maintenances_vehicule_id_foreign` FOREIGN KEY (`vehicule_id`) REFERENCES `vehicules` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `vignettes`
--
ALTER TABLE `vignettes`
  ADD CONSTRAINT `vignettes_vehicule_id_foreign` FOREIGN KEY (`vehicule_id`) REFERENCES `vehicules` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
