import { notFound } from "next/navigation";
import { Prompt } from "@/types/index";

/**
 * Fetches prompt data from the API.
 * @param id The ID of the prompt to fetch.
 * @returns A Promise that resolves to the Prompt object or null if not found/error.
 */
async function fetchPrompt(id: string): Promise<Prompt | null> {
  try {
    // Fetch data from your local API endpoint
    const res = await fetch(`http://localhost:3001/prompts/${id}`, {
      cache: "no-store", // Disable caching to always get fresh data
    });

    // If the response is not OK (e.g., 404, 500), return null
    if (!res.ok) {
      console.error(
        `Failed to fetch prompt with ID ${id}: ${res.status} ${res.statusText}`
      );
      return null;
    }

    // Parse the JSON response and return the prompt data
    return res.json();
  } catch (error) {
    // Log any errors during the fetch operation
    console.error("Error fetching prompt:", error);
    return null;
  }
}

/**
 * React Server Component for displaying prompt details.
 * This component fetches prompt data based on the ID from the URL parameters.
 * @param params An object containing route parameters, specifically 'id'.
 */
export default async function PromptPage({
  params,
}: {
  // The type definition for params. If params is indeed a Promise,
  // the runtime will resolve it. We'll explicitly await it below.
  params: { id: string };
}) {
  // Await params if it's a Promise before accessing its properties.
  // This directly addresses the Next.js error message you received.
  // In typical Next.js App Router setups, params is a direct object,
  // but this adjustment handles the specific error you're seeing.
  const resolvedParams = await Promise.resolve(params); // Ensure params is resolved if it's a promise

  // Fetch the prompt data using the resolved ID
  const prompt = await fetchPrompt(resolvedParams.id);

  // If no prompt is found, trigger Next.js's notFound handler
  if (!prompt) {
    return notFound();
  }

  return (
    <main className="p-4 bg-gradient-to-b from-[#A7C1AC] to-[#ECEEDF] min-h-screen font-sans antialiased">
      <div className="max-w-3xl mx-auto bg-[#ECEEDF] p-10 rounded-3xl shadow-xl border-2 border-[#A7C1AC] animate-fadein">
        <h1
          className="text-3xl font-extrabold mb-4 text-center"
          style={{ color: "#81948A" }}
        >
          Prompt Details
        </h1>
        <p
          className="text-2xl mb-8 text-center leading-relaxed font-semibold"
          style={{ color: "#A7C1AC" }}
        >
          {prompt.name}
        </p>

        <div className="space-y-8">
          {prompt.sections.map((section, index) => (
            <div
              key={index}
              className="bg-[#D3DAC3] p-6 rounded-2xl border-2 border-[#A7C1AC] shadow-md hover:shadow-xl transition-all group flex flex-col gap-2 transform hover:scale-105 duration-200"
            >
              <h2
                className="text-lg font-bold mb-1 flex items-center gap-2"
                style={{ color: "#A7C1AC" }}
              >
                <span className="text-2xl">
                  {index % 2 === 0 ? "🌱" : "📝"}
                </span>
                Section {index + 1}
              </h2>
              <p
                className="leading-relaxed whitespace-pre-wrap"
                style={{ color: "#81948A" }}
              >
                {section}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadein { animation: fadein 1s ease; }
      `}</style>
    </main>
  );
}
