import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { LightMapDemo } from "@/components/canvas/map/light-map-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function LightMapPage() {
    const code = await getComponentCode("components/canvas/map/light-map-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Light Map"
                description="미리 계산된(Baked) 조명 정보를 담고 있는 맵입니다. 동적인 실시간 조명 계산 없이도 사실적인 빛의 산란과 그림자를 표현할 수 있어 성능 최적화에 유리합니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <LightMapDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
