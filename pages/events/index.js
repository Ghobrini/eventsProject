import React, { Fragment } from "react";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";
import EventsSearch from "../../components/events/event-search";
import { useRouter } from "next/router";

function AllEventPage() {
  const events = getAllEvents();
  const router = useRouter();
  function FindEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={FindEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventPage;
