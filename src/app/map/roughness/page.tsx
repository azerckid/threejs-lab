import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { RoughnessMapDemo } from "@/components/canvas/map/roughness-map-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function RoughnessMapPage() {
    const code = await getComponentCode("components/canvas/map/roughness-map-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Roughness Map"
                description="표면의 거친 정도를 픽셀 단위로 설정하는 맵입니다. 하얀색은 거친 표면(난반사), 검은색은 매끄러운 표면(정반사)을 의미합니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <RoughnessMapDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
