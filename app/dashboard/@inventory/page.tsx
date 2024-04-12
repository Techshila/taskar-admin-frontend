"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label";
import Fuse from "fuse.js";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import ItemCard from "./components/ItemCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

function generateRandomMedicine() {
    const medicineNames = ["Paracetamol", "Ibuprofen", "Aspirin", "Omeprazole", "Lisinopril", "Atorvastatin", "Metformin"];
    const manufacturers = ["Johnson & Johnson", "Pfizer", "Roche", "Novartis", "Merck", "GSK"];
    const tags = ["analgesics", "antipyretics", "antibiotics", "antidepressants", "antihistamines", "antifungals", "antivirals", "sedatives", "anticoagulants"];

    const randomName = medicineNames[Math.floor(Math.random() * medicineNames.length)];
    const randomManufacturer = manufacturers[Math.floor(Math.random() * manufacturers.length)];
    const randomDescription = Math.floor(Math.random() * (1000 - 100) + 100) + "mg";
    const randomImage = "https://www.drugwatch.com/wp-content/uploads/Acetaminophen.jpg";
    const randomTags = tags.sort(() => 0.5 - Math.random()).slice(0, Math.min(tags.length, Math.floor(Math.random() * (5 - 1 + 1)) + 1));
    const randomQuantity = Math.floor(Math.random() * (100 - 1) + 1);

    return {
        medicineName: randomName,
        medicineDescription: randomDescription,
        medicineImage: randomImage,
        medicineTags: randomTags,
        manufacturer: randomManufacturer,
        quantity: randomQuantity,
    };
}

const InventoryData = Array.from({ length: 20 }, () => generateRandomMedicine());

const fuseOptions = {
    keys: ["medicineName", "medicineDescription", "manufacturer", "medicineTags"],
    threshold: 0.3,
};


export default function Inventory() {
    const [search, setSearch] = useState("");
    const fuse = new Fuse(InventoryData, fuseOptions);
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
                                <CardContent className="p-2 flex gap-2">
                                    <div className="w-[100%] flex flex-col gap-2">
                                        <Input placeholder="Search" className="w-[50%]" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                                        {search === "" ?
                                            (
                                                <ScrollArea className="h-[64vh] flex gap-2 border rounded-md p-2 w-[50%]">
                                                    {InventoryData.map((item, index) => (
                                                        <>
                                                            <ItemCard
                                                                key={index}
                                                                medicineName={item.medicineName}
                                                                medicineDescription={item.medicineDescription}
                                                                medicineImage={item.medicineImage}
                                                                medicineTags={item.medicineTags}
                                                                manufacturer={item.manufacturer}
                                                                quantity={item.quantity}
                                                            />
                                                            <Separator className="my-2" />
                                                        </>
                                                    ))}
                                                </ScrollArea>
                                            )
                                            : (
                                                <div>
                                                    <Label>Search results for "{search}"</Label>
                                                    <ScrollArea className="h-[64vh] flex gap-2 border rounded-md p-2 w-[50%]">
                                                        {fuse.search(search).map((result) => (
                                                            <>
                                                                <ItemCard
                                                                    key={result.item.medicineName}
                                                                    medicineName={result.item.medicineName}
                                                                    medicineDescription={result.item.medicineDescription}
                                                                    medicineImage={result.item.medicineImage}
                                                                    medicineTags={result.item.medicineTags}
                                                                    manufacturer={result.item.manufacturer}
                                                                    quantity={result.item.quantity}
                                                                />
                                                                <Separator className="my-2" />
                                                            </>
                                                        ))}
                                                    </ScrollArea>
                                                </div>
                                            )
                                        }
                                    </div>
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
