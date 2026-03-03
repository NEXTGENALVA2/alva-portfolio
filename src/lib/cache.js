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
    const res = await fetch(`${apiBase}/projects`);
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
};
