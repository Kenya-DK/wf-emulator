import { Box, Divider, Group, Pagination, ScrollArea, SimpleGrid } from "@mantine/core";
import { useGetInventory } from "@hooks";
import { Mod, SearchField } from "@components";
import { useEffect, useState } from "react";
import { paginate } from "@utils";
import { ItemMod } from "@api";

export type ModsPanelProps = {}
export const ModsPanel = ({ }: ModsPanelProps) => {
  // States
  // State's
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState(1);
  const pageSizes = [1, 5, 10, 15, 20, 25, 30, 50, 100];
  const [pageSize, _setPageSize] = useState(pageSizes[pageSizes.length - 1]);
  const [totalPages, setTotalPages] = useState(0);
  const [rows, setRows] = useState<ItemMod[]>([]);
  const inv = useGetInventory()
  // // Translate general
  // const useTranslateForm = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateForms(`config.tabs.general.${key}`, { ...context }, i18Key)
  // const useTranslateButtons = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateForm(`buttons.${key}`, { ...context }, i18Key)
  // const useTranslateFormFields = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateForm(`fields.${key}`, { ...context }, i18Key)


  // Update Database Rows
  useEffect(() => {
    // Get All Mods From Inventory
    let items = inv?.mods ?? [];

    // Filter by query
    if (query)
      items = items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));

    // Update total pages
    setTotalPages(Math.ceil(items.length / pageSize));

    setRows(paginate(items, page, pageSize));
  }, [inv?.mods, query, pageSize, page]);


  return (
    <Box>
      <SearchField value={query} onChange={(text) => setQuery(text)} />
      <ScrollArea mt={"md"} h={"calc(100vh - 340px)"} >
        <SimpleGrid spacing="md" cols={5}>
          {rows.map((mod, i) => (
            <Mod key={i} item={mod} />
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
};