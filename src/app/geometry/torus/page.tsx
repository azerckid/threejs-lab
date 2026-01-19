import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { TorusDemo } from "@/components/canvas/geometry/torus-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function TorusPage() {
    const code = await getComponentCode("components/canvas/geometry/torus-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Torus Geometry"
                description="도넛 모양의 원환체 형상입니다. 전체 반지름과 관의 굵기, 그리고 세그먼트 수를 조절할 수 있습니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <TorusDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
