<?php

namespace App\Http\Controllers;

use App\Http\Requests\AllashelyRequest;
use App\Models\Allashely;

class AllashelyController extends Controller
{
    public function getAll()
    {
        $allashelyek = Allashely::with("allomas")->get()->toArray();

        return response()->json($allashelyek, 200);
    }

    public function get(Allashely $allashely)
    {
        return response()->json($allashely->load("allomas")->toArray(), 200);
    }

    public function addAllashely(AllashelyRequest $request){
        $allashely = new Allashely();
        $allashely->mentoallomas = $request->get("mentoallomas");
        $allashely->ev = $request->get("ev");
        $allashely->ho = $request->get("ho");
        $allashely->szakorvos_szervezett = $request->get("szakorvos_szervezett");
        $allashely->szakorvos_betoltott = $request->get("szakorvos_betoltott");
        $allashely->szakorvos_ures = $request->get("szakorvos_ures");
        $allashely->vezeto_mentotiszt_szervezett = $request->get("vezeto_mentotiszt_szervezett");
        $allashely->vezeto_mentotiszt_betoltott = $request->get("vezeto_mentotiszt_betoltott");
        $allashely->vezeto_mentotiszt_ures = $request->get("vezeto_mentotiszt_ures");
        $allashely->orvos_mentotiszt_szervezett = $request->get("orvos_mentotiszt_szervezett");
        $allashely->orvos_mentotiszt_betoltott = $request->get("orvos_mentotiszt_betoltott");
        $allashely->orvos_mentotiszt_ures = $request->get("orvos_mentotiszt_ures");
        $allashely->foapolo_szervezett = $request->get("foapolo_szervezett");
        $allashely->foapolo_betoltott = $request->get("foapolo_betoltott");
        $allashely->foapolo_ures = $request->get("foapolo_ures");
        $allashely->mentoapolo_szervezett = $request->get("mentoapolo_szervezett");
        $allashely->mentoapolo_betoltott = $request->get("mentoapolo_betoltott");
        $allashely->mentoapolo_ures = $request->get("mentoapolo_ures");
        $allashely->mentoapolo_osszes_szervezett = $request->get("mentoapolo_osszes_szervezett");
        $allashely->mentoapolo_osszes_betoltott = $request->get("mentoapolo_osszes_betoltott");
        $allashely->mentoapolo_osszes_ures = $request->get("mentoapolo_osszes_ures");
        $allashely->allomasvezeto_szervezett = $request->get("allomasvezeto_szervezett");
        $allashely->allomasvezeto_betoltott = $request->get("allomasvezeto_betoltott");
        $allashely->allomasvezeto_ures = $request->get("allomasvezeto_ures");
        $allashely->ICS_vezeto_szervezett = $request->get("ICS_vezeto_szervezett");
        $allashely->ICS_vezeto_betoltott = $request->get("ICS_vezeto_betoltott");
        $allashely->ICS_vezeto_ures = $request->get("ICS_vezeto_ures");
        $allashely->mentotiszt_szervezett = $request->get("mentotiszt_szervezett");
        $allashely->mentotiszt_betoltott = $request->get("mentotiszt_betoltott");
        $allashely->mentotiszt_ures = $request->get("mentotiszt_ures");
        $allashely->mentoapolo2_szervezett = $request->get("mentoapolo2_szervezett");
        $allashely->mentoapolo2_betoltott = $request->get("mentoapolo2_betoltott");
        $allashely->mentoapolo2_ures = $request->get("mentoapolo2_ures");
        $allashely->apolo_szervezett = $request->get("apolo_szervezett");
        $allashely->apolo_betoltott = $request->get("apolo_betoltott");
        $allashely->apolo_ures = $request->get("apolo_ures");
        $allashely->szolgalatvezeto_szervezett = $request->get("szolgalatvezeto_szervezett");
        $allashely->szolgalatvezeto_betoltott = $request->get("szolgalatvezeto_betoltott");
        $allashely->szolgalatvezeto_ures = $request->get("szolgalatvezeto_ures");
        $allashely->apolo2_szervezett = $request->get("apolo2_szervezett");
        $allashely->apolo2_betoltott = $request->get("apolo2_betoltott");
        $allashely->apolo2_ures = $request->get("apolo2_ures");
        $allashely->uzemgazdasz_szervezett = $request->get("uzemgazdasz_szervezett");
        $allashely->uzemgazdasz_betoltott = $request->get("uzemgazdasz_betoltott");
        $allashely->uzemgazdasz_ures = $request->get("uzemgazdasz_ures");
        $allashely->uzemmernok_szervezett = $request->get("uzemmernok_szervezett");
        $allashely->uzemmernok_betoltott = $request->get("uzemmernok_betoltott");
        $allashely->uzemmernok_ures = $request->get("uzemmernok_ures");
        $allashely->oktatas_szervezo_szervezett = $request->get("oktatas_szervezo_szervezett");
        $allashely->oktatas_szervezo_betoltott = $request->get("oktatas_szervezo_betoltott");
        $allashely->oktatas_szervezo_ures = $request->get("oktatas_szervezo_ures");
        $allashely->ugyintezo_szervezett = $request->get("ugyintezo_szervezett");
        $allashely->ugyintezo_betoltott = $request->get("ugyintezo_betoltott");
        $allashely->ugyintezo_ures = $request->get("ugyintezo_ures");
        $allashely->adminisztrator_szervezett = $request->get("adminisztrator_szervezett");
        $allashely->adminisztrator_betoltott = $request->get("adminisztrator_betoltott");
        $allashely->adminisztrator_ures = $request->get("adminisztrator_ures");
        $allashely->adatrogzito_szervezett = $request->get("adatrogzito_szervezett");
        $allashely->adatrogzito_betoltott = $request->get("adatrogzito_betoltott");
        $allashely->adatrogzito_ures = $request->get("adatrogzito_ures");
        $allashely->autoszerelo_szakmunkas_szervezett = $request->get("autoszerelo_szakmunkas_szervezett");
        $allashely->autoszerelo_szakmunkas_betoltott = $request->get("autoszerelo_szakmunkas_betoltott");
        $allashely->autoszerelo_szakmunkas_ures = $request->get("autoszerelo_szakmunkas_ures");
        $allashely->karbantarto_szervezett = $request->get("karbantarto_szervezett");
        $allashely->karbantarto_betoltott = $request->get("karbantarto_betoltott");
        $allashely->karbantarto_ures = $request->get("karbantarto_ures");
        $allashely->kazanfuto_szervezett = $request->get("kazanfuto_szervezett");
        $allashely->kazanfuto_betoltott = $request->get("kazanfuto_betoltott");
        $allashely->kazanfuto_ures = $request->get("kazanfuto_ures");
        $allashely->mentogepkocsivezeto_szervezett = $request->get("mentogepkocsivezeto_szervezett");
        $allashely->mentogepkocsivezeto_betoltott = $request->get("mentogepkocsivezeto_betoltott");
        $allashely->mentogepkocsivezeto_ures = $request->get("mentogepkocsivezeto_ures");
        $allashely->muszaki_gondnok_szervezett = $request->get("muszaki_gondnok_szervezett");
        $allashely->muszaki_gondnok_betoltott = $request->get("muszaki_gondnok_betoltott");
        $allashely->muszaki_gondnok_ures = $request->get("muszaki_gondnok_ures");
        $allashely->garazsmester_szervezett = $request->get("garazsmester_szervezett");
        $allashely->garazsmester_betoltott = $request->get("garazsmester_betoltott");
        $allashely->garazsmester_ures = $request->get("garazsmester_ures");
        $allashely->szervezett_gkv_osszesen = $request->get("szervezett_gkv_osszesen");
        $allashely->betoltott_gkv_osszesen = $request->get("betoltott_gkv_osszesen");
        $allashely->ures_gkv_osszesen = $request->get("ures_gkv_osszesen");
        $allashely->szervezett_allashely_osszesen = $request->get("szervezett_allashely_osszesen");
        $allashely->betoltott_allashely_osszesen = $request->get("betoltott_allashely_osszesen");
        $allashely->ures_allashely_osszesen = $request->get("ures_allashely_osszesen");

        $allashely->save();

        return response()->json(["id" => $allashely->ID], 201);
    }

