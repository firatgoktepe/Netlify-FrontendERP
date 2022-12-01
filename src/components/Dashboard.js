import React from 'react'
import Header from './Header'
import {
  Card,
  Title,
  Text,
  Tab,
  TabList,
  ColGrid,
  Block,
  Flex,
  Metric,
  BadgeDelta,
  ProgressBar,
} from '@tremor/react';

const Dashboard = () => {
  return (
    <>
        <Header />
        <div className="container">
            <div className="row">
                <div>Dashboard</div>
                <Card maxWidth="max-w-lg">
                  <Flex alignItems="items-start">
                    <Block>
                      <Text>Sales</Text>
                      <Metric>$ 20,699</Metric>
                    </Block>
                    <BadgeDelta deltaType="moderateDecrease" text="13.2%" />
                  </Flex>
                  <Flex marginTop="mt-4">
                    <Text truncate={true}>50% ($ 110,250)</Text>
                    <Text> $ 220,500 </Text>
                  </Flex>
                  <ProgressBar percentageValue={50} marginTop="mt-2" />
                </Card>
            </div>
        </div>
    </>
  )
}

export default Dashboard