import { Mail } from "@/data/mails";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback } from "./ui/avatar";
import { Forward, MoreHorizontal, Reply, ReplyAll } from "lucide-react";

export default function MailDisplay({ mail }: { mail: Mail }) {
    return (
        <>
            <div className="bg-sidebar-accent border-b border-b-sidebar-border p-4">
                <div className="flex justify-between">
                    <h2 className="font-bold text-lg">{mail.subject}</h2>
                    <div className="gap-4 text-muted-foreground hidden sm:flex">
                        {mail.date}
                        <Reply />
                        <ReplyAll />
                        <Forward />
                        <MoreHorizontal />
                    </div>
                </div>
                <div className="flex gap-4 pt-2">
                    <Avatar className="h-12 w-12 rounded-lg">
                        <AvatarFallback className="rounded-lg bg-background">{mail.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="">De : {mail.name} <span className="text-muted-foreground">({mail.email})</span></p>
                        <p className="">A : {mail.toName} <span className="text-muted-foreground">({mail.toMail})</span></p>
                    </div>
                </div>
            </div>

            <div>
                {mail.Component ?? mail.teaser}
            </div>
        </>
    )
}