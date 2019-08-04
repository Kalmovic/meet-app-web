import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';

import { Container, Title, List, Meet } from './styles';
import api from '~/services/api';

export default function Dashboard() {
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('mymeetups');

      const data = response.data.map(meet => ({
        ...meet,
        formatDate: format(parseISO(meet.date), "MMMM do',' HH:mm", {
          addSufix: true,
        }),
      }));
      setMeetup([...data]);
      localStorage.setItem('meetup', JSON.stringify(data));
    }
    loadMeetups();
  }, [meetup, meetup.date]);

  return (
    <Container>
      <Title>
        <h1>My meetups</h1>
        <Link to="/newmeetup">
          <button to="/newmeetup" type="button">
            New meetup
          </button>
        </Link>
      </Title>
      <List>
        <ul>
          {meetup.map(meet => (
            <Meet key={meet.id} past={meet.past}>
              <Link to={`/meetup/${meet.id}`}>
                <strong>{meet.title}</strong>
              </Link>
              <span>{meet.formatDate}</span>
            </Meet>
          ))}
        </ul>
      </List>
    </Container>
  );
}
