<?php
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//            'name' => Str::random(10),
        DB::table('categories')->insert([
            [
                'name' => "News",
            ],
            [
                'name' => "Other",
            ],
            [
                'name' => "food",
            ],
        ]
        );        
    }
}
