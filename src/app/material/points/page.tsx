import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { PointsDemo } from "@/components/canvas/material/points-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function PointsMaterialPage() {
    const code = await getComponentCode("components/canvas/material/points-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Points Material"
                description="수많은 점(Points) 혹은 입자(Particles)를 효과적으로 렌더링하기 위한 재질입니다. 별, 먼지, 눈송이 등의 파티클 시스템을 구현할 때 주로 사용됩니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas cameraPosition={[0, 0, 15]}>
                    <PointsDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
