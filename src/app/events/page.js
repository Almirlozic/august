import { getEvents } from "@/lib/api";
import EventsCalender from "@/components/EventsCalender";
import Pagination from "@/components/Pagination";
import H2Normal from "@/components/H2Normal";

const EVENTS_PER_PAGE = 3;

export default async function EventsPage({ searchParams }) {
  const params = await searchParams;
  const page = Number(params?.page) || 1;

  const events = await getEvents();
  const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE);
  const paginated = events.slice((page - 1) * EVENTS_PER_PAGE, page * EVENTS_PER_PAGE);

  return (
    <main>
      <H2Normal title="EVENTS" bgImage="/assets/bg/footerbg.jpg" />
      <EventsCalender events={paginated} />
      <Pagination currentPage={page} totalPages={totalPages} basePath="/events" />
    </main>
  );
}
