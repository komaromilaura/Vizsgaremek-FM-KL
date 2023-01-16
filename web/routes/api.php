<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'partner'], function() {
    Route::get('/', [\App\Http\Controllers\PartnerController::class, 'getAll'])->name("getPatnerek");
    Route::get('/{partner}', [\App\Http\Controllers\PartnerController::class, 'get'])->name("getPatner");
    Route::post('/', [\App\Http\Controllers\PartnerController::class, 'addPartner'])->name('addPartner');
    Route::put('/{partner}', [\App\Http\Controllers\PartnerController::class, 'updatePartner'])->name('updatePartner');
    Route::delete('/{partner}', [\App\Http\Controllers\PartnerController::class, 'deletePartner'])->name('deletePartner');
});

Route::group(['prefix' => 'beszerzes'], function() {
    Route::get("/", [\App\Http\Controllers\BeszerzesController::class, 'getAll'])->name("getBeszerzesek");
    Route::get("/{beszerzes}", [\App\Http\Controllers\BeszerzesController::class, 'get'])->name("getBeszerzes");
    Route::post("/", [\App\Http\Controllers\BeszerzesController::class, 'addBeszerzes'])->name('addBeszerzes');
    Route::put('/{beszerzes}', [\App\Http\Controllers\BeszerzesController::class, 'updateBeszerzes'])->name('updateBeszerzes');
    Route::delete('/{beszerzes}', [\App\Http\Controllers\BeszerzesController::class, 'deleteBeszerzes'])->name('deleteBeszerzes');
});

Route::group(['prefix' => 'migrans'], function() {
    Route::get("/", [\App\Http\Controllers\MigransEllatasController::class, 'getAll'])->name("getMigransEllatasok");
    Route::get("/{migransEllatas}", [\App\Http\Controllers\MigransEllatasController::class, 'get'])->name("getMigransEllatas");
    Route::post("/", [\App\Http\Controllers\MigransEllatasController::class, 'addMigransEllatas'])->name('addMigransEllatas');
    Route::put('/{migransEllatas}', [\App\Http\Controllers\MigransEllatasController::class, 'updateMigransEllatas'])->name('updateMigransEllatas');
    Route::delete('/{migransEllatas}', [\App\Http\Controllers\MigransEllatasController::class, 'deleteMigransEllatas'])->name('deleteMigransEllatas');
});

Route::group(['prefix' => 'megye'], function() {
    Route::get("/", [\App\Http\Controllers\MegyeController::class, 'getAll'])->name("getMegyek");
    Route::get("/{megye}", [\App\Http\Controllers\MegyeController::class, 'get'])->name("getMegye");
});

Route::group(['prefix' => 'dolgozo'], function() {
    Route::get("/", [\App\Http\Controllers\DolgozoController::class, 'getAll'])->name("getDolgozok");
    Route::get("/{dolgozo}", [\App\Http\Controllers\DolgozoController::class, 'get'])->name("getDolgozo");
    Route::post("/", [\App\Http\Controllers\DolgozoController::class, 'addDolgozo'])->name('addDolgozo');
    Route::put('/{dolgozo}', [\App\Http\Controllers\DolgozoController::class, 'updateDolgozo'])->name('updateDolgozo');
    Route::delete('/{dolgozo}', [\App\Http\Controllers\DolgozoController::class, 'deleteDolgozo'])->name('deleteDolgozo');
});

Route::group(['prefix' => 'belso_ell'], function() {
    Route::get("/", [\App\Http\Controllers\BelsoEllenorzesController::class, 'getAll'])->name("getBelsoEllenorzesek");
    Route::get("/{belsoEllenorzes}", [\App\Http\Controllers\BelsoEllenorzesController::class, 'get'])->name("getBelsoEllenorzes");
    Route::post("/", [\App\Http\Controllers\BelsoEllenorzesController::class, 'addBelsoEllenorzes'])->name('addBelsoEllenorzes');
    Route::put('/{belsoEllenorzes}', [\App\Http\Controllers\BelsoEllenorzesController::class, 'updateBelsoEllenorzes'])->name('updateBelsoEllenorzes');
    Route::delete('/{belsoEllenorzes}', [\App\Http\Controllers\BelsoEllenorzesController::class, 'deleteBelsoEllenorzes'])->name('deleteBelsoEllenorzes');
});

Route::group(['prefix' => 'kulso_ell'], function() {
    Route::get("/", [\App\Http\Controllers\KulsoEllenorzesController::class, 'getAll'])->name("getKulsoEllenorzesek");
    Route::get("/{kulsoEllenorzes}", [\App\Http\Controllers\KulsoEllenorzesController::class, 'get'])->name("getKulsoEllenorzes");
    Route::post("/", [\App\Http\Controllers\KulsoEllenorzesController::class, 'addKulsoEllenorzes'])->name('addKulsoEllenorzes');
    Route::put('/{kulsoEllenorzes}', [\App\Http\Controllers\KulsoEllenorzesController::class, 'updateKulsoEllenorzes'])->name('updateKulsoEllenorzes');
    Route::delete('/{kulsoEllenorzes}', [\App\Http\Controllers\KulsoEllenorzesController::class, 'deleteKulsoEllenorzes'])->name('deleteKulsoEllenorzes');
});

