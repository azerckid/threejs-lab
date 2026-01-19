import {
    Box,
    Layers,
    Map as MapIcon,
    User,
    Zap,
    ChevronRight,
    Home,
    Code
} from "lucide-react"

export const tutorialNav = [
    {
        title: "Geometry",
        url: "/geometry",
        icon: Box,
        items: [
            { title: "Box", url: "/geometry/box" },
            { title: "Circle", url: "/geometry/circle" },
            { title: "Cone", url: "/geometry/cone" },
            { title: "Custom", url: "/geometry/custom" },
            { title: "Cylinder", url: "/geometry/cylinder" },
            { title: "Extrude Heart", url: "/geometry/extrude-heart" },
            { title: "Extrude Text", url: "/geometry/extrude-text" },
            { title: "Plane", url: "/geometry/plane" },
            { title: "Ring", url: "/geometry/ring" },
            { title: "Shape", url: "/geometry/shape" },
            { title: "Sphere", url: "/geometry/sphere" },
            { title: "Torus", url: "/geometry/torus" },
            { title: "Torus Knot", url: "/geometry/torus-knot" },
        ]
    },
    {
        title: "Material",
        url: "/material",
        icon: Layers,
        items: [
            { title: "Basic", url: "/material/basic" },
            { title: "Lambert", url: "/material/lambert" },
            { title: "Phong", url: "/material/phong" },
            { title: "Physical", url: "/material/physical" },
            { title: "Standard", url: "/material/standard" },
            { title: "Points", url: "/material/points" },
            { title: "Line", url: "/material/line" },
            { title: "Line Dashed", url: "/material/line-dashed" },
        ]
    },
    {
        title: "Map",
        url: "/map",
        icon: MapIcon,
        items: [
            { title: "Basic Map", url: "/map/basic" },
            { title: "AO Map", url: "/map/ao" },
            { title: "Alpha Map", url: "/map/alpha" },
            { title: "Displacement Map", url: "/map/displacement" },
            { title: "Light Map", url: "/map/light" },
            { title: "Metalness Map", url: "/map/metalness" },
            { title: "Normal Map", url: "/map/normal" },
            { title: "Roughness Map", url: "/map/roughness" },
        ]
    },
    {
        title: "Character",
        url: "/character",
        icon: User,
        items: [
            { title: "Archer", url: "/character/archer" },
        ]
    },
    {
        title: "Advanced",
        url: "/advanced",
        icon: Zap,
        items: [
            { title: "Matilda", url: "/advanced/matilda" },
            { title: "Scene Graph", url: "/advanced/scene-graph" },
        ]
    }
]
