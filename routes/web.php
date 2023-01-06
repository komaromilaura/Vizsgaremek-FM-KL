<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/partner/file-export', [\App\Http\Controllers\PartnerController::class, 'fileExport'])->name('file-export');
Route::get('/ellenor/file-export', [\App\Http\Controllers\EllenorController::class, 'fileExport'])->name('file-export');
Route::get('/dolgozo/file-export', [\App\Http\Controllers\DolgozoController::class, 'fileExport'])->name('file-export');
Route::get('/beszerzes/file-export', [\App\Http\Controllers\BeszerzesController::class, 'fileExport'])->name('file-export');
Route::get('/belso_ell/file-export', [\App\Http\Controllers\BelsoEllenorzesController::class, 'fileExport'])->name('file-export');
Route::get('/kulso_ell/file-export', [\App\Http\Controllers\KulsoEllenorzesController::class, 'fileExport'])->name('file-export');

Route::get('/{routes?}', function () {
    return view('welcome');
})->where("routes", '^((?!api).)*$');
