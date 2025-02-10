import * as React from "react"
import { ArchiveX, Command, File, Inbox, Send, Trash2 } from "lucide-react"

import { NavUser } from "@/components/nav-user"
import { Label } from "@/components/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Mail } from "@/data/mails"
import { useRoute } from "preact-iso"

const navMain = [
  {
    title: "Inbox",
    icon: Inbox,
  },
  {
    title: "Drafts",
    icon: File,
  },
  {
    title: "Sent",
    icon: Send,
  },
  {
    title: "Junk",
    icon: ArchiveX,
  },
  {
    title: "Trash",
    icon: Trash2,
  },
];

export interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  mails: Mail[]
}

export function AppSidebar(props: AppSidebarProps) {
  const { setOpenMobile } = useSidebar();
  const { params } = useRoute();
  const id = parseInt(params?.id);

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
      {...props}
    >
      <Sidebar
        collapsible="none"
        className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                <a href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Command className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Simuphish</span>
                    <span className="truncate text-xs">Hack2G2</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      onClick={() => setOpenMobile(false)}
                      isActive={item.title === "Inbox"}
                      className="px-2.5 md:px-2"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={{
            name: "Hack2G2",
            email: "contact@hack2g2.fr",
            avatar: "/logo.png",
          }} />
        </SidebarFooter>
      </Sidebar>

      {/* This is the second sidebar */}
      {/* We disable collapsible and let it fill remaining space */}
      <Sidebar collapsible="none" className="flex-1 hidden md:flex">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-base font-medium text-foreground">
              Inbox
            </div>
            <Label className="flex items-center gap-2 text-sm">
              <span>{props.mails.length} mails</span>
            </Label>
          </div>
          <SidebarInput placeholder="Type to search..." disabled />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {props.mails.map((mail, index) => (
                <a
                  href={`/inbox/${index}`}
                  key={mail.email}
                  className={`
                    flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground 
                    ${id == index ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}
                    ${mail.done ? "hidden" : ""}`}
                >
                  <div className="flex w-full items-center gap-2">
                    <span>{mail.name}</span>{" "}
                    <span className="ml-auto text-xs">{mail.date}</span>
                  </div>
                  <span className="font-medium">{mail.subject}</span>
                  <span className="line-clamp-2 w-[260px] whitespace-break-spaces text-xs">
                    {mail.teaser}
                  </span>
                </a>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  )
}
