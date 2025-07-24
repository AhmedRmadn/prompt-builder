"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPromptPage() {
  const [name, setName] = useState("");
  const [sections, setSections] = useState<string[]>(["", "", ""]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSectionChange = (index: number, value: string) => {
    const updatedSections = [...sections];
    updatedSections[index] = value;
    setSections(updatedSections);
  };

  const addSection = () => {
    if (sections.length < 5) {
      setSections([...sections, ""]);
    }
  };

  const removeSection = (index: number) => {
    if (sections.length > 3) {
      const updatedSections = sections.filter((_, i) => i !== index);
      setSections(updatedSections);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("http://localhost:3001/prompts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, sections }),
    });

    if (response.ok) {
      setSuccess(true);
      setName("");
      setSections(["", "", ""]);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      alert("Failed to create prompt");
    }

    setLoading(false);
  };

  return (
    <main className="flex items-center justify-center min-h-[60vh] bg-gradient-to-b from-[#A7C1AC] to-[#ECEEDF]">
      <div className="w-full max-w-xl bg-[#ECEEDF] p-10 rounded-3xl shadow-xl border-2 border-[#A7C1AC] animate-fadein">
        <h1 className="text-2xl font-extrabold mb-2 text-center text-[#81948A]">
          Create New Prompt
        </h1>
        <p className="text-center mb-6 font-medium text-[#A7C1AC]">
          Unleash your creativity and add a new prompt!
        </p>

        {success && (
          <div className="card notification mb-4 p-4 rounded-xl shadow-xl border-2 border-green-500 flex items-center justify-between bg-[#222] text-white">
            <span>✅ Prompt created successfully! Redirecting...</span>
            <button
              onClick={() => setSuccess(false)}
              className="ml-4 px-2 py-1 bg-green-700 text-white rounded hover:bg-green-800"
            >
              Dismiss
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-[#A7C1AC]">
              Prompt Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border-2 border-[#A7C1AC] rounded-xl bg-[#D3DAC3] text-[#81948A] font-semibold focus:outline-none focus:ring-2 focus:ring-[#81948A] focus:border-[#81948A] transition"
              placeholder="e.g. Interview Prep Prompt"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-[#A7C1AC]">
              Sections (min 3, max 5)
            </label>
            {sections.map((section, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  required
                  value={section}
                  onChange={(e) => handleSectionChange(index, e.target.value)}
                  className="flex-grow px-4 py-2 border-2 border-[#A7C1AC] rounded-xl bg-[#D3DAC3] text-[#81948A] font-semibold focus:outline-none focus:ring-2 focus:ring-[#81948A] focus:border-[#81948A] transition"
                  placeholder={`Section ${index + 1}`}
                  disabled={loading}
                />
                {sections.length > 3 && (
                  <button
                    type="button"
                    onClick={() => removeSection(index)}
                    className="text-red-600 font-bold px-2 hover:text-red-800"
                    title="Remove Section"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            {sections.length < 5 && (
              <button
                type="button"
                onClick={addSection}
                className="mt-2 text-sm font-semibold text-[#81948A] hover:underline"
              >
                + Add Section
              </button>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#81948A] text-[#ECEEDF] px-4 py-2 rounded-full font-bold shadow hover:bg-[#A7C1AC] hover:text-[#81948A] transition duration-200 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Creating..." : "Create Prompt"}
          </button>
        </form>
      </div>

      <style>{`
        @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadein { animation: fadein 1s ease; }
      `}</style>
    </main>
  );
}
