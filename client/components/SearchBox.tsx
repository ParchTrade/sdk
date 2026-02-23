import { useState } from "react";

export default function SearchBox({ onSearch }: any) {
  const [query, setQuery] = useState("");

  return (
    <div style={{ marginTop: 20 }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Find me a lightweight laptop under $1000..."
        style={{ width: "60%", padding: 10 }}
      />
      <button
        onClick={() => onSearch(query)}
        style={{ padding: 10, marginLeft: 10 }}
      >
        Search
      </button>
    </div>
  );
}
