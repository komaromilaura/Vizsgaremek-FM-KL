<?php

namespace App\Exports;

use App\Models\Mozgoorseg;
use Illuminate\Contracts\Support\Responsable;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStrictNullComparison;
use Maatwebsite\Excel\Excel;

class MozgoorsegMegyenkentExport implements FromCollection, Responsable, WithStrictNullComparison, ShouldAutoSize, WithHeadings, WithMapping
{
    use Exportable;

    private $fileName = "mozgoorseg_megye.xlsx";

    private $writerType = Excel::XLSX;

    public function __construct(public int $megye)
    {   }

    public function collection()
    {
        return Mozgoorseg::query()
        ->with(["allomas", "megrendelo"])
        ->join("allomasok", "mozgoorseg.mentoallomas", "=", "allomasok.nev")
        ->where("allomasok.megye_id", $this->megye)
        ->get();
    }

    public function headings(): array
    {
        return [
            "Szerződésszám",
            "Megrendelő neve",
            "Rendezvény elnevezése",
            "Rendezvény/esemény ideje",
            "Rendezvény/esemény helye",
            "Mentőállomás",
            "ROKO",
            "Eset",
            "Mentőgk.",
            "Gyalogőrség",
            "Bevétel",
            "Költség",
            "Maradvány",
        ];
    }

    public function map($mozgoorseg): array
    {
        return [            
            $mozgoorseg->szerzodesszam,
            $mozgoorseg->megrendelo->nev,
            $mozgoorseg->rendezveny_neve,
            $mozgoorseg->rendezveny_datuma,
            $mozgoorseg->rendezveny_helye,
            $mozgoorseg->allomas->nev,
            $mozgoorseg->roko,
            $mozgoorseg->eset,
            $mozgoorseg->mentogk,
            $mozgoorseg->gyalogorseg,
            $mozgoorseg->bevetel,
            $mozgoorseg->koltseg,
            $mozgoorseg->maradvany,
        ];
    }
}
