// Simple in-memory cache for projects data
let projectsCache = null;

export const getProjectsCache = () => projectsCache;

export const setProjectsCache = (data) => {
    projectsCache = data;
};

export const clearProjectsCache = () => {
    projectsCache = null;
};

export const fetchAndCacheProjects = async () => {
    // Return from cache if available
    if (projectsCache) {
        return projectsCache;
    }

    // Otherwise fetch and cache
    const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
    
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
        
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
        // Return empty array as fallback instead of crashing
        return [];
    }
};
