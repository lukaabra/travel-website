import React from 'react';

type PageProps = {
  params: {
    searchTerm: string;
  };
};

type SearchResult = {
  organic_results: [
    {
      title: string;
      link: string;
      snippet: string;
      thumbnail: string;
      position: number;
    }
  ];
};

const search = async (searchTerm: string): Promise<SearchResult> => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.SERP_API_KEY}`
  );

  const data: SearchResult = await res.json();

  return data;
};

async function SearchResults({ params: { searchTerm } }: PageProps) {
  const searchResults = await search(searchTerm);

  return (
    <div>
      <p className="text-gray-500 text-sm">You searched for: {searchTerm}</p>

      <ol className="space-y-5 p-5">
        {searchResults.organic_results.map((result) => (
          <li key={result.position} className="p-5 border-2 border-gray-200 rounded-lg">
            <h1 className="text-xl font-bold">{result.title}</h1>
            <p className="text-gray-500">{result.link}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SearchResults;
