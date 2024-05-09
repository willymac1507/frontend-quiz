<?php

use App\Http\Controllers\QuestionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::post('/results', [QuestionController::class, 'results']);

Route::get('/question/{subject}', [QuestionController::class, 'show']);
