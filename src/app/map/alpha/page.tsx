import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { AlphaMapDemo } from "@/components/canvas/map/alpha-map-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function AlphaMapPage() {
    const code = await getComponentCode("components/canvas/map/alpha-map-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Alpha Map"
                description="그레이스케일 이미지를 사용하여 재질의 투명도를 픽셀 단위로 조절하는 맵입니다. 하얀색은 완전 불투명, 검은색은 완전 투명을 나타냅니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <AlphaMapDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
