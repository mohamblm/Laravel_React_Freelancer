<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subcategories = [
            // Digital Marketing
            ['name' => 'Search', 'category_id' => 1],
            ['name' => 'Social', 'category_id' => 1],
            ['name' => 'Channel Specific', 'category_id' => 1],
            ['name' => 'Industry & Purpose-Specific', 'category_id' => 1],
            ['name' => 'Methods & Techniques', 'category_id' => 1],
            ['name' => 'Analytics & Strategy', 'category_id' => 1],
            ['name' => 'Miscellaneous', 'category_id' => 1],
            // Graphics & Design
            ['name' => 'Logo & Brand Identity', 'category_id' => 2],
            ['name' => 'Art & Illustration', 'category_id' => 2],
            ['name' => 'Web & App Design', 'category_id' => 2],
            ['name' => 'Product & Gaming', 'category_id' => 2],
            ['name' => 'Print Design', 'category_id' => 2],
            ['name' => 'Visual Design', 'category_id' => 2],
            ['name' => 'Marketing Design', 'category_id' => 2],
            ['name' => 'Packaging & Covers', 'category_id' => 2],
            ['name' => 'Architecture & Building Design', 'category_id' => 2],
            ['name' => 'Fashion & Merchandise', 'category_id' => 2],
            ['name' => '3D Design', 'category_id' => 2],
            ['name' => 'Miscellaneous', 'category_id' => 2],
            // Writing & Translation
            ['name' => 'Content Writing', 'category_id' => 3], 
            ['name' => 'Editing & Critique', 'category_id' => 3], 
            ['name' => 'Book & eBook Publishing', 'category_id' => 3], 
            ['name' => 'Career Writing', 'category_id' => 3],  
            ['name' => 'Business & Marketing Copy', 'category_id' => 3], 
            ['name' => 'Translation & Transcription', 'category_id' => 3], 
            ['name' => 'Industry Specific Content', 'category_id' => 3],
            ['name' => 'Miscellaneous', 'category_id' => 3],
            // Businesse
            ['name' => 'Business Formation & Consulting', 'category_id' => 4], 
            ['name' => 'Legal Services', 'category_id' => 4], 
            ['name' => 'Operations & Management', 'category_id' => 4], 
            ['name' => 'Data & Business Intelligence', 'category_id' => 4], 
            ['name' => 'Sales & Customer Care', 'category_id' => 4], 
            ['name' => 'Miscellaneous', 'category_id' => 4],
            // Programming & Tech
            ['name' => 'Website Development', 'category_id' => 5],
            ['name' => 'Website Platforms', 'category_id' => 5],
            ['name' => 'Website Maintenance', 'category_id' => 5],
            ['name' => 'AI Development', 'category_id' => 5],
            ['name' => 'Chatbot Development', 'category_id' => 5],
            ['name' => 'Game Development', 'category_id' => 5],
            ['name' => 'Mobile App Development', 'category_id' => 5],
            ['name' => 'Cloud & Cybersecurity', 'category_id' => 5],
            ['name' => 'Data Science & ML', 'category_id' => 5],
            ['name' => 'Software Development', 'category_id' => 5],
            ['name' => 'Blockchain & Cryptocurrency', 'category_id' => 5],
            ['name' => 'Miscellaneous', 'category_id' => 5],
            // Music & Audio
            ['name' => 'Music Production & Writing', 'category_id' => 6], 
            ['name' => 'Audio Engineering & Post Production', 'category_id' => 6], 
            ['name' => 'Voice Over & Narration', 'category_id' => 6], 
            ['name' => 'Streaming & Audio', 'category_id' => 6], 
            ['name' => 'DJing', 'category_id' => 6], 
            ['name' => 'Sound Design', 'category_id' => 6], 
            ['name' => 'Lessons & Transcriptions', 'category_id' => 6],
            // Video & Animation
            ['name' => 'Editing & Post-Production', 'category_id' => 7],
            ['name' => 'Presenter Videos', 'category_id' => 7],
            ['name' => 'Explainer Videos', 'category_id' => 7],
            ['name' => 'Miscellaneous', 'category_id' => 7],
            ['name' => 'Animation', 'category_id' => 7],
            ['name' => 'Social & Marketing Videos', 'category_id' => 7],
            ['name' => 'Motion Graphics', 'category_id' => 7],
            ['name' => 'Filmed Video Production', 'category_id' => 7],
            ['name' => 'AI Video', 'category_id' => 7],
            // Finance
            ['name' => 'Accounting Services', 'category_id' => 8],
            ['name' => 'Tax Consulting', 'category_id' => 8],
            ['name' => 'Personal Finance & Wealth Management', 'category_id' => 8],
            ['name' => 'Fundraising', 'category_id' => 8],
            ['name' => 'Corporate Finance', 'category_id' => 8],
            ['name' => 'Financial Planning & Analysis', 'category_id' => 8],
            // AI Services
            ['name' => 'AI Mobile Development', 'category_id' => 9],
            ['name' => 'AI Artists', 'category_id' => 9],
            ['name' => 'AI Video', 'category_id' => 9],
            ['name' => 'AI Audio', 'category_id' => 9],
            ['name' => 'AI Content', 'category_id' => 9],
            ['name' => 'Data', 'category_id' => 9],
            ['name' => 'AI for Businesses', 'category_id' => 9],
            // Personal Growth
            ['name' => 'Self Improvement', 'category_id' => 10],
            ['name' => 'Wellness & Fitness', 'category_id' => 10],
            ['name' => 'Leisure & Hobbies', 'category_id' => 10],
            ['name' => 'Fashion & Style', 'category_id' => 10],
            ['name' => 'Gaming', 'category_id' => 10],
            ['name' => 'Miscellaneous', 'category_id' => 10],
            // Consulting
            ['name' => 'Business Consultants', 'category_id' => 11],
            ['name' => 'Marketing Strategy', 'category_id' => 11],
            ['name' => 'Coaching & Advice', 'category_id' => 11],
            ['name' => 'Tech Consulting', 'category_id' => 11],
            ['name' => 'Mentorship', 'category_id' => 11],
            ['name' => 'Data Consulting', 'category_id' => 11],
        ];

        DB::table('sub_categories')->insert($subcategories);
    }
}
