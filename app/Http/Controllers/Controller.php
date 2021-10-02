<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
  use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

  /**************************************
   *
   **************************************/
  public function auth_check($user_type){
    if($user_type == "normal_user"){
      $key = env('SESSION_KEY_USER', '' );
//var_dump("key= " . $key);
      $value = session($key);
      return $value ;
    }
  }

}
