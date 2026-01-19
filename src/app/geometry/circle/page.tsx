import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { CircleDemo } from "@/components/canvas/geometry/circle-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function CirclePage() {
    const code = await getComponentCode("components/canvas/geometry/circle-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Circle Geometry"
                description="2차원 원형 형상입니다. 반지름, 세그먼트 수, 시작 각도 및 호의 길이를 조절할 수 있습니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <CircleDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
