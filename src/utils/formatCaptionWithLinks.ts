export const formatCaptionWithLinks = (text: string) => {
  const urlPattern = /(\bhttps?:\/\/[^\s]+)/g;
  return text.replace(urlPattern, (url: string) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });
};
