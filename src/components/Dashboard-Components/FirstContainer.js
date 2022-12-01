import React from "react";
import { Block, Card, Title, BarChart} from "@tremor/react";

const data = [
  {
    state: "İstanbul",
    "Depo A": 890,
    "Depo B": 338,
    "Depo C": 538,
    "Depo D": 396,
    "Depo E": 138,
    "Depo F": 436,
  },
  {
    state: "Ankara",
    "Depo A": 289,
    "Depo B": 233,
    "Depo C": 253,
    "Depo D": 333,
    "Depo E": 133,
    "Depo F": 533,
  },
  {
    state: "İzmir",
    "Depo A": 389,
    "Depo B": 233,
    "Depo C": 653,
    "Depo D": 533,
    "Depo E": 233,
    "Depo F": 733,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

export default function FirstContainer() {
  return (
    <div>
      <Block marginTop="mt-6">
        <Card>
          <Title>Satışlar: Girdiler</Title>
          <BarChart
            data={data}
            dataKey="state"
            categories={[
              "Depo A",
              "Depo B",
              "Depo C",
              "Depo D",
              "Depo E",
              "Depo F",
            ]}
            colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
            valueFormatter={dataFormatter}
            marginTop="mt-6"
            yAxisWidth="w-12"
          />
        </Card>
      </Block>
    </div>
  );
}