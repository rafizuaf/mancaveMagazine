import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function () {
    return (
        <Card className="hidden md:flex md:flex-col w-full h-full mb-5 mx-auto">
            <CardHeader>
                <CardTitle>Ads</CardTitle>
                <CardDescription>Ads Desc</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-full">
                <p>Your ads go here</p>
            </CardContent>
            <CardFooter className="flex flex-col md:flex-row justify-between items-center">
                {/* Add responsive styling for buttons or other components
                <Button className="mt-2 md:mt-0">Action 1</Button>
                <Button className="mt-2 md:mt-0">Action 2</Button> */}
            </CardFooter>
        </Card>
    )
}
