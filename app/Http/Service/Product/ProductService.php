<?php

namespace App\Http\Service\Product;

use App\Models\Comment;
use App\Models\Product;

class ProductService
{
//    const LIMIT = 16;
    public function get($page = null){

        return Product::select('id', 'name', 'price', 'price_sale', 'thumb')
            ->orderByDesc('id')
//            ->when($page != null, function ($query) use ($page){
//                $query->offset($page * self::LIMIT);
//            })
//            ->limit(self::LIMIT)
            ->search()
            ->paginate(8);
    }

    public function show($id)
    {
        return Product::where('id', $id)
            ->where('active',1)
            ->with('menu')
            ->firstOrFail();
    }

    public function showComment($id)
    {
        return Comment::orderByDesc('id')
            ->where('product_id', $id)
            ->with('product')
            ->with('user')
            ->get();
    }
}

