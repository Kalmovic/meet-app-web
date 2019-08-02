import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector } from 'react-redux';
import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  function handleSubmit() {}
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="You email address" />
        <hr />
        <Input
          name="password"
          type="oldPassword"
          placeholder="Your old password"
        />
        <Input name="password" type="password" placeholder="New password" />
        <Input
          name="password"
          type="confirmPassword"
          placeholder="Confirm new password"
        />
        <button type="submit">Update profile</button>
      </Form>
    </Container>
  );
}
