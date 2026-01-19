"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"
import { Leva } from "leva"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const pathSegments = pathname.split("/").filter(Boolean)

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="bg-background">
                <Leva
                    collapsed={false}
                    flat={true}
                    hidden={pathname === "/"}
                    theme={{
                        colors: {
                            accent1: "var(--primary)",
                            accent2: "var(--primary-foreground)",
                            accent3: "var(--muted)",
                        }
                    }}
                />
                <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-border/50 px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                                </BreadcrumbItem>
                                {pathSegments.length > 0 && <BreadcrumbSeparator className="hidden md:block" />}
                                {pathSegments.map((segment, index) => (
                                    <React.Fragment key={segment}>
                                        <BreadcrumbItem>
                                            {index === pathSegments.length - 1 ? (
                                                <BreadcrumbPage className="capitalize font-medium">{segment}</BreadcrumbPage>
                                            ) : (
                                                <BreadcrumbLink href={`/${segment}`} className="capitalize">
                                                    {segment}
                                                </BreadcrumbLink>
                                            )}
                                        </BreadcrumbItem>
                                        {index < pathSegments.length - 1 && <BreadcrumbSeparator />}
                                    </React.Fragment>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <main className="flex flex-1 flex-col overflow-hidden">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}
