import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { RingDemo } from "@/components/canvas/geometry/ring-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function RingPage() {
    const code = await getComponentCode("components/canvas/geometry/ring-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Ring Geometry"
                description="2차원 고리 모양의 형상입니다. 내부 반지름과 외부 반지름을 조절하여 고리의 두께를 변경할 수 있습니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <RingDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
