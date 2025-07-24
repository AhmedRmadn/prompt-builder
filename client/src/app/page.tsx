"use client";

import { useEffect, useState } from "react";
import { fetchPrompts } from "@/lib/api";
import { Prompt } from "@/types/index";
import Link from "next/link";

export default function HomePage() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPrompts()
      .then(setPrompts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold" style={{ color: "#81948A" }}>
          Browse all your creative prompts below!
        </h2>
      </div>
      {loading && (
        <p className="text-center" style={{ color: "#81948A" }}>
          Loading prompts...
        </p>
      )}
      {error && <p className="text-center text-red-600">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6 animate-fadein">
        {prompts.map((prompt, idx) => (
          <Link
            key={prompt._id}
            href={`/prompts/${prompt._id}`}
            className="block p-6 rounded-3xl shadow-lg border-2 border-[#A7C1AC] bg-[#D3DAC3] hover:bg-[#ECEEDF] transition-all duration-200 group relative overflow-hidden transform hover:scale-105"
          >
            <span className="absolute right-4 top-4 text-3xl opacity-20 select-none pointer-events-none">
              {idx % 3 === 0 ? "💡" : idx % 3 === 1 ? "🎨" : "✨"}
            </span>
            <h2
              className="text-2xl font-bold mb-2 truncate"
              style={{ color: "#81948A" }}
            >
              {prompt.name}
            </h2>
            <p className="text-base" style={{ color: "#A7C1AC" }}>
              Click to view details
            </p>
          </Link>
        ))}
      </div>
      {prompts.length === 0 && !loading && !error && (
        <p className="text-center mt-12" style={{ color: "#A7C1AC" }}>
          No prompts found. Create a new one!
        </p>
      )}
      <style>{`
        @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadein { animation: fadein 1s ease; }
      `}</style>
    </div>
  );
}
