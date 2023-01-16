<?php

namespace App\Exports;

use App\Models\Allashely;
use Illuminate\Contracts\Support\Responsable;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStrictNullComparison;
use Maatwebsite\Excel\Excel;

class AllashelyMegyenkentExport implements FromCollection, Responsable, WithStrictNullComparison ,ShouldAutoSize, WithHeadings, WithMapping
{
    use Exportable;

    private $fileName = "allashely_megye.xlsx";

    private $writerType = Excel::XLSX;

    public function __construct(public int $megye)
    {  }
    
    public function collection()
    {
        return Allashely::query()
        ->with("allomas")
        ->join('allomasok', 'allashelyek.mentoallomas', '=', "allomasok.nev")
        ->where('allomasok.megye_id', $this->megye)        
        ->get();
    }

    public function headings(): array
    {
        return [
            "ID",
            "Mentőállomás",
            "Év",
            "Hó",
            "Szakorvos szervezett",
            "Szakorvos betöltött",
            "Szakorvos üres álláshely",
            "Vezető mentőtiszt szervezett",
            "Vezető mentőtiszt betöltött",
            "Vezető mentőtiszt üres álláshely",
            "Orvos / mentőtiszt szervezett",
            "Orvos / mentőtiszt betöltött",
            "Orvos / mentőtiszt üres álláshely",
            "Főápoló szervezett",
            "Főápoló betöltött",
            "Főápoló üres álláshely",
            "Mentőápoló szervezett",
            "Mentőápoló betöltött",
            "Mentőápoló üres álláshely",
            "Mentőápoló összes szervezett",
            "Mentőápoló összes betöltött",
            "Mentőápoló összes üres álláshely",
            "Állomásvezető szervezett",
            "Állomásvezető betöltött",
            "Állomásvezető üres álláshely",
            "ICS vezető szervezett",
            "ICS vezető betöltött",
            "ICS vezető üres álláshely",
            "Mentőtiszt szervezett",
            "Mentőtiszt betöltött",
            "Mentőtiszt üres álláshely",
            "Mentőápoló szervezett",
            "Mentőápoló betöltött",
            "Mentőápoló üres álláshely",
            "Ápoló szervezett",
            "Ápoló betöltött",
            "Ápoló üres álláshely",
            "Szolgálatvezető összesen szervezett",
            "Szolgálatvezető összesen betöltött",
            "Szolgálatvezető összesen üres álláshely",
            "Ápoló szervezett",
            "Ápoló betöltött",
            "Ápoló üres álláshely",
            "Üzemgazdász szervezett",
            "Üzemgazdász betöltött",
            "Üzemgazdász üres álláshely",
            "Üzemmérnök szervezett",
            "Üzemmérnök betöltött",
            "Üzemmérnök üres álláshely",
            "Oktatás szervező szervezett",
            "Oktatás szervező betöltött",
            "Oktatás szervező üres álláshely",
            "Ügyintéző szervezett",
            "Ügyintéző betöltött",
            "Ügyintéző üres álláshely",
            "Adminisztrátor szervezett",
            "Adminisztrátor betöltött",
            "Adminisztrátor üres álláshely",
            "Adatrögzítő szervezett",
            "Adatrögzítő betöltött",
            "Adatrögzítő üres álláshely",
            "Autószerelő szakmunkás szervezett",
            "Autószerelő szakmunkás betöltött",
            "Autószerelő szakmunkás üres álláshely",
            "Karbantartó szervezett",
            "Karbantartó betöltött",
            "Karbantartó üres álláshely",
            "Kazánfűtő szervezett",
            "Kazánfűtő betöltött",
            "Kazánfűtő üres álláshely",
            "Mentőgépkocsivezető szervezett",
            "Mentőgépkocsivezető betöltött",
            "Mentőgépkocsivezető üres álláshely",
            "Műszaki gondnok szervezett",
            "Műszaki gondnok betöltött",
            "Műszaki gondnok üres álláshely",
            "Garázsmester szervezett",
            "Garázsmester betöltött",
            "Garázsmester üres álláshely",
            "Gkv összesen szervezett",
            "Gkv összesen betöltött",
            "Gkv összesen üres álláshely",
            "Összesen szervezett",
            "Összesen betöltött",
            "Összesen üres álláshely",
        ];
    }

