<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DonationTest extends TestCase
{
    /**
     * A basic test.
     *
     * @return void
     */
    public function testDonationsDataStructure()
    {
        $data = $this->get('/api/latest/donations')
            ->assertJsonStructure([
                '*' => [ 'id', 'donor', 'date', 'amount', 'needsReceipt', 'paymentCleared' ]
            ]);
    }
}
