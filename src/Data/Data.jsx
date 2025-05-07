"use client";
import { useRef, useEffect } from "react";
import * as d3 from "d3";

export default function TimelineChart({ data }) {
  const ref = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove(); // limpar

    const width = 600;
    const height = data.length * 40;

    svg.attr("width", width).attr("height", height);

    const x = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.end)])
      .range([0, width - 100]);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.start))
      .attr("y", (d, i) => i * 40)
      .attr("width", (d) => x(d.end - d.start))
      .attr("height", 30)
      .attr("fill", "#8b5e3c")
      .attr("width", 0) 
      .transition()
      .duration(2000) 
      .ease(d3.easeCubicInOut) 
      .attr("width", (d) => x(d.end - d.start));

    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d.name)
      .attr("x", 5)
      .attr("y", (d, i) => i * 40 + 20)
      .attr("fill", "#fdf6e3")
      .style("font-family", "MedievalSharp");
  }, [data]);

  return <svg ref={ref}></svg>;
}
