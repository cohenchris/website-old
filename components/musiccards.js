import styles from './musiccards.module.css';

export function AlbumCard(props) {
  // Consume album props
  const name = props.name;
  const artist = props.artist;
  const year = props.year;
  const rating = props.rating;
  const cover = encodeURIComponent("music/metadata/" + artist + "/" + name + "/cover.jpg")

  // Determine rating color
  let ratingColor = ""
  if (rating < 6) {
    ratingColor = "red";
  }
  else if (rating < 7.5) {
    ratingColor = "orange";
  }
  else if (rating < 8.5) {
    ratingColor = "lightGreen";
  }
  else {
    ratingColor = "green";
  }

  return(
          <div className={styles.albumCard}>
            <img className={styles.albumCover} src={cover}/>
            <div className={styles.albumInfo}>
              <h4>{name} ({year})</h4>
              <h5>{artist}</h5>
              <h5 style={{ "color": ratingColor }}>{rating} / 10</h5>
            </div>
          </div>
  );
}

export function ArtistCard(props) {
  const name = props.artist;
  const numRatedAlbums = props.numRatedAlbums;
  const image = encodeURIComponent("music/metadata/" + name + "/image.jpg");

  return(
          <div className={styles.artistCard}>
            <div className={styles.artistInfo}>
              <h2>{name}</h2>
              <p>{numRatedAlbums} albums</p>
            </div>
            <img className={styles.artistPicture} src={image}/>
          </div>
  );
}
