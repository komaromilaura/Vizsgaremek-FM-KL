<?php

namespace App\Exports;

use App\Models\KulsoEllenorzes;
use Illuminate\Contracts\Support\Responsable;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStrictNullComparison;
use Maatwebsite\Excel\Excel;

class KulsoEllenorzesMegyenkentExport implements FromCollection, Responsable, WithStrictNullComparison ,ShouldAutoSize, WithHeadings, WithMapping
{
    use Exportable;

    private $fileName = "kulso_ellenorzesek_megye.xlsx";

    private $writerType = Excel::XLSX;

    public function __construct(public int $megye)
    {   }

    public function collection()
    {
        return KulsoEllenorzes::query()
        ->with(["allomasEllSzerv", "allomasFelelosSzervEgyseg", "ellenor"])
        ->join('allomasok', 'kulso_ell.ell_szerv', '=', 'allomasok.nev')
        ->where('allomasok.megye_id', $this->megye)
        ->get();
    }

    public function headings(): array
    {
        return [
            "A külső ellenőrzést végző megnevezése",
            "Ellenőrzés azonosítója",
            "Ellenőrzés iktatószáma",
            "Az ellenőrzött szerv, illetve szervezeti egység",
            "Az ellenőrzött szervnél kijelölt szakmai kapcsolattartó neve",
            "Az ellenőrzött szervnél kijelölt szakmai kapcsolattartó elérhetősége",
            "Az ellenőrzés tárgya (címe)",
            "Intézkedést igénylő megállapítás",
            "Ellenőrzési javaslat",
            "A javaslat / figyelemfelhívó levél alapján előírt intézkedés",
            "A vonatkozó intézkedési terv iktatószáma",
            "A vonatkozó intézkedési terv jóváhagyásának időpontja",
            "Az intézkedés felelőse (beosztás)",
            "Az intézkedés felelőse (szervezeti egység)",
            "Az intézkedés végrehajtásának határideje",
            "Határidő módosítás (igen / nem)",
            "Határidő módosítás (dátum)",
            "Feladat módosítás (igen / nem)",
            "Feladat módosítás",
            "Az intézkedés teljesítése (igen / nem)",
            "Az intézkedés teljesítése (dátum)",
            "Megtett intézkedések rövid leírása",
            "A határidőben végre nem hajtott intézkedések oka",
            "A nem teljesülés kapcsán tett lépések",
            "Megjegyzés"
        ];
    }

    public function map($kulsoEllenorzes): array
    {
        return [
            $kulsoEllenorzes->ellenor->nev,
            $kulsoEllenorzes->ell_azon,
            $kulsoEllenorzes->ell_iktszam,
            $kulsoEllenorzes->allomasEllSzerv->nev,
            $kulsoEllenorzes->kapcsolattarto_neve,
            $kulsoEllenorzes->kapcsolattarto_tel,
            $kulsoEllenorzes->ell_targya,
            $kulsoEllenorzes->intezkedest_igenylo_megall,
            $kulsoEllenorzes->ell_javaslat,
            $kulsoEllenorzes->javaslat_alapjan_eloirt_int,
            $kulsoEllenorzes->int_terv_iktszama,
            $kulsoEllenorzes->int_terv_jovahagyas_datuma,
            $kulsoEllenorzes->felelos_beosztas,
            $kulsoEllenorzes->allomasFelelosSzervEgyseg->nev,
            $kulsoEllenorzes->int_vegrehajt_hatarido,
            $kulsoEllenorzes->hatarido_mod_1 == 0 ? "nem" : "igen",
            $kulsoEllenorzes->hatarido_mod_2,
            $kulsoEllenorzes->feladat_mod_1 == 0 ? "nem" : "igen",
            $kulsoEllenorzes->feladat_mod_2,
            $kulsoEllenorzes->int_teljesites_1 == 0 ? "nem" : "igen",
            $kulsoEllenorzes->int_teljesites_2,
            $kulsoEllenorzes->megtett_int,
            $kulsoEllenorzes->hatidoben_vegre_nem_hajt_int_oka,
            $kulsoEllenorzes->nem_telj_kapcsan_tett_lepesek,
            $kulsoEllenorzes->megjegyzes,   
        ];
    }
}
