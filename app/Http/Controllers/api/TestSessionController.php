<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TestSessionController extends Controller
{
  /**************************************
   *
   **************************************/
  public function write(Request $request){
    $value = request('param1');
    $ret = ["param1" => $value ];
//var_dump("test");
    $request->session()->put("key_test1", $value);
    return response()->json($ret);
  }  
  /**************************************
   *
   **************************************/
  public function read(Request $request){
    $value = session('key_test1');
    $ret = ["params" => $value ];
    return response()->json($ret);
  }
  /**************************************
   *
   **************************************/
  public function test(Request $request){
    $data = $request->session()->all();
var_dump($data);
    exit();
    //$value = session('key_test1');
    //$ret = ["params" => $value ];
    //return response()->json($ret);
  }


}
