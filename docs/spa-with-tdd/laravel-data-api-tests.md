# Laravel data API tests

## Boiler plates

Run 

```
php artisan make:test DonationTest
php artisan make:test PaymentTest
php artisan make:test DonorTest
```

The tests are created under project folder `tests/Feature`.

## Basic tests

For /api/latest/donations, /api/latest/payments, and /api/latest/donors, write tests to check JSON data structure of the output.

## Run tests

Run `./vendor/bin/phpunit` instead of `phpunit` to see the results.