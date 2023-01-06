<?php

namespace App\Exports;

use App\Models\BelsoEllenorzes;
use Illuminate\Contracts\Support\Responsable;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStrictNullComparison;
use Maatwebsite\Excel\Excel;

class BelsoEllenorzesMegyenkentExport implements FromCollection, Responsable, WithStrictNullComparison ,ShouldAutoSize, WithHeadings, WithMapping
{
    use Exportable;
    
    private $fileName = "belso_ellenorzesek_megye.xlsx";

    private $writerType = Excel::XLSX;

    public function __construct(public int $megye)
    {  }

    public function collection()
    {
        return BelsoEllenorzes::query()
        ->with(["allomasEllSzerv", "allomasFelelosSzervEgyseg"])
        ->join('allomasok', 'belso_ell.ell_szerv', '=', 'allomasok.nev' )
        ->where('allomasok.megye_id', $this->megye)
        ->get();
    }

    public function headings(): array
    {
        return [
            "Ellenőrzés azonosítója",
            "Ellenőrzés iktatószáma",
            "Az ellenőrzött szerv, illetve szervezeti egység",
            "Az ellenőrzés tárgya (címe)",
            "Intézkedést igénylő megállapítás",
            "Ellenőrzési javaslat",
            "A javaslat alapján előírt intézkedés",
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

    public function map($belsoEllenorzes): array
    {
        return [
            $belsoEllenorzes->ell_azon,
            $belsoEllenorzes->ell_iktszam,
            $belsoEllenorzes->allomasEllSzerv->nev,
            $belsoEllenorzes->ell_targya,
            $belsoEllenorzes->intezkedest_igenylo_megall,
            $belsoEllenorzes->ell_javaslat,
            $belsoEllenorzes->javaslat_alapjan_eloirt_int,
            $belsoEllenorzes->int_terv_iktszama,
            $belsoEllenorzes->int_terv_jovahagyas_datuma,
            $belsoEllenorzes->felelos_beosztas,
            $belsoEllenorzes->allomasFelelosSzervEgyseg->nev,
            $belsoEllenorzes->int_vegrehajt_hatarido,
            $belsoEllenorzes->hatarido_mod_1 == 0 ? "nem" : "igen",
            $belsoEllenorzes->hatarido_mod_2,
            $belsoEllenorzes->feladat_mod_1 == 0 ? "nem" : "igen",
            $belsoEllenorzes->feladat_mod_2,
            $belsoEllenorzes->int_teljesites_1 == 0 ? "nem" : "igen",
            $belsoEllenorzes->int_teljesites_2,
            $belsoEllenorzes->megtett_int,
            $belsoEllenorzes->hatidoben_vegre_nem_hajt_int_oka,
            $belsoEllenorzes->nem_telj_kapcsan_tett_lepesek,
            $belsoEllenorzes->megjegyzes,   
        ];
    }
}
