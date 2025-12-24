import React, { useState, useEffect } from 'react';

const API = '/api/projects';
const UPLOAD_API = '/api/upload';

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', imageUrl: '', liveSite: '', code: '' });
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(setProjects)
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async e => {
    const file = e.target.files[0];
    if (!file) return;
    
    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);
    
    try {
      const res = await fetch(UPLOAD_API, {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.url) {
        setForm({ ...form, imageUrl: data.url });
        alert('Image uploaded successfully!');
      }
    } catch (err) {
      alert('Image upload failed: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    
    if (editingId) {
      // Update existing project
      const res = await fetch(`${API}/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        const updatedProject = await res.json();
        setProjects(projects.map(p => p._id === editingId ? updatedProject : p));
        setForm({ title: '', description: '', imageUrl: '', liveSite: '', code: '' });
        setEditingId(null);
        alert('Project updated successfully!');
      }
    } else {
      // Add new project
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        const newProject = await res.json();
        setProjects([newProject, ...projects]);
        setForm({ title: '', description: '', imageUrl: '', liveSite: '', code: '' });
        alert('Project added successfully!');
      }
    }
  };

  const handleEdit = (project) => {
    setForm({
      title: project.title || '',
      description: project.description || '',
      imageUrl: project.imageUrl || '',
      liveSite: project.liveSite || '',
      code: project.code || ''
    });
    setEditingId(project._id);
  };

  const handleCancelEdit = () => {
    setForm({ title: '', description: '', imageUrl: '', liveSite: '', code: '' });
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    
    const res = await fetch(`${API}/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setProjects(projects.filter(p => p._id !== id));
      alert('Project deleted successfully!');
    }
  };

  return (
    <section className="admin-section">
      <h2>Projects</h2>
      <form className="admin-form" onSubmit={handleSubmit} style={{flexDirection: 'column'}}>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Project Title" required />
        <input name="description" value={form.description} onChange={handleChange} placeholder="Project Description" />
        <input name="liveSite" value={form.liveSite} onChange={handleChange} placeholder="Live Site URL (Vercel)" />
        <input name="code" value={form.code} onChange={handleChange} placeholder="GitHub Code URL" />
        
        <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
          <label style={{color: '#00e6d8', fontSize: '0.9rem'}}>Upload Thumbnail Image:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploading} />
          {uploading && <span style={{color: '#00e6d8'}}>Uploading...</span>}
          {form.imageUrl && <span style={{color: '#4ade80', fontSize: '0.85rem'}}>✓ Image uploaded</span>}
        </div>
        
        <div style={{display: 'flex', gap: 10}}>
          <button type="submit" disabled={uploading} style={{flex: 1}}>
            {editingId ? 'Update Project' : 'Add Project'}
          </button>
          {editingId && (
            <button 
              type="button" 
              onClick={handleCancelEdit}
              style={{background: '#6b7280', flex: 0.5}}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
      <ul className="admin-list">
        {projects.map(p => (
          <li key={p._id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
              <span className="admin-list-title">{p.title}</span>
              <span className="admin-list-desc">{p.description}</span>
            </div>
            <div style={{display: 'flex', gap: 8}}>
              <button 
                onClick={() => handleEdit(p)}
                style={{
                  background: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}
              >
                Edit
              </button>
              <button 
                onClick={() => handleDelete(p._id)}
                style={{
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectManager;
