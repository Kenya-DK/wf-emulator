import { Box, Divider, Group, Pagination, ScrollArea, SimpleGrid } from "@mantine/core";
import { useGetInventory, useTranslatePages } from "@hooks";
import { ActionWithTooltip, CreateFrameForm, FrameCard, SearchField } from "@components";
import { useEffect, useState } from "react";
import { paginate } from "@utils";
import { api, CreateItem, Frame } from "@api";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { modals } from "@mantine/modals";
import { useMutation } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";

export function FramesPage() {
  // State's
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState(1);
  const pageSizes = [1, 5, 10, 15, 20, 25, 30, 50, 100];
  const [pageSize, _setPageSize] = useState(pageSizes[pageSizes.length - 1]);
  const [totalPages, setTotalPages] = useState(0);
  const [rows, setRows] = useState<Frame[]>([]);
  const inv = useGetInventory()

  // Translate general
  const useTranslateFramesPage = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslatePages(`frames.${key}`, { ...context }, i18Key)
  const useTranslateButtons = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateFramesPage(`buttons.${key}`, { ...context }, i18Key)
  const useTranslateSuccess = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateFramesPage(`success.${key}`, { ...context }, i18Key)
  const useTranslateErrors = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateFramesPage(`errors.${key}`, { ...context }, i18Key)


  // Update Database Rows
  useEffect(() => {
    // Get All Mods From Inventory
    let items = inv?.frames ?? [];

    // Filter by query
    if (query)
      items = items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));

    // Update total pages
    setTotalPages(Math.ceil(items.length / pageSize));

    setRows(paginate(items, page, pageSize));
  }, [inv?.mods, query, pageSize, page, inv?.frames]);


  // Mutations
  const createFrameMutation = useMutation({
    mutationFn: (data: CreateItem) => api.inventory.addItem(data),
    onSuccess: async (name) => {
      notifications.show({ title: useTranslateSuccess("create.title"), message: useTranslateSuccess("create.message", { name }), color: "green.7" });
    },
    onError: (e) => {
      console.error(e);
      notifications.show({ title: useTranslateErrors("create.title"), message: useTranslateErrors("create.message"), color: "red.7" })
    }
  })

  // Modals
  const OpenCreateModal = () => {
    modals.open({
      withCloseButton: false,
      size: "100%",
      children: <CreateFrameForm
        paperProps={{ h: "50vh" }}
        onSubmit={(data) => {
          createFrameMutation.mutate(data);
          modals.closeAll();
        }}
      />,
    })
  }

  return (
    <Box p={"md"}>
      <SearchField value={query} onChange={(text) => setQuery(text)}
        rightSectionWidth={45}
        rightSection={
          <Group>
            <ActionWithTooltip icon={faAdd} tooltip={useTranslateButtons("create.tooltip")}
              onClick={() => OpenCreateModal()}
            />
          </Group>
        }
      />
      <ScrollArea mt={"md"} h={"calc(100vh - 240px)"} >
        <SimpleGrid spacing="md" cols={5}>
          {rows.map((mod, i) => (
            <FrameCard key={i} frame={mod} />
          ))}
        </SimpleGrid>
      </ScrollArea>
      <Divider mt={"md"} />
      <Group grow mt={"md"}>
        <Group justify="flex-end">
          <Pagination value={page} onChange={setPage} total={totalPages} />
        </Group>
      </Group>
    </Box>
  );
}