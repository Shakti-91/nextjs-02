import { NextResponse } from "next/server";

export  function GET(){
    return NextResponse.json({
        name:'shakti',
        email:'shakti@gmail.com'
    })
}