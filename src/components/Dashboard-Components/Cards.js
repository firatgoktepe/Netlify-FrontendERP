import React from "react";
import { BadgeDelta,
   Block,
   Card,
   ColGrid,
   Flex,
   Metric,
   ProgressBar,
   Text, } from "@tremor/react";


   const data = [
    {
      title: "Satışlar",
      metric: "$ 12,699",
      progress: 15.9,
      target: "$ 80,000",
      delta: "13.2%",
      deltaType: "moderateIncrease",
    },
    {
      title: "Kâr",
      metric: "$ 45,564",
      progress: 36.5,
      target: "$ 125,000",
      delta: "23.9%",
      deltaType: "increase",
    },
    {
      title: "Müşteriler",
      metric: "1,072",
      progress: 53.6,
      target: "2,000",
      delta: "10.1%",
      deltaType: "moderateDecrease",
    },
  ];

export default function Cards() {

  return (
   <>
      <ColGrid numColsMd={ 2 } numColsLg={ 3 } gapX="gap-x-6" gapY="gap-y-6" marginTop="mt-6">
         { data.map((item, index) => (
            <Card key={item.title}>
            <Flex alignItems="items-start">
              <Block truncate={true}>
                <Text>{item.title}</Text>
                <Metric truncate={true}>{item.metric}</Metric>
              </Block>
              <BadgeDelta deltaType={item.deltaType} text={item.delta} />
            </Flex>
            <Flex marginTop="mt-4" spaceX="space-x-2">
              <Text truncate={true}>{`${item.progress}% (${item.metric})`}</Text>
              <Text>{item.target}</Text>
            </Flex>
            <ProgressBar percentageValue={item.progress} marginTop="mt-2" />
          </Card>
         ) ) }
         
      </ColGrid>

      {/* <Block marginTop="mt-6">
         <Card>
            <div className="h-80" />
         </Card>
      </Block> */}
   </>
      
  );
}