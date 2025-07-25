import { useEffect, useState } from "react";

const Home = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_BACKEND_API_TOKEN}`
          }
        }
      );
      const data = await response.json();
      setMovies(data.results);
    };
    getMovies();
  }, []);

  return (
    <>
      <section>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://image.tmdb.org/t/p/w1280/7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg" className="d-block w-100 vh-100 object-fit-cover" alt="Movie" />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://image.tmdb.org/t/p/w1280/eU7IfdWq8KQy0oNd4kKXS0QUR08.jpg" className="d-block w-100 vh-100 object-fit-cover" alt="Movie" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://image.tmdb.org/t/p/w1280/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg" className="d-block w-100 vh-100 object-fit-cover" alt="Movie" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="album py-5 bg-body-tertiary">
        <div className="container">
          <h2>Now Playing</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
              movies.map(movie => {
                const { id, backdrop_path, release_date, title } = movie;

                return (
                  <div key={id} className="col">
                    <div className="card shadow-sm">
                      <img src={'https://image.tmdb.org/t/p/w300' + backdrop_path}
                        className="card-img-top" alt={title} />
                      <div className="card-body">
                        <p className="card-text">{title}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                          </div>
                          <small className="text-body-secondary">{release_date}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;