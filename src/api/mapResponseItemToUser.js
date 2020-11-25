export const mapResponseItemToUser = (item) => {
  const name = removeHorifics(item.name);
  const nameElements = name.split(" ");

  const user = {
    name: nameElements[0],
    surname: nameElements.slice(1, nameElements.length).join(" "),
    username: item.username,
  };

  return user;
};

const removeHorifics = (name) => {
  const honorificRegex = /mr?s./i;
  const sanitizedName = name.replace(honorificRegex, "").trim();

  return sanitizedName;
};
