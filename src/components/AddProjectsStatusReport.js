import React from 'react'
import ReactDOM from 'react-dom';
import Header from './Header'
import { VictoryBar, VictoryChart, VictoryAxis,
  VictoryTheme, VictoryStack, VictoryScatter, VictoryGroup, VictoryLine, VictoryClipContainer, VictoryArea, VictoryPie} from 'victory'

const AddProjectsStatusReport = () => {
  const data2012 = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];
  
  const data2013 = [
    {quarter: 1, earnings: 15000},
    {quarter: 2, earnings: 12500},
    {quarter: 3, earnings: 19500},
    {quarter: 4, earnings: 13000}
  ];
  
  const data2014 = [
    {quarter: 1, earnings: 11500},
    {quarter: 2, earnings: 13250},
    {quarter: 3, earnings: 20000},
    {quarter: 4, earnings: 15500}
  ];
  
  const data2015 = [
    {quarter: 1, earnings: 18000},
    {quarter: 2, earnings: 13250},
    {quarter: 3, earnings: 15000},
    {quarter: 4, earnings: 12000}
  ];

  return (
    <div className="container mt-5">
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <h2 className="chartHeadings">Bar Gösterimi</h2>
            <VictoryChart
              domainPadding={20}
              theme={VictoryTheme.material}
            >
              <VictoryAxis
                tickValues={[1, 2, 3, 4]}
                tickFormat={["2012", "2013", "2014", "2015"]}
              />
              <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`$${x / 1000}k`)}
              />
              <VictoryStack colorScale={"warm"}>
                <VictoryBar
                  data={data2012}
                  x="quarter"
                  y="earnings"
                />
                <VictoryBar
                  data={data2013}
                  x="quarter"
                  y="earnings"
                />
                <VictoryBar
                  data={data2014}
                  x="quarter"
                  y="earnings"
                />
                <VictoryBar
                  data={data2015}
                  x="quarter"
                  y="earnings"
                />
              </VictoryStack>
            </VictoryChart>
          </div>
          <div class="col-sm">
            <h2 className="chartHeadings">Dağılım Chart Örneği</h2>
            <VictoryChart horizontal
              domainPadding={{ x: 8 }}
            >
              <VictoryBar
                style={{
                  data: { fill: "#c43a31" }
                }}
                data={[
                  { x: 0, y: 2 },
                  { x: 60, y: 3 },
                  { x: 120, y: 5 },
                  { x: 180, y: 4 },
                  { x: 240, y: 4 },
                  { x: 300, y: 4 }
                ]}
              />
              <VictoryScatter
                data={[
                  { x: 0, y: 2 },
                  { x: 60, y: 3 },
                  { x: 120, y: 5 },
                  { x: 180, y: 4 },
                  { x: 240, y: 4 },
                  { x: 300, y: 4 }
                ]}
              />
            </VictoryChart> 
          </div>
          <div class="col-sm">
            <h2 className="chartHeadings">Çoklu Bar Gösterimi</h2>
            <VictoryChart>
              <VictoryGroup offset={20}
                colorScale={"qualitative"}
              >
                <VictoryBar
                  data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }]}
                />
                <VictoryBar
                  data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }]}
                />
                <VictoryBar
                  data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }]}
                />
              </VictoryGroup>
            </VictoryChart>
          </div>
        </div>
        <div className="row">
          <div class="col-sm">
              <h2 className="chartHeadings">Line Bar Gösterimi</h2>
              <VictoryChart>
                <VictoryGroup data={[
                    { x: 0, y: 2 },
                    { x: 60, y: 3 },
                    { x: 120, y: 5 },
                    { x: 180, y: 4 },
                    { x: 240, y: 4 },
                    { x: 300, y: 4 }
                  ]}>
                  <VictoryLine/>
                  <VictoryScatter/>
                </VictoryGroup>
              </VictoryChart>
            </div>
            <div class="col-sm">
              <h2 className="chartHeadings">Renkli Line Bar Gösterimi</h2>
              <VictoryChart>
                <VictoryLine
                  groupComponent={<VictoryClipContainer clipPadding={{ top: 5, right: 10 }}/>}
                  style={{ data: { stroke: "#c43a31", strokeWidth: 15, strokeLinecap: "round" } }}
                  data={[
                    { x: 0, y: 2 },
                    { x: 60, y: 3 },
                    { x: 120, y: 5 },
                    { x: 180, y: 4 },
                    { x: 240, y: 4 },
                    { x: 300, y: 4 }
                  ]}
                />
              </VictoryChart>
            </div>
            <div class="col-sm">
              <h2 className="chartHeadings">Dağılım Gösterimi 2</h2>
              <VictoryChart
                theme={VictoryTheme.material}
                domain={{ x: [0, 5], y: [0, 7] }}
              >
                <VictoryScatter
                  style={{ data: { fill: "#c43a31" } }}
                  size={7}
                  data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 7 }
                  ]}
                />
              </VictoryChart>
            </div>
        </div>
        <div className="row">
          <div class="col-sm">
              <h2 className="chartHeadings">Etkileşimli Area Gösterimi (Tıklanabilir)</h2>
              <VictoryStack
                events={[{
                  childName: "all",
                  target: "data",
                  eventHandlers: {
                    onClick: () => {
                      return [
                        {
                          childName: "area-2",
                          target: "data",
                          mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "gold" }) })
                        }, {
                          childName: "area-3",
                          target: "data",
                          mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "orange" }) })
                        }, {
                          childName: "area-4",
                          target: "data",
                          mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "red" }) })
                        }
                      ];
                    }
                  }
                }]}
              >
                <VictoryArea name="area-1" data={[{x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}]}/>
                <VictoryArea name="area-2" data={[{x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}]}/>
                <VictoryArea name="area-3" data={[{x: "a", y: 3}, {x: "b", y: 2}, {x: "c", y: 6}]}/>
              </VictoryStack>
            </div>
            <div class="col-sm">
              <h2 className="chartHeadings">Pie Gösterimi</h2>
              <VictoryPie
                colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
                data={[
                  { x: 1, y: 2, label: "1" },
                  { x: 2, y: 3, label: "2" },
                  { x: 3, y: 5, label: "3" },
                  { x: 4, y: 6, label: "4" },
                  { x: 5, y: 7, label: "5" },
                ]}
              />
            </div>
            <div class="col-sm">
              <h2 className="chartHeadings">Pie Gösterimi 2</h2>
              <svg width={300} height={300}>
                <circle cx={150} cy={150} r={50} fill="#c43a31"/>
                <VictoryPie
                  standalone={false}
                  width={300} height={300}
                  innerRadius={75}
                  data={[
                    { x: 1, y: 2, label: "1" },
                    { x: 2, y: 3, label: "2" },
                    { x: 3, y: 5, label: "3" },
                    { x: 4, y: 6, label: "4" },
                    { x: 5, y: 7, label: "5" },
                  ]}
                />
              </svg>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddProjectsStatusReport