<?php

namespace App\Exports;

use App\Models\Letszam;
use Illuminate\Contracts\Support\Responsable;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStrictNullComparison;
use Maatwebsite\Excel\Excel;

class LetszamExport implements FromCollection, Responsable, WithStrictNullComparison, ShouldAutoSize, WithHeadings, WithMapping
{
    use Exportable;

    private $fileName = "letszam.xlsx";

    private $writerType = Excel::XLSX;

    public function collection()
    {
        return Letszam::with("allomas")->get();
    }

    public function headings(): array
    {
        return [
            "ID",
            "Mentőállomás",
            "Év",
            "Negyedév",
            "Kivonuló állomány (szervezett)",
            "Kivonuló állomány (betöltött)",
            "Mentésirányítás (szervezett)",
            "Mentésirányítás (betöltött)",
            "Betegszállítás (szervezett)",
            "Betegszállítás (betöltött)",
            "Orvos/mentőtiszt",
            "Ápoló",
            "Mentésirányításban dolgozó",
            "Mentőgépkocsivezető",
            "Betegszállítás irányításban dolgozó",
        ];
    }

    public function map($letszam): array
    {
        return [
            $letszam->id,
            $letszam->allomas->nev,
            $letszam->ev,
            $letszam->negyedev,
            $letszam->kivon_all_szevezett,
            $letszam->kivon_all_betoltott,
            $letszam->mentesiranyitas_szervezett,
            $letszam->mentesiranyitas_betoltott,
            $letszam->betegszall_szervezett,
            $letszam->betegszall_betoltott,
            $letszam->orvos_mentotiszt,          
            $letszam->apolo,
            $letszam->mentesiranyitasban_dolg,
            $letszam->mentogkvezeto,        
            $letszam->betegszall_iranyitasban_dolg,

        ];
    }
}
