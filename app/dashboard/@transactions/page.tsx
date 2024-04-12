import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

enum StatusColor {
    yellow = "bg-yellow-500",
    green = "bg-green-500",
    red = "bg-red-500",
}

const issues = [
    {
        issueId: 1,
        title: "Issue 1",
        status: "Item out of stock",
        statusColor: StatusColor.red,
    },
    {
        issueId: 2,
        title: "Issue 2",
        status: "Item out of stock",
        statusColor: StatusColor.red,
    },
    {
        issueId: 3,
        title: "Issue 3",
        status: "Item out of stock",
        statusColor: StatusColor.red,
    },
    {
        issueId: 4,
        title: "Issue 4",
        status: "Item in shortage of stock",
        statusColor: StatusColor.yellow,
    },
    {
        issueId: 5,
        title: "Issue 5",
        status: "Item in shortage of stock",
        statusColor: StatusColor.yellow,
    },
    {
        issueId: 6,
        title: "Issue 6",
        status: "Item in shortage of stock",
        statusColor: StatusColor.yellow,
    },
    {
        issueId: 7,
        title: "Issue 7",
        status: "Item in shortage of stock",
        statusColor: StatusColor.yellow,
    },
    {
        issueId: 8,
        title: "Issue 8",
        status: "Item in shortage of stock",
        statusColor: StatusColor.yellow,
    },
    {
        issueId: 9,
        title: "Issue 9",
        status: "Item in shortage of stock",
        statusColor: StatusColor.yellow,
    },
    {
        issueId: 10,
        title: "Issue 10",
        status: "Item in shortage of stock",
        statusColor: StatusColor.yellow,
    }
]

export default function Transactions() {
    return (
        <Card>
            <ScrollArea className="h-[70vh] w-80 rounded-md border">
                
            </ScrollArea>
        </Card>
    )
}