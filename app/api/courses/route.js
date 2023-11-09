import connectMongoDB from '@/libs/mongodb'
import User from '@/modles/topic';
import {NextResponse} from 'next/server';



export async function POST(request) {
    const {name} = await request.json();
    await connectMongoDB();
    await User.create({name});
    
    return NextResponse.json({
        message: "New Course Added Sucessfully"
    }, {status: 201})
}


