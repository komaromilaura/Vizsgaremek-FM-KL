<?php

namespace App\Exports;

use App\Models\Dolgozo;
use Illuminate\Contracts\Support\Responsable;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStrictNullComparison;
use Maatwebsite\Excel\Excel;

class DolgozoExport implements FromCollection, Responsable, WithStrictNullComparison, ShouldAutoSize, WithHeadings, WithMapping
{
    use Exportable;

    private $fileName = "dolgozok.xlsx";

    private $writerType = Excel::XLSX;
    
    public function collection()
    {
        return Dolgozo::with("munkakor")->get();
    }

    public function headings(): array
    {
        return [
            "Vezetéknév",
            "Keresztnév",
            "IVIR",
            "Törzsszám",
            "Adóazonosító jel",
            "Irányítószám",
            "Város",
            "Közterület",
            "Közterület jellege",
            "Házszám",
            "Épület, emelet, ajtó",
            "Céges email",
            "Telefonszám",
            "Mentőállomás",
            "Munkakör",
        ];
    }
    
    public function map($dolgozo): array
    {
        return[
            $dolgozo->vezetek_nev,
            $dolgozo->kereszt_nev,
            $dolgozo->IVIR,
            $dolgozo->torzsszam,
            $dolgozo->adoazonosito,
            $dolgozo->ir_szam,
            $dolgozo->varos,
            $dolgozo->kozterulet,
            $dolgozo->kozterulet_jellege,
            $dolgozo->hazszam,
            $dolgozo->epulet_emelet_ajto,
            $dolgozo->ceges_email,
            $dolgozo->telefon,
            $dolgozo->mento_allomas->nev,
            $dolgozo->munkakor->munkakor
        ];
    }
}
