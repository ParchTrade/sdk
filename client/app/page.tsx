"use client";

import { useState } from "react";
import SearchBox from "../components/SearchBox";
import Results from "../components/Results";
import { searchProducts } from "../lib/api";

export default function Home() {
  const [results, setResults] = useState([]);

  const handleSearch = async (query: string) => {
    const data = await searchProducts(query);
    setResults(data);
  };

  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Parch</h1>
      <p>Describe what you need — Parch hunts it down.</p>
      <SearchBox onSearch={handleSearch} />
      <Results items={results} />
    </main>
  );
}
