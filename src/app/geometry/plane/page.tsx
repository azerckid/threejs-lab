import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { PlaneDemo } from "@/components/canvas/geometry/plane-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function PlanePage() {
    const code = await getComponentCode("components/canvas/geometry/plane-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Plane Geometry"
                description="가장 기본적인 2차원 평면 형상입니다. 가로, 세로 길이와 정밀도를 조절할 수 있습니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <PlaneDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
