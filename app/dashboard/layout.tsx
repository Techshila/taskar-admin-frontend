"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


export default function Layout({ children, issues, analytics, transactions, inventory }: any) {
    const [showInventory, setShowInventory] = useState(true);
    return (
        <>
            <div className="flex">
                <nav className="w-[20vh] h-[100vh] bg-black flex flex-col items-center p-5 justify-between">
                        <Sheet>
                            <SheetTrigger className="flex flex-col items-center">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="text-white text-center">
                                    <p>UserName</p>
                                    <p>Role</p>
                                </div>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <SheetHeader>
                                    <SheetTitle>Profile</SheetTitle>
                                    <SheetDescription>
                                        Profile Description
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    <div className="flex flex-col gap-2">
                        <Button className="dark">analytics</Button>
                        <Button className="dark">issues</Button>
                        <Button className="dark">transactions</Button>
                        <Button className="dark" onClick={() => { setShowInventory(true) }}>Inventory</Button>
                    </div>
                    <div>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="destructive">Logout</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>Are you sure you want to logout?</AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction>Logout</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </nav>
                {showInventory ? (
                    <div className="p-5 flex flex-col gap-2">
                        <Button onClick={() => { setShowInventory(false) }} className="w-[80px]">Go back</Button>
                        <div>
                            {inventory}
                        </div>
                    </div>
                ) : (
                    <div className="p-5 flex gap-2">
                        <div className="">{analytics}</div>
                        <div className="flex flex-col gap-2">
                            {issues}
                            {transactions}
                        </div>
                    </div>
                )}

            </div>

        </>
    );
}
