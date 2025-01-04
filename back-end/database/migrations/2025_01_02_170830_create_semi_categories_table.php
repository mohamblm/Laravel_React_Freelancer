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
        Schema::create('semi_categories', function (Blueprint $table) {
            $table->id(); // Primary Key
            $table->string('name'); // Subcategory name
            $table->unsignedBigInteger('subcategory_id'); // Foreign key to categories table
            $table->timestamps(); // created_at and updated_at
        
            // Foreign key constraint
            $table->foreign('subcategory_id')->references('id')->on('sub_categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('semi_categories');
    }
};
