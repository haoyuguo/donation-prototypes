<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DonorTest extends TestCase
{
    /**
     * A basic test.
     *
     * @return void
     */
    public function testDonorsDataStructure()
    {
        $this->get('/api/latest/donors')
            ->assertJsonStructure([
                '*' => [ 'id', 'name', 'email' ]
            ]);
    }
}
