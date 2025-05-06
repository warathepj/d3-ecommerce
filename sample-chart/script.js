const data = [
    { year: 1999, count: 100 },
    { year: 2009, count: 290 },
    { year: 2010, count: 240 },
  ];

  const svg = d3.select("svg"),
  margin = { top: 20, right: 30, bottom: 40, left: 40 },
  width = +svg.attr("width") - margin.left - margin.right,
  height = +svg.attr("height") - margin.top - margin.bottom;

const chart = svg
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3
  .scaleBand()
  .domain(data.map((d) => d.year))
  .range([0, width])
  .padding(0.1);

const y = d3
  .scaleLinear()
  .domain([0, d3.max(data, (d) => d.count)])
  .nice()
  .range([height, 0]);

  chart
  .append("g")
  .attr("transform", `translate(0,${height})`)
  .call(d3.axisBottom(x).tickFormat(d3.format("d")));

chart.append("g").call(d3.axisLeft(y));

chart
  .selectAll(".bar")
  .data(data)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", (d) => x(d.year))
  .attr("y", (d) => y(d.count))
  .attr("width", x.bandwidth())
  .attr("height", (d) => height - y(d.count))
  .attr("fill", "steelblue");