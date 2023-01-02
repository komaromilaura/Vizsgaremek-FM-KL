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
  `mentoallomas` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `ev` year NOT NULL,
  `ho` int unsigned NOT NULL,
  `szakorvos_szervezett` int unsigned NOT NULL,
  `szakorvos_betoltott` int unsigned NOT NULL,
  `szakorvos_ures` int unsigned NOT NULL,
  `vezeto_mentotiszt_szervezett` int unsigned NOT NULL,
  `vezeto_mentotiszt_betoltott` int unsigned NOT NULL,
  `vezeto_mentotiszt_ures` int unsigned NOT NULL,
  `orvos_mentotiszt_szervezett` int unsigned NOT NULL,
  `orvos_mentotiszt_betoltott` int unsigned NOT NULL,
  `orvos_mentotiszt_ures` int unsigned NOT NULL,
  `foapolo_szervezett` int unsigned NOT NULL,
  `foapolo_betoltott` int unsigned NOT NULL,
  `foapolo_ures` int unsigned NOT NULL,
  `mentoapolo_szervezett` int unsigned NOT NULL,
  `mentoapolo_betoltott` int unsigned NOT NULL,
  `mentoapolo_ures` int unsigned NOT NULL,
  `mentoapolo_osszes_szervezett` int unsigned NOT NULL,
  `mentoapolo_osszes_betoltott` int unsigned NOT NULL,
  `mentoapolo_osszes_ures` int unsigned NOT NULL,
  `allomasvezeto_szervezett` int unsigned NOT NULL,
  `allomasvezeto_betoltott` int unsigned NOT NULL,
  `allomasvezeto_ures` int unsigned NOT NULL,
  `ICS_vezeto_szervezett` int unsigned NOT NULL,
  `ICS_vezeto_betoltott` int unsigned NOT NULL,
  `ICS_vezeto_ures` int unsigned NOT NULL,
  `mentotiszt_szervezett` int unsigned NOT NULL,
  `mentotiszt_betoltott` int unsigned NOT NULL,
  `mentotiszt_ures` int unsigned NOT NULL,
  `mentoapolo_szerv` int unsigned NOT NULL,
  `mentoapolo_betolt` int unsigned NOT NULL,
  `mentoapolo_ur` int unsigned NOT NULL,
  `apolo_szervezett` int unsigned NOT NULL,
  `apolo_betoltott` int unsigned NOT NULL,
  `apolo_ures` int unsigned NOT NULL,
  `szolgalatvezeto_szervezett` int unsigned NOT NULL,
  `szolgalatvezeto_betoltott` int unsigned NOT NULL,
  `szolgalatvezeto_ures` int unsigned NOT NULL,
  `apolo_szerv` int unsigned NOT NULL,
  `apolo_betolt` int unsigned NOT NULL,
  `apolo_ur` int unsigned NOT NULL,
  `uzemgazdasz_szervezett` int unsigned NOT NULL,
  `uzemgazdasz_betoltott` int unsigned NOT NULL,
  `uzemgazdasz_ures` int unsigned NOT NULL,
  `uzemmernok_szervezett` int unsigned NOT NULL,
  `uzemmernok_betoltott` int unsigned NOT NULL,
  `uzemmernok_ures` int unsigned NOT NULL,
  `oktatas_szervezo_szervezett` int unsigned NOT NULL,
  `oktatas_szervezo_betoltott` int unsigned NOT NULL,
  `oktatas_szervezo_ures` int unsigned NOT NULL,
  `ugyintezo_szervezett` int unsigned NOT NULL,
  `ugyintezo_betoltott` int unsigned NOT NULL,
  `ugyintezo_ures` int unsigned NOT NULL,
  `adminisztrator_szervezett` int unsigned NOT NULL,
  `adminisztrator_betoltott` int unsigned NOT NULL,
  `adminisztrator_ures` int unsigned NOT NULL,
  `adatrogzito_szervezett` int unsigned NOT NULL,
  `adatrogzito_betoltott` int unsigned NOT NULL,
  `adatrogzito_ures` int unsigned NOT NULL,
  `autoszerelo_szakmunkas_szervezett` int unsigned NOT NULL,
  `autoszerelo_szakmunkas_betoltott` int unsigned NOT NULL,
  `autoszerelo_szakmunkas_ures` int unsigned NOT NULL,
  `karbantarto_szervezett` int unsigned NOT NULL,
  `karbantarto_betoltott` int unsigned NOT NULL,
  `karbantarto_ures` int unsigned NOT NULL,
  `kazanfuto_szervezett` int unsigned NOT NULL,
  `kazanfuto_betoltott` int unsigned NOT NULL,
  `kazanfuto_ures` int unsigned NOT NULL,
  `mentogepkocsivezeto_szervezett` int unsigned NOT NULL,
  `mentogepkocsivezeto_betoltott` int unsigned NOT NULL,
  `mentogepkocsivezeto_ures` int unsigned NOT NULL,
  `muszaki_gondnok_szervezett` int unsigned NOT NULL,
  `muszaki_gondnok_betoltott` int unsigned NOT NULL,
  `muszaki_gondnok_ures` int unsigned NOT NULL,
  `garazsmester_szervezett` int unsigned NOT NULL,
  `garazsmester_betoltott` int unsigned NOT NULL,
  `garazsmester_ures` int unsigned NOT NULL,
  `szervezett_gkv_osszesen` int unsigned NOT NULL,
  `betoltott_gkv_osszesen` int unsigned NOT NULL,
  `ures_gkv_osszesen` int unsigned NOT NULL,
  `szervezett_allashely_osszesen` int unsigned NOT NULL,
  `betoltott_allashely_osszesen` int unsigned NOT NULL,
  `ures_allashely_osszesen` int unsigned NOT NULL,
  PRIMARY KEY (`mentoallomas`,`ev`,`ho`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.allashelyek: ~0 rows (hozzávetőleg)

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

-- Tábla adatainak mentése lamafelhasznalok.allomasok: ~9 rows (hozzávetőleg)
INSERT INTO `allomasok` (`sorszam`, `nev`, `megye_id`, `vezeto`) VALUES
	(22, 'asert', 2, 121212),
	(1, 'Győr', 2, 121212),
	(1, 'ksnfjks', 2, 121212),
	(6, 'ljkl', 2, 121313),
	(111, 'mi', 1, 121313),
	(11, 'Rádóc', 1, 121212),
	(3, 'Sárvár', 1, 121212),
	(2, 'Sopron', 1, 121212),
	(1, 'Szombathely', 1, 121313);

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

-- Tábla adatainak mentése lamafelhasznalok.belso_ell: ~0 rows (hozzávetőleg)

-- Struktúra mentése tábla lamafelhasznalok. beszerzesek
DROP TABLE IF EXISTS `beszerzesek`;
CREATE TABLE IF NOT EXISTS `beszerzesek` (
  `partnerID` int NOT NULL,
  `megrendelo_szama` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `megrend_alairasra_tovabbitva` date NOT NULL,
  `alairt_megrend_beerkezese` date NOT NULL,
  `dijbekero_tovabbitasa` date NOT NULL,
  `munkalap_kiallitasa` date NOT NULL,
  `szamla_kiallitasa` date NOT NULL,
  `szamla_tovább_pu_nek_utalasra` date NOT NULL,
  PRIMARY KEY (`megrendelo_szama`) USING BTREE,
  KEY `FK_beszerzesek_partnerek` (`partnerID`),
  CONSTRAINT `FK_beszerzesek_partnerek` FOREIGN KEY (`partnerID`) REFERENCES `partnerek` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.beszerzesek: ~9 rows (hozzávetőleg)
INSERT INTO `beszerzesek` (`partnerID`, `megrendelo_szama`, `megrend_alairasra_tovabbitva`, `alairt_megrend_beerkezese`, `dijbekero_tovabbitasa`, `munkalap_kiallitasa`, `szamla_kiallitasa`, `szamla_tovább_pu_nek_utalasra`) VALUES
	(1, '1-2022', '2022-12-10', '2022-12-12', '2022-12-13', '2022-12-14', '2022-12-16', '2022-12-17'),
	(2, '15/2022', '2022-12-27', '2022-12-27', '2022-12-28', '2022-12-28', '2022-12-29', '2022-12-29'),
	(2, '16/2022', '2022-12-29', '2022-12-29', '2022-12-30', '2022-12-30', '2022-12-31', '2022-12-31'),
	(1, '2-2022', '2022-12-11', '2022-12-13', '2022-12-13', '2022-12-15', '2022-12-17', '2022-12-18'),
	(2, '2022/85', '2023-01-25', '2023-01-23', '2023-01-19', '2023-01-27', '2023-01-01', '2023-01-01'),
	(2, '3-2022', '2022-12-11', '2022-12-14', '2022-12-15', '2022-12-16', '2022-12-16', '2022-12-17'),
	(2, '4-2022', '2022-12-12', '2022-12-12', '2022-12-13', '2022-12-17', '2022-12-17', '2022-12-19'),
	(3, '5-2022', '2022-12-18', '2022-12-19', '2022-12-20', '2022-12-20', '2022-12-21', '2022-12-22'),
	(3, '8491496', '2022-12-30', '2022-12-30', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05');

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

-- Tábla adatainak mentése lamafelhasznalok.dolgozok: ~0 rows (hozzávetőleg)

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

-- Tábla adatainak mentése lamafelhasznalok.kulso_ell: ~0 rows (hozzávetőleg)

-- Struktúra mentése tábla lamafelhasznalok. kulso_ellenorok
DROP TABLE IF EXISTS `kulso_ellenorok`;
CREATE TABLE IF NOT EXISTS `kulso_ellenorok` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `nev` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.kulso_ellenorok: ~0 rows (hozzávetőleg)

-- Struktúra mentése tábla lamafelhasznalok. letszam
DROP TABLE IF EXISTS `letszam`;
CREATE TABLE IF NOT EXISTS `letszam` (
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
  PRIMARY KEY (`mentoallomas`,`ev`,`negyedev`),
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
  `megyeID` int NOT NULL,
  `ev` year NOT NULL,
  `honap` int unsigned NOT NULL,
  `fo` int unsigned NOT NULL,
  `megtett_km` int unsigned NOT NULL,
  PRIMARY KEY (`megyeID`,`ev`,`honap`) USING BTREE,
  CONSTRAINT `FK_migrans_ellatas_megyek` FOREIGN KEY (`megyeID`) REFERENCES `megyek` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.migransellatas: ~0 rows (hozzávetőleg)

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.munkakorok: ~7 rows (hozzávetőleg)
INSERT INTO `munkakorok` (`ID`, `munkakor`, `alapber`) VALUES
	(1, 'mentőtechnikus', 350000),
	(2, 'mentőgépkocsi vezető', 310000),
	(3, 'mentőápoló', 325000),
	(4, 'adminisztrátor', 300000),
	(5, 'teszt', 232000),
	(6, 'ljl', 25),
	(7, 'orvos', 500000);

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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb3;

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
  PRIMARY KEY (`mentoallomas`,`ev`,`honap`),
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

-- Tábla adatainak mentése lamafelhasznalok.users: ~3 rows (hozzávetőleg)
INSERT INTO `users` (`IVIR`, `Vezetek_nev`, `Kereszt_nev`, `Jelszo`, `Vas`, `Gyor`, `Zala`, `Admin`) VALUES
	(121212, 'sfdgdg', 'df0', 'sf', 0, 1, 0, 0),
	(121313, 'dvxc', 'vccbxb', 'cvv', 1, 0, 0, 1),
	(123456, 'vuib', 'tzuggb', '1111', 1, 0, 0, 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
