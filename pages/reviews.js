import Head from 'next/head';

const Rewiews = ({ reviews }) => {
  return (
    <>
      <Head>
        <title>fat burgers | main</title>
        <meta name="title" content="fat burgers" />
      </Head>
      <div>
        <h1>Reviews</h1>
        <div className="reviews">
          {!!reviews.length &&
            reviews.map((res) => {
              return (
                <div key={res.id} className="review">
                  {res.id}
                  {`${res.body.slice(0, 90)}...`}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();

  return {
    props: {
      reviews: data.slice(0, 20),
    },
  };
}

export default Rewiews;
