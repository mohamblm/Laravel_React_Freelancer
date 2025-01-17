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
            $table->unsignedBigInteger('category_id')->nullable(); // Foreign key to categories table (service provider)
            $table->unsignedBigInteger('subcategory_id')->nullable();
            $table->unsignedBigInteger('semicategory_id')->nullable();
            $table->string('title');// Service title
            $table->text('description'); // Detailed description of the service
            $table->decimal('price', 10, 2); // Service price
            $table->enum('status', ['active', 'paused','denied','draft'])->default('draft'); // Status of the service
            $table->json('image_url'); // Image URL for the service
            $table->timestamps(); // created_at and updated_at

            // foreign key:
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->foreign('subcategory_id')->references('id')->on('sub_categories')->onDelete('cascade');
            $table->foreign('semicategory_id')->references('id')->on('semi_categories')->onDelete('cascade');
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
