import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { ExtrudeHeartDemo } from "@/components/canvas/geometry/extrude-heart-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function ExtrudeHeartPage() {
    const code = await getComponentCode("components/canvas/geometry/extrude-heart-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Extrude Heart Geometry"
                description="2차원 Shape에 깊이(Depth)를 주어 3차원 입체로 확장(Extrude)합니다. 베벨(Bevel) 효과를 통해 모서리를 부드럽게 처리할 수 있습니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas cameraPosition={[0, 0, 15]}>
                    <ExtrudeHeartDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
