<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class CategorySeeder extends Seeder
{
     /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [ 'name' => 'Web Development'],
            [ 'name' => 'Mobile App Development'],
            [ 'name' => 'UI/UX Design'],
            [ 'name' => 'Digital Marketing'],
            [ 'name' => 'SEO Services'],
            [ 'name' => 'Content Writing'],
            [ 'name' => 'Graphic Design'],
            [ 'name' => 'Video Editing'],
            [ 'name' => 'E-commerce Development'],
            [ 'name' => 'Data Analysis & Visualization'],
        ];

        DB::table('categories')->insert($categories);
    }
}
