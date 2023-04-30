import emojis from "@/data/emoji.json";

export default function filterEmojis(searchText, maxResults) {
  return emojis
    .filter((emoji) => {
      if (emoji.description.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (emoji.aliases.includes(searchText.toLowerCase().replace(" ", "_"))) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}
