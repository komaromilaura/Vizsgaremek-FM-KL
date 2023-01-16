<?php

namespace App\Providers;

use Illuminate\Hashing\HashServiceProvider;
use App\Libs\CustomHasher;

class CustomHashServiceProvider extends HashServiceProvider
{  
    public function register()
    {
        $this->app->singleton('hash', function () {
            return new CustomHasher();
        });
    }
}