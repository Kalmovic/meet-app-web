import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import { MdEdit, MdDeleteForever, MdEvent, MdLocationOn } from 'react-icons/md';
import { Container, Title, Footer, Body } from './styles';
import api from '~/services/api';

export default function ShowMeetup({ match }) {
  const [meetId] = useState(match.params.id);
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetup/${meetId}`);
      const data = {
        ...response.data,
        url: response.data.File.url,
        formatDate: format(parseISO(response.data.date), "MMMM do',' HH:mm", {
          addSufix: true,
        }),
      };
      console.tron.log(response);
      setMeetup(data);
    }
    loadMeetup();
  }, [meetId]);

  return (
    <Container>
      <Title>
        <h1>{meetup.title}</h1>
        <nav>
          <button id="edit" type="submit">
            <div>
              <MdEdit size={18} color="#fff" />
              Edit
            </div>
          </button>
          <button id="delete" type="submit">
            <div>
              <MdDeleteForever size={18} color="#fff" />
              Delete
            </div>
          </button>
        </nav>
      </Title>
      <Body>
        <img src={meetup.url} alt={meetup.title} />
        <h3>{meetup.description}</h3>
      </Body>
      <Footer>
        <span id="date">
          <div>
            <MdEvent size={14} color="#999" />
            {meetup.formatDate}
          </div>
        </span>
        <span id="location">
          <div>
            <MdLocationOn size={14} color="#999" />
            {meetup.location}
          </div>
        </span>
      </Footer>
    </Container>
  );
  /**  */
}
