<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->integer('IVIR')->unsiged()->primaryKey();
            $table->string('Vezetek_nev');
            $table->string('Kereszt_nev');
            $table->string('Jelszo');
            $table->integer('Vas');
            $table->integer('Gyor');
            $table->integer('Zala');
            $table->integer('Admin');
            $table->integer('Aktiv')->nullable();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