    public function updateAllashely(Allashely $allashely, AllashelyRequest $request)
    {
        $allashely->mentoallomas = $request->get("mentoallomas");
        $allashely->ev = $request->get("ev");
        $allashely->ho = $request->get("ho");
        $allashely->szakorvos_szervezett = $request->get("szakorvos_szervezett");
        $allashely->szakorvos_betoltott = $request->get("szakorvos_betoltott");
        $allashely->szakorvos_ures = $request->get("szakorvos_ures");
        $allashely->vezeto_mentotiszt_szervezett = $request->get("vezeto_mentotiszt_szervezett");
        $allashely->vezeto_mentotiszt_betoltott = $request->get("vezeto_mentotiszt_betoltott");
        $allashely->vezeto_mentotiszt_ures = $request->get("vezeto_mentotiszt_ures");
        $allashely->orvos_mentotiszt_szervezett = $request->get("orvos_mentotiszt_szervezett");
        $allashely->orvos_mentotiszt_betoltott = $request->get("orvos_mentotiszt_betoltott");
        $allashely->orvos_mentotiszt_ures = $request->get("orvos_mentotiszt_ures");
        $allashely->foapolo_szervezett = $request->get("foapolo_szervezett");
        $allashely->foapolo_betoltott = $request->get("foapolo_betoltott");
        $allashely->foapolo_ures = $request->get("foapolo_ures");
        $allashely->mentoapolo_szervezett = $request->get("mentoapolo_szervezett");
        $allashely->mentoapolo_betoltott = $request->get("mentoapolo_betoltott");
        $allashely->mentoapolo_ures = $request->get("mentoapolo_ures");
        $allashely->mentoapolo_osszes_szervezett = $request->get("mentoapolo_osszes_szervezett");
        $allashely->mentoapolo_osszes_betoltott = $request->get("mentoapolo_osszes_betoltott");
        $allashely->mentoapolo_osszes_ures = $request->get("mentoapolo_osszes_ures");
        $allashely->allomasvezeto_szervezett = $request->get("allomasvezeto_szervezett");
        $allashely->allomasvezeto_betoltott = $request->get("allomasvezeto_betoltott");
        $allashely->allomasvezeto_ures = $request->get("allomasvezeto_ures");
        $allashely->ICS_vezeto_szervezett = $request->get("ICS_vezeto_szervezett");
        $allashely->ICS_vezeto_betoltott = $request->get("ICS_vezeto_betoltott");
        $allashely->ICS_vezeto_ures = $request->get("ICS_vezeto_ures");
        $allashely->mentotiszt_szervezett = $request->get("mentotiszt_szervezett");
        $allashely->mentotiszt_betoltott = $request->get("mentotiszt_betoltott");
        $allashely->mentotiszt_ures = $request->get("mentotiszt_ures");
        $allashely->mentoapolo2_szervezett = $request->get("mentoapolo2_szervezett");
        $allashely->mentoapolo2_betoltott = $request->get("mentoapolo2_betoltott");
        $allashely->mentoapolo2_ures = $request->get("mentoapolo2_ures");
        $allashely->apolo_szervezett = $request->get("apolo_szervezett");
        $allashely->apolo_betoltott = $request->get("apolo_betoltott");
        $allashely->apolo_ures = $request->get("apolo_ures");
        $allashely->szolgalatvezeto_szervezett = $request->get("szolgalatvezeto_szervezett");
        $allashely->szolgalatvezeto_betoltott = $request->get("szolgalatvezeto_betoltott");
        $allashely->szolgalatvezeto_ures = $request->get("szolgalatvezeto_ures");
        $allashely->apolo2_szervezett = $request->get("apolo2_szervezett");
        $allashely->apolo2_betoltott = $request->get("apolo2_betoltott");
        $allashely->apolo2_ures = $request->get("apolo2_ures");
        $allashely->uzemgazdasz_szervezett = $request->get("uzemgazdasz_szervezett");
        $allashely->uzemgazdasz_betoltott = $request->get("uzemgazdasz_betoltott");
        $allashely->uzemgazdasz_ures = $request->get("uzemgazdasz_ures");
        $allashely->uzemmernok_szervezett = $request->get("uzemmernok_szervezett");
        $allashely->uzemmernok_betoltott = $request->get("uzemmernok_betoltott");
        $allashely->uzemmernok_ures = $request->get("uzemmernok_ures");
        $allashely->oktatas_szervezo_szervezett = $request->get("oktatas_szervezo_szervezett");
        $allashely->oktatas_szervezo_betoltott = $request->get("oktatas_szervezo_betoltott");
        $allashely->oktatas_szervezo_ures = $request->get("oktatas_szervezo_ures");
        $allashely->ugyintezo_szervezett = $request->get("ugyintezo_szervezett");
        $allashely->ugyintezo_betoltott = $request->get("ugyintezo_betoltott");
        $allashely->ugyintezo_ures = $request->get("ugyintezo_ures");
        $allashely->adminisztrator_szervezett = $request->get("adminisztrator_szervezett");
        $allashely->adminisztrator_betoltott = $request->get("adminisztrator_betoltott");
        $allashely->adminisztrator_ures = $request->get("adminisztrator_ures");
        $allashely->adatrogzito_szervezett = $request->get("adatrogzito_szervezett");
        $allashely->adatrogzito_betoltott = $request->get("adatrogzito_betoltott");
        $allashely->adatrogzito_ures = $request->get("adatrogzito_ures");
        $allashely->autoszerelo_szakmunkas_szervezett = $request->get("autoszerelo_szakmunkas_szervezett");
        $allashely->autoszerelo_szakmunkas_betoltott = $request->get("autoszerelo_szakmunkas_betoltott");
        $allashely->autoszerelo_szakmunkas_ures = $request->get("autoszerelo_szakmunkas_ures");
        $allashely->karbantarto_szervezett = $request->get("karbantarto_szervezett");
        $allashely->karbantarto_betoltott = $request->get("karbantarto_betoltott");
        $allashely->karbantarto_ures = $request->get("karbantarto_ures");
        $allashely->kazanfuto_szervezett = $request->get("kazanfuto_szervezett");
        $allashely->kazanfuto_betoltott = $request->get("kazanfuto_betoltott");
        $allashely->kazanfuto_ures = $request->get("kazanfuto_ures");
        $allashely->mentogepkocsivezeto_szervezett = $request->get("mentogepkocsivezeto_szervezett");
        $allashely->mentogepkocsivezeto_betoltott = $request->get("mentogepkocsivezeto_betoltott");
        $allashely->mentogepkocsivezeto_ures = $request->get("mentogepkocsivezeto_ures");
        $allashely->muszaki_gondnok_szervezett = $request->get("muszaki_gondnok_szervezett");
        $allashely->muszaki_gondnok_betoltott = $request->get("muszaki_gondnok_betoltott");
        $allashely->muszaki_gondnok_ures = $request->get("muszaki_gondnok_ures");
        $allashely->garazsmester_szervezett = $request->get("garazsmester_szervezett");
        $allashely->garazsmester_betoltott = $request->get("garazsmester_betoltott");
        $allashely->garazsmester_ures = $request->get("garazsmester_ures");
        $allashely->szervezett_gkv_osszesen = $request->get("szervezett_gkv_osszesen");
        $allashely->betoltott_gkv_osszesen = $request->get("betoltott_gkv_osszesen");
        $allashely->ures_gkv_osszesen = $request->get("ures_gkv_osszesen");
        $allashely->szervezett_allashely_osszesen = $request->get("szervezett_allashely_osszesen");
        $allashely->betoltott_allashely_osszesen = $request->get("betoltott_allashely_osszesen");
        $allashely->ures_allashely_osszesen = $request->get("ures_allashely_osszesen");

        $allashely->save();

        return response()->json($allashely->toArray(), 200);
    }

    public function deleteAllashely(Allashely $allashely)
    {
        $allashely->delete();

        return response()->json("OK", 204);
    }
}
