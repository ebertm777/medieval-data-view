"use client";
import { useRef, useEffect } from "react";
import * as d3 from "d3";

export default function DamageChart({ data }) {
  const ref = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const width = 600;
    const rowHeight = 40;
    const height = data.length * rowHeight;

    svg.attr("width", width).attr("height", height);

    const maxDamage = d3.max(data, (d) => d.damage);
    const x = d3
      .scaleLinear()
      .domain([0, maxDamage])
      .range([0, width - 100]);

    // 1. Runa mágica (imagem)
    svg
      .selectAll("image")
      .data(data)
      .enter()
      .append("image")
      .attr("xlink:href", "/rune.svg")
      .attr("x", 0)
      .attr("y", (_, i) => i * rowHeight + 2)
      .attr("width", 24)
      .attr("height", 24);

    // 2. Barras de dano
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", 30)
      .attr("y", (_, i) => i * rowHeight)
      .attr("height", 30)
      .attr("width", 0)
      .attr("fill", "#9f1818")
      .transition()
      .duration(1600)
      .ease(d3.easeCubicInOut)
      .attr("width", (d) => x(d.damage));

    // 3. Texto combinado (nome + dano) por cima da barra
    svg
      .selectAll(".damage-label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "damage-label")
      .text((d) => `${d.name}: ${d.damage} dmg`)
      .attr("x", 40)
      .attr("y", (_, i) => i * rowHeight + 20)
      .attr("fill", "#fff")
      .style("font-family", "MedievalSharp")
      .style("font-size", "12px")
      .style("pointer-events", "none");
  }, [data]);

  return <svg style={{marginTop: '16px'}} ref={ref}></svg>;
}
