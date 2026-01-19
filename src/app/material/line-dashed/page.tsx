import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { LineDashedDemo } from "@/components/canvas/material/line-dashed-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function LineDashedMaterialPage() {
    const code = await getComponentCode("components/canvas/material/line-dashed-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Line Dashed Material"
                description="점선(Dashed Line)을 표현하기 위한 재질입니다. 점선의 길이와 간격을 조절할 수 있으며, 반드시 geometry의 거리 계산(computeLineDistances)이 선행되어야 합니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas cameraPosition={[0, 0, 10]}>
                    <LineDashedDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
