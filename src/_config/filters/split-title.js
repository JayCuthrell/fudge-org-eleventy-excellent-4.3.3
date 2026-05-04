export const splitTitle = (title) => {
  // Fallback just in case a title is missing
  if (!title || typeof title !== 'string') {
    return { eyebrow: '', main: '' };
  }

  // If the title DOES NOT have a colon, treat the whole thing as the main headline
  if (!title.includes(':')) {
    return { eyebrow: '', main: title };
  }
  
  // If it DOES have a colon, split it into two parts
  const parts = title.split(':');
  return {
    eyebrow: parts[0].trim(), // e.g., "What The Fudge for May 3, 2026"
    main: parts.slice(1).join(':').trim() // e.g., "Agentic Intelligence and Super Learners"
  };
};