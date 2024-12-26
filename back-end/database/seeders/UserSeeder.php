<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'user_name' => 'john_doe',
                'email' => 'john.doe@example.com',
                'password' => Hash::make('password123'),
                'role' => 'customer',
                'email_verified_at' => now(),
            ],
            [
                'user_name' => 'jane_smith',
                'email' => 'jane.smith@example.com',
                'password' => Hash::make('password123'),
                'role' => 'service_provider',
                'email_verified_at' => now(),
            ],
            [
                'user_name' => 'admin_user',
                'email' => 'admin@example.com',
                'password' => Hash::make('adminpassword'),
                'role' => 'admin',
                'email_verified_at' => now(),
            ],
            // Add more users here...
        ];

        // Generate remaining users dynamically
        for ($i = 1; $i <= 7; $i++) {
            $users[] = [
                'user_name' => "user_$i",
                'email' => "user$i@example.com",
                'password' => Hash::make('password123'),
                'role' => 'customer',
                'email_verified_at' => now(),
            ];
        }

        DB::table('users')->insert($users);
    }
}
