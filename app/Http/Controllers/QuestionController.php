<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class QuestionController extends Controller
{
    public function show($subject)
    {
        return Inertia::render('QuestionPage', [
            'subject' => $subject
        ]);
    }
}
