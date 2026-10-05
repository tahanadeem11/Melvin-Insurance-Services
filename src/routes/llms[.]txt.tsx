import { createFileRoute } from "@tanstack/react-router";
import { buildLlmsTxt, getOrigin } from "@/lib/seo";

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: ({ request }: { request: Request }) =>
        new Response(buildLlmsTxt(getOrigin(request)), {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
          },
        }),
    },
  },
});
