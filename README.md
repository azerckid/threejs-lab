# 🧪 Three.js Lab

An interactive 3D graphics learning platform and playground built with **Next.js**, **Three.js**, and **React Three Fiber**. This repository serves as a comprehensive lab for exploring 3D geometries, materials, maps, and advanced animations.

## ✨ Features

- **Interactive Geometries**: Explore various 3D shapes including Box, Sphere, Torus, and Custom geometries.
- **Material Playground**: Live demos of MeshBasic, Lambert, Phong, Standard, and specialized materials like Point and LineDashed.
- **Texture & Mapping**: Implementation examples for Normal, AO, Alpha, Displacement, and Metalness maps.
- **Advanced Demos**: 
  - Character animation (Archer demo)
  - Scene Graph visualizations
  - Custom shader-like effects
- **Real-time Controls**: Integrated with **Leva** for real-time parameter adjustment in the browser.
- **Modern UI**: Styled with **Tailwind CSS 4** and **Shadcn/UI** for a sleek, dark-themed developer experience.

## 🛠 Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/)
- **3D Engine**: [Three.js](https://threejs.org/)
- **React Wrapper**: [React Three Fiber (R3F)](https://docs.pmnd.rs/react-three-fiber/)
- **Helper Library**: [@react-three/drei](https://github.com/pmndrs/drei)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Shadcn/UI](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- **Controls**: [Leva](https://github.com/pmndrs/leva)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (Recommended)
- npm / yarn / pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd threejs-lab
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the interactive lab.

## 📁 Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components/canvas`: Core 3D component demos (Geometry, Material, Map, etc.)
- `src/lib`: Navigation data and utility functions.
- `public`: Static assets including 3D models and textures.

## 📝 Commit Convention

This project follows the **Conventional Commits** specification.
- `feat`: New features
- `fix`: Bug fixes
- `chore`: Maintenance tasks
- `docs`: Documentation updates
- `style`: UI styling changes

---

Developed with ❤️ by **Antigravity** for 3D enthusiasts.
