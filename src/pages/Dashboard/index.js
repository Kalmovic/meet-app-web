import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

import { Container, Title, List, Meet } from './styles';
import api from '~/services/api';

export default function Dashboard() {
  const [meetup, setMeetup] = useState([]);
  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get('mymeetups');
      console.tron.log(response);
      setMeetup(response.data);
    }
    loadMeetup();
  }, []);

  return (
    <Container>
      <Title>
        <h1>My meetups</h1>
        <button type="button">New meetup</button>
      </Title>
      <List>
        <ul>
          {meetup.map(meet => (
            <Meet key={meet.id} past={meet.past}>
              <strong>{meet.title}</strong>
              <span>{meet.date}</span>
            </Meet>
          ))}
        </ul>
      </List>
    </Container>
  );
}
