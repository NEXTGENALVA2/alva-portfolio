// In-memory cache for projects data
let projectsCache = null;
const CACHE_KEY = 'alva_projects_cache';
const CACHE_TIMESTAMP_KEY = 'alva_projects_cache_time';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export const getProjectsCache = () => projectsCache;

export const setProjectsCache = (data) => {
    projectsCache = data;
    // Also save to localStorage for persistence
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
    } catch (err) {
        console.warn('Failed to save to localStorage:', err);
    }
};

export const getLocalStorageCache = () => {
    try {
        const cached = localStorage.getItem(CACHE_KEY);
        const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
        
        if (cached && timestamp) {
            const age = Date.now() - parseInt(timestamp);
            if (age < CACHE_DURATION) {
                return JSON.parse(cached);
            }
        }
    } catch (err) {
        console.warn('Failed to read from localStorage:', err);
    }
    return null;
};

export const clearProjectsCache = () => {
    projectsCache = null;
    try {
        localStorage.removeItem(CACHE_KEY);
        localStorage.removeItem(CACHE_TIMESTAMP_KEY);
    } catch (err) {
        console.warn('Failed to clear localStorage:', err);
    }
};

export const fetchAndCacheProjects = async () => {
    // Return from in-memory cache if available
    if (projectsCache) {
        return projectsCache;
    }

    // Try to get from localStorage immediately (stale data)
    const storedCache = getLocalStorageCache();
    if (storedCache) {
        projectsCache = storedCache;
        // Fetch fresh data in background (don't await)
        fetchFreshProjects().catch(err => console.error('Background fetch failed:', err));
        return storedCache;
    }

    // Otherwise fetch and cache (first time)
    return fetchFreshProjects();
};

const fetchFreshProjects = async () => {
    const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
    
    try {
        const controller = new AbortController();
        // Longer timeout for cold starts on Vercel
        const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 seconds
        
        const res = await fetch(`${apiBase}/projects`, { signal: controller.signal });
        clearTimeout(timeoutId);
        
        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }
        
        const raw = await res.json();
        const formatted = raw.map(p => ({
            title: p.title,
            description: p.description,
            image: p.imageUrl,
            tags: [],
            liveLink: p.liveSite,
            githubLink: p.code
        }));
        
        setProjectsCache(formatted);
        return formatted;
    } catch (err) {
        console.error('Failed to fetch projects:', err.message);
        
        // Try to return localStorage cache as fallback
        const fallback = getLocalStorageCache();
        if (fallback) {
            projectsCache = fallback;
            return fallback;
        }
        
        // Return empty array as last resort
        return [];
    }
};
