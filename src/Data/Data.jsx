"use client";
import { useRef, useEffect } from "react";
import * as d3 from "d3";

export default function TimelineChart({ data }) {
  const ref = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const width = 600;
    const rowHeight = 40;
    const height = data.length * rowHeight;

    svg.attr("width", width).attr("height", height);

    const x = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.end)])
      .range([0, width - 100]);

    // 1. Escudo SVG à esquerda
    svg
      .selectAll("image")
      .data(data)
      .enter()
      .append("image")
      .attr("xlink:href", "/shield.svg")
      .attr("x", 0)
      .attr("y", (_, i) => i * rowHeight + 2)
      .attr("width", 24)
      .attr("height", 24);

    // 2. Barras de contribuição
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", 30)
      .attr("y", (_, i) => i * rowHeight)
      .attr("height", 30)
      .attr("width", 0)
      .attr("fill", "#8b5e3c")
      .transition()
      .duration(1600)
      .ease(d3.easeCubicInOut)
      .attr("width", (d) => x(d.end - d.start));

    // 3. Nome do jogador por cima da barra
    svg
      .selectAll(".name-label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "name-label")
      .text((d) => d.name)
      .attr("x", 40)
      .attr("y", (_, i) => i * rowHeight + 20)
      .attr("fill", "#fdf6e3")
      .style("font-family", "MedievalSharp")
      .style("font-size", "12px")
      .style("pointer-events", "none");
  }, [data]);

  return <svg style={{ marginTop: "16px" }} ref={ref}></svg>;
}
