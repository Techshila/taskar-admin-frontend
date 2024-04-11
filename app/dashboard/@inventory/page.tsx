import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import ItemCard from "./components/ItemCard";
import { ScrollArea } from "@/components/ui/scroll-area";


export default function Inventory() {
    return (
        <>
            <Card className="w-[88vw] h-[90vh]">
                <CardHeader title="Inventory">
                    <CardTitle>
                        Inventory
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="items">Items</TabsTrigger>
                            <TabsTrigger value="workers">Workers</TabsTrigger>
                        </TabsList>
                        <TabsContent value="items">
                            <Card className="w-[85vw] h-[72vh]">
                                <CardContent className="p-2 flex flex-col gap-2">
                                    <Input placeholder="Search" className="w-[50%]" />
                                    <ScrollArea className="h-[64vh] flex gap-2">
                                        <ItemCard />
                                        <ItemCard />
                                        <ItemCard />
                                    </ScrollArea>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="workers">
                            <Card className="w-[85vw] h-[72vh]">

                                <CardContent className="p-2">
                                    <Input placeholder="Search" className="w-[50%]" />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </>
    )
}   
