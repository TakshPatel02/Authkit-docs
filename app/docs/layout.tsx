import DocsSidebar from "@/components/docs-sidebar";

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

      {/*
        Content — uses the exact same .container as the navbar.
        Fixed height, independently scrollable.
        Sidebar doesn't affect this at all since it's fixed/out of flow.
      */}
      <div
        className="container overflow-y-auto"
        style={{ height: "calc(100vh - var(--docs-header-height))" }}
      >
        <div className="py-12">
          {children}
        </div>
      </div>
    </>
  );
}
