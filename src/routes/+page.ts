/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  interface ComicData {
    img: string;
    alt: string;
    safe_title: string;
  }

  const response = await fetch(
    `https://fwd.innopolis.university/api/hw2?email=a.fadeenkov@innopolis.university`
  );
  const id = await response.json();
  const comicResponse = await fetch(
    `https://fwd.innopolis.university/api/comic?id=${id}`
  );
  const data: ComicData = await comicResponse.json();

  return {
    post: {
      titlePage: 'Main Page',
      imageUrl: data.img,
      imageAlt: data.alt,
      title: data.safe_title,
    },
  };
}
