"use client";

export default function Home() {
  return (
    <div>
      <div className="text-center">
        <p className="fw-bold fs-4">Welcome to TOP 10 IMDB</p>
        <p>We show top 10 movies of all time!</p>
      </div>
    </div>
  );
}

/*
/movie/[id] content...

 <div className="d-flex justify-content-center gap-3">
      <img src={selMovie.imgSrc} width="200" />
      <div>
        <p className="fw-bold fs-4">{selMovie.title}</p>
        <p>{selMovie.detail}</p>
        <span className="fw-bold fs-4 text-primary d-flex gap-1">
          <IconStar size={35} />
          {selMovie.rating}
        </span>
      </div>
    </div>
*/
