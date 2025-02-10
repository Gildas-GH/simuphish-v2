import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { GitBranch, Globe, Linkedin, Mail, Twitter, Youtube } from "lucide-react"
import mails from '@/data/mails'

export default function About() {
    return (
        <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }
    >
      <AppSidebar mails={mails} />
      <SidebarInset>
        <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <b>A propos de Simuphish</b>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 text-center items-center justify-center">
            <img src="/logo.png" alt="Logo de l'association Hack2G2" className="h-32 w-32" />
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Simuphish</h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg">
                Simupish est une application ludique pour initier à l'identification de tentatives de phishing.
                <br />
                Elle s'intègre dans l'atelier "Opération PhishNet" proposé par l'association Hack2G2.
            </p>
            <p className="border rounded-lg max-w-screen-lg p-4">
                Plongez au cœur d'une simulation interactive où vous endosserez le rôle d'un détective numérique. 
                « Opération PhishNet » est conçu pour vous initier et vous perfectionner dans l'identification et
                la neutralisation de tentatives de phishing. Cette aventure palpitante est divisée en plusieurs
                niveaux, chacun présentant des scénarios uniques et de plus en plus sophistiqués. 
            </p>
            <Button asChild>
                <a href="https://github.com/Gildas-GH/Simuphish" target="_blank">
                    <GitBranch />
                    Code source
                </a>
            </Button>
            <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                    <a href="https://hack2g2.fr" target="_blank">
                        <Globe />
                        <span className="sr-only">Site Internet</span>
                    </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                    <a href="https://twitter.com/Hack2G2" target="_blank">
                        <Twitter className="h-[1.2rem] w-[1.2rem]" />
                        <span className="sr-only">X (Twitter)</span>
                    </a>
                </Button>
                <Button variant="outline" size="icon">
                    <a href="https://www.linkedin.com/company/Hack2G2" target="_blank">
                        <Linkedin className="h-[1.2rem] w-[1.2rem]" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                </Button>
                <Button variant="outline" size="icon">
                    <a href="https://www.youtube.com/Hack2G2" target="_blank">
                        <Youtube className="h-[1.2rem] w-[1.2rem]" />
                        <span className="sr-only">YouTube</span>
                    </a>
                </Button>
                <Button variant="outline" size="icon">
                    <a href="mailto:contact@hack2g2.fr" target="_blank">
                        <Mail className="h-[1.2rem] w-[1.2rem]" />
                        <span className="sr-only">Courriel</span>
                    </a>
                </Button>
            </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
    )
}