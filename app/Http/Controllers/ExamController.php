<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class ExamController extends Controller
{
    //
   public function gealltexam(Request $request)
{
       $exam=DB::table('exams')->get();
       return response()->json(['data'=>$exam]);
}

    public function getexam(Request $request)
 {
       $exam=DB::table('exams')->where('id', '=', $request->id)->get();
       return response()->json(['data'=>$exam]);
 }
}
