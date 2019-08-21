import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import { Container, Footer, Content } from './styles';
import AvatarInput from './AvatarInput';
import api from '~/services/api';
import history from '~/services/history';
import DatePicker from '~/components/DatePicker';

const schema = Yup.object().shape({
  title: Yup.string(),
  description: Yup.string(),
  date: Yup.date(),
  location: Yup.string(),
  avatar_id: Yup.string(),
});

export default function EditMeetup({ match }) {
  const [meetId] = useState(match.params.id);
  const [meetup, setMeetup] = useState({});
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetup/${meetId}`);
      const data = {
        ...response.data,
        url: response.data.File.url,
        dateFormat: format(parseISO(response.data.date), "MMMM do',' HH:mm", {
          addSufix: true,
        }),
      };
      setMeetup(data);
      setDate(data.dateFormat);
    }
    loadMeetup();
  }, [meetId]);

  async function editMeetup(data) {
    console.tron.log(data);

    const dateF = format(data.date, "yyyy'-'MM'-'d'T'HH:mm:ssxxx");
    const file_id = data.avatar_id;
    const { title, description, location } = data;
    console.tron.log({ file_id, date });
    try {
      await api.put(`meetups/${meetId}`, {
        file_id,
        title,
        description,
        date: dateF,
        location,
      });
      toast.success('Meetup saved!');
      history.push('/dashboard');
    } catch (err) {
      console.tron.log(err);
      toast.error('Meetup not saved, please check your data');
    }
  }

  return (
    <Content>
      <Container>
        <Form schema={schema} onSubmit={editMeetup} initialData={meetup}>
          <AvatarInput
            name="avatar_id"
            image={meetup.url}
            imageID={meetup.file_id}
          />
          <Input name="title" placeholder="Meetup's title" />
          <Input name="description" placeholder="description" rows={5} />
          <DatePicker name="date" placeholder="Data" />
          <Input name="location" placeholder="Location" />

          <Footer>
            <button type="submit" id="save">
              Save meetup
            </button>
          </Footer>
        </Form>
      </Container>
    </Content>
  );
}

EditMeetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
