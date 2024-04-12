import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function ItemCard({ medicineName, medicineDescription, medicineImage, medicineTags, manufacturer, quantity}: any) {
    return (
        <Card className="w-[40vw]">
            <CardHeader>
                <CardTitle>
                    {medicineName}
                </CardTitle>
                <CardDescription className="flex gap-1">
                    {medicineDescription}
                    {medicineTags.map((tag: string, index: number) => (
                        <Badge key={index}>{tag}</Badge>
                    ))}
                </CardDescription>
                <CardContent className="flex gap-2">
                    <img src={medicineImage} width={100} height={100} alt="medicine image"/>
                    <div>
                    <div><span className="font-bold">Manufactured by:</span> {manufacturer}</div>
                    <div><span className="font-bold">Quantity: </span><span className="text-green-500">{quantity}</span></div>
                    </div>
                </CardContent>
                <CardFooter className="gap-2" >
                    <Button className="" size="sm">Edit</Button>
                    <Button className="" size="sm" variant="destructive">Delete</Button>
                </CardFooter>
            </CardHeader>
        </Card>
    )
}