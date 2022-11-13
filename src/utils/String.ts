export const caseInsensitiveInclude = (originalString: string, searchString: string) =>
  originalString.trim().toLowerCase().includes(searchString.trim().toLowerCase());

export const prettifyString = (str: string): string => {
  return str.trim().replace('-', ' ');
}