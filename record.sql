-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 27, 2021 at 07:08 PM
-- Server version: 5.7.34
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `youngbra_maxi`
--

-- --------------------------------------------------------

--
-- Table structure for table `record`
--

CREATE TABLE `record` (
  `id` smallint(255) NOT NULL,
  `name` text NOT NULL,
  `phone` varchar(255) NOT NULL,
  `score` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `record`
--

INSERT INTO `record` (`id`, `name`, `phone`, `score`, `created_at`, `updated_at`) VALUES
(1, 'Odunuga', 'kunle', '1', '2020-12-09 13:54:55', '2020-12-09 13:54:55'),
(2, 'Yinka', '08024961461', '0', '2020-12-09 15:27:10', '2020-12-09 15:27:10'),
(3, 'Alaba promise', '07016130202', '1', '2021-01-14 12:41:14', '2021-01-14 12:41:14'),
(4, 'Test_Test', '08033527650', '3', '2021-01-14 13:14:08', '2021-01-14 13:14:08'),
(5, 'Test2', '08033004400', '6', '2021-01-14 13:16:20', '2021-01-14 13:16:20'),
(6, 'Kunle', '09091183604', '7', '2021-01-15 11:35:24', '2021-01-15 11:35:24'),
(7, 'Ojo', '08199543930', '17', '2021-01-15 13:40:09', '2021-01-15 13:40:09'),
(8, 'Kaosarat', '08189339908', '16', '2021-01-15 15:09:37', '2021-01-15 15:09:37'),
(9, 'Thulane', '067 886 0418', '4', '2021-01-17 03:28:32', '2021-01-17 03:28:32'),
(10, 'Delightsome', '08028297869', '1', '2021-01-17 17:54:36', '2021-01-17 17:54:36'),
(11, 'Ejoro', '08139097057', '2', '2021-01-18 13:48:29', '2021-01-18 13:48:29'),
(12, 'Praise', '09029479802', '3', '2021-01-18 16:44:00', '2021-01-18 16:44:00'),
(13, 'Ndubuisi', '08123197283', '7', '2021-01-18 16:48:04', '2021-01-18 16:48:04'),
(14, 'Toyosi', '09018061479', '2', '2021-01-19 15:10:36', '2021-01-19 15:10:36'),
(15, 'Favour', '08094681620', '4', '2021-01-20 18:26:24', '2021-01-20 18:26:24'),
(16, 'Sangeeta', '9729945182', '4', '2021-01-28 01:11:35', '2021-01-28 01:11:35'),
(17, 'Halima', '08034518377', '3', '2021-01-29 15:32:31', '2021-01-29 15:32:31'),
(18, 'Sadiya', '08139035183', '7', '2021-01-29 16:20:52', '2021-01-29 16:20:52'),
(19, 'Halima', '07061624357', '9', '2021-02-15 15:52:18', '2021-02-15 15:52:18'),
(20, 'Halima', '08139035183', '10', '2021-02-22 16:24:35', '2021-02-22 16:24:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `record`
--
ALTER TABLE `record`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `record`
--
ALTER TABLE `record`
  MODIFY `id` smallint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
