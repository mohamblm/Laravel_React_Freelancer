<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\User;
// use App\Events\MessageSent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    public function sendMessage(Request $request)
    {
        $message = $request->input('message');
        $sender_id = auth()->id();
        $receiver_id = $request->input('receiver_id');

        $message = Message::create([
            'sender_id' => $sender_id,
            'receiver_id' => $receiver_id,
            'message' => $message,
        ]);

        
        // broadcast(new MessageSent($message, $sender_id, $receiver_id))->toOthers();

        return response()->json(['status' => 'Message sent successfully!']);
    }

    public function getMessages($receiverId)
    {
        return Message::where(function ($query) use ($receiverId) {
            $query->where('sender_id', Auth::id())
                ->where('receiver_id', $receiverId);
        })->orWhere(function ($query) use ($receiverId) {
            $query->where('sender_id', $receiverId)
                ->where('receiver_id', Auth::id());
        })->orderBy('created_at')->get();
    }

    public function getChatUsers()
    {
        $authUserId = auth()->id();

        // Get distinct user IDs of people the user has chatted with
        $chattedUserIds = Message::where('sender_id', $authUserId)
            ->orWhere('receiver_id', $authUserId)
            ->selectRaw('DISTINCT CASE 
                WHEN sender_id = ? THEN receiver_id 
                ELSE sender_id 
            END as user_id', [$authUserId])
            ->pluck('user_id'); // Extract only IDs

        // Fetch user details based on these IDs
        $chattedUsers = User::whereIn('id', $chattedUserIds)->with('profile')->get();

        return response()->json($chattedUsers);
    }
}
