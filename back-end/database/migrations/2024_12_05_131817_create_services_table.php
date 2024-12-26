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
        Schema::create('services', function (Blueprint $table) {
            $table->id();// primary key
            $table->unsignedBigInteger('user_id'); // Foreign key to users table (service provider)
            $table->unsignedBigInteger('category_id'); // Foreign key to categories table (service provider)
            $table->string('title');// Service title
            $table->text('description'); // Detailed description of the service
            $table->decimal('price', 10, 2); // Service price
            $table->enum('status', ['active', 'inactive'])->default('active'); // Status of the service
            $table->string('image_url')->nullable(); // Image URL for the service
            $table->timestamps(); // created_at and updated_at

            // foreign key:
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