Route::group(['prefix' => 'user'], function() {    
    Route::get("/{user}", [\App\Http\Controllers\UserController::class, 'get'])->name("getUser");
    Route::put('/{user}', [\App\Http\Controllers\UserController::class, 'updatePassword'])->name('updatePassword');
});

Route::group(['prefix' => 'allomas'], function() {
    Route::get("/", [\App\Http\Controllers\AllomasController::class, 'getAll'])->name("getAllomasok");
    Route::get("/{allomas}", [\App\Http\Controllers\AllomasController::class, 'get'])->name("getAllomas");
});

Route::group(['prefix' => 'munkakor'], function() {
    Route::get("/", [\App\Http\Controllers\MunkakorController::class, 'getAll'])->name("getMunkakorok");
    Route::get("/{munkakor}", [\App\Http\Controllers\MunkakorController::class, 'get'])->name("getMunkakor");
});

Route::group(['prefix' => 'ellenor'], function() {
    Route::get('/', [\App\Http\Controllers\EllenorController::class, 'getAll'])->name("getEllenorok");
    Route::get('/{ellenor}', [\App\Http\Controllers\EllenorController::class, 'get'])->name("getEllenor");
    Route::post('/', [\App\Http\Controllers\EllenorController::class, 'addEllenor'])->name('addEllenor');
    Route::put('/{ellenor}', [\App\Http\Controllers\EllenorController::class, 'updateEllenor'])->name('updateEllenor');
    Route::delete('/{ellenor}', [\App\Http\Controllers\EllenorController::class, 'deleteEllenor'])->name('deleteEllenor');
});

Route::group(['prefix' => 'allashely'], function() {
    Route::get("/", [\App\Http\Controllers\AllashelyController::class, 'getAll'])->name("getAllashelyek");
    Route::get("/{allashely}", [\App\Http\Controllers\AllashelyController::class, 'get'])->name("getAllashely");
    Route::post("/", [\App\Http\Controllers\AllashelyController::class, 'addAllashely'])->name('addAllashely');
    Route::put('/{allashely}', [\App\Http\Controllers\AllashelyController::class, 'updateAllashely'])->name('updateAllashely');
    Route::delete('/{allashely}', [\App\Http\Controllers\AllashelyController::class, 'deleteAllashely'])->name('deleteAllashely');
});

Route::group(['prefix' => 'tulora'], function() {
    Route::get("/", [\App\Http\Controllers\TuloraController::class, 'getAll'])->name("getTulorak");
    Route::get("/{tulora}", [\App\Http\Controllers\TuloraController::class, 'get'])->name("getTulora");
    Route::post("/", [\App\Http\Controllers\TuloraController::class, 'addTulora'])->name('addTulora');
    Route::put('/{tulora}', [\App\Http\Controllers\TuloraController::class, 'updateTulora'])->name('updateTulora');
    Route::delete('/{tulora}', [\App\Http\Controllers\TuloraController::class, 'deleteTulora'])->name('deleteTulora');
});

Route::group(['prefix' => 'letszam'], function() {
    Route::get("/", [\App\Http\Controllers\LetszamController::class, 'getAll'])->name("getLetszamok");
    Route::get("/{letszam}", [\App\Http\Controllers\LetszamController::class, 'get'])->name("getLetszam");
    Route::post("/", [\App\Http\Controllers\LetszamController::class, 'addLetszam'])->name('addLetszam');
    Route::put('/{letszam}', [\App\Http\Controllers\LetszamController::class, 'updateLetszam'])->name('updateLetszam');
    Route::delete('/{letszam}', [\App\Http\Controllers\LetszamController::class, 'deleteLetszam'])->name('deleteLetszam');
});

Route::group(['prefix' => 'mozgoorseg'], function() {
    Route::get("/", [\App\Http\Controllers\MozgoorsegController::class, 'getAll'])->name("getMozgoorsegek");
    Route::get("/{mozgoorseg}", [\App\Http\Controllers\MozgoorsegController::class, 'get'])->name("getMozgoorseg");
    Route::post("/", [\App\Http\Controllers\MozgoorsegController::class, 'addMozgoorseg'])->name('addMozgoorseg');
    Route::put('/{mozgoorseg}', [\App\Http\Controllers\MozgoorsegController::class, 'updateMozgoorseg'])->name('updateMozgoorseg');
    Route::delete('/{mozgoorseg}', [\App\Http\Controllers\MozgoorsegController::class, 'deleteMozgoorseg'])->name('deleteMozgoorseg');
});
