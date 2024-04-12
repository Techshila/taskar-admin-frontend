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

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";


export default function Layout({ children, issues, analytics, transactions, inventory }: any) {
    const [showInventory, setShowInventory] = useState(false);
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
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Add Item</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Add Item</DialogTitle>
                                    <DialogDescription>
                                        Add items to the inventory
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="medicineName" className="text-right">
                                            Medicine Name
                                        </Label>
                                        <Input id="medicineName" placeholder="Enter medicine name" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="medicineDescription" className="text-right">
                                            Medicine Description
                                        </Label>
                                        <Input id="medicineDescription" placeholder="Enter medicine description" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="medicineImage" className="text-right">
                                            Medicine Image URL
                                        </Label>
                                        <Input id="medicineImage" placeholder="Enter medicine image URL" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="medicineTags" className="text-right">
                                            Medicine Tags (comma-separated)
                                        </Label>
                                        <Input id="medicineTags" placeholder="Enter medicine tags" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="manufacturer" className="text-right">
                                            Manufacturer
                                        </Label>
                                        <Input id="manufacturer" placeholder="Enter manufacturer" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="quantity" className="text-right">
                                            Quantity
                                        </Label>
                                        <Input id="quantity" placeholder="Enter quantity" type="number" className="col-span-3" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Add Item</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
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
                            <div className="flex gap-2">
                                {issues}
                                {transactions}
                            </div>
                            <div>
                                <Card className=" h-[24vh] p-2">
                                    <Card className="w-[30%]">
                                        <span className="font-extrabold text-4xl text-green-600">$ 24,000</span>
                                    </Card>
                                </Card>
                            </div>
                        </div>
                    </div>
                )}

            </div>

        </>
    );
}
