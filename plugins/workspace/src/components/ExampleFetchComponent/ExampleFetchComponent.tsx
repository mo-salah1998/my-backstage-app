import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableColumn,
  Progress,
  ResponseErrorPanel,
} from '@backstage/core-components';
import useAsync from 'react-use/lib/useAsync';

export const exampleUsers = {
  results: [
    {
      gender: 'female',
      name: {
        title: 'Miss',
        first: 'Carolyn',
        last: 'Moore',
      },
      email: 'carolyn.moore@example.com',
      picture: 'https://api.dicebear.com/6.x/open-peeps/svg?seed=Carolyn',
      nat: 'GB',
    },
    {
      gender: 'female',
      name: {
        title: 'Ms',
        first: 'Esma',
        last: 'Berberoğlu',
      },
      email: 'esma.berberoglu@example.com',
      picture: 'https://api.dicebear.com/6.x/open-peeps/svg?seed=Esma',
      nat: 'TR',
    },
    {
      gender: 'female',
      name: {
        title: 'Ms',
        first: 'Isabella',
        last: 'Rhodes',
      },
      email: 'isabella.rhodes@example.com',
      picture: 'https://api.dicebear.com/6.x/open-peeps/svg?seed=Isabella',
      nat: 'GB',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Derrick',
        last: 'Carter',
      },
      email: 'derrick.carter@example.com',
      picture: 'https://api.dicebear.com/6.x/open-peeps/svg?seed=Derrick',
      nat: 'IE',
    },
    {
      gender: 'female',
      name: {
        title: 'Miss',
        first: 'Mattie',
        last: 'Lambert',
      },
      email: 'mattie.lambert@example.com',
      picture: 'https://api.dicebear.com/6.x/open-peeps/svg?seed=Mattie',
      nat: 'AU',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Mijat',
        last: 'Rakić',
      },
      email: 'mijat.rakic@example.com',
      picture: 'https://api.dicebear.com/6.x/open-peeps/svg?seed=Mijat',
      nat: 'RS',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Javier',
        last: 'Reid',
      },
      email: 'javier.reid@example.com',
      picture: 'https://api.dicebear.com/6.x/open-peeps/svg?seed=Javier',
      nat: 'US',
    },
    {
      gender: 'female',
      name: {
        title: 'Ms',
        first: 'Isabella',
        last: 'Li',
      },
      email: 'isabella.li@example.com',
      picture: 'https://api.dicebear.com/6.x/open-peeps/svg?seed=Isabella',
      nat: 'CA',
    },
  ],

};

const useStyles = makeStyles({
  avatar: {
    height: 32,
    width: 32,
    borderRadius: '50%',
  },
});

type User = {
  gender: string; // "male"
  name: {
    title: string; // "Mr",
    first: string; // "Duane",
    last: string; // "Reed"
  };
  email: string; // "duane.reed@example.com"
  picture: string; // "https://api.dicebear.com/6.x/open-peeps/svg?seed=Duane"
  nat: string; // "AU"
};

type DenseTableProps = {
  users: User[];
};

export const DenseTable = ({ users }: DenseTableProps) => {
  const classes = useStyles();

  const columns: TableColumn[] = [
    { title: 'Avatar', field: 'avatar' },
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email' },
    { title: 'Nationality', field: 'nationality' },
  ];

  const data = users.map(user => {
    return {
      avatar: (
        <img
          src={user.picture}
          className={classes.avatar}
          alt={user.name.first}
        />
      ),
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      nationality: user.nat,
    };
  });

  return (
    <Table
      title="Example User List"
      options={{ search: false, paging: false }}
      columns={columns}
      data={data}
    />
  );
};

export const ExampleFetchComponent = () => {

  const { value, loading, error } = useAsync(async (): Promise<User[]> => {
    // Would use fetch in a real world example
    return exampleUsers.results;
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <ResponseErrorPanel error={error} />;
  }

  return <DenseTable users={value || []} />;
};
