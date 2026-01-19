import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { BasicMapDemo } from "@/components/canvas/map/basic-map-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function BasicMapPage() {
    const code = await getComponentCode("components/canvas/map/basic-map-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Basic Texture Mapping"
                description="Texture의 반복(Repeat), 래핑(Wrapping), 그리고 필터링(Filtering) 설정을 학습합니다. UV 좌표계를 기준으로 이미지가 물체에 어떻게 투영되는지 이해할 수 있습니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <BasicMapDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
