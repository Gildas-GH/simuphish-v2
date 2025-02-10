import { toast } from "@/hooks/use-toast"
import { VNode } from "preact"

export interface HoverProps {
    title: string,
    children: VNode<any>
}

export default function Hover(props: HoverProps) {
    return (
        <div onMouseEnter={() => toast({
            title: props.title
        })}>
            {props.children}
        </div>
    )
}