    public function map($allashely): array
    {
        return [
            $allashely->ID,
            $allashely->allomas->nev,
            $allashely->ev,
            $allashely->ho,
            $allashely->szakorvos_szervezett,
            $allashely->szakorvos_betoltott,
            $allashely->szakorvos_ures,
            $allashely->vezeto_mentotiszt_szervezett,
            $allashely->vezeto_mentotiszt_betoltott,
            $allashely->vezeto_mentotiszt_ures,
            $allashely->orvos_mentotiszt_szervezett,
            $allashely->orvos_mentotiszt_betoltott,
            $allashely->orvos_mentotiszt_ures,
            $allashely->foapolo_szervezett,
            $allashely->foapolo_betoltott,
            $allashely->foapolo_ures,
            $allashely->mentoapolo_szervezett,
            $allashely->mentoapolo_betoltott,
            $allashely->mentoapolo_ures,                   
            $allashely->mentoapolo_osszes_szervezett,
            $allashely->mentoapolo_osszes_betoltott,
            $allashely->mentoapolo_osszes_ures,                 
            $allashely->allomasvezeto_szervezett,
            $allashely->allomasvezeto_betoltott,
            $allashely->allomasvezeto_ures,
            $allashely->ICS_vezeto_szervezett,
            $allashely->ICS_vezeto_betoltott,
            $allashely->ICS_vezeto_ures,
            $allashely->mentotiszt_szervezett,
            $allashely->mentotiszt_betoltott,
            $allashely->mentotiszt_ures,
            $allashely->mentoapolo2_szervezett,
            $allashely->mentoapolo2_betoltott,
            $allashely->mentoapolo2_ures,
            $allashely->apolo_szervezett,
            $allashely->apolo_betoltott,
            $allashely->apolo_ures,
            $allashely->szolgalatvezeto_szervezett,
            $allashely->szolgalatvezeto_betoltott,
            $allashely->szolgalatvezeto_ures,                               
            $allashely->apolo2_szervezett,
            $allashely->apolo2_betoltott,
            $allashely->apolo2_ures,
            $allashely->uzemgazdasz_szervezett,
            $allashely->uzemgazdasz_betoltott,
            $allashely->uzemgazdasz_ures,
            $allashely->uzemmernok_szervezett,
            $allashely->uzemmernok_betoltott,
            $allashely->uzemmernok_ures,
            $allashely->oktatas_szervezo_szervezett,
            $allashely->oktatas_szervezo_betoltott,
            $allashely->oktatas_szervezo_ures,
            $allashely->ugyintezo_szervezett,
            $allashely->ugyintezo_betoltott,
            $allashely->ugyintezo_ures,
            $allashely->adminisztrator_szervezett,
            $allashely->adminisztrator_betoltott,
            $allashely->adminisztrator_ures,
            $allashely->adatrogzito_szervezett,
            $allashely->adatrogzito_betoltott,
            $allashely->adatrogzito_ures,
            $allashely->autoszerelo_szakmunkas_szervezett,
            $allashely->autoszerelo_szakmunkas_betoltott,
            $allashely->autoszerelo_szakmunkas_ures,
            $allashely->karbantarto_szervezett,
            $allashely->karbantarto_betoltott,
            $allashely->karbantarto_ures,
            $allashely->kazanfuto_szervezett,
            $allashely->kazanfuto_betoltott,
            $allashely->kazanfuto_ures,
            $allashely->mentogepkocsivezeto_szervezett,
            $allashely->mentogepkocsivezeto_betoltott,
            $allashely->mentogepkocsivezeto_ures,
            $allashely->muszaki_gondnok_szervezett,
            $allashely->muszaki_gondnok_betoltott,
            $allashely->muszaki_gondnok_ures,
            $allashely->garazsmester_szervezett,
            $allashely->garazsmester_betoltott,
            $allashely->garazsmester_ures,  
            $allashely->szervezett_gkv_osszesen,
            $allashely->betoltott_gkv_osszesen,
            $allashely->ures_gkv_osszesen,
            $allashely->szervezett_allashely_osszesen,
            $allashely->betoltott_allashely_osszesen,
            $allashely->ures_allashely_osszesen,
        ];
    }
}
