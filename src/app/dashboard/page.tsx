import { AppSidebar } from "@/components/app-sidebar"
import MailDisplay from "@/components/mail-display"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Clock, Frown, Radar, ShieldAlert, ShieldCheck, Trophy } from "lucide-react"
import { useLocation, useRoute } from "preact-iso"
import { useEffect, useState } from "preact/hooks"
import mails from '@/data/mails'
import { toast } from "@/hooks/use-toast"

export default function Page() {

  const { params } = useRoute();
  const { route } = useLocation();

  const [time, setTime] = useState(0);
  const [inbox, setInbox] = useState(mails)
  const [goodPoints, setGoodPoints] = useState(0);
  const [badPoints, setBadPoints] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const id = parseInt(params?.id)
  const mail = mails[id]

  const report = (report: boolean) => {
    if (mail.phishing === report) {
      setGoodPoints((v) => v+1)
      toast({
        title: "Bravo !",
        description: "Vous avez bien classé le mail"
      })
    } else {
      setBadPoints((v) => v+1)
      toast({
        title: "Dommage...",
        description: `C'était un ${mail.phishing ? "phishing" : "mail sûr"}`,
        variant: "destructive"
      })
    }
    setInbox((v) => {
      v[id].done = true;
      return v;
    })
    route(`/inbox/${id+1}`)
  }

  const reset = () => {
    setTime(0);
    setBadPoints(0);
    setGoodPoints(0);
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }
    >
      <AppSidebar mails={inbox} />
      <SidebarInset>
        <header className="sticky top-0 flex justify-between shrink-0 border-b bg-background p-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4 hidden md:block" />
            <Breadcrumb className="hidden lg:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">All Inboxes</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Inbox</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex gap-4">
            <Button 
              className="bg-green-700 hover:bg-green-800"
              onClick={() => report(false)}>
                <ShieldCheck />
                Sûr
            </Button>
            <Button 
              variant="destructive"
              onClick={() => report(true)}>
                <ShieldAlert/>
                Phishing
            </Button>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center px-2 gap-4 bg-sidebar-accent rounded min-w-24">
              <Clock onClick={() => reset()} />{Math.floor(time / 60) + ":" + time % 60}
            </div>
            <div className="flex items-center px-2 gap-4 bg-sidebar-accent rounded">
              <Trophy /> {goodPoints}
            </div>
            <div className="flex items-center px-2 gap-4 bg-sidebar-accent rounded">
              <Frown /> {badPoints}
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col">
          {
            params?.id ?
              <MailDisplay mail={mail} />
            :
            <div className="flex flex-1 flex-col gap-4 p-4 text-center items-center justify-center">
              <Radar className="h-96 w-96 text-border" />
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-border">Simuphish</h1>
              <p className="text-border text-lg">
                  Sélectionnez un courriel pour démarrer
              </p>
            </div>
          }
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
