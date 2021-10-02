<?php
use Illuminate\Support\Facades\Route;

/*********
 API
*********/
Route::prefix('api')->group(function(){
  Route::post('/test_session/write', 'api\TestSessionController@write');
  Route::get('/test_session/read', 'api\TestSessionController@read');
  Route::get('/test_session/test', 'api\TestSessionController@test');
  Route::post('/session/flash_write', 'api\SessionController@flash_write');
  Route::get('/session/flash_get', 'api\SessionController@flash_get');
  /* users */
  Route::post('/users/add', 'api\UsersController@add');
  Route::post('/users/login', 'api\UsersController@login');  
  Route::get('/users/get_session', 'api\UsersController@get_session');
  Route::post('/users/logout', 'api\UsersController@logout');
});
/*********
 router
*********/
Route::get('/test/test', 'TestController@test');
Route::get('/test', function () {
  return view('test');
});
/*********
 react-router
*********/
Route::get('/{any}', function(){
  return view('App');
})->where('any', '.*');
