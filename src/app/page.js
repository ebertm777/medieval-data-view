import TimelineChart from "@/Data/Data";

const kingdoms = [
  { name: "Reino de Eldoria", start: 0, end: 300 },
  { name: "Império Draknor", start: 0, end: 450 },
  { name: "Confederação Thalor", start: 0, end: 700 },
  { name: "Domínio de Varkun", start: 0, end: 250 },
  { name: "Terras de Myrvalen", start: 0, end: 500 },
  { name: "Clãs de Norheim", start: 0, end: 350 },
  { name: "Aliança de Zandor", start: 0, end: 600 },
  { name: "Província de Quelmar", start: 0, end: 550 },
];

export default function Home() {
  return (
    <div className="container">
    <h1>📜 Linhas do Tempo dos Reinos</h1>
    <TimelineChart data={kingdoms} />
  </div>
  );
}
