<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Toastr;
use Alert;

class UserLoginController extends Controller
{
    public function index()
    {
            return view('login.login',[
                'title' => 'Đăng nhập'
            ]);
    }

    public function login(Request $request){
        $this->validate($request,[
            'email' => 'required|email:filter',
            'password'=> 'required'
        ]);

        $check = Auth::attempt([
            'email' => $request -> input('email'),
            'password' => $request -> input('password'),
            'active' => 1
        ]);

        if($check){

            Session::put('check', $check);
            Toastr::success('Đăng nhập thành công','Thông báo');           
            return redirect()->route('home');
        }

        Toastr::error('tài khoản hoặc mật khẩu không chính xác','Lỗi');
        return  redirect()->back();
    }


}
