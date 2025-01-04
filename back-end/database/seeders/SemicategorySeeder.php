<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SemicategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $semicategories = [
              // Search (subcategory_id: 1)
            ['name' => 'Search Engine Optimization (SEO)', 'subcategory_id' => 1],
            ['name' => 'Search Engine Marketing (SEM)', 'subcategory_id' => 1],
            ['name' => 'Local SEO', 'subcategory_id' => 1],
            ['name' => 'E-Commerce SEO', 'subcategory_id' => 1],
            ['name' => 'Video SEO', 'subcategory_id' => 1],

            // Social (subcategory_id: 2)
            ['name' => 'Social Media Marketing', 'subcategory_id' => 2],
            ['name' => 'Paid Social Media', 'subcategory_id' => 2],
            ['name' => 'Social Commerce', 'subcategory_id' => 2],
            ['name' => 'Influencer Marketing', 'subcategory_id' => 2],
            ['name' => 'Community Management', 'subcategory_id' => 2],

            // Channel Specific (subcategory_id: 3)
            ['name' => 'TikTok Shop', 'subcategory_id' => 3],
            ['name' => 'Facebook Ads Campaign', 'subcategory_id' => 3],
            ['name' => 'Instagram Marketing', 'subcategory_id' => 3],
            ['name' => 'Google SEM', 'subcategory_id' => 3],
            ['name' => 'Shopify Marketing', 'subcategory_id' => 3],

            // Industry & Purpose-Specific (subcategory_id: 4)
            ['name' => 'Music Promotion', 'subcategory_id' => 4],
            ['name' => 'Podcast Marketing', 'subcategory_id' => 4],
            ['name' => 'Book & eBook Marketing', 'subcategory_id' => 4],
            ['name' => 'Mobile App Marketing', 'subcategory_id' => 4],

            // Methods & Techniques (subcategory_id: 5)
            ['name' => 'Video Marketing', 'subcategory_id' => 5],
            ['name' => 'E-Commerce Marketing', 'subcategory_id' => 5],
            ['name' => 'Email Marketing', 'subcategory_id' => 5],
            ['name' => 'Email Automations', 'subcategory_id' => 5],
            ['name' => 'Guest Posting', 'subcategory_id' => 5],
            ['name' => 'Affiliate Marketing', 'subcategory_id' => 5],
            ['name' => 'Display Advertising', 'subcategory_id' => 5],
            ['name' => 'Public Relations', 'subcategory_id' => 5],
            ['name' => 'Text Message Marketing', 'subcategory_id' => 5],

            // Analytics & Strategy (subcategory_id: 6)
            ['name' => 'Marketing Strategy', 'subcategory_id' => 6],
            ['name' => 'Marketing Concepts & Ideation', 'subcategory_id' => 6],
            ['name' => 'Marketing Advice', 'subcategory_id' => 6],
            ['name' => 'Web Analytics', 'subcategory_id' => 6],
            ['name' => 'Conversion Rate Optimization (CRO)', 'subcategory_id' => 6],

            // Miscellaneous (subcategory_id: 7)
            ['name' => 'Crowdfunding', 'subcategory_id' => 7],
            ['name' => 'Other', 'subcategory_id' => 7],

            // Graphics & Design (category_id: 2)
            // Logo & Brand Identity (subcategory_id: 8)
            ['name' => 'Logo Design', 'subcategory_id' => 8],
            ['name' => 'Brand Style Guides', 'subcategory_id' => 8],
            ['name' => 'Business Cards & Stationery', 'subcategory_id' => 8],
            ['name' => 'Fonts & Typography', 'subcategory_id' => 8],
            ['name' => 'Logo Maker Tool', 'subcategory_id' => 8],

            // Art & Illustration (subcategory_id: 9)
            ['name' => 'Illustration', 'subcategory_id' => 9],
            ['name' => 'AI Artists', 'subcategory_id' => 9],
            ['name' => 'AI Avatar Design', 'subcategory_id' => 9],
            ['name' => 'Children\'s Book Illustration', 'subcategory_id' => 9],
            ['name' => 'Portraits & Caricatures', 'subcategory_id' => 9],
            ['name' => 'Cartoons & Comics', 'subcategory_id' => 9],
            ['name' => 'Pattern Design', 'subcategory_id' => 9],
            ['name' => 'Tattoo Design', 'subcategory_id' => 9],
            ['name' => 'Storyboards', 'subcategory_id' => 9],
            ['name' => 'NFT Art', 'subcategory_id' => 9],

            // Web & App Design (subcategory_id: 10)
            ['name' => 'Website Design', 'subcategory_id' => 10],
            ['name' => 'App Design', 'subcategory_id' => 10],
            ['name' => 'UX Design', 'subcategory_id' => 10],
            ['name' => 'Landing Page Design', 'subcategory_id' => 10],
            ['name' => 'Icon Design', 'subcategory_id' => 10],

            // Product & Gaming (subcategory_id: 11)
            ['name' => 'Industrial & Product Design', 'subcategory_id' => 11],
            ['name' => 'Character Modeling', 'subcategory_id' => 11],
            ['name' => 'Game Art', 'subcategory_id' => 11],
            ['name' => 'Graphics for Streamers', 'subcategory_id' => 11],

            // Print Design (subcategory_id: 12)
            ['name' => 'Flyer Design', 'subcategory_id' => 12],
            ['name' => 'Brochure Design', 'subcategory_id' => 12],
            ['name' => 'Poster Design', 'subcategory_id' => 12],
            ['name' => 'Catalog Design', 'subcategory_id' => 12],
            ['name' => 'Menu Design', 'subcategory_id' => 12],

            // Visual Design (subcategory_id: 13)
            ['name' => 'Image Editing', 'subcategory_id' => 13],
            ['name' => 'AI Image Editing', 'subcategory_id' => 13],
            ['name' => 'Presentation Design', 'subcategory_id' => 13],
            ['name' => 'Background Removal', 'subcategory_id' => 13],
            ['name' => 'Infographic Design', 'subcategory_id' => 13],
            ['name' => 'Vector Tracing', 'subcategory_id' => 13],
            ['name' => 'Resume Design', 'subcategory_id' => 13],

            // Marketing Design (subcategory_id: 14)
            ['name' => 'Social Media Design', 'subcategory_id' => 14],
            ['name' => 'Social Posts & Banners', 'subcategory_id' => 14],
            ['name' => 'Email Design', 'subcategory_id' => 14],
            ['name' => 'Web Banners', 'subcategory_id' => 14],
            ['name' => 'Signage Design', 'subcategory_id' => 14],

            // Packaging & Covers (subcategory_id: 15)
            ['name' => 'Packaging & Label Design', 'subcategory_id' => 15],
            ['name' => 'Book Design', 'subcategory_id' => 15],
            ['name' => 'Book Covers', 'subcategory_id' => 15],
            ['name' => 'Album Cover Design', 'subcategory_id' => 15],

            // Architecture & Building Design (subcategory_id: 16)
            ['name' => 'Architecture & Interior Design', 'subcategory_id' => 16],
            ['name' => 'Landscape Design', 'subcategory_id' => 16],
            ['name' => 'Building Engineering', 'subcategory_id' => 16],
            ['name' => 'Lighting Design', 'subcategory_id' => 16],

            // Fashion & Merchandise (subcategory_id: 17)
            ['name' => 'T-Shirts & Merchandise', 'subcategory_id' => 17],
            ['name' => 'Fashion Design', 'subcategory_id' => 17],
            ['name' => 'Jewelry Design', 'subcategory_id' => 17],

            // 3D Design (subcategory_id: 18)
            ['name' => '3D Architecture', 'subcategory_id' => 18],
            ['name' => '3D Industrial Design', 'subcategory_id' => 18],
            ['name' => '3D Fashion & Garment', 'subcategory_id' => 18],
            ['name' => '3D Printing Characters', 'subcategory_id' => 18],
            ['name' => '3D Landscape', 'subcategory_id' => 18],
            ['name' => '3D Game Art', 'subcategory_id' => 18],
            ['name' => '3D Jewelry Design', 'subcategory_id' => 18],

            // Miscellaneous (subcategory_id: 19)
            ['name' => 'Design Advice', 'subcategory_id' => 19],

            // Writing & Translation (category_id: 3)
            // Content Writing (subcategory_id: 20)
            ['name' => 'Articles & Blog Posts', 'subcategory_id' => 20],
            ['name' => 'Website Content', 'subcategory_id' => 20],
            ['name' => 'Creative Writing', 'subcategory_id' => 20],
            ['name' => 'Technical Writing', 'subcategory_id' => 20],
            ['name' => 'SEO Writing', 'subcategory_id' => 20],

            // Editing & Critique (subcategory_id: 21)
            ['name' => 'Proofreading & Editing', 'subcategory_id' => 21],
            ['name' => 'Content Critique', 'subcategory_id' => 21],
            ['name' => 'Copy Editing', 'subcategory_id' => 21],

            // Book & eBook Publishing (subcategory_id: 22)
            ['name' => 'Book Writing', 'subcategory_id' => 22],
            ['name' => 'eBook Writing', 'subcategory_id' => 22],
            ['name' => 'Book Formatting', 'subcategory_id' => 22],
            ['name' => 'Book Cover Design', 'subcategory_id' => 22],

            // Career Writing (subcategory_id: 23)
            ['name' => 'Resume Writing', 'subcategory_id' => 23],
            ['name' => 'Cover Letters', 'subcategory_id' => 23],
            ['name' => 'LinkedIn Profiles', 'subcategory_id' => 23],

            // Business & Marketing Copy (subcategory_id: 24)
            ['name' => 'Business Plans', 'subcategory_id' => 24],
            ['name' => 'Marketing Copy', 'subcategory_id' => 24],
            ['name' => 'Product Descriptions', 'subcategory_id' => 24],

            // Translation & Transcription (subcategory_id: 25)
            ['name' => 'Translation', 'subcategory_id' => 25],
            ['name' => 'Transcription', 'subcategory_id' => 25],

            // Industry Specific Content (subcategory_id: 26)
            ['name' => 'Business, Finance & Law', 'subcategory_id' => 26],
            ['name' => 'Health & Medical', 'subcategory_id' => 26],
            ['name' => 'Technology & IT', 'subcategory_id' => 26],

            // Miscellaneous (subcategory_id: 27)
            ['name' => 'Brand Voice & Tone', 'subcategory_id' => 27],
            ['name' => 'Speech Writing', 'subcategory_id' => 27],
            ['name' => 'Script Writing', 'subcategory_id' => 27],

            // Business (category_id: 4)
            // Business Formation & Consulting (subcategory_id: 28)
            ['name' => 'Business Formation & Registration', 'subcategory_id' => 28],
            ['name' => 'Market Research', 'subcategory_id' => 28],
            ['name' => 'Business Plans', 'subcategory_id' => 28],
            ['name' => 'Business Consulting', 'subcategory_id' => 28],
            ['name' => 'HR Consulting', 'subcategory_id' => 28],
            ['name' => 'AI Consulting', 'subcategory_id' => 28],

            // Legal Services (subcategory_id: 29)
            ['name' => 'Intellectual Property Management', 'subcategory_id' => 29],
            ['name' => 'Legal Documents & Contracts', 'subcategory_id' => 29],
            ['name' => 'Legal Research', 'subcategory_id' => 29],
            ['name' => 'General Legal Advice', 'subcategory_id' => 29],

            // Operations & Management (subcategory_id: 30)
            ['name' => 'Virtual Assistant', 'subcategory_id' => 30],
            ['name' => 'Project Management', 'subcategory_id' => 30],
            ['name' => 'Software Management', 'subcategory_id' => 30],
            ['name' => 'E-Commerce Management', 'subcategory_id' => 30],
            ['name' => 'Supply Chain Management', 'subcategory_id' => 30],
            ['name' => 'Event Management', 'subcategory_id' => 30],
            ['name' => 'Product Management', 'subcategory_id' => 30],

            // Data & Business Intelligence 
            ['name' => 'Data Visualization', 'subcategory_id' => 31], 
            ['name' => 'Data Analytics', 'subcategory_id' => 31], 
            ['name' => 'Data Scraping', 'subcategory_id' => 31], 
            // Sales & Customer Care 
            ['name' => 'Sales', 'subcategory_id' => 32], 
            ['name' => 'Lead Generation', 'subcategory_id' => 32], 
            ['name' => 'Call Center & Calling', 'subcategory_id' => 32], 
            ['name' => 'Customer Care', 'subcategory_id' => 32], 
            // Miscellaneous 
            ['name' => 'Presentations', 'subcategory_id' => 33], 
            ['name' => 'Online Investigations', 'subcategory_id' => 33], 
            ['name' => 'Sustainability Consulting', 'subcategory_id' => 33], 
            ['name' => 'Game Concept Design', 'subcategory_id' => 33], 
            ['name' => 'Other', 'subcategory_id'=> 33],


            // Programming & Tech
            // Website Development
            ['name' => 'Business Websites', 'subcategory_id' => 34],
            ['name' => 'E-Commerce Development', 'subcategory_id' => 34],
            ['name' => 'Landing Pages', 'subcategory_id' => 34],
            ['name' => 'Dropshipping Websites', 'subcategory_id' => 34],
            ['name' => 'Build a Complete Website', 'subcategory_id' => 34],

            // Website Platforms
            ['name' => 'WordPress', 'subcategory_id' => 35],
            ['name' => 'Shopify', 'subcategory_id' => 35],
            ['name' => 'Wix', 'subcategory_id' => 35],
            ['name' => 'Custom Websites', 'subcategory_id' => 35],
            ['name' => 'GoDaddy', 'subcategory_id' => 35],

            // Website Maintenance
            ['name' => 'Website Customization', 'subcategory_id' => 36],
            ['name' => 'Bug Fixes', 'subcategory_id' => 36],
            ['name' => 'Backup & Migration', 'subcategory_id' => 36],
            ['name' => 'Speed Optimization', 'subcategory_id' => 36],

            // AI Development
            ['name' => 'AI Websites & Software', 'subcategory_id' => 37],
            ['name' => 'AI Mobile Apps', 'subcategory_id' => 37],
            ['name' => 'AI Integrations', 'subcategory_id' => 37],
            ['name' => 'AI Agents', 'subcategory_id' => 37],
            ['name' => 'AI Fine-Tuning', 'subcategory_id' => 37],
            ['name' => 'AI Technology Consulting', 'subcategory_id' => 37],

            // Chatbot Development
            ['name' => 'AI Chatbot', 'subcategory_id' => 38],
            ['name' => 'Rules Based Chatbot', 'subcategory_id' => 38],
            ['name' => 'Discord', 'subcategory_id' => 38],
            ['name' => 'Telegram', 'subcategory_id' => 38],

            // Game Development
            ['name' => 'Gameplay Experience & Feedback', 'subcategory_id' => 39],
            ['name' => 'PC Games', 'subcategory_id' => 39],
            ['name' => 'Mobile Games', 'subcategory_id' => 39],

            // Mobile App Development
            ['name' => 'Cross-platform Development', 'subcategory_id' => 40],
            ['name' => 'Android App Development', 'subcategory_id' => 40],
            ['name' => 'iOS App Development', 'subcategory_id' => 40],
            ['name' => 'Website to App', 'subcategory_id' => 40],
            ['name' => 'Mobile App Maintenance', 'subcategory_id' => 40],
            ['name' => 'VR & AR Development', 'subcategory_id' => 40],

            // Cloud & Cybersecurity
            ['name' => 'Cloud Computing', 'subcategory_id' => 41],
            ['name' => 'DevOps Engineering', 'subcategory_id' => 41],
            ['name' => 'Cybersecurity', 'subcategory_id' => 41],

            // Data Science & ML
            ['name' => 'Machine Learning', 'subcategory_id' => 42],
            ['name' => 'Computer Vision', 'subcategory_id' => 42],
            ['name' => 'NLP', 'subcategory_id' => 42],
            ['name' => 'Deep Learning', 'subcategory_id' => 42],

            // Software Development
            ['name' => 'Web Applications', 'subcategory_id' => 43],
            ['name' => 'Desktop Applications', 'subcategory_id' => 43],
            ['name' => 'Automations & Workflows', 'subcategory_id' => 43],
            ['name' => 'APIs & Integrations', 'subcategory_id' => 43],
            ['name' => 'Databases', 'subcategory_id' => 43],
            ['name' => 'Scripting', 'subcategory_id' => 43],
            ['name' => 'QA & Review', 'subcategory_id' => 43],
            ['name' => 'User Testing', 'subcategory_id' => 43],

            // Blockchain & Cryptocurrency
            ['name' => 'Decentralized Apps (dApps)', 'subcategory_id' => 44],
            ['name' => 'Cryptocurrencies & Tokens', 'subcategory_id' => 44],
            ['name' => 'Exchange Platforms', 'subcategory_id' => 44],

            // Miscellaneous
            ['name' => 'Electronics Engineering', 'subcategory_id' => 45],
            ['name' => 'Support & IT', 'subcategory_id' => 45],
            ['name' => 'Discord Server Setup', 'subcategory_id' => 45],
            ['name' => 'Convert Files', 'subcategory_id' => 45],

            // Music & Audio
            // Music Production & Writing 
            ['name' => 'Music Producers', 'subcategory_id' => 46], 
            ['name' => 'Composers', 'subcategory_id' => 46], 
            ['name' => 'Singers & Vocalists', 'subcategory_id' => 46], 
            ['name' => 'Session Musicians', 'subcategory_id' => 46], 
            ['name' => 'Songwriters', 'subcategory_id' => 46], 
            ['name' => 'Jingles & Intros', 'subcategory_id' => 46], 
            ['name' => 'Custom Songs', 'subcategory_id' => 46], 
            // Audio Engineering & Post Production 
            ['name' => 'Mixing & Mastering', 'subcategory_id' => 47], 
            ['name' => 'Audio Editing', 'subcategory_id' => 47], 
            ['name' => 'Vocal Tuning', 'subcategory_id' => 47], 
            // Voice Over & Narration 
            ['name' => '24hr Turnaround', 'subcategory_id' => 48], 
            ['name' => 'Female Voice Over', 'subcategory_id' => 48], 
            ['name' => 'Male Voice Over', 'subcategory_id' => 48], 
            ['name' => 'French Voice Over', 'subcategory_id' => 48], 
            ['name' => 'German Voice Over', 'subcategory_id' => 48], 
            // Streaming & Audio 
            ['name' => 'Podcast Production', 'subcategory_id' => 49], 
            ['name' => 'Audiobook Production', 'subcategory_id' => 49], 
            ['name' => 'Audio Ads Production', 'subcategory_id' => 49], 
            ['name' => 'Voice Synthesis & AI', 'subcategory_id' => 49], 
            // DJing 
            ['name' => 'DJ Drops & Tags', 'subcategory_id' => 50], 
            ['name' => 'DJ Mixing', 'subcategory_id' => 50], 
            ['name' => 'Remixing', 'subcategory_id' => 50], 
            // Sound Design 
            ['name' => 'Sound Design', 'subcategory_id' => 51], 
            ['name' => 'Meditation Music', 'subcategory_id' => 51], 
            ['name' => 'Audio Logo & Sonic Branding', 'subcategory_id' => 51], 
            ['name' => 'Custom Patches & Samples', 'subcategory_id' => 51], 
            ['name' => 'Audio Plugin Development', 'subcategory_id' => 51], 
            // Lessons & Transcriptions 
            ['name' => 'Online Music Lessons', 'subcategory_id' => 52], 
            ['name' => 'Music Transcription', 'subcategory_id' => 52], 
            ['name' => 'Music & Audio Advice', 'subcategory_id' => 52],
            
            // Video & Animation
            // Editing & Post-Production
            ['name' => 'Video Editing', 'subcategory_id' => 53],
            ['name' => 'Visual Effects', 'subcategory_id' => 53],
            ['name' => 'Video Art', 'subcategory_id' => 53],
            ['name' => 'Intro & Outro Videos', 'subcategory_id' => 53],
            ['name' => 'Video Templates Editing', 'subcategory_id' => 53],
            ['name' => 'Subtitles & Captions', 'subcategory_id' => 53],

            // Presenter Videos
            ['name' => 'UGC Videos', 'subcategory_id' => 54],
            ['name' => 'Spokesperson Videos', 'subcategory_id' => 54],
            ['name' => 'UGC Ads', 'subcategory_id' => 54],
            ['name' => 'TikTok UGC Videos', 'subcategory_id' => 54],

            // Explainer Videos
            ['name' => 'Animated Explainers', 'subcategory_id' => 55],
            ['name' => 'Live Action Explainers', 'subcategory_id' => 55],
            ['name' => 'Screencasting Videos', 'subcategory_id' => 55],
            ['name' => 'eLearning Video Production', 'subcategory_id' => 55],
            ['name' => 'Crowdfunding Videos', 'subcategory_id' => 55],

            // Miscellaneous
            ['name' => 'Virtual & Streaming Avatars', 'subcategory_id' => 56],
            ['name' => 'Article to Video', 'subcategory_id' => 56],
            ['name' => 'Game Trailers', 'subcategory_id' => 56],
            ['name' => 'Game Recordings & Guides', 'subcategory_id' => 56],
            ['name' => 'Meditation Videos', 'subcategory_id' => 56],
            ['name' => 'Real Estate Promos', 'subcategory_id' => 56],
            ['name' => 'Book Trailers', 'subcategory_id' => 56],
            ['name' => 'Video Advice', 'subcategory_id' => 56],

            // Animation
            ['name' => 'Character Animation', 'subcategory_id' => 57],
            ['name' => 'Animated GIFs', 'subcategory_id' => 57],
            ['name' => 'Animation for Kids', 'subcategory_id' => 57],
            ['name' => 'Animation for Streamers', 'subcategory_id' => 57],
            ['name' => 'Rigging', 'subcategory_id' => 57],
            ['name' => 'NFT Animation', 'subcategory_id' => 57],

            // Social & Marketing Videos
            ['name' => 'Video Ads & Commercials', 'subcategory_id' => 58],
            ['name' => 'Social Media Videos', 'subcategory_id' => 58],
            ['name' => 'Music Videos', 'subcategory_id' => 58],
            ['name' => 'Slideshow Videos', 'subcategory_id' => 58],

            // Motion Graphics
            ['name' => 'Logo Animation', 'subcategory_id' => 59],
            ['name' => 'Lottie & Web Animation', 'subcategory_id' => 59],
            ['name' => 'Text Animation', 'subcategory_id' => 59],

            // Filmed Video Production
            ['name' => 'Videographers', 'subcategory_id' => 60],
            ['name' => 'Filmed Video Production', 'subcategory_id' => 60],

            // AI Video
            ['name' => 'AI Video Art', 'subcategory_id' => 61],
            ['name' => 'AI Music Videos', 'subcategory_id' => 61],
            ['name' => 'AI Video Avatars', 'subcategory_id' => 61],
            
            // Finance
            // Accounting Services
            ['name' => 'Fractional CFO Services', 'subcategory_id' => 62],
            ['name' => 'Financial Reporting', 'subcategory_id' => 62],
            ['name' => 'Bookkeeping', 'subcategory_id' => 62],
            ['name' => 'Payroll Management', 'subcategory_id' => 62],

            // Tax Consulting
            ['name' => 'Tax Returns', 'subcategory_id' => 63],
            ['name' => 'Tax Identification Services', 'subcategory_id' => 63],
            ['name' => 'Tax Planning', 'subcategory_id' => 63],
            ['name' => 'Tax Compliance', 'subcategory_id' => 63],
            ['name' => 'Tax Exemptions', 'subcategory_id' => 63],

            // Personal Finance & Wealth Management
            ['name' => 'Personal Budget Management', 'subcategory_id' => 64],
            ['name' => 'Investments Advisory', 'subcategory_id' => 64],
            ['name' => 'Online Trading Lessons', 'subcategory_id' => 64],

            // Fundraising
            ['name' => 'Investors Sourcing', 'subcategory_id' => 65],
            ['name' => 'Funding Pitch Presentations', 'subcategory_id' => 65],
            ['name' => 'Fundraising Consultation', 'subcategory_id' => 65],

            // Corporate Finance
            ['name' => 'Due Diligence', 'subcategory_id' => 66],
            ['name' => 'Valuation', 'subcategory_id' => 66],
            ['name' => 'Mergers & Acquisitions Advisory', 'subcategory_id' => 66],
            ['name' => 'Corporate Finance Strategy', 'subcategory_id' => 66],

            // Financial Planning & Analysis
            ['name' => 'Budgeting and Forecasting', 'subcategory_id' => 67],
            ['name' => 'Financial Modeling', 'subcategory_id' => 67],
            ['name' => 'Cost Analysis', 'subcategory_id' => 67],
            ['name' => 'Stock Analysis', 'subcategory_id' => 67],

            // AI Services
            // AI Mobile Development
            ['name' => 'AI Mobile Apps', 'subcategory_id' => 68],
            ['name' => 'AI Websites & Software', 'subcategory_id' => 68],
            ['name' => 'AI Chatbot', 'subcategory_id' => 68],
            ['name' => 'AI Integrations', 'subcategory_id' => 68],
            ['name' => 'AI Agents', 'subcategory_id' => 68],
            ['name' => 'AI Fine-Tuning', 'subcategory_id' => 68],
            ['name' => 'AI Technology Consulting', 'subcategory_id' => 68],

            // AI Artists
            ['name' => 'AI Avatar Design', 'subcategory_id' => 69],
            ['name' => 'ComfyUI Workflow Creation', 'subcategory_id' => 69],
            ['name' => 'AI Image Editing', 'subcategory_id' => 69],
            ['name' => 'Midjourney Artists', 'subcategory_id' => 69],
            ['name' => 'Stable Diffusion Artists', 'subcategory_id' => 69],
            ['name' => 'All AI Art Services', 'subcategory_id' => 69],

            // AI Video
            ['name' => 'AI Music Videos', 'subcategory_id' => 70],
            ['name' => 'AI Video Art', 'subcategory_id' => 70],
            ['name' => 'AI Video Avatars', 'subcategory_id' => 70],

            // AI Audio
            ['name' => 'Voice Synthesis & AI', 'subcategory_id' => 71],
            ['name' => 'Text to Speech', 'subcategory_id' => 71],

            // AI Content
            ['name' => 'AI Content Editing', 'subcategory_id' => 72],
            ['name' => 'Custom Writing Prompts', 'subcategory_id' => 72],

            // Data
            ['name' => 'Data Science & ML', 'subcategory_id' => 73],
            ['name' => 'Data Analytics', 'subcategory_id' => 73],
            ['name' => 'Data Visualization', 'subcategory_id' => 73],

            // AI for Businesses
            ['name' => 'AI Consulting', 'subcategory_id' => 74],
            ['name' => 'AI Strategy', 'subcategory_id' => 74],
            ['name' => 'AI Lessons', 'subcategory_id' => 74],

            // Personal Growth
            // Self Improvement
            ['name' => 'Online Tutoring', 'subcategory_id' => 75],
            ['name' => 'Language Lessons', 'subcategory_id' => 75],
            ['name' => 'Life Coaching', 'subcategory_id' => 75],
            ['name' => 'Career Counseling', 'subcategory_id' => 75],
            ['name' => 'Generative AI Lessons', 'subcategory_id' => 75],

            // Wellness & Fitness
            ['name' => 'Fitness', 'subcategory_id' => 76],
            ['name' => 'Nutrition', 'subcategory_id' => 76],
            ['name' => 'Wellness', 'subcategory_id' => 76],

            // Leisure & Hobbies
            ['name' => 'Astrology & Psychics', 'subcategory_id' => 77],
            ['name' => 'Arts & Crafts', 'subcategory_id' => 77],
            ['name' => 'Cosplay Creation', 'subcategory_id' => 77],
            ['name' => 'Puzzle & Game Creation', 'subcategory_id' => 77],
            ['name' => 'Traveling', 'subcategory_id' => 77],
            ['name' => 'Collectibles', 'subcategory_id' => 77],

            // Fashion & Style
            ['name' => 'Modeling & Acting', 'subcategory_id' => 78],
            ['name' => 'Styling & Beauty', 'subcategory_id' => 78],
            ['name' => 'Trend Forecasting', 'subcategory_id' => 78],

            // Gaming
            ['name' => 'Game Coaching', 'subcategory_id' => 79],
            ['name' => 'eSports Management & Strategy', 'subcategory_id' => 79],
            ['name' => 'Game Matchmaking', 'subcategory_id' => 79],
            ['name' => 'Ingame Creation', 'subcategory_id' => 79],
            ['name' => 'Gameplay Experience & Feedback', 'subcategory_id' => 79],
            ['name' => 'Game Recordings & Guides', 'subcategory_id' => 79],

            // Miscellaneous
            ['name' => 'Family & Genealogy', 'subcategory_id' => 80],
            ['name' => 'Cosmetics Formulation', 'subcategory_id' => 80],
            ['name' => 'Greeting Cards & Videos', 'subcategory_id' => 80],
            ['name' => 'Embroidery Digitizing', 'subcategory_id' => 80],
            ['name' => 'Other', 'subcategory_id' => 80],

            // Consulting
            // Business Consultants
            ['name' => 'Legal Consulting', 'subcategory_id' => 81],
            ['name' => 'Business Consulting', 'subcategory_id' => 81],
            ['name' => 'HR Consulting', 'subcategory_id' => 81],
            ['name' => 'AI Consulting', 'subcategory_id' => 81],
            ['name' => 'Business Plans', 'subcategory_id' => 81],
            ['name' => 'E-commerce Consulting', 'subcategory_id' => 81],

            // Marketing Strategy
            ['name' => 'Marketing Strategy', 'subcategory_id' => 82],
            ['name' => 'Content Strategy', 'subcategory_id' => 82],
            ['name' => 'Social Media Strategy', 'subcategory_id' => 82],
            ['name' => 'Influencers Strategy', 'subcategory_id' => 82],
            ['name' => 'Video Marketing Consulting', 'subcategory_id' => 82],
            ['name' => 'SEM Strategy', 'subcategory_id' => 82],
            ['name' => 'PR Strategy', 'subcategory_id' => 82],

            // Coaching & Advice
            ['name' => 'Career Counseling', 'subcategory_id' => 83],
            ['name' => 'Life Coaching', 'subcategory_id' => 83],
            ['name' => 'Game Coaching', 'subcategory_id' => 83],
            ['name' => 'Styling & Beauty Advice', 'subcategory_id' => 83],
            ['name' => 'Travel Advice', 'subcategory_id' => 83],
            ['name' => 'Nutrition Coaching', 'subcategory_id' => 83],
            ['name' => 'Mindfulness Coaching', 'subcategory_id' => 83],

            // Tech Consulting
            ['name' => 'AI Technology Consulting', 'subcategory_id' => 84],
            ['name' => 'Website Consulting', 'subcategory_id' => 84],
            ['name' => 'Mobile App Consulting', 'subcategory_id' => 84],
            ['name' => 'Game Development Consulting', 'subcategory_id' => 84],
            ['name' => 'Software Development Consulting', 'subcategory_id' => 84],
            ['name' => 'Cybersecurity Consulting', 'subcategory_id' => 84],

            // Mentorship
            ['name' => 'Marketing Mentorship', 'subcategory_id' => 85],
            ['name' => 'Design Mentorship', 'subcategory_id' => 85],
            ['name' => 'Writing Mentorship', 'subcategory_id' => 85],
            ['name' => 'Video Mentorship', 'subcategory_id' => 85],
            ['name' => 'Music Mentorship', 'subcategory_id' => 85],

            // Data Consulting
            ['name' => 'Data Consulting', 'subcategory_id' => 86],
            ['name' => 'Data Analytics Consulting', 'subcategory_id' => 86],
            ['name' => 'Databases Consulting', 'subcategory_id' => 86],
            ['name' => 'Data Visualization Consulting', 'subcategory_id' => 86],
        ];


        DB::table('semi_categories')->insert($semicategories);
    }
}
