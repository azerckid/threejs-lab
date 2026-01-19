import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { LineDemo } from "@/components/canvas/material/line-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function LineMaterialPage() {
    const code = await getComponentCode("components/canvas/material/line-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Line Basic Material"
                description="선(Line)을 그리기 위한 가장 기본적인 재질입니다. Line(연결된 선), LineLoop(닫힌 선), LineSegments(독립된 선분들)의 차이를 학습합니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas cameraPosition={[0, 0, 10]}>
                    <LineDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
