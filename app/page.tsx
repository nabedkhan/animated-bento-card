import { ScoreCard } from "@/components/score-card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm">
        <ScoreCard />
      </div>
    </div>
  );
}
