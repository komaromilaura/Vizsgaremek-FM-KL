<?php

namespace App\Exports;

use App\Models\Partner;
use Illuminate\Contracts\Support\Responsable;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStrictNullComparison;
use Maatwebsite\Excel\Excel;

class PartnerExport implements FromCollection, Responsable, WithStrictNullComparison, ShouldAutoSize, WithHeadings
{
    use Exportable;

    private $fileName = 'partnerek.xlsx';

    private $writerType = Excel::XLSX;

    public function collection()
    {  
        return Partner::all();
    }

    public function headings(): array
    {
        return [
            "ID",
            "Név",
            "Irányítószám",
            "Város",
            "Közterület",
            "Közterület jellege",
            "Házszám",
            "Épület, emelet, ajtó",
            "Helyrajzi szám",
            "Email",
            "Telefonszám",
            "Adószám",
        ];
    }
}
