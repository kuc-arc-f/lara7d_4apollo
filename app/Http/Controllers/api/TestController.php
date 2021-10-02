<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TestController extends Controller
{
  /**************************************
   *
   **************************************/
  public function __construct(){
  }    
  /**************************************
   *
   **************************************/
  public function test(){   
//var_dump("test");
//exit();
    return response()->json([]);
  }    
  /**************************************
   *
   **************************************/
  public function test2(Request $request){
    $ret = ["name" => request('name') ];
//var_dump("test");
//exit();
    return response()->json($ret);
  }  
}
