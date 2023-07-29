import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    tittle: "Event 1",
  },
  {
    id: "e2",
    tittle: "Event 2",
  },
  {
    id: "e3",
    tittle: "Another Event",
  },
];

function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.tittle}</Link>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
