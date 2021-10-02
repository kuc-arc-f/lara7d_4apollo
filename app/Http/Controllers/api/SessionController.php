<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SessionController extends Controller
{
  /**************************************
   *
   **************************************/
  public function flash_write(Request $request){
    $success = request('flash_message_success');
    $error = request('flash_message_error');
    $ret = [
      "success" => $success , "error" => $error 
    ];
//var_dump("test");
    $sessionKey = env('SESSION_KEY_FLASH', '' );
    $request->session()->put("flash_message_obj", $ret);
//    $request->session()->flash('flash_message_success', $success );
//    $request->session()->flash('flash_message_error', $error );
    return response()->json($ret);
  }
  /**************************************
   *
   **************************************/
  public function flash_get(Request $request){
    $sessionKey = env('SESSION_KEY_FLASH', '' );
    $value = session($sessionKey);
    $ret = ["flash" => $value ];
    $request->session()->forget($sessionKey);
    return response()->json($ret);
  }    
}
