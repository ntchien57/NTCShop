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
    
    public function create(Request $request)
    {
        $user = User::where('email',$request->email)->first();

        if($user){
            Toastr::error('Email đã tồn tại','Lỗi');
            return redirect()->back();              
        }

        if($request->input('password') != $request->input('again-password') ){
            Toastr::error('Mật khẩu phải trùng nhau','Lỗi');
            return redirect()->back();
        }

        User::create([
            'name'=> $request->input('name'),
            'email'=> $request->input('email'),
            'password'=>bcrypt($request->input('password')),
            'active' => "1"
        ]);

        Toastr::success('Đăng kí thành công','Thành công');
        return redirect()->route('login-home');
        //new commit
    }
}
