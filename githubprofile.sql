-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 11 Mar 2023, 13:12:30
-- Sunucu sürümü: 10.4.27-MariaDB
-- PHP Sürümü: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `githubprofile`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `websiteler`
--

CREATE TABLE `websiteler` (
  `id` int(10) UNSIGNED NOT NULL,
  `baslik` varchar(255) NOT NULL,
  `aciklama` text NOT NULL,
  `siteUrl` varchar(255) NOT NULL,
  `repoUrl` varchar(255) NOT NULL,
  `imgName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Tablo döküm verisi `websiteler`
--

INSERT INTO `websiteler` (`id`, `baslik`, `aciklama`, `siteUrl`, `repoUrl`, `imgName`) VALUES
(1, 'Sunnyside agency landing page', 'This is a solution for my frontendmentor challange', 'https://kisacasumderler.github.io/web-siteler/sunnyside-agency-landing-page-main/index.html', 'https://github.com/kisacasumderler/sunnyside-agency-landing-page-main', './img/a53ed8e86feac38230b2b573ewebp'),
(2, 'Huddle landing page with curved sections', 'This is a solution for Huddle landing page with curved sections', 'https://kisacasumderler.github.io/', 'https://github.com/kisacasumderler/huddle-landing-page-with-curved-sections-master', './img/3880338b8476366f3f78cbe4ewebp'),
(3, 'Product preview card component', 'This is a solution for @kisacasumderler', 'https://kisacasumderler.github.io/', 'https://github.com/kisacasumderler/product-preview-card-component-main-challenge', './img/ee503d47f23b54baab9f7f710webp'),
(4, 'Fylo landing page with two column layout', 'This is a solution for @kisacasumderler', 'https://kisacasumderler.github.io/web-siteler/fylo-landing-page-with-two-column-layout-master/index.html', 'https://github.com/kisacasumderler/fylo-landing-page-with-two-column-layout-master', './img/b095295a398d68e22a1e78551webp'),
(5, '3-column preview card component', 'This is a solution for @kisacasumderler', 'https://kisacasumderler.github.io/web-siteler/3-column-preview-card-component-main/index.html', 'https://github.com/kisacasumderler/3-column-preview-card-component-main', './img/94f2a33b2912c8c7e05899643webp'),
(6, 'Stats preview card component', 'This is a solution for Stats preview card component', 'https://kisacasumderler.github.io/web-siteler/stats-preview-card-component-main/index.html', 'https://github.com/kisacasumderler/stats-preview-card-component-main', './img/087e8e34fa6121bd6548ae50cwebp'),
(7, 'QR code component', 'This is a solution for QR code component', 'https://kisacasumderler.github.io/web-siteler/qr-code-component-main/index.html', 'https://github.com/kisacasumderler/qr-code-component-main', './img/64b49789e0702d10936db16d7webp'),
(8, 'Clipboard landing page', 'This is a solution for Clipboard landing page', 'https://kisacasumderler.github.io/web-siteler/clipboard-landing-page-master/index.html', 'https://github.com/kisacasumderler/clipboard-landing-page-master', './img/5b0d947c913fdb51b8669cf64webp'),
(9, 'Intro section with dropdown navigation', 'This is a solution for Intro section with dropdown navigation', 'https://kisacasumderler.github.io/web-siteler/intro-section-with-dropdown-navigation-main/index.html', 'https://github.com/kisacasumderler/intro-section-with-dropdown-navigation-main', './img/2311e1899ef0b6af56ea2c4adwebp'),
(10, 'Social proof section', 'This is a solution for Social proof section', 'https://kisacasumderler.github.io/web-siteler/social-proof-section-master/index.html', 'https://github.com/kisacasumderler/social-proof-section-master', './img/689a1797ad3eb532ec05839abwebp'),
(11, 'Testimonials grid section', 'This is a solution for Testimonials grid section', 'https://kisacasumderler.github.io/web-siteler/testimonials-grid-section-main/index.html', 'https://github.com/kisacasumderler/testimonials-grid-section-main', './img/f57cd513d91753d4c6bd3bc7bwebp'),
(12, 'Order summary component', 'This is a solution for Order summary component', 'https://kisacasumderler.github.io/web-siteler/order-summary-component-main/index.html', 'https://github.com/kisacasumderler/order-summary-component-main', './img/68cc99279da38088cc445ef37webp'),
(13, 'NFT preview card component', 'This is a solution for NFT preview card component', 'https://kisacasumderler.github.io/web-siteler/nft-preview-card-component-main/index.html', 'https://github.com/kisacasumderler/nft-preview-card-component-main', './img/43099d2a632bb33945bd138dbwebp'),
(14, 'Space tourism multi-page website', 'This is a solution for', 'https://kisacasumderler.github.io/web-siteler/space-tourism-website-main/index.html', 'https://github.com/kisacasumderler/space-tourism-website-main', './img/30cbf77bcc2160dae78da8095webp'),
(15, 'News homepage', 'This is a solution for News homepage', 'https://kisacasumderler.github.io/web-siteler/news-homepage-main/index.html', 'https://github.com/kisacasumderler/news-homepage-main', './img/9f74edf9541ddc9e3e44695edwebp'),
(16, 'Loopstudios landing page', 'This is a solution for Loopstudios landing page', 'https://kisacasumderler.github.io/web-siteler/loopstudios-landing-page-main/', 'https://github.com/kisacasumderler/loopstudios-landing-page-main', './img/cbc46531feff04253c4f563f2webp'),
(17, 'Huddle landing page with a single introductory section', 'This is a solution for Huddle landing page with a single introductory section', 'https://kisacasumderler.github.io/web-siteler/huddle-landing-page-with-single-introductory-section-master/index.html', 'https://github.com/kisacasumderler/huddle-landing-page-with-curved-sections-master', './img/68970394a7bc52ad3077927e7webp'),
(18, 'Interactive card details form', 'This is a solution for Interactive card details form', 'https://kisacasumderler.github.io/web-siteler/interactive-card-details-form-main/index.html', 'https://github.com/kisacasumderler/Interactive-card-details-form-main', './img/746fb6531d1e7a3e527837215webp'),
(19, 'Interactive rating component', 'This is a solution for Interactive rating component', 'https://kisacasumderler.github.io/web-siteler/Interactive-rating-components/', 'https://github.com/kisacasumderler/Interactive-rating-component', './img/fc607e298b6f7cd4c3cfa5072webp'),
(20, 'Coding bootcamp testimonials slider', 'This is a solution for Coding bootcamp testimonials slider', 'https://kisacasumderler.github.io/web-siteler/coding-bootcamp-testimonials-slider-master/', 'https://github.com/kisacasumderler/coding-bootcamp-testimonials-slider-master', './img/92816a4df9d90b7e5d559c46cwebp'),
(21, 'Multi-step form', 'This is a solution for Multi-step form', 'https://kisacasumderler.github.io/web-siteler/multi-step-form-main/', 'https://github.com/kisacasumderler/multi-step-form-main', './img/0f9d7a6389a7f34f4651178e1webp'),
(22, 'Results summary component', 'This is a solution for Results summary component', 'https://kisacasumderler.github.io/web-siteler/results-summary-component-main/', 'https://github.com/kisacasumderler/results-summary-component-main', './img/d10ebcaa63697f55cc6ab49d7webp'),
(23, 'Blogr landing page', 'This is a solution for Blogr landing page', 'https://kisacasumderler.github.io/web-siteler/blogr-landing-page-main/index.html', 'https://github.com/kisacasumderler/blogr-landing-page-main', './img/1b0f52986b9afaaa4437ea93dwebp'),
(24, 'Expenses chart component', 'This is a solution for Expenses chart component', 'https://kisacasumderler.github.io/web-siteler/expenses-chart-component-main/', 'https://github.com/kisacasumderler/Expenses-chart-component', './img/cafb8d88476d57eea4a8826d3webp'),
(25, 'Room homepage', 'This is a solution for Room homepage', 'https://kisacasumderler.github.io/web-siteler/room-homepage-master/', 'https://github.com/kisacasumderler/room-homepage-master', './img/3d232d9a1a1798cb9bf66b4c6webp'),
(26, 'Btk akademi e ticaret projesi', 'Btk akademi e ticaret projesi', 'https://btkegitimeticaret.great-site.net/?i=1', 'https://github.com/kisacasumderler/Btk_Eticaret_Proje', './img/e20e567c623fa75c2f9f338ed.png');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `websiteler`
--
ALTER TABLE `websiteler`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `websiteler`
--
ALTER TABLE `websiteler`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
