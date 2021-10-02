<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
//

class UsersController extends Controller
{
  /**************************************
   *
   **************************************/  
  public function add(Request $request){
    $retArr = array('ret' => 1, 'message'=>"" );
    $password = request('password');
    $hashedPassword = Hash::make($password);
    $user = new User();
    $user->name   = request('name');
    $user->password   = $hashedPassword;
    $user->email   = request('email');    
    $user->save();
    return response()->json($retArr);
  }
  /**************************************
   *
   **************************************/  
  public function valid_login( $email, $password ,$request){
    $ret = false;
    $hashedPassword = '';
    $user = User::orderBy('id', 'desc')
    ->where('email', $email)->get()->toArray();
//var_dump(count($user));
    if(count($user) > 0){
      $userOne = $user[0];
      $hashedPassword = $userOne["password"];
      if (Hash::check($password , $hashedPassword)) {
        $userOne["password"] = "";
        $sessionKeyUser = env('SESSION_KEY_USER', '' );
        $request->session()->put($sessionKeyUser, $userOne);
        $ret = true;
      }        
    }
    return $ret;
  }
  /**************************************
   *
   **************************************/  
  public function login(Request $request){
    $retArr = array('ret' => 0, 'message'=>"" );

    $valid = $this->valid_login(
      request('email'), request('password') , $request
    );
    if($valid){
//      $request->session()->flash('flash_message_success', 'Sucsess, Login OK');
      $retArr = array('ret' => 1, 'message'=>"" );
    }
    return response()->json($retArr);
  }
  /**************************************
   *
   **************************************/
  public function logout(Request $request)
  {
    $key = env('SESSION_KEY_USER', '' );
    $request->session()->forget($key);
    return response()->json([]);
  }    
  /**************************************
   *
   **************************************/
  public function get_session(Request $request){
    $sessionKeyUser = env('SESSION_KEY_USER', '' );
    $value = session( $sessionKeyUser );
    $ret = ["user" => $value ];
    return response()->json($ret);
  }        

}
