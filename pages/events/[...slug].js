import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import ErrorAlert from "../../components/ui/error-alert";

function FiltredEventsPage() {
  const router = useRouter();
  const content = router.query.slug;

  if (!content) {
    return <p>is loading ...</p>;
  }
  const year = +content[0];
  const month = +content[1];
  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <ErrorAlert>
        <p>Unvalid Filter Please Adjust Your Values</p>;
      </ErrorAlert>
    );
  }
  const filtredEvents = getFilteredEvents({ year: year, month: month });
  if (!filtredEvents || filtredEvents.length === 0) {
    return (
      <ErrorAlert>
        <p>No Event Found </p>
      </ErrorAlert>
    );
  }
  const date = new Date(year, month - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filtredEvents} />
    </Fragment>
  );
}

export default FiltredEventsPage;
