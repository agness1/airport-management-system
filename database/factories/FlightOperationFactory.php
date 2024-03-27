<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\Aircraft;
use App\Models\Airline;
use App\Models\Gate;
use App\Models\Type;
use App\Models\FlightOperation;


class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
protected $model = FlightOperation::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            
        ];
    }
}
