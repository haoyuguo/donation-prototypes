# Clone the project to local and run it

## Use Git to clone project to local

```git clone https://github.com/singingfox/donation-prototypes.git```

## Install dependencies 

Go to project folder, and run 

```composer install```

## Create application key

```copy ./env.example ./env```

```php artisan key:generate```

By now, the project can be started with 

```php artisan serv```

and accessed via ```http://localhost:8000```.