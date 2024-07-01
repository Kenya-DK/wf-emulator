import { Box } from "@mantine/core";
import { api, Frame } from "@api";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export function FrameEditPage() {
  // State's
  let { id } = useParams();

  const { data: frame } = useQuery({
    queryKey: ['warehouse', id],
    queryFn: () => api.inventory.getSuitByItemId(id || ''),
    enabled: !!id,
  })

  return (
    <Box p={"md"}>
      <pre>
        {JSON.stringify(frame, null, 2)}
      </pre>
    </Box>
  );
}