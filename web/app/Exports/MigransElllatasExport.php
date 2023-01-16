<?php

namespace App\Exports;

use App\Models\MigransEllatas;
use Illuminate\Contracts\Support\Responsable;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStrictNullComparison;
use Maatwebsite\Excel\Excel;

class MigransElllatasExport implements FromCollection, Responsable, WithStrictNullComparison ,ShouldAutoSize, WithHeadings, WithMapping
{
    use Exportable;

    private $fileName = "migrans_ellatas.xlsx";

    private $writerType = Excel::XLSX;
    
    public function collection()
    {
        return MigransEllatas::with("megye")->get();
    }

    public function headings(): array
    {
        return [
            "ID",
            "Megye",
            "Év",
            "Hónap",
            "Ellátott migráns (fő)",
            "Megtett kilométer"
        ];
    }

    public function map($ellatas): array
    {
        return [
            $ellatas->ID,
            $ellatas->megye->megye_nev,
            $ellatas->ev,
            $ellatas->honap,
            $ellatas->fo,
            $ellatas->megtett_km,
        ];
    }
}
