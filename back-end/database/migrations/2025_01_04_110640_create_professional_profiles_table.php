<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfessionalProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('professional_profiles', function (Blueprint $table) {
            $table->id(); // Primary Key
            $table->unsignedBigInteger('user_id'); // Foreign Key
            $table->json('occupation')->nullable();// Store occupation as JSON
            $table->json('skills')->nullable(); // Store skills as JSON
            $table->json('education')->nullable();
            $table->json('certification')->nullable();
            $table->string('website_url')->nullable();
            $table->timestamps();

            // Define the foreign key constraint
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade'); // Delete profile if user is deleted
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('professional_profiles');
    }
}

