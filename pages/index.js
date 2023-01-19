import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://cdn.britannica.com/56/80456-050-237A814C/State-Historical-Museum-Red-Square-Russia-Moscow.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://cdn.britannica.com/48/5848-050-6292F88D/Cathedral-of-St-Basil-the-Blessed-Moscow.jpg',
    address: 'Some address 10, 9876 Some City',
    description: 'This is a second meetup!',
  },
];

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10, //seconds
  };
}

export default HomePage;
