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
            ['name' => 'Digital Marketing'],
            ['name' => 'Graphics & Design'],
            ['name' => 'Writing & Translation'],
            ['name' => 'Business'],
            ['name' => 'Programming & Tech'],
            ['name' => 'Music & Audio'],
            ['name' => 'Video & Animation'],
            ['name' => 'Finance'],
            ['name' => 'AI Services'],
            ['name' => 'Personal Growth'],
            ['name'=> 'Consulting']
        ];

        DB::table('categories')->insert($categories);
    }
}
