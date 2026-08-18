export interface Contact {
  label: string;
  url: string;
  icon: string;
}

export const contacts: Contact[] = [
  {
    label: "ORCID",
    url: "https://orcid.org/0009-0005-3320-7897",
    icon: "thesvg:orcid",
  },
  {
    label: "Google Scholar",
    url: "https://scholar.google.it/citations?user=-KjnTcsAAAAJ&hl=it",
    icon: "thesvg:google-scholar",
  },
  {
    label: "Semantic Scholar",
    url: "https://www.semanticscholar.org/author/Giuseppe-Magazz%C3%B9/2397202740",
    icon: "thesvg:semantic-scholar",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/giuseppe-magazzu",
    icon: "simple-icons:linkedin",
  },
  {
    label: "GitHub",
    url: "https://github.com/saiteki-kai",
    icon: "thesvg:github",
  },
  {
    label: "Hugging Face",
    url: "https://huggingface.co/saiteki-kai",
    icon: "thesvg:hugging-face",
  },
];

export const name = "Giuseppe Magazzù";
export const email = "g.magazzu1@campus.unimib.it";

