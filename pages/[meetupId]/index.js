import MeetupDetail from '../../components/meetups/MeetupDetail';
import Head from 'next/head';

const MeetupDetails = (props) => {
  return (
    <>
      <Head>
        <title>Meetup Number 1</title>
        {/* <title>{props.title}</title> */}
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupDetail
        // image={props.image}
        // title={props.title}
        // address={props.address}
        // description={props.description}
        image="https://cdn.britannica.com/56/80456-050-237A814C/State-Historical-Museum-Red-Square-Russia-Moscow.jpg"
        title="First Meetup"
        address="Some Street 7, Somewhere.."
        description="This is a first meetup"
      />
    </>
  );
};

export async function getStaticPaths() {
  return {
    fallback: 'blocking',
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetudData: {
        image:
          'https://cdn.britannica.com/56/80456-050-237A814C/State-Historical-Museum-Red-Square-Russia-Moscow.jpg',
        title: 'First Meetup',
        address: 'Some Street 7, Somewhere..',
        description: 'This is a first meetup',
      },
    },
  };
}

export default MeetupDetails;
