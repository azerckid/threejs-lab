import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { AOMapDemo } from "@/components/canvas/map/ao-map-demo"
import { CodeBlock } from "@/components/code-block"
import { getComponentCode } from "@/lib/code-fetcher"

export default async function AOMapPage() {
    const code = await getComponentCode("components/canvas/map/ao-map-demo.tsx")

    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="AO Map (Ambient Occlusion)"
                description="구석진 부분이나 틈새 사이에 생기는 은은한 그림자를 표현하여 그림자의 깊이감을 더해주는 맵입니다. 일반적으로 두 번째 UV 채널(uv2)을 사용합니다."
                codeBlock={<CodeBlock code={code} />}
            >
                <BaseCanvas>
                    <AOMapDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
