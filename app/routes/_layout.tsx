import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Nav } from "@/components/nav";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] row-start-2 items-center justify-items-center min-h-screen">
      <Header className="bg-transparent backdrop-blur-sm w-full h-fit py-2">
        <Nav />
      </Header>
      <div className="grid items-center justify-items-center w-full min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
