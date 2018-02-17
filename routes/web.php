<?php

Route::prefix('/api/latest')->group(function() {
    Route::get('/org/{id?}', 'OrganizationController@show');

    Route::get('/donations', function() {
        return response()->json([
            [
                'id' => 1, 'donor' => 'John Smith',
                'date' => '2017-01-20', 'amount' => 120,
                'needsReceipt' => true, 'paymentCleared' => true
            ],
            [
                'id' => 2, 'donor' => 'Jane Doe',
                'date' => '2017-03-10', 'amount' => 50,
                'needsReceipt' => true, 'paymentCleared' => false
            ],
            [
                'id' => 3, 'donor' => 'Bright Future Foundation',
                'date' => '2017-05-12', 'amount' => 300,
                'needsReceipt' => false, 'paymentCleared' => true
            ],
            [
                'id' => 4, 'donor' => 'American Express Employee Donations',
                'date' => '2018-01-02', 'amount' => 150,
                'needsReceipt' => true, 'paymentCleared' => true
            ],
            [
                'id' => 5, 'donor' => 'Kelly Yang',
                'date' => '2017-08-03', 'amount' => 30,
                'needsReceipt' => true, 'paymentCleared' => true
            ]
        ]);
    });

    Route::get('/payments', function() {
        return response()->json([
            [
                'id' => 1, 'payer' => 'John Smith',
                'date' => '2017-01-20', 'amount' => 120
            ]
        ]);
    });

    Route::get('/donors', function() {
        return response()->json([
            [
                'id' => 1, 'name' => 'John Smith', 'email' => 'john.smith@emial.com'
            ]
        ]);
    });
});

Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');
