<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('renovation_works', function (Blueprint $table) {
            $table->id();
            $table->foreignId('AreaID')->constrained('area_of_renovation')->cascadeOnDelete();
            $table->date('StartDate');
            $table->date('EndDate');
            $table->string('Description', 255); // Dostosuj rozmiar kolumny do swoich potrzeb
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('renovation_works');
    }
};
