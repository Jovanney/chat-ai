'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";	

interface ChatProps {}

const Chat: React.FC<ChatProps> = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat(
        {api: '/api/chat', initialMessages: [], initialInput: ''}
    );
    return (
        <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr-min-content">
            <CardHeader>
                <CardTitle>Chat AI</CardTitle>
                <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {messages.map((message) => {
                    return (
                    <div key={message.id} className="flex gap-3 text-slate-600 text-sm">

                        {message.role === 'user' && (
                            <Avatar>
                                <AvatarFallback>JJSL</AvatarFallback>
                                <AvatarImage src="https://media.licdn.com/dms/image/D4E03AQG6frG5zCoEBQ/profile-displayphoto-shrink_200_200/0/1676509998018?e=1702512000&v=beta&t=PzsfWEw9_V0GF2KDwThdEIKQSxwgM2zpRr9pTt3FrFg"></AvatarImage>
                            </Avatar>
                        )}

                        {message.role === 'assistant' && (
                            <Avatar>
                                <AvatarFallback>JJSL</AvatarFallback>
                                <AvatarImage src="https://media.licdn.com/dms/image/D4E03AQG6frG5zCoEBQ/profile-displayphoto-shrink_200_200/0/1676509998018?e=1702512000&v=beta&t=PzsfWEw9_V0GF2KDwThdEIKQSxwgM2zpRr9pTt3FrFg"></AvatarImage>
                            </Avatar>
                        )}


                        <p className="leading-relaxed">
                            <span className="block font-bold text-slate-700">{message.role === 'user' ? "Humano:" : "Ai"}</span>
                            {message.content}
                        </p>

                        
                    </div>
                    )
                })}

            </CardContent>
            <CardFooter>
                <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
                    <Input placeholder="How can I help you?" value={input} onChange={handleInputChange}></Input>
                    <Button type="submit">Send</Button>
                </form>
            </CardFooter>
        </Card>
    );
};

export default Chat;
