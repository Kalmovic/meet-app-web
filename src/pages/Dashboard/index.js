import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';

import { MdKeyboardArrowRight } from 'react-icons/md';

import { Content, Title, List, Meet } from './styles';
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
      setMeetup(data);
      localStorage.setItem('meetup', JSON.stringify(data));
    }
    loadMeetups();
  }, []);

  return (
    <Content>
      <Title>
        <h1>My meetups</h1>
        <Link to="/newmeetup">
          <button type="button" id="dashButton">
            New meetup
          </button>
        </Link>
      </Title>
      <List>
        <ul>
          {meetup.map(meet => (
            <>
              {meet.past ? (
                <Meet key={meet.id} enabled={meet.past}>
                  <strong>{meet.title}</strong>
                  <div>
                    <span>{meet.formatDate}</span>
                    <MdKeyboardArrowRight size={20} color="#eee" />
                  </div>
                </Meet>
              ) : (
                <Link to={`/meetup/${meet.id}`}>
                  <Meet key={meet.id} enabled={meet.past}>
                    <strong>{meet.title}</strong>
                    <div>
                      <span>{meet.formatDate}</span>
                      <MdKeyboardArrowRight size={20} color="#eee" />
                    </div>
                  </Meet>
                </Link>
              )}
            </>
          ))}
        </ul>
      </List>
    </Content>
  );
}
