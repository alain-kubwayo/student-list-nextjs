import Link from "next/link";
import styles from "../../styles/Students.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      students: data,
    },
  };
}; // Run at build time. Never runs in the browser
const Students = ({ students }) => {
  return (
    <div>
      <h1>ALL STUDENTS</h1>
      {students &&
        students.map((student) => (
          <Link key={student.id} href={`/students/${student.id}`}>
            <a className={styles.single}>
              <h3>{student.name}</h3>
            </a>
          </Link>
        ))}
    </div>
  );
};

export default Students;
