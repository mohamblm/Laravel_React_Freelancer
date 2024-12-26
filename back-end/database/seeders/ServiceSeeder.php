<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB; // Add this line to import the DB facade
use Illuminate\Support\Str;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Ensure you have at least 1 user and 1 category in your database
        $userIds = DB::table('users')->pluck('id')->toArray();
        $categoryIds = DB::table('categories')->pluck('id')->toArray();

        if (empty($userIds) || empty($categoryIds)) {
            $this->command->error('You need at least one user and one category to seed services.');
            return;
        }

        $statuses = ['active', 'inactive'];

        for ($i = 1; $i <= 20; $i++) {
            DB::table('services')->insert([
                'user_id' => $userIds[array_rand($userIds)],
                'category_id' => $categoryIds[array_rand($categoryIds)],
                'title' => 'Service ' . $i,
                'description' => 'This is a detailed description for service ' . $i,
                'price' => rand(100, 1000), // Random price between 100 and 1000
                'status' => $statuses[array_rand($statuses)],
                'image_url' => 'https://via.placeholder.com/150', // Placeholder image
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
