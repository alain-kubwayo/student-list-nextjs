export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((student) => {
    return {
      params: { id: student.id.toString() },
    };
  });
  return {
    paths, // tells Next how many pages to build based on paths
    fallback: false, // fallback pages
  };
}; // async because we need to fetch all ids so Next knows how many pages/routes to generate

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { student: data },
  };
}; // context object gives us access to the id

const Details = ({ student }) => {
  return (
    <div>
      <h1>{student.name}</h1>
      <p>{student.email}</p>
      <p>{student.website}</p>
      <p>{student.address.city}</p>
    </div>
  );
};

export default Details;
