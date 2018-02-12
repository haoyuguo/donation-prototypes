<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class PaymentTest extends TestCase
{

    /**
     * A basic test.
     *
     * @return void
     */
    public function testPaymentsDataStructure()
    {
        $this->get('/api/latest/payments')
            ->assertJsonStructure([
                '*' => [ 'id', 'payer', 'date', 'amount' ]
            ]);
    }
}
