export async function getStaticProps(context) {
  return {
    props: {
      message: 'Statically generetad page',
    },
  }
}

const Page = ({message}) => {
  return (
    <main>
      <h1 id="message">{message}</h1>
    </main>
  );
};

export default Page;