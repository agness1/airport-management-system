<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('statuses', function (Blueprint $table) {
            $table->id();
            $table->enum('Terminal', ['open', 'closed'])->unique();
            $table->enum('RWYL', ['open', 'closed'])->unique();
            $table->enum('RWYR', ['open', 'closed'])->unique();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('statuses');
    }
};
