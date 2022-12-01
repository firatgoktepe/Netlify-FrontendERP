import React from "react";
import { Block,
  Card,
  Toggle,
  ToggleItem,
  Text,
  LineChart,
  Title,
} from "@tremor/react";

const data = [
  {
    date: "2021-01-01",
    Satışlar: 900.73,
    Kâr: 173,
    Müşteriler: 73,
  },
  {
    date: "2021-01-02",
    Satışlar: 300.74,
    Kâr: 174.6,
    Müşteriler: 74,
  },
  {
    date: "2021-03-13",
    Satışlar: 882,
    Kâr: 682,
    Müşteriler: 582,
  },
  {
    date: "2021-05-07",
    Satışlar: 582,
    Kâr: 382,
    Müşteriler: 662,
  },
  {
    date: "2021-07-10",
    Satışlar: 752,
    Kâr: 942,
    Müşteriler: 282,
  },
];

const dollarFormatter = (value) =>
  `$ ${Intl.NumberFormat("us").format(value).toString()}`;

const numberFormatter = (value) =>
  `${Intl.NumberFormat("us").format(value).toString()}`;

export default function SecondContainer() {
  const [selectedKpi, setSelectedKpi] = React.useState("Satışlar");

  const formatters = {
    Satışlar: dollarFormatter,
    Kâr: dollarFormatter,
    Müşteriler: numberFormatter,
  };

  return (
    <Block marginTop="mt-6">
      <Card>
        <div className="md:flex justify-between">
          <Block>
            <Title> Performans Geçmişi </Title>
            <Text> Etki alanı başına günlük artış veya azalma </Text>
          </Block>
          <div className="mt-6 md:mt-0">
            <Toggle
              color="zinc"
              defaultValue={selectedKpi}
              handleSelect={(value) => setSelectedKpi(value)}
            >
              <ToggleItem value="Satışlar" text="Satışlar" />
              <ToggleItem value="Kâr" text="Kâr" />
              <ToggleItem value="Müşteriler" text="Müşteriler" />
            </Toggle>
          </div>
        </div>
        <LineChart
          data={data}
          dataKey="date"
          categories={[selectedKpi]}
          colors={["blue"]}
          valueFormatter={formatters[selectedKpi]}
          marginTop="mt-6"
          yAxisWidth="w-10"
        />
      </Card>
    </Block>
  );
}