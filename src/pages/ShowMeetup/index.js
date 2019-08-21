import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import { MdEdit, MdDeleteForever, MdEvent, MdLocationOn } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Container, Title, Footer, Body, Desc } from './styles';
import api from '~/services/api';
import history from '~/services/history';

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
        desc: response.data.description.split('\n'),
      };
      console.tron.log(response);
      setMeetup(data);
    }
    loadMeetup();
  }, [meetId]);

  async function handleDelete() {
    try {
      await api.delete(`meetups/${meetId}`);
      toast.success('Meetup deleted with success!');
      history.push('/dashboard');
    } catch (err) {
      console.tron.log(err);
      toast.error('Meetup could not be deleted');
    }
  }

  return (
    <Container>
      <Title>
        <h1>{meetup.title}</h1>
        <nav>
          <Link to={`/editmeetup/${meetId}`}>
            <button id="edit" type="button">
              <div>
                <MdEdit size={18} color="#fff" />
                Edit
              </div>
            </button>
          </Link>
          <button id="delete" type="button" onClick={handleDelete}>
            <div>
              <MdDeleteForever size={18} color="#fff" />
              Delete
            </div>
          </button>
        </nav>
      </Title>
      <Body>
        <img src={meetup.url} alt={meetup.title} />
      </Body>
      <Desc>
        <p>{meetup.desc}</p>
      </Desc>
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
}

ShowMeetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
