-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Szerver verzió:               5.7.33 - MySQL Community Server (GPL)
-- Szerver OS:                   Win64
-- HeidiSQL Verzió:              11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Adatbázis struktúra mentése a lamafelhasznalok.
DROP DATABASE IF EXISTS `lamafelhasznalok`;
CREATE DATABASE IF NOT EXISTS `lamafelhasznalok` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci */;
USE `lamafelhasznalok`;

-- Struktúra mentése tábla lamafelhasznalok. admin
DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `IVIR` int(6) unsigned NOT NULL,
  `Password` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `Admin` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`IVIR`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.admin: ~0 rows (hozzávetőleg)
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` (`IVIR`, `Password`, `Admin`) VALUES
	(101301, '1212', 1);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

-- Struktúra mentése tábla lamafelhasznalok. allashelyek
DROP TABLE IF EXISTS `allashelyek`;
CREATE TABLE IF NOT EXISTS `allashelyek` (
  `mentoallomas` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `ev` year(4) NOT NULL,
  `ho` int(10) unsigned NOT NULL,
  `szakorvos_szervezett` int(10) unsigned NOT NULL,
  `szakorvos_betoltott` int(10) unsigned NOT NULL,
  `szakorvos_ures` int(10) unsigned NOT NULL,
  `vezeto_mentotiszt_szervezett` int(10) unsigned NOT NULL,
  `vezeto_mentotiszt_betoltott` int(10) unsigned NOT NULL,
  `vezeto_mentotiszt_ures` int(10) unsigned NOT NULL,
  `orvos_mentotiszt_szervezett` int(10) unsigned NOT NULL,
  `orvos_mentotiszt_betoltott` int(10) unsigned NOT NULL,
  `orvos_mentotiszt_ures` int(10) unsigned NOT NULL,
  `foapolo_szervezett` int(10) unsigned NOT NULL,
  `foapolo_betoltott` int(10) unsigned NOT NULL,
  `foapolo_ures` int(10) unsigned NOT NULL,
  `mentoapolo_szervezett` int(10) unsigned NOT NULL,
  `mentoapolo_betoltott` int(10) unsigned NOT NULL,
  `mentoapolo_ures` int(10) unsigned NOT NULL,
  `mentoapolo_osszes_szervezett` int(10) unsigned NOT NULL,
  `mentoapolo_osszes_betoltott` int(10) unsigned NOT NULL,
  `mentoapolo_osszes_ures` int(10) unsigned NOT NULL,
  `allomasvezeto_szervezett` int(10) unsigned NOT NULL,
  `allomasvezeto_betoltott` int(10) unsigned NOT NULL,
  `allomasvezeto_ures` int(10) unsigned NOT NULL,
  `ICS_vezeto_szervezett` int(10) unsigned NOT NULL,
  `ICS_vezeto_betoltott` int(10) unsigned NOT NULL,
  `ICS_vezeto_ures` int(10) unsigned NOT NULL,
  `mentotiszt_szervezett` int(10) unsigned NOT NULL,
  `mentotiszt_betoltott` int(10) unsigned NOT NULL,
  `mentotiszt_ures` int(10) unsigned NOT NULL,
  `mentoapolo_szerv` int(10) unsigned NOT NULL,
  `mentoapolo_betolt` int(10) unsigned NOT NULL,
  `mentoapolo_ur` int(10) unsigned NOT NULL,
  `apolo_szervezett` int(10) unsigned NOT NULL,
  `apolo_betoltott` int(10) unsigned NOT NULL,
  `apolo_ures` int(10) unsigned NOT NULL,
  `szolgalatvezeto_szervezett` int(10) unsigned NOT NULL,
  `szolgalatvezeto_betoltott` int(10) unsigned NOT NULL,
  `szolgalatvezeto_ures` int(10) unsigned NOT NULL,
  `apolo_szerv` int(10) unsigned NOT NULL,
  `apolo_betolt` int(10) unsigned NOT NULL,
  `apolo_ur` int(10) unsigned NOT NULL,
  `uzemgazdasz_szervezett` int(10) unsigned NOT NULL,
  `uzemgazdasz_betoltott` int(10) unsigned NOT NULL,
  `uzemgazdasz_ures` int(10) unsigned NOT NULL,
  `uzemmernok_szervezett` int(10) unsigned NOT NULL,
  `uzemmernok_betoltott` int(10) unsigned NOT NULL,
  `uzemmernok_ures` int(10) unsigned NOT NULL,
  `oktatas_szervezo_szervezett` int(10) unsigned NOT NULL,
  `oktatas_szervezo_betoltott` int(10) unsigned NOT NULL,
  `oktatas_szervezo_ures` int(10) unsigned NOT NULL,
  `ugyintezo_szervezett` int(10) unsigned NOT NULL,
  `ugyintezo_betoltott` int(10) unsigned NOT NULL,
  `ugyintezo_ures` int(10) unsigned NOT NULL,
  `adminisztrator_szervezett` int(10) unsigned NOT NULL,
  `adminisztrator_betoltott` int(10) unsigned NOT NULL,
  `adminisztrator_ures` int(10) unsigned NOT NULL,
  `adatrogzito_szervezett` int(10) unsigned NOT NULL,
  `adatrogzito_betoltott` int(10) unsigned NOT NULL,
  `adatrogzito_ures` int(10) unsigned NOT NULL,
  `autoszerelo_szakmunkas_szervezett` int(10) unsigned NOT NULL,
  `autoszerelo_szakmunkas_betoltott` int(10) unsigned NOT NULL,
  `autoszerelo_szakmunkas_ures` int(10) unsigned NOT NULL,
  `karbantarto_szervezett` int(10) unsigned NOT NULL,
  `karbantarto_betoltott` int(10) unsigned NOT NULL,
  `karbantarto_ures` int(10) unsigned NOT NULL,
  `kazanfuto_szervezett` int(10) unsigned NOT NULL,
  `kazanfuto_betoltott` int(10) unsigned NOT NULL,
  `kazanfuto_ures` int(10) unsigned NOT NULL,
  `mentogepkocsivezeto_szervezett` int(10) unsigned NOT NULL,
  `mentogepkocsivezeto_betoltott` int(10) unsigned NOT NULL,
  `mentogepkocsivezeto_ures` int(10) unsigned NOT NULL,
  `muszaki_gondnok_szervezett` int(10) unsigned NOT NULL,
  `muszaki_gondnok_betoltott` int(10) unsigned NOT NULL,
  `muszaki_gondnok_ures` int(10) unsigned NOT NULL,
  `garazsmester_szervezett` int(10) unsigned NOT NULL,
  `garazsmester_betoltott` int(10) unsigned NOT NULL,
  `garazsmester_ures` int(10) unsigned NOT NULL,
  `szervezett_gkv_osszesen` int(10) unsigned NOT NULL,
  `betoltott_gkv_osszesen` int(10) unsigned NOT NULL,
  `ures_gkv_osszesen` int(10) unsigned NOT NULL,
  `szervezett_allashely_osszesen` int(10) unsigned NOT NULL,
  `betoltott_allashely_osszesen` int(10) unsigned NOT NULL,
  `ures_allashely_osszesen` int(10) unsigned NOT NULL,
  PRIMARY KEY (`mentoallomas`,`ev`,`ho`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.allashelyek: ~0 rows (hozzávetőleg)
/*!40000 ALTER TABLE `allashelyek` DISABLE KEYS */;
/*!40000 ALTER TABLE `allashelyek` ENABLE KEYS */;

-- Struktúra mentése tábla lamafelhasznalok. allomasok
DROP TABLE IF EXISTS `allomasok`;
CREATE TABLE IF NOT EXISTS `allomasok` (
  `sorszam` int(2) NOT NULL,
  `nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL DEFAULT '',
  `megye_id` int(1) DEFAULT '0',
  `vezeto` int(6) unsigned DEFAULT NULL,
  PRIMARY KEY (`nev`) USING BTREE,
  KEY `megye_id` (`megye_id`),
  KEY `vezeto_ivir` (`vezeto`),
  CONSTRAINT `megye_id` FOREIGN KEY (`megye_id`) REFERENCES `megyek` (`ID`),
  CONSTRAINT `vezeto_ivir` FOREIGN KEY (`vezeto`) REFERENCES `users` (`IVIR`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.allomasok: ~9 rows (hozzávetőleg)
/*!40000 ALTER TABLE `allomasok` DISABLE KEYS */;
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
/*!40000 ALTER TABLE `allomasok` ENABLE KEYS */;

-- Struktúra mentése tábla lamafelhasznalok. belso_ell
DROP TABLE IF EXISTS `belso_ell`;
CREATE TABLE IF NOT EXISTS `belso_ell` (
  `ell_azon` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `ell_iktszam` varchar(50) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `ell_szerv` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `ell_targya` varchar(300) COLLATE utf8_hungarian_ci NOT NULL,
  `intezkedest_igenylo_megall` varchar(2000) COLLATE utf8_hungarian_ci NOT NULL,
  `ell_javaslat` varchar(2000) COLLATE utf8_hungarian_ci NOT NULL,
  `javaslat_alapjan_eloirt_int` varchar(2000) COLLATE utf8_hungarian_ci NOT NULL,
  `int_terv_iktszama` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `int_terv_jovahagyas_datuma` date NOT NULL,
  `felelos_beosztas` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `felelos_szerv_egyseg` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `int_vegrehajt_hatarido` date NOT NULL,
  `hatarido_mod_1` tinyint(4) unsigned NOT NULL,
  `hatarido_mod_2` date DEFAULT NULL,
  `feladat_mod_1` tinyint(4) unsigned NOT NULL,
  `feladat_mod_2` varchar(2000) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `int_teljesites_1` tinyint(4) unsigned NOT NULL,
  `int_teljesites_2` date DEFAULT NULL,
  `megtett_int` varchar(2000) COLLATE utf8_hungarian_ci NOT NULL,
  `hatidoben_vegre_nem_hajt_int_oka` varchar(2000) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `nem_telj_kapcsan_tett_lepesek` varchar(2000) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `megjegyzes` varchar(2000) COLLATE utf8_hungarian_ci DEFAULT NULL,
  PRIMARY KEY (`ell_azon`) USING BTREE,
  KEY `FK_belso_ell_allomasok_(ellenorzott)` (`ell_szerv`),
  KEY `FK_FK_belso_ell_allomasok_(felelos)` (`felelos_szerv_egyseg`),
  CONSTRAINT `FK_FK_belso_ell_allomasok_(felelos)` FOREIGN KEY (`felelos_szerv_egyseg`) REFERENCES `allomasok` (`nev`),
  CONSTRAINT `FK_belso_ell_allomasok_(ellenorzott)` FOREIGN KEY (`ell_szerv`) REFERENCES `allomasok` (`nev`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.belso_ell: ~0 rows (hozzávetőleg)
/*!40000 ALTER TABLE `belso_ell` DISABLE KEYS */;
/*!40000 ALTER TABLE `belso_ell` ENABLE KEYS */;

-- Struktúra mentése tábla lamafelhasznalok. beszerzesek
DROP TABLE IF EXISTS `beszerzesek`;
CREATE TABLE IF NOT EXISTS `beszerzesek` (
  `partnerID` int(11) NOT NULL,
  `megrendelo_szama` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `megrend_alairasra_tovabbitva` date NOT NULL,
  `alairt_megrend_beerkezese` date NOT NULL,
  `dijbekero_tovabbitasa` date NOT NULL,
  `munkalap_kiallitasa` date NOT NULL,
  `szamla_kiallitasa` date NOT NULL,
  `szamla_tovább_pu-nek_utalasra` date NOT NULL,
  PRIMARY KEY (`megrendelo_szama`) USING BTREE,
  KEY `FK_beszerzesek_partnerek` (`partnerID`),
  CONSTRAINT `FK_beszerzesek_partnerek` FOREIGN KEY (`partnerID`) REFERENCES `partnerek` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.beszerzesek: ~0 rows (hozzávetőleg)
/*!40000 ALTER TABLE `beszerzesek` DISABLE KEYS */;
/*!40000 ALTER TABLE `beszerzesek` ENABLE KEYS */;

-- Struktúra mentése tábla lamafelhasznalok. dolgozok
DROP TABLE IF EXISTS `dolgozok`;
CREATE TABLE IF NOT EXISTS `dolgozok` (
  `vezetek_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `kereszt_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `IVIR` int(6) unsigned NOT NULL,
  `torzsszam` int(10) unsigned NOT NULL,
  `adoazonosito` bigint(20) unsigned NOT NULL,
  `ir_szam` int(4) unsigned NOT NULL,
  `varos` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `kozterulet` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `kozterulet_jellege` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `hazszam` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `epulet_emelet_ajto` varchar(50) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `ceges_email` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `telefon` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `allomas` varchar(50) COLLATE utf8_hungarian_ci NOT NULL DEFAULT '',
  `munkakorID` int(11) NOT NULL,
  PRIMARY KEY (`IVIR`),
  UNIQUE KEY `torzsszam` (`torzsszam`),
  UNIQUE KEY `adoazonosito` (`adoazonosito`),
  KEY `FK_dolgozok_munkakorok` (`munkakorID`),
  KEY `FK_dolgozok_allomasok` (`allomas`),
  CONSTRAINT `FK_dolgozok_allomasok` FOREIGN KEY (`allomas`) REFERENCES `allomasok` (`nev`),
  CONSTRAINT `FK_dolgozok_munkakorok` FOREIGN KEY (`munkakorID`) REFERENCES `munkakorok` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.dolgozok: ~0 rows (hozzávetőleg)
/*!40000 ALTER TABLE `dolgozok` DISABLE KEYS */;
/*!40000 ALTER TABLE `dolgozok` ENABLE KEYS */;

-- Struktúra mentése tábla lamafelhasznalok. gk_tipusok
DROP TABLE IF EXISTS `gk_tipusok`;
CREATE TABLE IF NOT EXISTS `gk_tipusok` (
  `gk_tipus` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `ktg` int(10) unsigned NOT NULL,
  PRIMARY KEY (`gk_tipus`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.gk_tipusok: ~4 rows (hozzávetőleg)
/*!40000 ALTER TABLE `gk_tipusok` DISABLE KEYS */;
INSERT INTO `gk_tipusok` (`gk_tipus`, `ktg`) VALUES
	('Eset', 300),
	('Mgk', 250),
	('MOK', 220),
	('Roko', 300),
	('TBE', 300);
/*!40000 ALTER TABLE `gk_tipusok` ENABLE KEYS */;

-- Struktúra mentése tábla lamafelhasznalok. kulso_ell
DROP TABLE IF EXISTS `kulso_ell`;
CREATE TABLE IF NOT EXISTS `kulso_ell` (
  `ellenorzest_vegzoID` int(11) NOT NULL,
  `ell_azon` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `ell_iktszam` varchar(50) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `ell_szerv` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `kapcsolattarto_neve` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `kapcsolattarto_tel` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `ell_targya` varchar(300) COLLATE utf8_hungarian_ci NOT NULL,
  `intezkedest_igenylo_megall` varchar(2000) COLLATE utf8_hungarian_ci NOT NULL,
  `ell_javaslat` varchar(2000) COLLATE utf8_hungarian_ci NOT NULL,
  `javaslat_alapjan_eloirt_int` varchar(2000) COLLATE utf8_hungarian_ci NOT NULL,
  `int_terv_iktszama` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `int_terv_jovahagyas_datuma` date NOT NULL,
  `felelos_beosztas` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `felelos_szerv_egyseg` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `int_vegrehajt_hatarido` date NOT NULL,
  `hatarido_mod_1` tinyint(4) unsigned NOT NULL,
  `hatarido_mod_2` date DEFAULT NULL,
  `feladat_mod_1` tinyint(4) unsigned NOT NULL,
  `feladat_mod_2` varchar(2000) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `int_teljesites_1` tinyint(4) unsigned NOT NULL,
  `int_teljesites_2` date DEFAULT NULL,
  `megtett_int` varchar(2000) COLLATE utf8_hungarian_ci NOT NULL,
  `hatidoben_vegre_nem_hajt_int_oka` varchar(2000) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `nem_telj_kapcsan_tett_lepesek` varchar(2000) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `megjegyzes` varchar(2000) COLLATE utf8_hungarian_ci DEFAULT NULL,
  PRIMARY KEY (`ell_azon`) USING BTREE,
  KEY `FK_kulso_ell_allomasok_(ellenorzott)` (`ell_szerv`),
  KEY `FK_FK_kulso_ell_allomasok_(felelos)` (`felelos_szerv_egyseg`),
  KEY `FK_kulso_ell_kulso_ellenorok` (`ellenorzest_vegzoID`),
  CONSTRAINT `FK_FK_kulso_ell_allomasok_(felelos)` FOREIGN KEY (`felelos_szerv_egyseg`) REFERENCES `allomasok` (`nev`),
  CONSTRAINT `FK_kulso_ell_allomasok_(ellenorzott)` FOREIGN KEY (`ell_szerv`) REFERENCES `allomasok` (`nev`),
  CONSTRAINT `FK_kulso_ell_kulso_ellenorok` FOREIGN KEY (`ellenorzest_vegzoID`) REFERENCES `kulso_ellenorok` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.kulso_ell: ~0 rows (hozzávetőleg)
/*!40000 ALTER TABLE `kulso_ell` DISABLE KEYS */;
/*!40000 ALTER TABLE `kulso_ell` ENABLE KEYS */;

-- Struktúra mentése tábla lamafelhasznalok. kulso_ellenorok
DROP TABLE IF EXISTS `kulso_ellenorok`;
CREATE TABLE IF NOT EXISTS `kulso_ellenorok` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `ir_szam` int(4) unsigned DEFAULT NULL,
  `varos` varchar(50) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `kozterulet` varchar(50) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `kozt_jellege` varchar(50) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `hazszam` varchar(50) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `epulet_emelet_ajto` varchar(50) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `helyrazi_szam` varchar(50) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `telefon` varchar(50) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `kontakt_szemely` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.kulso_ellenorok: ~0 rows (hozzávetőleg)
/*!40000 ALTER TABLE `kulso_ellenorok` DISABLE KEYS */;
/*!40000 ALTER TABLE `kulso_ellenorok` ENABLE KEYS */;

-- Struktúra mentése tábla lamafelhasznalok. letszam
DROP TABLE IF EXISTS `letszam`;
CREATE TABLE IF NOT EXISTS `letszam` (
  `mentoallomas` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `ev` year(4) NOT NULL,
  `negyedev` int(11) unsigned NOT NULL,
  `kivon_all_szevezett` int(10) unsigned NOT NULL,
  `kivon_all_betoltott` int(10) unsigned NOT NULL,
  `mentesiranyitas_szervezett` int(10) unsigned NOT NULL,
  `mentesiranyitas_betoltott` int(10) unsigned NOT NULL,
  `betegszall_szervezett` int(10) unsigned NOT NULL,
  `betegszall_betoltott` int(10) unsigned NOT NULL,
  `orvos_mentotiszt` int(10) unsigned NOT NULL,
  `apolo` int(10) unsigned NOT NULL,
  `mentesiranyitasban_dolg` int(10) unsigned NOT NULL,
  `mentogkvezeto` int(10) unsigned NOT NULL,
  `betegszall_iranyitasban_dolg` int(10) unsigned NOT NULL,
  PRIMARY KEY (`mentoallomas`,`ev`,`negyedev`),
  CONSTRAINT `FK_letszam_allomasok` FOREIGN KEY (`mentoallomas`) REFERENCES `allomasok` (`nev`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.letszam: ~0 rows (hozzávetőleg)
/*!40000 ALTER TABLE `letszam` DISABLE KEYS */;
/*!40000 ALTER TABLE `letszam` ENABLE KEYS */;

-- Struktúra mentése tábla lamafelhasznalok. megyek
DROP TABLE IF EXISTS `megyek`;
CREATE TABLE IF NOT EXISTS `megyek` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `megye_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.megyek: ~3 rows (hozzávetőleg)
/*!40000 ALTER TABLE `megyek` DISABLE KEYS */;
INSERT INTO `megyek` (`ID`, `megye_nev`) VALUES
	(1, 'Vas'),
	(2, 'Győr-Moson-Sopron'),
	(3, 'Zala');
/*!40000 ALTER TABLE `megyek` ENABLE KEYS */;

-- Struktúra mentése tábla lamafelhasznalok. migransellatas
DROP TABLE IF EXISTS `migransellatas`;
CREATE TABLE IF NOT EXISTS `migransellatas` (
  `megyeID` int(10) NOT NULL,
  `ev` year(4) NOT NULL,
  `honap` int(10) unsigned NOT NULL,
  `fo` int(10) unsigned NOT NULL,
  `megtett_km` int(10) unsigned NOT NULL,
  PRIMARY KEY (`megyeID`,`ev`,`honap`) USING BTREE,
  CONSTRAINT `FK_migrans_ellatas_megyek` FOREIGN KEY (`megyeID`) REFERENCES `megyek` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.migransellatas: ~0 rows (hozzávetőleg)
/*!40000 ALTER TABLE `migransellatas` DISABLE KEYS */;
/*!40000 ALTER TABLE `migransellatas` ENABLE KEYS */;

-- Struktúra mentése tábla lamafelhasznalok. mozgoorseg
DROP TABLE IF EXISTS `mozgoorseg`;
CREATE TABLE IF NOT EXISTS `mozgoorseg` (
  `megrendeloID` int(11) NOT NULL,
  `szerzodesszam` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `rendezveny_neve` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `rendezveny_datuma` date NOT NULL,
  `rendezveny_helye` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `mentoallomas` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `roko` int(11) unsigned NOT NULL,
  `eset` int(11) unsigned NOT NULL,
  `mentogk` int(11) unsigned NOT NULL,
  `gyalogorseg` int(11) unsigned NOT NULL,
  `bevetel` int(11) unsigned NOT NULL,
  `koltseg` int(11) unsigned NOT NULL,
  `maradvany` int(11) unsigned NOT NULL,
  PRIMARY KEY (`szerzodesszam`),
  KEY `FK_mozgoorseg_partnerek` (`megrendeloID`),
  KEY `FK_mozgoorseg_allomasok` (`mentoallomas`),
  CONSTRAINT `FK_mozgoorseg_allomasok` FOREIGN KEY (`mentoallomas`) REFERENCES `allomasok` (`nev`),
  CONSTRAINT `FK_mozgoorseg_partnerek` FOREIGN KEY (`megrendeloID`) REFERENCES `partnerek` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.mozgoorseg: ~0 rows (hozzávetőleg)
/*!40000 ALTER TABLE `mozgoorseg` DISABLE KEYS */;
/*!40000 ALTER TABLE `mozgoorseg` ENABLE KEYS */;

-- Struktúra mentése tábla lamafelhasznalok. munkakorok
DROP TABLE IF EXISTS `munkakorok`;
CREATE TABLE IF NOT EXISTS `munkakorok` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `munkakor` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `alapber` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.munkakorok: ~7 rows (hozzávetőleg)
/*!40000 ALTER TABLE `munkakorok` DISABLE KEYS */;
INSERT INTO `munkakorok` (`ID`, `munkakor`, `alapber`) VALUES
	(1, 'mentőtechnikus', 350000),
	(2, 'mentőgépkocsi vezető', 310000),
	(3, 'mentőápoló', 325000),
	(4, 'adminisztrátor', 300000),
	(5, 'teszt', 232000),
	(6, 'ljl', 25),
	(7, 'orvos', 500000);
/*!40000 ALTER TABLE `munkakorok` ENABLE KEYS */;

-- Struktúra mentése tábla lamafelhasznalok. partnerek
DROP TABLE IF EXISTS `partnerek`;
CREATE TABLE IF NOT EXISTS `partnerek` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `nev` varchar(50) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `ir_szam` int(4) unsigned NOT NULL,
  `varos` varchar(50) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `kozterulet` varchar(50) CHARACTER SET utf8 COLLATE utf8_hungarian_ci DEFAULT NULL,
  `kozt_jellege` varchar(50) CHARACTER SET utf8 COLLATE utf8_hungarian_ci DEFAULT NULL,
  `hazszam` varchar(50) CHARACTER SET utf8 COLLATE utf8_hungarian_ci DEFAULT NULL,
  `epulet_emelet_ajto` varchar(50) CHARACTER SET utf8 COLLATE utf8_hungarian_ci DEFAULT NULL,
  `helyrazi_szam` varchar(50) CHARACTER SET utf8 COLLATE utf8_hungarian_ci DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_hungarian_ci DEFAULT NULL,
  `telefon` varchar(50) CHARACTER SET utf8 COLLATE utf8_hungarian_ci DEFAULT NULL,
  `adoszam` varchar(13) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `adoszam` (`adoszam`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Tábla adatainak mentése lamafelhasznalok.partnerek: ~0 rows (hozzávetőleg)
/*!40000 ALTER TABLE `partnerek` DISABLE KEYS */;
/*!40000 ALTER TABLE `partnerek` ENABLE KEYS */;

-- Struktúra mentése tábla lamafelhasznalok. terites_nelkuli_rend
DROP TABLE IF EXISTS `terites_nelkuli_rend`;
CREATE TABLE IF NOT EXISTS `terites_nelkuli_rend` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `dolgozok_IVIR` int(6) unsigned NOT NULL,
  `helyszin` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `elnevezes` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `datum` date NOT NULL,
  `idopont` time NOT NULL,
  `telj_ora` int(10) unsigned NOT NULL,
  `alapber` int(10) unsigned NOT NULL,
  `alapber_1_orara` double unsigned NOT NULL,
  `100_szazalekos` int(11) unsigned NOT NULL,
  `20_szazalekos` int(11) unsigned NOT NULL,
  `50_szazalekos` int(11) unsigned NOT NULL,
  `potlek_osszeg` int(11) unsigned NOT NULL,
  `ber_plusz_potlek` int(11) unsigned NOT NULL,
  `oradijas_osszeg` int(11) unsigned NOT NULL,
  `osszes_ber` int(11) unsigned NOT NULL,
  `tb_jarulek` double unsigned NOT NULL,
  `berkoltseg_osszesen` double unsigned NOT NULL,
  `teljesitett_km` int(11) unsigned NOT NULL,
  `km_ktg` int(11) unsigned NOT NULL,
  `elszamolas` int(11) unsigned NOT NULL,
  `gk` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_terites_nelkuli_rend_dolgozok` (`dolgozok_IVIR`),
  KEY `FK_terites_nelkuli_rend_gk_tipusok` (`gk`),
  CONSTRAINT `FK_terites_nelkuli_rend_dolgozok` FOREIGN KEY (`dolgozok_IVIR`) REFERENCES `dolgozok` (`IVIR`),
  CONSTRAINT `FK_terites_nelkuli_rend_gk_tipusok` FOREIGN KEY (`gk`) REFERENCES `gk_tipusok` (`gk_tipus`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.terites_nelkuli_rend: ~0 rows (hozzávetőleg)
/*!40000 ALTER TABLE `terites_nelkuli_rend` DISABLE KEYS */;
/*!40000 ALTER TABLE `terites_nelkuli_rend` ENABLE KEYS */;

-- Struktúra mentése tábla lamafelhasznalok. tulorak
DROP TABLE IF EXISTS `tulorak`;
CREATE TABLE IF NOT EXISTS `tulorak` (
  `mentoallomas` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `ev` year(4) NOT NULL,
  `honap` int(10) unsigned NOT NULL,
  `ment_fel_miatti_tulora` int(10) unsigned NOT NULL,
  `egyeb_tulora` int(10) unsigned NOT NULL,
  `orvos_mentotiszt` int(10) unsigned NOT NULL,
  `apolo` int(10) unsigned NOT NULL,
  `mentesiranyitasban_dolg` int(10) unsigned NOT NULL,
  `mentogkvezeto` int(10) unsigned NOT NULL,
  `betegszall_iranyitasban_dolg` int(10) unsigned NOT NULL,
  PRIMARY KEY (`mentoallomas`,`ev`,`honap`),
  CONSTRAINT `FK_tulorak_allomasok` FOREIGN KEY (`mentoallomas`) REFERENCES `allomasok` (`nev`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.tulorak: ~0 rows (hozzávetőleg)
/*!40000 ALTER TABLE `tulorak` DISABLE KEYS */;
/*!40000 ALTER TABLE `tulorak` ENABLE KEYS */;

-- Struktúra mentése tábla lamafelhasznalok. users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `IVIR` int(6) unsigned NOT NULL,
  `Vezetek_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL DEFAULT '',
  `Kereszt_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL DEFAULT '',
  `Jelszo` varchar(50) COLLATE utf8_hungarian_ci NOT NULL DEFAULT '',
  `Vas` int(1) NOT NULL DEFAULT '0',
  `Gyor` int(1) NOT NULL DEFAULT '0',
  `Zala` int(1) NOT NULL DEFAULT '0',
  `Admin` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`IVIR`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- Tábla adatainak mentése lamafelhasznalok.users: ~3 rows (hozzávetőleg)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`IVIR`, `Vezetek_nev`, `Kereszt_nev`, `Jelszo`, `Vas`, `Gyor`, `Zala`, `Admin`) VALUES
	(121212, 'sfdgdg', 'df0', 'sf', 0, 1, 0, 0),
	(121313, 'dvxc', 'vccbxb', 'cvv', 1, 0, 0, 1),
	(123456, 'vuib', 'tzuggb', '1111', 1, 0, 0, 1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
