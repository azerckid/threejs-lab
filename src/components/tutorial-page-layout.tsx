"use client"

import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, View } from "lucide-react"

interface TutorialPageLayoutProps {
    children: React.ReactNode // This will be the 3D Canvas component
    code?: string
    title: string
    description?: string
}

export function TutorialPageLayout({
    children,
    code = "// Source code will appear here",
    title,
    description
}: TutorialPageLayoutProps) {
    return (
        <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex h-full flex-col lg:flex-row">
                {/* left: 3D Canvas Section */}
                <section className="relative flex-1 bg-zinc-950/20">
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-1 pointer-events-none">
                        <h2 className="text-xl font-bold tracking-tight text-foreground">{title}</h2>
                        {description && <p className="text-sm text-muted-foreground max-w-sm">{description}</p>}
                    </div>
                    <div className="size-full">
                        {children}
                    </div>
                </section>

                {/* Right: Code & Info Section */}
                <aside className="border-l border-border/50 lg:w-[450px] xl:w-[550px] flex flex-col bg-card/50 backdrop-blur-sm">
                    <Tabs defaultValue="code" className="flex flex-1 flex-col overflow-hidden">
                        <div className="flex items-center justify-between border-b border-border/50 px-4 py-2">
                            <TabsList className="bg-muted/50">
                                <TabsTrigger value="code" className="flex items-center gap-1.5 px-3">
                                    <Code2 className="size-3.5" />
                                    Code
                                </TabsTrigger>
                                <TabsTrigger value="info" className="flex items-center gap-1.5 px-3">
                                    <View className="size-3.5" />
                                    Details
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="code" className="flex-1 overflow-hidden m-0 border-none">
                            <ScrollArea className="size-full">
                                <div className="p-4 pt-0">
                                    <pre className="p-4 rounded-lg bg-zinc-950 text-zinc-300 text-xs font-mono leading-relaxed overflow-x-auto border border-zinc-800/50">
                                        <code>{code}</code>
                                    </pre>
                                </div>
                            </ScrollArea>
                        </TabsContent>

                        <TabsContent value="info" className="flex-1 overflow-hidden m-0 p-6 border-none">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold tracking-tight">상세 설명</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    이 예제는 Three.js의 {title} 기능을 데모합니다.
                                    우측 상단의 Leva 컨트롤러를 사용하여 다양한 속성을 실시간으로 조절해 볼 수 있습니다.
                                </p>
                                <div className="rounded-lg bg-primary/5 border border-primary/10 p-4 space-y-2">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary">학습 포인트</h4>
                                    <ul className="text-xs text-muted-foreground space-y-1.5 list-disc list-inside">
                                        <li>컴포넌트 구조 확인</li>
                                        <li>애니메이션 틱(useFrame) 로직</li>
                                        <li>속성 데이터 바인딩</li>
                                    </ul>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </aside>
            </div>
        </div>
    )
}
