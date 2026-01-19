import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { SceneGraphDemo } from "@/components/canvas/advanced/scene-graph-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function SceneGraphPage() {
    const code = await getComponentCode("components/canvas/advanced/scene-graph-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Scene Graph - Solar System"
                description="부모-자식 관계를 통한 계층적 변환(Hierarchical Transformation)을 학습합니다. 태양-지구-달의 궤도 운동을 통해 Scene Graph의 원리를 이해할 수 있습니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas cameraPosition={[0, 5, 10]}>
                    <SceneGraphDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
