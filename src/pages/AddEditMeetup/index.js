import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { Container, Footer, DateTimePicker } from './styles';
import AvatarInput from './AvatarInput';
import api from '~/services/api';
import history from '~/services/history';

registerLocale('pt-BR', ptBR);

const editSchema = Yup.object().shape({
  title: Yup.string(),
  description: Yup.string(),
  date: Yup.date(),
  location: Yup.string(),
  avatar_id: Yup.string(),
});

const addSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  date: Yup.date().required('Date is required'),
  location: Yup.string().required('Location is required'),
  avatar_id: Yup.string().required('File is required'),
});

export default function AddEditMeetup({ match }) {
  const [meetId] = useState(match.params.id);
  const [meetup, setMeetup] = useState({
    title: '',
    banner_id: 0,
    description: '',
    date: new Date(),
    location: '',
  });
  const [date, setDate] = useState(new Date());
  const [toEdit, setToEdit] = useState(false);

  async function editMeetup(data) {
    console.tron.log(data);

    const dateEdit = format(data.date, "yyyy'-'MM'-'d'T'HH:mm:ssxxx");
    const file_id = data.avatar_id;
    const { title, description, location } = data;
    console.tron.log({ file_id, date });
    try {
      await api.put(`meetups/${meetId}`, {
        file_id,
        title,
        description,
        date: dateEdit,
        location,
      });
      toast.success('Meetup saved!');
      history.push('/dashboard');
    } catch (err) {
      console.tron.log(err);
      toast.error('Meetup not saved, please check your data');
    }
  }

  async function addMeetup(data) {
    console.tron.log(data);

    const dateAdd = format(data.date, "yyyy'-'MM'-'d'T'HH:mm:ssxxx");
    const file_id = data.avatar_id;
    const { title, description, location } = data;
    console.tron.log({ file_id, date });
    try {
      await api.post('meetups', {
        file_id,
        title,
        description,
        date: dateAdd,
        location,
      });
      toast.success('Meetup registred!');
      history.push('/dashboard');
    } catch (err) {
      console.tron.log(err);
      toast.error('Meetup not registred!');
    }
  }

  useEffect(() => {
    async function loadMeetup() {
      console.log(meetId);
      if (typeof meetId !== 'undefined') {
        const response = await api.get(`meetup/${meetId}`);

        console.tron.log(response);
        const data = {
          ...response.data,
          url: response.data.File.url,
          dateFormat: format(parseISO(response.data.date), "MMMM do',' HH:mm", {
            addSufix: true,
          }),
        };
        setToEdit(true);
        setDate(data.dateFormat);
        setMeetup(data);
      } else {
        setToEdit(false);
      }
    }
    loadMeetup();
  }, [meetId]);

  function handleDateChange(value) {
    setDate(value);
  }

  return (
    <>
      {toEdit ? (
        <Container>
          <Form schema={editSchema} onSubmit={editMeetup} initialData={meetup}>
            <AvatarInput
              name="avatar_id"
              image={meetup.url}
              imageID={meetup.file_id}
            />
            <Input name="title" placeholder="Meetup's title" />
            <Input name="description" type="text" placeholder="description" />
            <DateTimePicker
              locale="pt"
              value={date}
              selected={date}
              onChange={handleDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="Pp"
              timeCaption="Hora"
            />
            <Input name="location" placeholder="Location" />

            <Footer>
              <button type="submit">Save meetup</button>
            </Footer>
          </Form>
        </Container>
      ) : (
        <Container>
          <Form schema={addSchema} onSubmit={addMeetup}>
            <AvatarInput name="avatar_id" />
            <Input name="title" placeholder="Meetup's title to add" />
            <Input
              multiline
              name="description"
              placeholder="Full description"
            />
            <DateTimePicker
              locale="pt"
              value={date}
              selected={date}
              onChange={handleDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="Pp"
              timeCaption="Hora"
            />
            <Input name="location" placeholder="Location" />

            <Footer>
              <button type="submit">Add new meetup</button>
            </Footer>
          </Form>
        </Container>
      )}
    </>
  );
}

AddEditMeetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
