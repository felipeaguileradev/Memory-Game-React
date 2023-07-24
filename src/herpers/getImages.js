export const getImages = async () => {
  const url = `https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20`;
  const resp = await fetch(url);

  if (!resp.ok) return [];

  const { entries } = await resp.json();

  const images = entries.map((img) => {
    const { fields } = img;
    const { image } = fields;

    return {
      id: image.uuid,
      title: image.title,
      url: image.url,
    };
  });

  return images;
};
