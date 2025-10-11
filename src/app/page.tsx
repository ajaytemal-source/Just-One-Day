// app/page.tsx
"use client";

import { useState } from "react";

type InputObject = {
  header: string;
  body: string;
};

export default function HomePage() {
  const [objects, setObjects] = useState<InputObject[]>([
    { header: "", body: "" },
    { header: "", body: "" },
    { header: "", body: "" },
  ]);

  const handleChange = (index: number, field: keyof InputObject, value: string) => {
    const newObjects = [...objects];
    newObjects[index][field] = value;
    setObjects(newObjects);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(objects, null, 2));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Page header centered */}
      <h1 className="text-4xl font-bold mb-12 text-center fade-in-up" style={{ animationDelay: '0.2s' }}>
        just one day.
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-12 w-full max-w-md"
      >
        {objects.map((obj, idx) => (
          <div
            key={idx}
            className="flex flex-col space-y-3 p-6 bg-white rounded-lg shadow-md w-full fade-in-up"
            style={{ animationDelay: `${0.4 + idx * 0.3}s` }}
          >
            {/* Header input above the body input */}
            <input
              type="text"
              placeholder={`Prompt ${idx + 1}`}
              value={obj.header}
              onChange={(e) => handleChange(idx, "header", e.target.value)}
              className="p-2 border-b-2 border-gray-300 text-sm font-semibold w-full rounded bg-gray-50 text-center"
            />
            <textarea
              placeholder={`Response`}
              value={obj.body}
              onChange={(e) => handleChange(idx, "body", e.target.value)}
              className="p-3 border border-gray-300 text-base w-full rounded resize-none text-center"
              rows={5}
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 font-medium w-1/2 text-center fade-in-up"
        >
          Submit
        </button>
      </form>
    </div>
  );
}