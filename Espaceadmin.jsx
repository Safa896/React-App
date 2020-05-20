import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { UserList, UserEdit, UserCreate } from './Admin';
const dataProvider = simpleRestProvider('https://domain.tld/api');

const Espace = () => (
    <Admin dataProvider={dataProvider}>
        <Resource
          name="Admin"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
        />
    </Admin>
);

export default Espace;