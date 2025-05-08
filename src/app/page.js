import TimelineChart from "@/Data/Data";
import DamageChart from "@/Data/DamageChart";

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

const damage = [
  { name: "Player1", damage: 1800 },
  { name: "Player2", damage: 2200 },
  { name: "Player3", damage: 1500 },
  { name: "Player4", damage: 3000 },
  { name: "Player5", damage: 2700 },
  { name: "Player6", damage: 1300 },
  { name: "Player7", damage: 2500 },
  { name: "Player8", damage: 1900 },
];

export default function Home() {
  return (
    <div className="container">
      <h1>📜 Contribuição dos aventureiros</h1>
      <h2 style={{ marginTop: "2rem" }}>🔵 Contribuição por aventureiro</h2>
      <TimelineChart data={kingdoms} />

      <h2 style={{ marginTop: "2rem" }}>🔵 Dano Por aventureiro</h2>
      <DamageChart data={damage} />
    </div>
  );
}
