import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { MetalnessMapDemo } from "@/components/canvas/map/metalness-map-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function MetalnessMapPage() {
    const code = await getComponentCode("components/canvas/map/metalness-map-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Metalness Map"
                description="재질의 어느 부분이 금속(Metal)이고 어느 부분이 비금속(Dielectric)인지를 지정하는 맵입니다. 금속 부분은 더 강한 반사와 고유의 반사광 색상을 가집니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <MetalnessMapDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
