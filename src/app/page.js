import TimelineChart from "@/Data/Data";

const kingdoms = [
  { name: "Player1", start: 0, end: 250 },
  { name: "Player2", start: 0, end: 400 },
  { name: "Player3", start: 0, end: 550 },
  { name: "Player4", start: 0, end: 350 },
  { name: "Player5", start: 0, end: 700 },
  { name: "Player6", start: 0, end: 650 },
  { name: "Player7", start: 0, end: 500 },
  { name: "Player8", start: 0, end: 450 },
];

export default function Home() {
  return (
    <div className="container">
      <h1>📜 Contribuição dos aventureiros</h1>
      <TimelineChart data={kingdoms} />
    </div>
  );
}
