import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function ItemCard() {
    return (
        <Card className="w-[40vw]">
            <CardHeader>
                <CardTitle>
                    Acetaminophen
                </CardTitle>
                <CardDescription className="flex gap-1">
                    500mg
                    <Badge>analgesics</Badge>
                    <Badge>antipyretics</Badge>
                </CardDescription>
                <CardContent className="flex gap-2">
                    <img src="https://www.drugwatch.com/wp-content/uploads/Acetaminophen.jpg" width={100} height={100} alt="medicine image"/>
                    <div>
                    <div><span className="font-bold">Manufactured by:</span> Johnson & Johnson</div>
                    <div><span className="font-bold">Quantity: </span><span className="text-green-500">20</span></div>
                    </div>
                </CardContent>
            </CardHeader>
        </Card>
    )
}