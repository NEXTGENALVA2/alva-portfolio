import React, { useState, useEffect } from 'react';

const API = '/api/courses';

const CourseManager = () => {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', videoUrl: '' });

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(setCourses);
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (res.ok) {
      const newCourse = await res.json();
      setCourses([newCourse, ...courses]);
      setForm({ title: '', description: '', videoUrl: '' });
    }
  };

  return (
    <section className="admin-section">
      <h2>Courses</h2>
      {/* Add Course form removed */}
      <ul className="admin-list">
        {courses.map(c => (
          <li key={c._id} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span className="admin-list-title">{c.title}</span>
            <span className="admin-list-desc">{c.description}</span>
            <button
              style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
              onClick={async () => {
                const res = await fetch(`${API}/${c._id}`, { method: 'DELETE' });
                if (res.ok) setCourses(courses.filter(course => course._id !== c._id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CourseManager;
