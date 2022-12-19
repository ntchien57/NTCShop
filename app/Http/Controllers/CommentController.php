<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Toastr;

class CommentController extends Controller
{

    public function comment(Request $request){
        $user_id = Auth::user()->id;
        $product_id = $request->input('product_id');
        $content = $request->input('content');

        Comment::create([
            'user_id'=> $user_id,
            'product_id'=> $product_id,
            'content'=> $content
        ]);

        Toastr::success('Cảm ơn bạn đã đánh giá sản phẩm','Thank you');

        return true;
    }
}
