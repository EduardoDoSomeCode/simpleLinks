import Links from "./Links.json"
// Extracting all categories
const allCategories = Links.map(item => item.Categorie);

// Filtering out categories that do not repeat
const uniqueCategories = allCategories.filter((category, index, self) => self.indexOf(category) === index);


export default uniqueCategories;