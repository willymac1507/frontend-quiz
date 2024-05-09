<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class QuestionController extends Controller
{
    public function show($subject)
    {
        $json = File::json(base_path('/database/json/data.json'));
        foreach ($json as $quizzes) {
            foreach ($quizzes as $quiz) {
                if ($quiz['title'] == $subject) {
                    $questions = $quiz['questions'];
                    return Inertia::render('QuestionPage', [
                        'subject' => $subject,
                        'questions' => $questions
                    ]);
                }
            }

        }
    }

    public function results(Request $request)
    {

        return Inertia::render('Results', [
            'score' => $request
        ]);
    }
}
