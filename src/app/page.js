const API_KEY = process.env.API_KEY;
import Results from "@/components/Results";
import React from "react";

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";
  
    const res = await fetch(
      `https://api.themoviedb.org/3${
        genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/movie/week`
      }?api_key=${API_KEY}&language=en-US&page=1`
    );

    // if (!res.ok) {
    //   throw new Error('Failed to fetch data');
    // }

    const responseBody = await res.text();

    // Parse the response body as JSON if it's not empty
    const data = responseBody ? JSON.parse(responseBody) : null;


  const results = data && data.results ? data.results : [];

  return <div>
     <Results results={results}/>
  </div>;
};

export default Home;
