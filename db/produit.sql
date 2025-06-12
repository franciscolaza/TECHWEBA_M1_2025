-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 13 juin 2025 à 01:38
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `vente`
--

-- --------------------------------------------------------

--
-- Structure de la table `produit`
--

CREATE TABLE `produit` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `description` varchar(225) NOT NULL,
  `image` text NOT NULL,
  `detail` text NOT NULL,
  `plusdetail` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `produit`
--

INSERT INTO `produit` (`id`, `name`, `price`, `description`, `image`, `detail`, `plusdetail`) VALUES
(3, 'Nike Air Max 270', 120, 'Tennis Nike ultra-confort pour le sport ou le quotidien.', '/uploads/images/image2.png', 'Modèle emblématique avec amorti renforcé.', '[\"Amorti Air Max\", \"Tissu respirant\", \"Design moderne\", \"Marque officielle Nike\"]'),
(4, 'Adidas Ultraboost 22', 140, 'Performance et style réunis dans ce modèle Ultraboost de nouvelle génération.', '/uploads/images/image3.png', 'Chaussure de running premium avec retour d\'énergie.', '[\"Technologie Boost\", \"Semelle Stretchweb\", \"Confort maximal\", \"Marque Adidas\"]'),
(5, 'Puma RS-X3', 100, 'Look rétro et structure innovante pour un usage lifestyle ou sportif.', '/uploads/images/image4.png', 'Chaussures tendance avec design dynamique.', '[\"Forme RS rétro\", \"Semelle en EVA\", \"Coloris flashy\", \"Marque Puma\"]'),
(6, 'New Balance 574', 90, 'Un classique revisité : confort et simplicité pour tous les jours.', '/uploads/images/image5.png', 'Chaussure en daim et mesh, semelle intermédiaire ENCAP.', '[\"Semelle ENCAP\", \"Style rétro\", \"Confort durable\", \"Marque New Balance\"]');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `produit`
--
ALTER TABLE `produit`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `produit`
--
ALTER TABLE `produit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
