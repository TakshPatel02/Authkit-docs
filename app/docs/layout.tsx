import DocsSidebar from "@/components/docs-sidebar";
import MobileDocsSidebar from "@/components/mobile-docs-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/*
        Sidebar — lives OUTSIDE the container, in the left gutter.
        Uses calc() to position itself flush against the container's left edge.
        Only visible when viewport is wide enough to fit sidebar + container.
        left = 50vw - (containerWidth / 2) - sidebarWidth
      */}
      <aside
        className="hidden xl:flex flex-col fixed overflow-y-auto border-r border-border"
        style={{
          top: "var(--docs-header-height)",
          width: "var(--sidebar-width)",
          height: "calc(100vh - var(--docs-header-height))",
          left: "calc(50vw - var(--container-max-width) / 2 - var(--sidebar-width))",
        }}
      >
        <DocsSidebar />
      </aside>

      {/* Mobile Sidebar */}
      <MobileDocsSidebar />

      {/*
        Content — uses the exact same .container as the navbar.
        Normal page flow — browser handles scrolling (one scrollbar only).
        Sidebar stays fixed via position:fixed above.
      */}
      <div className="container">
        <div className="py-12">
          {children}
        </div>
      </div>
    </>
  );
}
