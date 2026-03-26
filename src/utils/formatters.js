export function formatDownloads(downloads) {
  if (downloads >= 1000000) {
    return `${(downloads / 1000000).toFixed(downloads % 1000000 === 0 ? 0 : 1)}M`;
  }

  if (downloads >= 1000) {
    return `${(downloads / 1000).toFixed(downloads % 1000 === 0 ? 0 : 1)}K`;
  }

  return `${downloads}`;
}

export function formatReviews(reviews) {
  if (reviews >= 1000) {
    return `${(reviews / 1000).toFixed(reviews % 1000 === 0 ? 0 : 1)}K`;
  }

  return `${reviews}`;
}

export function formatSize(size) {
  return `${size} MB`;
}
