// src/components/ProjectList.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:8080/projetos/listar'); // URL da sua API
                const filteredProjects = response.data.filter(project => project.status === 'NÃO_INICIADO');
                setProjects(filteredProjects);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Projetos Não Iniciados</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>{project.nome}</li> // Ajuste os campos conforme sua estrutura de projeto
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;