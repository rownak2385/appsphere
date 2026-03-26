const STORAGE_KEY = "appsphere-installed-apps";

export function getInstalledApps() {
  if (typeof window === "undefined") {
    return [];
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return [];
  }

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function isAppInstalled(appId) {
  return getInstalledApps().some((item) => item.id === appId);
}

export function saveInstalledApp(app) {
  const installedApps = getInstalledApps();

  if (installedApps.some((item) => item.id === app.id)) {
    return installedApps;
  }

  const nextApps = [...installedApps, app];
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextApps));
  return nextApps;
}

export function removeInstalledApp(appId) {
  const nextApps = getInstalledApps().filter((item) => item.id !== appId);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextApps));
  return nextApps;
}

export { STORAGE_KEY };
