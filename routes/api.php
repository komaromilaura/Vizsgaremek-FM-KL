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
