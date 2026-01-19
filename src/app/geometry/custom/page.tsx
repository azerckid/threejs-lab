import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { CustomDemo } from "@/components/canvas/geometry/custom-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function CustomPage() {
    const code = await getComponentCode("components/canvas/geometry/custom-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Custom Geometry"
                description="BufferGeometry와 BufferAttribute를 사용하여 직접 정점을 정의하고 형상을 생성하는 방식입니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <CustomDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
