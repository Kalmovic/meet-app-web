import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';

import { Container, Title, List, Meet } from './styles';
import api from '~/services/api';

export default function Dashboard() {
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get('mymeetups');

      const data = response.data.map(meet => ({
        ...meet,
        formatDate: format(parseISO(meet.date), "MMMM Do',' HH:mm", {
          addSufix: true,
        }),
      }));
      console.tron.log(data);
      setMeetup(data);
    }
    loadMeetup();
  }, [meetup.date]);

  return (
    <Container>
      <Title>
        <h1>My meetups</h1>
        <button type="button">New meetup</button>
      </Title>
      <List>
        <ul>
          {meetup.map(meet => (
            <Meet key={meet._id} past={meet.past}>
              <strong>{meet.title}</strong>
              <span>{meet.formatDate}</span>
            </Meet>
          ))}
        </ul>
      </List>
    </Container>
  );
}
