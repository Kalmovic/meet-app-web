import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { Container } from './styles';
import AvatarInput from './AvatarInput';
import api from '~/services/api';
import history from '~/services/history';
import DatePicker from '~/components/DatePicker';

const schema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  date: Yup.date().required('Date is required'),
  location: Yup.string().required('Location is required'),
  avatar_id: Yup.string().required('File is required'),
});

export default function NewMeetup() {
  async function addMeetup(data) {
    console.tron.log(data);

    const date = format(data.date, "yyyy'-'MM'-'d'T'HH:mm:ssxxx");
    const file_id = data.avatar_id;
    const { title, description, location } = data;
    console.tron.log({ file_id, date });
    try {
      await api.post('meetups', {
        file_id,
        title,
        description,
        date,
        location,
      });
      toast.success('Meetup registred!');
      history.push('/dashboard');
    } catch (err) {
      console.tron.log(err);
      toast.error('Meetup not registred!');
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={addMeetup}>
        <AvatarInput name="avatar_id" />
        <Input name="title" placeholder="Meetup's title" />
        <Input multiline name="description" placeholder="Full description" />
        <DatePicker name="date" type="date" placeholder="Select date" />
        <Input name="location" placeholder="Location" />

        <button type="submit" id="addMeetup">
          Add new meetup
        </button>
      </Form>
    </Container>
  );
}

NewMeetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
