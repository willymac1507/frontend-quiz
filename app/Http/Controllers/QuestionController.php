<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class QuestionController extends Controller
{
    public function show($subject, $number)
    {
        $json = File::json(base_path('/database/json/data.json'));
        foreach ($json as $quizzes) {
            foreach ($quizzes as $quiz) {
                if ($quiz['title'] == $subject) {
                    $questions = $quiz['questions'];
                    return Inertia::render('QuestionPage', [
                        'subject' => $subject,
                        'questions' => $questions,
                        'number' => intval($number)
                    ]);
                }
            }

        }
    }
}
