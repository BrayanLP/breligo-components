<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Services;

class ServicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = array(
            [
                'id' => '0',
                'nombre' => 'Bancos' 
            ],
            [
                'id' => '1',
                'nombre' => 'Comisarias' 
            ],
            [
                'id' => '2',
                'nombre' => 'Colegios'
            ]
        );

        Services::insert($data);
    }
}
