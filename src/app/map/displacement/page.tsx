import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { DisplacementMapDemo } from "@/components/canvas/map/displacement-map-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function DisplacementMapPage() {
    const code = await getComponentCode("components/canvas/map/displacement-map-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Displacement Map"
                description="그레이스케일 이미지를 사용하여 실제 기하학적 정점(Vertices)의 위치를 이동시키는 맵입니다. Normal Map과 달리 실제로 물체의 실루엣이 변경됩니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <DisplacementMapDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
