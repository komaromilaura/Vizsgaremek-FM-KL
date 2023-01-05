<?php

namespace App\Exports;

use App\Models\Beszerzes;
use Illuminate\Contracts\Support\Responsable;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStrictNullComparison;
use Maatwebsite\Excel\Excel;

class BeszerzesExport implements FromCollection, Responsable, WithStrictNullComparison, ShouldAutoSize ,WithHeadings, WithMapping
{
    use Exportable;

    private $fileName = 'beszerzesek.xlsx';

    private $writerType = Excel::XLSX;
    
    public function collection()
    {
        return Beszerzes::with("partner")->get();
    }

    public function headings(): array
    {
        return [
            "Állomás",
            "Beszerzési igény tárgya",
            "Beszerzési igény dátuma",
            "Árajánlat bekérés",
            "Engedélyezésre küldve",
            "Engedély beérkezés",
            "Megrendelő kiállítása",
            "Megrendelő száma",
            "Megrendelő aláírásra továbbítva",
            "Aláírt megrendelő beérkezése",
            "Díjbekérő továbbítása",
            "Munkalap kiállítása",
            "Számla kiállítása",
            "Számla továbbítása pénzügynek/utalásra",
            "Partner"
        ];
    }

    public function map($beszerzes): array
    {
        return [
            $beszerzes->allomas->nev,
            $beszerzes->targy,
            $beszerzes->besz_igeny_datum,
            $beszerzes->ajanlat_bekeres,
            $beszerzes->engedelyezesre_kuldve,
            $beszerzes->engedely_beerkezese,
            $beszerzes->megrendelo_kiallitasa,
            $beszerzes->megrendelo_szama,
            $beszerzes->megrend_alairasra_tovabbitva,
            $beszerzes->alairt_megrend_beerkezese,
            $beszerzes->dijbekero_tovabbitasa,
            $beszerzes->munkalap_kiallitasa,
            $beszerzes->szamla_kiallitasa,
            $beszerzes->szamla_tovább_pu_nek_utalasra,
            $beszerzes->partner->nev,
        ];
    }
}
