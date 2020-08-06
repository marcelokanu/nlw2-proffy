import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
import api from '../../services/api';

export interface TeacherProps {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacherData: TeacherProps;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacherData }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacherData.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacherData.avatar} alt={teacherData.name} />
        <div>
          <strong>{teacherData.name}</strong>
          <span>{teacherData.subject}</span>
        </div>
      </header>
      <p>{teacherData.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacherData.cost}</strong>
        </p>
        <a
          onClick={createNewConnection}
          type="button"
          target="_blank"
          href={`https://wa.me/${teacherData.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
