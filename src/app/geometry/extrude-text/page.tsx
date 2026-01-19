import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { ExtrudeTextDemo } from "@/components/canvas/geometry/extrude-text-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function ExtrudeTextPage() {
    const code = await getComponentCode("components/canvas/geometry/extrude-text-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Extrude Text Geometry"
                description="폰트 데이터를 사용하여 3D 텍스트 형상을 생성합니다. 글자 크기, 두께 및 베벨 효과를 실시간으로 조절할 수 있습니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas cameraPosition={[0, 0, 10]}>
                    <ExtrudeTextDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
