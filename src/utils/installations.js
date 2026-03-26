const STORAGE_KEY = "appsphere-installed-apps";

function readStoredApps() {
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

function writeStoredApps(apps) {
  if (typeof window === "undefined") {
    return apps;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
  return apps;
}

export function getInstalledApps() {
  return readStoredApps();
}

export function isAppInstalled(appId) {
  return readStoredApps().some((item) => item.id === appId);
}

export function saveInstalledApp(app) {
  const installedApps = readStoredApps();

  if (installedApps.some((item) => item.id === app.id)) {
    return installedApps;
  }

  return writeStoredApps([...installedApps, app]);
}

export function removeInstalledApp(appId) {
  return writeStoredApps(readStoredApps().filter((item) => item.id !== appId));
}

export { STORAGE_KEY };
