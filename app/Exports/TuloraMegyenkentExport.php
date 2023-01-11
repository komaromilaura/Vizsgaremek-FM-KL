<?php

namespace App\Exports;

use App\Models\Tulora;
use Illuminate\Contracts\Support\Responsable;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStrictNullComparison;
use Maatwebsite\Excel\Excel;

class TuloraMegyenkentExport implements FromCollection, Responsable, WithStrictNullComparison, ShouldAutoSize, WithHeadings, WithMapping
{
    use Exportable;

    private $fileName = 'tulorak_megye.xlsx';

    private $writerType = Excel::XLSX;

    public function __construct(public int $megye)
    {   }

    public function collection()
    {
        return Tulora::query()
        ->with("allomas")
        ->join('allomasok', 'tulorak.mentoallomas', '=', 'allomasok.nev')
        ->where('allomasok.megye_id', $this->megye)
        ->get();
    }

    public function headings(): array
    {
        return [
            "ID",
            "Mentőállomás",
            "Év",
            "Hónap",
            "Mentési feladatok miatti túlóra",
            "Egyéb (továbbképzés, projekt, stb) túlóra",
            "Orvos/mentőtiszt",
            "Ápoló",
            "Mentésirányításban dolgozó",
            "Mentőgépkocsivezető",
            "Betegszállítás irányításban dolgozó"
        ];
    }

    public function map($tulora): array
    {
        return [
            $tulora->ID,
            $tulora->allomas->nev,
            $tulora->ev,
            $tulora->honap,
            $tulora->ment_fel_miatti_tulora,
            $tulora->egyeb_tulora,
            $tulora->orvos_mentotiszt,
            $tulora->apolo,
            $tulora->mentesiranyitasban_dolg,
            $tulora->mentogkvezeto,
            $tulora->betegszall_iranyitasban_dolg,
        ];
    }
}
