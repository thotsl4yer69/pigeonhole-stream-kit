import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Play } from "lucide-react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

// Placeholder movies for when TMDB key is not available
const placeholderMovies = [
  {
    id: 1,
    title: "Popular Movie 1",
    poster_path: "",
    vote_average: 8.5,
    release_date: "2024-01-01"
  },
  {
    id: 2,
    title: "Popular Movie 2", 
    poster_path: "",
    vote_average: 7.8,
    release_date: "2024-02-01"
  },
  {
    id: 3,
    title: "Popular Movie 3",
    poster_path: "",
    vote_average: 8.2,
    release_date: "2024-03-01"
  },
  {
    id: 4,
    title: "Popular Movie 4",
    poster_path: "",
    vote_average: 7.9,
    release_date: "2024-04-01"
  }
];

export const TMDBPreview = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const tmdbKey = import.meta.env.VITE_TMDB_V3_KEY;
      
      if (!tmdbKey) {
        // Use placeholder data if no TMDB key is provided
        setMovies(placeholderMovies);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${tmdbKey}`
        );
        const data = await response.json();
        setMovies(data.results?.slice(0, 4) || placeholderMovies);
      } catch (error) {
        console.error('TMDB fetch error:', error);
        setMovies(placeholderMovies);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Content Preview</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what's trending with our content preview powered by The Movie Database. 
            Your device supports thousands of titles through compatible third-party services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {movies.map((movie, index) => (
            <Card key={movie.id} className="tech-card group cursor-pointer overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[2/3] relative bg-secondary/20 rounded-lg overflow-hidden">
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-card">
                      <Play className="w-12 h-12 text-muted-foreground" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-sm truncate">{movie.title}</h3>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {movie.vote_average.toFixed(1)}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {new Date(movie.release_date).getFullYear()}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Content availability varies by region and third-party service subscriptions.
          </p>
        </div>
      </div>
    </section>
  );
};