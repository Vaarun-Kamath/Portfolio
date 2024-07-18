export type ProjectProp = React.PropsWithChildren<{
  name: string;
  language: string;
  concepts: string;
  image: string;
  description: Array<string>;
  githubLink: string;
}>;
