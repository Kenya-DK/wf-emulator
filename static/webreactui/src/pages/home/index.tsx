import { Container, Grid, getGradient, useMantineTheme } from "@mantine/core";
import { StatsWithIcon, TextTranslate } from "@components";
import { useTranslatePages } from "@hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { useGetInventory } from "../../hooks/useGetInventory.hook";

export function HomePage() {
  // State
  const inv = useGetInventory();
  const theme = useMantineTheme();
  // Translate general
  const useTranslate = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslatePages(`home.${key}`, { ...context }, i18Key)
  const useTranslateCards = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslate(`cards.${key}`, { ...context }, i18Key)
  return (
    <Container size={"100%"}>
      <Grid>
        <Grid.Col span={4}>
          <StatsWithIcon
            count={inv?.PremiumCredits || 0}
            color={getGradient({ deg: 180, from: 'green.7', to: 'green.9' }, theme)}
            title={useTranslateCards("platinum.title")}
            icon={<FontAwesomeIcon size="2x" icon={faMoneyBill} />}
            footer={
              <TextTranslate
                i18nKey={useTranslateCards("platinum.footer")}
                values={{
                  count: inv?.PremiumCredits || 0,
                }}
              />
            }
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <StatsWithIcon
            count={inv?.RegularCredits || 0}
            color={getGradient({ deg: 180, from: 'blue.7', to: 'blue.9' }, theme)}
            title={useTranslateCards("credits.title")}
            icon={<FontAwesomeIcon size="2x" icon={faMoneyBill} />}
            footer={
              <TextTranslate
                i18nKey={useTranslateCards("credits.footer")}
                values={{
                  count: inv?.RegularCredits || 0,
                }}
              />
            }
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <StatsWithIcon
            count={inv?.FusionPoints || 0}
            color={getGradient({ deg: 180, from: 'yellow.7', to: 'yellow.9' }, theme)}
            title={useTranslateCards("endo.title")}
            icon={<FontAwesomeIcon size="2x" icon={faMoneyBill} />}
            footer={
              <TextTranslate
                i18nKey={useTranslateCards("endo.footer")}
                values={{
                  count: inv?.FusionPoints || 0,
                }}
              />
            }
          />
        </Grid.Col>
      </Grid>
    </Container >
  );
}