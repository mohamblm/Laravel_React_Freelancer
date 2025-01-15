<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'user_id' => 1,
                'category_id' => 1,
                'subcategory_id' => 1,
                'semicategory_id' => 1,
                'title' => 'Professional Logo Design',
                'description' => 'Create a professional logo tailored to your brand identity.',
                'price' => 50.00,
                'status' => 'active',
                'image_url' => json_encode(['https://example.com/logo1.jpg']),
            ],
            [
                'user_id' => 2,
                'category_id' => 2,
                'subcategory_id' => 3,
                'semicategory_id' => 5,
                'title' => 'Website Development',
                'description' => 'Build a fully responsive website for your business or personal use.',
                'price' => 300.00,
                'status' => 'active',
                'image_url' => json_encode(['https://example.com/webdev1.jpg']),
            ],
            // Add 18 more services below
        ];

        for ($i = 3; $i <= 20; $i++) {
            $services[] = [
                'user_id' => rand(1, 10),
                'category_id' => rand(1, 5),
                'subcategory_id' => rand(1, 10),
                'semicategory_id' => rand(1, 15),
                'title' => 'Service Title ' . $i,
                'description' => 'Description for service ' . $i,
                'price' => rand(10, 500),
                'status' => ['active', 'paused', 'denied', 'draft'][array_rand(['active', 'paused', 'denied', 'draft'])],
                'image_url' => json_encode(['https://example.com/image' . $i . '.jpg']),
            ];
        }

        DB::table('services')->insert($services);
    }
}
