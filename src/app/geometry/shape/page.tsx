import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { ShapeDemo } from "@/components/canvas/geometry/shape-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function ShapePage() {
    const code = await getComponentCode("components/canvas/geometry/shape-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Shape Geometry"
                description="2차원 경로(Path)를 정의하여 평면적인 형상을 생성합니다.moveTo, lineTo 등을 사용하여 복잡한 2D 모양을 만들 수 있습니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <ShapeDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
