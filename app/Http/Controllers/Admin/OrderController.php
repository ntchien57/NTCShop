<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Customer;
use Illuminate\Http\Request;
use App\Http\Service\Cart\CartService;
use  Toastr;

class OrderController extends Controller
{
    protected $cart;

    public function __construct(CartService $cart)
    {
        $this->cart =$cart;
    }

}
