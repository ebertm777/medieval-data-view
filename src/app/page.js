import TimelineChart from "@/Data/Data";

const kingdoms = [
  { name: "Reino de Eldoria", start: 0, end: 300 },
  { name: "Império Draknor", start: 0, end: 450 },
  { name: "Confederação Thalor", start: 0, end: 700 },
];

export default function Home() {
  return (
    <div className="container">
    <h1>📜 Linhas do Tempo dos Reinos</h1>
    <TimelineChart data={kingdoms} />
  </div>
  );
}
