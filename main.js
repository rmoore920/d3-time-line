import * as d3 from "https://unpkg.com/d3?module"

const dateParser = d3.timeParse("%Y-%m-%d")
const dates = (d) => dateParser(d.date)

async function draw() {
  const data = await d3.json("./data/data.json")
  const x = dates(data[0])
  console.log(x)
  const y = (d) => d.temperatureMax
  console.log(y)
}

draw()
