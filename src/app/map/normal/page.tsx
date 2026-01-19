import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { NormalMapDemo } from "@/components/canvas/map/normal-map-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function NormalMapPage() {
    const code = await getComponentCode("components/canvas/map/normal-map-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Normal Map"
                description="표면의 법선(Normal) 정보를 사용하여 실제 기하학적 구조를 변경하지 않고도 디테일한 굴곡과 요철을 표현하는 맵입니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <NormalMapDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
