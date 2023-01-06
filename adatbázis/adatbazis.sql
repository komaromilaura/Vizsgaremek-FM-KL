-- --------------------------------------------------------
-- Hoszt:                        127.0.0.1
-- Szerver verzió:               8.0.30 - MySQL Community Server - GPL
-- Szerver OS:                   Win64
-- HeidiSQL Verzió:              12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Adatbázis struktúra mentése a lamafelhasznalok.
DROP DATABASE IF EXISTS `lamafelhasznalok`;
CREATE DATABASE IF NOT EXISTS `lamafelhasznalok` /*!40100 DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `lamafelhasznalok`;

-- Struktúra mentése tábla lamafelhasznalok. admin
DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `IVIR` int unsigned NOT NULL,
  `Password` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `Admin` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`IVIR`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.admin: ~1 rows (hozzávetőleg)
INSERT INTO `admin` (`IVIR`, `Password`, `Admin`) VALUES
	(101301, '1212', 1);

-- Struktúra mentése tábla lamafelhasznalok. allashelyek
DROP TABLE IF EXISTS `allashelyek`;
CREATE TABLE IF NOT EXISTS `allashelyek` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `mentoallomas` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `ev` year NOT NULL,
  `ho` int unsigned NOT NULL,
  `szakorvos_szervezett` float unsigned NOT NULL DEFAULT '0',
  `szakorvos_betoltott` float unsigned NOT NULL DEFAULT '0',
  `szakorvos_ures` float NOT NULL DEFAULT '0',
  `vezeto_mentotiszt_szervezett` float unsigned NOT NULL DEFAULT '0',
  `vezeto_mentotiszt_betoltott` float unsigned NOT NULL DEFAULT '0',
  `vezeto_mentotiszt_ures` float NOT NULL DEFAULT '0',
  `orvos_mentotiszt_szervezett` float unsigned NOT NULL DEFAULT '0',
  `orvos_mentotiszt_betoltott` float unsigned NOT NULL DEFAULT '0',
  `orvos_mentotiszt_ures` float NOT NULL DEFAULT '0',
  `foapolo_szervezett` float unsigned NOT NULL DEFAULT '0',
  `foapolo_betoltott` float unsigned NOT NULL DEFAULT '0',
  `foapolo_ures` float NOT NULL DEFAULT '0',
  `mentoapolo_szervezett` float unsigned NOT NULL DEFAULT '0',
  `mentoapolo_betoltott` float unsigned NOT NULL DEFAULT '0',
  `mentoapolo_ures` float NOT NULL DEFAULT '0',
  `mentoapolo_osszes_szervezett` float unsigned NOT NULL DEFAULT '0',
  `mentoapolo_osszes_betoltott` float unsigned NOT NULL DEFAULT '0',
  `mentoapolo_osszes_ures` float NOT NULL DEFAULT '0',
  `allomasvezeto_szervezett` float unsigned NOT NULL DEFAULT '0',
  `allomasvezeto_betoltott` float unsigned NOT NULL DEFAULT '0',
  `allomasvezeto_ures` float NOT NULL DEFAULT '0',
  `ICS_vezeto_szervezett` float unsigned NOT NULL DEFAULT '0',
  `ICS_vezeto_betoltott` float unsigned NOT NULL DEFAULT '0',
  `ICS_vezeto_ures` float NOT NULL DEFAULT '0',
  `mentotiszt_szervezett` float unsigned NOT NULL DEFAULT '0',
  `mentotiszt_betoltott` float unsigned NOT NULL DEFAULT '0',
  `mentotiszt_ures` float NOT NULL DEFAULT '0',
  `mentoapolo2_szervezett` float unsigned NOT NULL DEFAULT '0',
  `mentoapolo2_betoltott` float unsigned NOT NULL DEFAULT '0',
  `mentoapolo2_ures` float NOT NULL DEFAULT '0',
  `apolo_szervezett` float unsigned NOT NULL DEFAULT '0',
  `apolo_betoltott` float unsigned NOT NULL DEFAULT '0',
  `apolo_ures` float NOT NULL DEFAULT '0',
  `szolgalatvezeto_szervezett` float unsigned NOT NULL DEFAULT '0',
  `szolgalatvezeto_betoltott` float unsigned NOT NULL DEFAULT '0',
  `szolgalatvezeto_ures` float NOT NULL DEFAULT '0',
  `apolo2_szervezett` float unsigned NOT NULL DEFAULT '0',
  `apolo2_betoltott` float unsigned NOT NULL DEFAULT '0',
  `apolo2_ures` float NOT NULL DEFAULT '0',
  `uzemgazdasz_szervezett` float unsigned NOT NULL DEFAULT '0',
  `uzemgazdasz_betoltott` float unsigned NOT NULL DEFAULT '0',
  `uzemgazdasz_ures` float NOT NULL DEFAULT '0',
  `uzemmernok_szervezett` float unsigned NOT NULL DEFAULT '0',
  `uzemmernok_betoltott` float unsigned NOT NULL DEFAULT '0',
  `uzemmernok_ures` float NOT NULL DEFAULT '0',
  `oktatas_szervezo_szervezett` float unsigned NOT NULL DEFAULT '0',
  `oktatas_szervezo_betoltott` float unsigned NOT NULL DEFAULT '0',
  `oktatas_szervezo_ures` float NOT NULL DEFAULT '0',
  `ugyintezo_szervezett` float unsigned NOT NULL DEFAULT '0',
  `ugyintezo_betoltott` float unsigned NOT NULL DEFAULT '0',
  `ugyintezo_ures` float NOT NULL DEFAULT '0',
  `adminisztrator_szervezett` float unsigned NOT NULL DEFAULT '0',
  `adminisztrator_betoltott` float unsigned NOT NULL DEFAULT '0',
  `adminisztrator_ures` float NOT NULL DEFAULT '0',
  `adatrogzito_szervezett` float unsigned NOT NULL DEFAULT '0',
  `adatrogzito_betoltott` float unsigned NOT NULL DEFAULT '0',
  `adatrogzito_ures` float NOT NULL DEFAULT '0',
  `autoszerelo_szakmunkas_szervezett` float unsigned NOT NULL DEFAULT '0',
  `autoszerelo_szakmunkas_betoltott` float unsigned NOT NULL DEFAULT '0',
  `autoszerelo_szakmunkas_ures` float NOT NULL DEFAULT '0',
  `karbantarto_szervezett` float unsigned NOT NULL DEFAULT '0',
  `karbantarto_betoltott` float unsigned NOT NULL DEFAULT '0',
  `karbantarto_ures` float NOT NULL DEFAULT '0',
  `kazanfuto_szervezett` float unsigned NOT NULL DEFAULT '0',
  `kazanfuto_betoltott` float unsigned NOT NULL DEFAULT '0',
  `kazanfuto_ures` float NOT NULL DEFAULT '0',
  `mentogepkocsivezeto_szervezett` float unsigned NOT NULL DEFAULT '0',
  `mentogepkocsivezeto_betoltott` float unsigned NOT NULL DEFAULT '0',
  `mentogepkocsivezeto_ures` float NOT NULL DEFAULT '0',
  `muszaki_gondnok_szervezett` float unsigned NOT NULL DEFAULT '0',
  `muszaki_gondnok_betoltott` float unsigned NOT NULL DEFAULT '0',
  `muszaki_gondnok_ures` float NOT NULL DEFAULT '0',
  `garazsmester_szervezett` float unsigned NOT NULL DEFAULT '0',
  `garazsmester_betoltott` float unsigned NOT NULL DEFAULT '0',
  `garazsmester_ures` float NOT NULL DEFAULT '0',
  `szervezett_gkv_osszesen` float unsigned NOT NULL DEFAULT '0',
  `betoltott_gkv_osszesen` float unsigned NOT NULL DEFAULT '0',
  `ures_gkv_osszesen` float NOT NULL DEFAULT '0',
  `szervezett_allashely_osszesen` float unsigned NOT NULL DEFAULT '0',
  `betoltott_allashely_osszesen` float unsigned NOT NULL DEFAULT '0',
  `ures_allashely_osszesen` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `mentoallomas` (`mentoallomas`,`ev`,`ho`),
  CONSTRAINT `FK_allashelyek_allomasok` FOREIGN KEY (`mentoallomas`) REFERENCES `allomasok` (`nev`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.allashelyek: ~4 rows (hozzávetőleg)
INSERT INTO `allashelyek` (`ID`, `mentoallomas`, `ev`, `ho`, `szakorvos_szervezett`, `szakorvos_betoltott`, `szakorvos_ures`, `vezeto_mentotiszt_szervezett`, `vezeto_mentotiszt_betoltott`, `vezeto_mentotiszt_ures`, `orvos_mentotiszt_szervezett`, `orvos_mentotiszt_betoltott`, `orvos_mentotiszt_ures`, `foapolo_szervezett`, `foapolo_betoltott`, `foapolo_ures`, `mentoapolo_szervezett`, `mentoapolo_betoltott`, `mentoapolo_ures`, `mentoapolo_osszes_szervezett`, `mentoapolo_osszes_betoltott`, `mentoapolo_osszes_ures`, `allomasvezeto_szervezett`, `allomasvezeto_betoltott`, `allomasvezeto_ures`, `ICS_vezeto_szervezett`, `ICS_vezeto_betoltott`, `ICS_vezeto_ures`, `mentotiszt_szervezett`, `mentotiszt_betoltott`, `mentotiszt_ures`, `mentoapolo2_szervezett`, `mentoapolo2_betoltott`, `mentoapolo2_ures`, `apolo_szervezett`, `apolo_betoltott`, `apolo_ures`, `szolgalatvezeto_szervezett`, `szolgalatvezeto_betoltott`, `szolgalatvezeto_ures`, `apolo2_szervezett`, `apolo2_betoltott`, `apolo2_ures`, `uzemgazdasz_szervezett`, `uzemgazdasz_betoltott`, `uzemgazdasz_ures`, `uzemmernok_szervezett`, `uzemmernok_betoltott`, `uzemmernok_ures`, `oktatas_szervezo_szervezett`, `oktatas_szervezo_betoltott`, `oktatas_szervezo_ures`, `ugyintezo_szervezett`, `ugyintezo_betoltott`, `ugyintezo_ures`, `adminisztrator_szervezett`, `adminisztrator_betoltott`, `adminisztrator_ures`, `adatrogzito_szervezett`, `adatrogzito_betoltott`, `adatrogzito_ures`, `autoszerelo_szakmunkas_szervezett`, `autoszerelo_szakmunkas_betoltott`, `autoszerelo_szakmunkas_ures`, `karbantarto_szervezett`, `karbantarto_betoltott`, `karbantarto_ures`, `kazanfuto_szervezett`, `kazanfuto_betoltott`, `kazanfuto_ures`, `mentogepkocsivezeto_szervezett`, `mentogepkocsivezeto_betoltott`, `mentogepkocsivezeto_ures`, `muszaki_gondnok_szervezett`, `muszaki_gondnok_betoltott`, `muszaki_gondnok_ures`, `garazsmester_szervezett`, `garazsmester_betoltott`, `garazsmester_ures`, `szervezett_gkv_osszesen`, `betoltott_gkv_osszesen`, `ures_gkv_osszesen`, `szervezett_allashely_osszesen`, `betoltott_allashely_osszesen`, `ures_allashely_osszesen`) VALUES
	(1, 'Bük', '2022', 1, 1, 2, -1, 4, 5, -1, 7.03, 8, -0.97, 15, 11, 4, 13, 14.8, -1.8, 28, 25.8, 2.2, 19.84, 20, -0.16, 28, 23, 5, 25, 25.89, -0.89, 31, 29, 2, 31, 31.99, -0.99, 115, 109.88, 5.12, 37, 38, -1, 40, 41, -1, 43, 44, -1, 46, 47, -1, 49, 50, -1, 52, 53, -1, 55, 56, -1, 58, 59, -1, 61, 62, -1, 64, 65, -1, 67, 68, -1, 70, 71, -1, 73, 74, -1, 210, 213, -3, 265.87, 268.8, -2.93),
	(3, 'Lövő', '2022', 2, 100, 100.99, -0.99, 103, 104, -1, 106, 107, -1, 109, 110, -1, 112, 113, -1, 221, 223, -2, 118, 119, -1, 121, 122, -1, 124, 125, -1, 127, 128, -1, 130, 131, -1, 502, 506, -4, 136, 137, -1, 139, 140, -1, 142, 143, -1, 145, 146, -1, 148, 149, -1, 151, 152, -1, 154, 155, -1, 157, 158, -1, 160, 161, -1, 163, 164, -1, 166, 167, -1, 169, 170, -1, 172, 173, -1, 507, 510, -3, 1052, 1059.99, -7.99),
	(6, 'Lenti', '2023', 3, 100, 101, -1, 103, 104, -1, 106, 107, -1, 109, 110, -1, 112, 113, -1, 221, 223, -2, 118, 119, -1, 121, 122, -1, 124, 125, -1, 127, 128, -1, 130, 131, -1, 502, 506, -4, 136, 137, -1, 139, 140, -1, 142, 143, -1, 145, 146, -1, 148, 149, -1, 151, 152, -1, 154, 155, -1, 157, 158, -1, 160, 161, -1, 163, 164, -1, 166, 167, -1, 169, 170, -1, 172, 173, -1, 507, 510, -3, 614, 619, -5),
	(7, 'Győr', '2022', 4, 4.8, 0.25, 4.55, 0, 0, 0, 2.4, 8.5, -6.1, 0.35, 0.35, 0, 20.6, 20.15, 0.45, 20.95, 20.5, 0.45, 0.5, 0.5, 0, 0.33, 0.33, 0, 0, 0, 0, 15, 15.67, -0.67, 5.45, 5, 0.45, 20.78, 21, -0.22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20.6, 20.65, -0.05, 0, 0, 0, 0.35, 0.35, 0, 20.95, 21, -0.05, 49.6, 50.75, -1.15);

-- Struktúra mentése tábla lamafelhasznalok. allomasok
DROP TABLE IF EXISTS `allomasok`;
CREATE TABLE IF NOT EXISTS `allomasok` (
  `sorszam` int NOT NULL,
  `nev` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL DEFAULT '',
  `megye_id` int DEFAULT '0',
  `vezeto` int unsigned DEFAULT NULL,
  PRIMARY KEY (`nev`) USING BTREE,
  KEY `megye_id` (`megye_id`),
  KEY `vezeto_ivir` (`vezeto`),
  CONSTRAINT `megye_id` FOREIGN KEY (`megye_id`) REFERENCES `megyek` (`ID`),
  CONSTRAINT `vezeto_ivir` FOREIGN KEY (`vezeto`) REFERENCES `users` (`IVIR`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.allomasok: ~26 rows (hozzávetőleg)
INSERT INTO `allomasok` (`sorszam`, `nev`, `megye_id`, `vezeto`) VALUES
	(9, 'Bük', 1, 121313),
	(10, 'Celldömölk', 1, 123456),
	(1, 'Csorna', 2, 121212),
	(2, 'Győr', 2, 121212),
	(3, 'Kapuvár', 2, 121212),
	(19, 'Keszthely', 3, 121212),
	(11, 'Körmend', 1, 121212),
	(12, 'Kőszeg', 1, 121212),
	(20, 'Lenti', 3, 123456),
	(21, 'Letenye', 3, 123456),
	(4, 'Lövő', 2, 121313),
	(5, 'Mosonmagyaróvár', 2, 121212),
	(22, 'Nagykanizsa', 3, 123456),
	(13, 'Őriszentpéter', 1, 121212),
	(23, 'Pacsa', 3, 121313),
	(6, 'Pannonhalma', 2, 121313),
	(14, 'Répcelak', 1, 123456),
	(15, 'Sárvár', 1, 121212),
	(7, 'Sopron', 2, 121212),
	(16, 'Szentgotthárd', 1, 121212),
	(17, 'Szombathely', 1, 121313),
	(8, 'Tét', 2, 121212),
	(18, 'Vasvár', 1, 121313),
	(24, 'Zalaegerszeg', 3, 123456),
	(26, 'Zalakaros', 3, 121313),
	(25, 'Zalaszentgrót', 3, 123456);

-- Struktúra mentése tábla lamafelhasznalok. belso_ell
DROP TABLE IF EXISTS `belso_ell`;
CREATE TABLE IF NOT EXISTS `belso_ell` (
  `ell_azon` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `ell_iktszam` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `ell_szerv` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `ell_targya` varchar(300) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `intezkedest_igenylo_megall` varchar(2000) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `ell_javaslat` varchar(2000) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `javaslat_alapjan_eloirt_int` varchar(2000) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `int_terv_iktszama` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `int_terv_jovahagyas_datuma` date NOT NULL,
  `felelos_beosztas` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `felelos_szerv_egyseg` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `int_vegrehajt_hatarido` date NOT NULL,
  `hatarido_mod_1` tinyint unsigned NOT NULL,
  `hatarido_mod_2` date DEFAULT NULL,
  `feladat_mod_1` tinyint unsigned NOT NULL,
  `feladat_mod_2` varchar(2000) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `int_teljesites_1` tinyint unsigned NOT NULL,
  `int_teljesites_2` date DEFAULT NULL,
  `megtett_int` varchar(2000) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `hatidoben_vegre_nem_hajt_int_oka` varchar(2000) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `nem_telj_kapcsan_tett_lepesek` varchar(2000) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `megjegyzes` varchar(2000) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  PRIMARY KEY (`ell_azon`) USING BTREE,
  KEY `FK_belso_ell_allomasok_(ellenorzott)` (`ell_szerv`),
  KEY `FK_FK_belso_ell_allomasok_(felelos)` (`felelos_szerv_egyseg`),
  CONSTRAINT `FK_belso_ell_allomasok_(ellenorzott)` FOREIGN KEY (`ell_szerv`) REFERENCES `allomasok` (`nev`),
  CONSTRAINT `FK_FK_belso_ell_allomasok_(felelos)` FOREIGN KEY (`felelos_szerv_egyseg`) REFERENCES `allomasok` (`nev`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.belso_ell: ~4 rows (hozzávetőleg)
INSERT INTO `belso_ell` (`ell_azon`, `ell_iktszam`, `ell_szerv`, `ell_targya`, `intezkedest_igenylo_megall`, `ell_javaslat`, `javaslat_alapjan_eloirt_int`, `int_terv_iktszama`, `int_terv_jovahagyas_datuma`, `felelos_beosztas`, `felelos_szerv_egyseg`, `int_vegrehajt_hatarido`, `hatarido_mod_1`, `hatarido_mod_2`, `feladat_mod_1`, `feladat_mod_2`, `int_teljesites_1`, `int_teljesites_2`, `megtett_int`, `hatidoben_vegre_nem_hajt_int_oka`, `nem_telj_kapcsan_tett_lepesek`, `megjegyzes`) VALUES
	('2022-1', '1-1/2022', 'Szombathely', 'teszt tárgy', 'teszt megállapítás', 'teszt javaslat', 'teszt intézkedés', '1-2/2022', '2022-04-05', 'állomásvezető', 'Szombathely', '2022-06-30', 1, '2022-08-31', 1, 'teszt módosítás', 1, '2022-08-25', 'teszt intézkedések', NULL, NULL, 'teszt megjegyzés'),
	('2022-2', '2-1/2022', 'Celldömölk', 'teszt2 tárgy', 'teszt2 megállapítás', 'teszt2 javaslat', 'teszt2 intézkedés', '2-2/2022', '2022-04-27', 'vezető', 'Celldömölk', '2022-07-02', 0, NULL, 1, 'teszt2 feladat módosítás', 0, NULL, 'teszt2 intézkedések', NULL, NULL, 'teszt2 megjegyzések'),
	('2022-3', '3-1/2022', 'Zalaegerszeg', 'teszt2 tárgy', 'teszt2 megállapítás', 'teszt2 javaslat', 'teszt2 intézkedés', '3-2/2022', '2022-04-30', 'vezető', 'Zalaegerszeg', '2022-06-29', 0, NULL, 1, 'teszt2 feladat módosítás', 0, NULL, 'teszt2 intézkedések', NULL, NULL, 'teszt2 megjegyzések'),
	('2022-4', '4-1/2022', 'Mosonmagyaróvár', 'teszt tárgy', 'teszt megállapítás', 'teszt javaslat', 'teszt intézkedés', '1-2/2022', '2022-05-03', 'állomásvezető', 'Mosonmagyaróvár', '2022-07-10', 1, '2022-09-01', 0, '', 1, '2022-08-22', 'teszt intézkedések', NULL, NULL, 'teszt megjegyzés');

-- Struktúra mentése tábla lamafelhasznalok. beszerzesek
DROP TABLE IF EXISTS `beszerzesek`;
CREATE TABLE IF NOT EXISTS `beszerzesek` (
  `mentoallomas` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `targy` varchar(300) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `besz_igeny_datum` date NOT NULL,
  `ajanlat_bekeres` date NOT NULL,
  `engedelyezesre_kuldve` date NOT NULL,
  `engedely_beerkezese` date NOT NULL,
  `megrendelo_kiallitasa` date NOT NULL,
  `megrendelo_szama` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `megrend_alairasra_tovabbitva` date NOT NULL,
  `alairt_megrend_beerkezese` date NOT NULL,
  `dijbekero_tovabbitasa` date NOT NULL,
  `munkalap_kiallitasa` date NOT NULL,
  `szamla_kiallitasa` date NOT NULL,
  `szamla_tovább_pu_nek_utalasra` date NOT NULL,
  `partnerID` int NOT NULL,
  PRIMARY KEY (`megrendelo_szama`) USING BTREE,
  KEY `FK_beszerzesek_partnerek` (`partnerID`),
  KEY `FK_beszerzesek_allomasok` (`mentoallomas`) USING BTREE,
  CONSTRAINT `FK_beszerzesek_allomasok` FOREIGN KEY (`mentoallomas`) REFERENCES `allomasok` (`nev`),
  CONSTRAINT `FK_beszerzesek_partnerek` FOREIGN KEY (`partnerID`) REFERENCES `partnerek` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.beszerzesek: ~12 rows (hozzávetőleg)
INSERT INTO `beszerzesek` (`mentoallomas`, `targy`, `besz_igeny_datum`, `ajanlat_bekeres`, `engedelyezesre_kuldve`, `engedely_beerkezese`, `megrendelo_kiallitasa`, `megrendelo_szama`, `megrend_alairasra_tovabbitva`, `alairt_megrend_beerkezese`, `dijbekero_tovabbitasa`, `munkalap_kiallitasa`, `szamla_kiallitasa`, `szamla_tovább_pu_nek_utalasra`, `partnerID`) VALUES
	('Győr', 'gyógyszer', '2022-12-06', '2022-12-06', '2022-12-08', '2022-12-08', '2022-12-09', '1-2022', '2022-12-10', '2022-12-12', '2022-12-13', '2022-12-14', '2022-12-16', '2022-12-17', 3),
	('Nagykanizsa', 'gyógyszer, infúzió', '2022-12-28', '2022-12-29', '2022-12-30', '2022-12-31', '2023-01-01', '1-2023', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05', '2023-01-05', '2023-01-06', 3),
	('Csorna', 'üzemanyag', '2022-12-27', '2022-12-28', '2022-12-29', '2022-12-30', '2022-12-31', '13-2023', '2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05', '2023-01-06', 3),
	('Mosonmagyaróvár', 'üzemanyag', '2022-12-10', '2022-12-11', '2022-12-12', '2022-12-18', '2022-12-19', '15-2022', '2022-12-27', '2022-12-27', '2022-12-28', '2022-12-28', '2022-12-29', '2022-12-29', 2),
	('Mosonmagyaróvár', 'fertőtlenítőszer', '2022-12-12', '2022-12-14', '2022-12-16', '2022-12-17', '2022-12-20', '16-2022', '2022-12-29', '2022-12-29', '2022-12-30', '2022-12-30', '2022-12-31', '2022-12-31', 2),
	('Lövő', 'kötszer', '2022-12-07', '2022-12-08', '2022-12-09', '2022-12-09', '2022-12-10', '2-2022', '2022-12-11', '2022-12-13', '2022-12-13', '2022-12-15', '2022-12-17', '2022-12-18', 1),
	('Nagykanizsa', 'gyógyszer, infúzió', '2022-12-28', '2022-12-29', '2022-12-30', '2022-12-31', '2023-01-01', '2-2023', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05', '2023-01-06', '2023-01-07', 3),
	('Nagykanizsa', 'mentőautó', '2022-12-05', '2022-12-06', '2022-12-20', '2022-12-29', '2022-12-31', '2022-85', '2023-01-25', '2023-01-23', '2023-01-19', '2023-01-27', '2023-01-01', '2023-01-01', 2),
	('Sopron', 'munkaruha', '2022-12-01', '2022-12-06', '2022-12-07', '2022-12-10', '2022-12-15', '23-2022', '2022-12-18', '2022-12-19', '2022-12-20', '2022-12-20', '2022-12-22', '2022-12-23', 3),
	('Őriszentpéter', 'védőruha', '2022-12-01', '2022-12-02', '2022-12-04', '2022-12-06', '2022-12-07', '3-2022', '2022-12-11', '2022-12-14', '2022-12-15', '2022-12-16', '2022-12-16', '2022-12-17', 2),
	('Őriszentpéter', 'maszk', '2022-12-01', '2022-12-04', '2022-12-06', '2022-12-08', '2022-12-10', '4-2022', '2022-12-12', '2022-12-12', '2022-12-13', '2022-12-17', '2022-12-17', '2022-12-19', 2),
	('Lövő', 'kesztyű', '2022-12-10', '2022-12-12', '2022-12-14', '2022-12-15', '2022-12-17', '5-2022', '2022-12-18', '2022-12-19', '2022-12-20', '2022-12-20', '2022-12-21', '2022-12-22', 3);

-- Struktúra mentése tábla lamafelhasznalok. dolgozok
DROP TABLE IF EXISTS `dolgozok`;
CREATE TABLE IF NOT EXISTS `dolgozok` (
  `vezetek_nev` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `kereszt_nev` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `IVIR` int unsigned NOT NULL,
  `torzsszam` int unsigned NOT NULL,
  `adoazonosito` bigint unsigned NOT NULL,
  `ir_szam` int unsigned NOT NULL,
  `varos` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `kozterulet` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `kozterulet_jellege` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `hazszam` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `epulet_emelet_ajto` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `ceges_email` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `telefon` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `allomas` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL DEFAULT '',
  `munkakorID` int NOT NULL,
  PRIMARY KEY (`IVIR`),
  UNIQUE KEY `torzsszam` (`torzsszam`),
  UNIQUE KEY `adoazonosito` (`adoazonosito`),
  KEY `FK_dolgozok_munkakorok` (`munkakorID`),
  KEY `FK_dolgozok_allomasok` (`allomas`),
  CONSTRAINT `FK_dolgozok_allomasok` FOREIGN KEY (`allomas`) REFERENCES `allomasok` (`nev`),
  CONSTRAINT `FK_dolgozok_munkakorok` FOREIGN KEY (`munkakorID`) REFERENCES `munkakorok` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.dolgozok: ~4 rows (hozzávetőleg)
INSERT INTO `dolgozok` (`vezetek_nev`, `kereszt_nev`, `IVIR`, `torzsszam`, `adoazonosito`, `ir_szam`, `varos`, `kozterulet`, `kozterulet_jellege`, `hazszam`, `epulet_emelet_ajto`, `ceges_email`, `telefon`, `allomas`, `munkakorID`) VALUES
	('Takács', 'Zsófia', 123123, 145236789, 8987654321, 9500, 'Celldömölk', 'Dr. Géfin Lajos', 'tér', '20.', '1. em. 3.ajtó', 'zsofia@ceg.hu', '06 70 123 45 97', 'Celldömölk', 5),
	('Fehér', 'András', 222222, 541236947, 8455123789, 9023, 'Győr', 'Kodály Zoltán', 'utca', '12', 'B. ép. 1. em. 15. ajtó', 'peter@ceg.hu', '06 20 478 36 14', 'Győr', 1),
	('Vajda', 'Adrienn', 333332, 271236941, 8451237897, 9700, 'Szombathely', 'Kodály Zoltán', 'utca', '10', NULL, 'adrienn@ceg.hu', '06 30 488 26 99', 'Szombathely', 6),
	('Szabó', 'Máté', 454545, 154832675, 8156123712, 9600, 'Sárvár', 'Batthyány', 'utca', '18.', NULL, 'mate@ceg.hu', '06 30 145 14 15', 'Sárvár', 5);

-- Struktúra mentése tábla lamafelhasznalok. gk_tipusok
DROP TABLE IF EXISTS `gk_tipusok`;
CREATE TABLE IF NOT EXISTS `gk_tipusok` (
  `gk_tipus` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `ktg` int unsigned NOT NULL,
  PRIMARY KEY (`gk_tipus`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.gk_tipusok: ~5 rows (hozzávetőleg)
INSERT INTO `gk_tipusok` (`gk_tipus`, `ktg`) VALUES
	('Eset', 300),
	('Mgk', 250),
	('MOK', 220),
	('Roko', 300),
	('TBE', 300);

-- Struktúra mentése tábla lamafelhasznalok. kulso_ell
DROP TABLE IF EXISTS `kulso_ell`;
CREATE TABLE IF NOT EXISTS `kulso_ell` (
  `ellenorzest_vegzoID` int NOT NULL,
  `ell_azon` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `ell_iktszam` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `ell_szerv` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `kapcsolattarto_neve` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `kapcsolattarto_tel` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `ell_targya` varchar(300) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `intezkedest_igenylo_megall` varchar(2000) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `ell_javaslat` varchar(2000) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `javaslat_alapjan_eloirt_int` varchar(2000) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `int_terv_iktszama` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `int_terv_jovahagyas_datuma` date NOT NULL,
  `felelos_beosztas` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `felelos_szerv_egyseg` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `int_vegrehajt_hatarido` date NOT NULL,
  `hatarido_mod_1` tinyint unsigned NOT NULL,
  `hatarido_mod_2` date DEFAULT NULL,
  `feladat_mod_1` tinyint unsigned NOT NULL,
  `feladat_mod_2` varchar(2000) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `int_teljesites_1` tinyint unsigned NOT NULL,
  `int_teljesites_2` date DEFAULT NULL,
  `megtett_int` varchar(2000) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `hatidoben_vegre_nem_hajt_int_oka` varchar(2000) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `nem_telj_kapcsan_tett_lepesek` varchar(2000) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `megjegyzes` varchar(2000) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  PRIMARY KEY (`ell_azon`) USING BTREE,
  KEY `FK_kulso_ell_allomasok_(ellenorzott)` (`ell_szerv`),
  KEY `FK_FK_kulso_ell_allomasok_(felelos)` (`felelos_szerv_egyseg`),
  KEY `FK_kulso_ell_kulso_ellenorok` (`ellenorzest_vegzoID`),
  CONSTRAINT `FK_FK_kulso_ell_allomasok_(felelos)` FOREIGN KEY (`felelos_szerv_egyseg`) REFERENCES `allomasok` (`nev`),
  CONSTRAINT `FK_kulso_ell_allomasok_(ellenorzott)` FOREIGN KEY (`ell_szerv`) REFERENCES `allomasok` (`nev`),
  CONSTRAINT `FK_kulso_ell_kulso_ellenorok` FOREIGN KEY (`ellenorzest_vegzoID`) REFERENCES `kulso_ellenorok` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.kulso_ell: ~2 rows (hozzávetőleg)
INSERT INTO `kulso_ell` (`ellenorzest_vegzoID`, `ell_azon`, `ell_iktszam`, `ell_szerv`, `kapcsolattarto_neve`, `kapcsolattarto_tel`, `ell_targya`, `intezkedest_igenylo_megall`, `ell_javaslat`, `javaslat_alapjan_eloirt_int`, `int_terv_iktszama`, `int_terv_jovahagyas_datuma`, `felelos_beosztas`, `felelos_szerv_egyseg`, `int_vegrehajt_hatarido`, `hatarido_mod_1`, `hatarido_mod_2`, `feladat_mod_1`, `feladat_mod_2`, `int_teljesites_1`, `int_teljesites_2`, `megtett_int`, `hatidoben_vegre_nem_hajt_int_oka`, `nem_telj_kapcsan_tett_lepesek`, `megjegyzes`) VALUES
	(1, '2022-1', '1-1/2022', 'Győr', 'Oszkó Dominik', '06 94 415 257', 'teszt tárgy', 'teszt megállapítás', 'teszt javaslat', 'teszt intézkedés', '1-2/2022', '2022-04-05', 'állomásvezető', 'Győr', '2022-06-30', 1, '2022-08-31', 1, 'teszt módosítás', 1, '2022-08-25', 'teszt intézkedés', NULL, NULL, 'teszt megjegyzés'),
	(3, '2022-2', '2-1/2022', 'Pacsa', 'Kiss Zoé', '06 92 125 599', 'cím', 'megállapítás', 'javaslat', 'intézkedés', '2-2/2022', '2022-01-19', 'vezető', 'Pacsa', '2022-04-13', 0, NULL, 1, 'feladat módosítás', 1, '2022-04-27', 'megtett intézkedések', 'ok', NULL, 'megjegyzés');

-- Struktúra mentése tábla lamafelhasznalok. kulso_ellenorok
DROP TABLE IF EXISTS `kulso_ellenorok`;
CREATE TABLE IF NOT EXISTS `kulso_ellenorok` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `nev` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `ir_szam` int unsigned DEFAULT NULL,
  `varos` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `kozterulet` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `kozt_jellege` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `hazszam` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `epulet_emelet_ajto` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `helyrazi_szam` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `telefon` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `kontakt_szemely` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.kulso_ellenorok: ~2 rows (hozzávetőleg)
INSERT INTO `kulso_ellenorok` (`ID`, `nev`, `ir_szam`, `varos`, `kozterulet`, `kozt_jellege`, `hazszam`, `epulet_emelet_ajto`, `helyrazi_szam`, `email`, `telefon`, `kontakt_szemely`) VALUES
	(1, 'Vas Megyei Kormányhivatal Sárvári Járási Hivatal Járási Népegészségügyi Intézete', 9600, 'Sárvár', 'Várkerület', NULL, '4.', NULL, NULL, 'titkarsag.sarvar@nydr.antsz.hu', '06 95 320 277', 'Szalai Márton'),
	(3, 'Állami Számvevőszék', 1052, 'Budapest', 'Apáczai Cs. J.', 'utca', '10.', NULL, NULL, 'szamvevoszek@asz.hu', '06 1 484 9100', 'Takács Bence');

-- Struktúra mentése tábla lamafelhasznalok. letszam
DROP TABLE IF EXISTS `letszam`;
CREATE TABLE IF NOT EXISTS `letszam` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `mentoallomas` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `ev` year NOT NULL,
  `negyedev` int unsigned NOT NULL,
  `kivon_all_szevezett` int unsigned NOT NULL,
  `kivon_all_betoltott` int unsigned NOT NULL,
  `mentesiranyitas_szervezett` int unsigned NOT NULL,
  `mentesiranyitas_betoltott` int unsigned NOT NULL,
  `betegszall_szervezett` int unsigned NOT NULL,
  `betegszall_betoltott` int unsigned NOT NULL,
  `orvos_mentotiszt` int unsigned NOT NULL,
  `apolo` int unsigned NOT NULL,
  `mentesiranyitasban_dolg` int unsigned NOT NULL,
  `mentogkvezeto` int unsigned NOT NULL,
  `betegszall_iranyitasban_dolg` int unsigned NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `mentoallomas` (`mentoallomas`,`ev`,`negyedev`),
  CONSTRAINT `FK_letszam_allomasok` FOREIGN KEY (`mentoallomas`) REFERENCES `allomasok` (`nev`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.letszam: ~0 rows (hozzávetőleg)

-- Struktúra mentése tábla lamafelhasznalok. megyek
DROP TABLE IF EXISTS `megyek`;
CREATE TABLE IF NOT EXISTS `megyek` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `megye_nev` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.megyek: ~3 rows (hozzávetőleg)
INSERT INTO `megyek` (`ID`, `megye_nev`) VALUES
	(1, 'Vas'),
	(2, 'Győr-Moson-Sopron'),
	(3, 'Zala');

-- Struktúra mentése tábla lamafelhasznalok. migransellatas
DROP TABLE IF EXISTS `migransellatas`;
CREATE TABLE IF NOT EXISTS `migransellatas` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `megyeID` int NOT NULL,
  `ev` year NOT NULL,
  `honap` int unsigned NOT NULL,
  `fo` int unsigned NOT NULL,
  `megtett_km` int unsigned NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `megyeID` (`megyeID`,`ev`,`honap`),
  CONSTRAINT `FK_migrans_ellatas_megyek` FOREIGN KEY (`megyeID`) REFERENCES `megyek` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.migransellatas: ~9 rows (hozzávetőleg)
INSERT INTO `migransellatas` (`ID`, `megyeID`, `ev`, `honap`, `fo`, `megtett_km`) VALUES
	(1, 1, '2022', 1, 20, 2000),
	(2, 2, '2022', 1, 30, 2500),
	(3, 3, '2022', 1, 45, 2999),
	(4, 1, '2022', 2, 35, 3000),
	(5, 2, '2022', 2, 44, 2898),
	(6, 3, '2022', 2, 45, 3898),
	(10, 2, '2022', 3, 58, 7021),
	(11, 3, '2023', 3, 78, 5714),
	(12, 1, '2022', 3, 89, 7899);

-- Struktúra mentése tábla lamafelhasznalok. mozgoorseg
DROP TABLE IF EXISTS `mozgoorseg`;
CREATE TABLE IF NOT EXISTS `mozgoorseg` (
  `megrendeloID` int NOT NULL,
  `szerzodesszam` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `rendezveny_neve` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `rendezveny_datuma` date NOT NULL,
  `rendezveny_helye` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `mentoallomas` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `roko` int unsigned NOT NULL,
  `eset` int unsigned NOT NULL,
  `mentogk` int unsigned NOT NULL,
  `gyalogorseg` int unsigned NOT NULL,
  `bevetel` int unsigned NOT NULL,
  `koltseg` int unsigned NOT NULL,
  `maradvany` int unsigned NOT NULL,
  PRIMARY KEY (`szerzodesszam`),
  KEY `FK_mozgoorseg_partnerek` (`megrendeloID`),
  KEY `FK_mozgoorseg_allomasok` (`mentoallomas`),
  CONSTRAINT `FK_mozgoorseg_allomasok` FOREIGN KEY (`mentoallomas`) REFERENCES `allomasok` (`nev`),
  CONSTRAINT `FK_mozgoorseg_partnerek` FOREIGN KEY (`megrendeloID`) REFERENCES `partnerek` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.mozgoorseg: ~0 rows (hozzávetőleg)

-- Struktúra mentése tábla lamafelhasznalok. munkakorok
DROP TABLE IF EXISTS `munkakorok`;
CREATE TABLE IF NOT EXISTS `munkakorok` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `munkakor` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `alapber` int DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.munkakorok: ~9 rows (hozzávetőleg)
INSERT INTO `munkakorok` (`ID`, `munkakor`, `alapber`) VALUES
	(1, 'mentőtechnikus', 350000),
	(2, 'mentőgépkocsi vezető', 310000),
	(3, 'mentőápoló', 325000),
	(4, 'adminisztrátor', 300000),
	(5, 'ügyintéző', 290000),
	(6, 'szakorvos', 600000),
	(7, 'orvos', 500000),
	(8, 'adatrögzítő', 260000),
	(9, 'állomásvezető', 650000);

-- Struktúra mentése tábla lamafelhasznalok. partnerek
DROP TABLE IF EXISTS `partnerek`;
CREATE TABLE IF NOT EXISTS `partnerek` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `nev` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `ir_szam` int unsigned NOT NULL,
  `varos` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `kozterulet` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `kozt_jellege` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `hazszam` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `epulet_emelet_ajto` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `helyrazi_szam` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `telefon` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `adoszam` varchar(13) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `adoszam` (`adoszam`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb3;

-- Tábla adatainak mentése lamafelhasznalok.partnerek: ~3 rows (hozzávetőleg)
INSERT INTO `partnerek` (`ID`, `nev`, `ir_szam`, `varos`, `kozterulet`, `kozt_jellege`, `hazszam`, `epulet_emelet_ajto`, `helyrazi_szam`, `email`, `telefon`, `adoszam`) VALUES
	(1, 'TESCO-GLOBAL Áruházak Zrt.', 2040, 'Budaörs', 'Kinizsi', 'út', '1-3.', NULL, NULL, 'tescoglobalzrt@hu.tesco-europe.com', NULL, '10307078-2-44'),
	(2, 'ALDI Magyarország Élelmiszer Bt.', 2051, 'Biatorbágy', 'Mészárosok ', 'útja', '2.', NULL, NULL, 'ugyvezetes@aldi.hu', '06 23 504 680', '22234663-2-44'),
	(3, 'Gyógyszertár Depó Kft.', 4400, 'Nyíregyháza', 'Csaló', 'köz', '2', NULL, NULL, 'gorgenyi.jan@gmail.com', '06 30 303 3589', '24338165-2-15');

-- Struktúra mentése tábla lamafelhasznalok. terites_nelkuli_rend
DROP TABLE IF EXISTS `terites_nelkuli_rend`;
CREATE TABLE IF NOT EXISTS `terites_nelkuli_rend` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `dolgozok_IVIR` int unsigned NOT NULL,
  `helyszin` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `elnevezes` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `datum` date NOT NULL,
  `idopont` time NOT NULL,
  `telj_ora` int unsigned NOT NULL,
  `alapber` int unsigned NOT NULL,
  `alapber_1_orara` double unsigned NOT NULL,
  `100_szazalekos` int unsigned NOT NULL,
  `20_szazalekos` int unsigned NOT NULL,
  `50_szazalekos` int unsigned NOT NULL,
  `potlek_osszeg` int unsigned NOT NULL,
  `ber_plusz_potlek` int unsigned NOT NULL,
  `oradijas_osszeg` int unsigned NOT NULL,
  `osszes_ber` int unsigned NOT NULL,
  `tb_jarulek` double unsigned NOT NULL,
  `berkoltseg_osszesen` double unsigned NOT NULL,
  `teljesitett_km` int unsigned NOT NULL,
  `km_ktg` int unsigned NOT NULL,
  `elszamolas` int unsigned NOT NULL,
  `gk` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_terites_nelkuli_rend_dolgozok` (`dolgozok_IVIR`),
  KEY `FK_terites_nelkuli_rend_gk_tipusok` (`gk`),
  CONSTRAINT `FK_terites_nelkuli_rend_dolgozok` FOREIGN KEY (`dolgozok_IVIR`) REFERENCES `dolgozok` (`IVIR`),
  CONSTRAINT `FK_terites_nelkuli_rend_gk_tipusok` FOREIGN KEY (`gk`) REFERENCES `gk_tipusok` (`gk_tipus`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.terites_nelkuli_rend: ~0 rows (hozzávetőleg)

-- Struktúra mentése tábla lamafelhasznalok. tulorak
DROP TABLE IF EXISTS `tulorak`;
CREATE TABLE IF NOT EXISTS `tulorak` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `mentoallomas` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `ev` year NOT NULL,
  `honap` int unsigned NOT NULL,
  `ment_fel_miatti_tulora` int unsigned NOT NULL,
  `egyeb_tulora` int unsigned NOT NULL,
  `orvos_mentotiszt` int unsigned NOT NULL,
  `apolo` int unsigned NOT NULL,
  `mentesiranyitasban_dolg` int unsigned NOT NULL,
  `mentogkvezeto` int unsigned NOT NULL,
  `betegszall_iranyitasban_dolg` int unsigned NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `mentoallomas` (`mentoallomas`,`ev`,`honap`),
  CONSTRAINT `FK_tulorak_allomasok` FOREIGN KEY (`mentoallomas`) REFERENCES `allomasok` (`nev`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.tulorak: ~0 rows (hozzávetőleg)

-- Struktúra mentése tábla lamafelhasznalok. users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `IVIR` int unsigned NOT NULL,
  `Vezetek_nev` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL DEFAULT '',
  `Kereszt_nev` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL DEFAULT '',
  `Jelszo` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL DEFAULT '',
  `Vas` int NOT NULL DEFAULT '0',
  `Gyor` int NOT NULL DEFAULT '0',
  `Zala` int NOT NULL DEFAULT '0',
  `Admin` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`IVIR`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.users: ~4 rows (hozzávetőleg)
INSERT INTO `users` (`IVIR`, `Vezetek_nev`, `Kereszt_nev`, `Jelszo`, `Vas`, `Gyor`, `Zala`, `Admin`) VALUES
	(121212, 'Horváth', 'Máté', 'sf', 0, 1, 0, 0),
	(121313, 'Kovács', 'Anita', 'cvv', 1, 0, 0, 1),
	(123456, 'Szabó', 'János', '1111', 1, 0, 0, 1),
	(654321, 'Nagy', 'Hanna', '123456789', 0, 0, 1, 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
