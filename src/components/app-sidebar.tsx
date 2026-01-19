"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import * as Collapsible from "@radix-ui/react-collapsible"
import { tutorialNav } from "@/lib/nav-data"
import { Box, Code, ChevronRight } from "lucide-react"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname()

    return (
        <Sidebar collapsible="icon" {...props} className="border-r border-border/50 bg-sidebar">
            <SidebarHeader className="border-b border-border/50 py-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <Box className="size-4" />
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="font-semibold tracking-tight">Three.js Lab</span>
                                    <span className="text-xs text-muted-foreground font-medium">Interactive Learning</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu className="px-2 py-4">
                    {tutorialNav.map((category) => (
                        <Collapsible.Root
                            key={category.title}
                            asChild
                            defaultOpen={pathname.startsWith(category.url)}
                            className="group/collapsible"
                        >
                            <SidebarMenuItem>
                                <Collapsible.Trigger asChild>
                                    <SidebarMenuButton tooltip={category.title} className="hover:bg-sidebar-accent">
                                        {category.icon && <category.icon className="size-4" />}
                                        <span className="font-medium">{category.title}</span>
                                        <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                    </SidebarMenuButton>
                                </Collapsible.Trigger>
                                <Collapsible.Content>
                                    {category.items?.length ? (
                                        <SidebarMenuSub>
                                            {category.items.map((item) => (
                                                <SidebarMenuSubItem key={item.title}>
                                                    <SidebarMenuSubButton
                                                        asChild
                                                        isActive={pathname === item.url}
                                                        className="transition-all duration-200"
                                                    >
                                                        <Link href={item.url}>{item.title}</Link>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    ) : null}
                                </Collapsible.Content>
                            </SidebarMenuItem>
                        </Collapsible.Root>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="border-t border-border/50 py-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="https://github.com/zizimoos" target="_blank" rel="noreferrer">
                                <Code className="size-4" />
                                <span className="font-medium">GitHub Repo</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
