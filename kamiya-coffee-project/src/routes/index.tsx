import { createFileRoute } from "@tanstack/react-router";

// The Kamiya site is plain HTML/CSS/JS in public/kamiya/ (user requirement);
// this route just displays it full-screen in the preview.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kamiya Coffee Pringsewu | Brewed to be Loved" },
      { name: "description", content: "Kopi signature, minuman segar & tempat nongkrong nyaman. Buka 24 jam di Pringsewu, Lampung." },
      { property: "og:title", content: "Kamiya Coffee Pringsewu" },
      { property: "og:description", content: "Kopi signature, minuman segar & tempat nongkrong nyaman. Buka 24 jam." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/kamiya/index.html"
      title="Kamiya Coffee"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
}
