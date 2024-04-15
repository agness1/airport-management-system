<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('_access_roles', function (Blueprint $table) {
            $table->id();
            $table->string('Role', 50);
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('_access_roles');
    }
};
