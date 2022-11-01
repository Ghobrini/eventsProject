import classes from "./event-item.module.css";
import Buton from "../ui/button";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const FormatedAdress = location.replace(", ", "\n");
  const ExploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />

      <div className={classes.content}>
        <div className={classes.sammary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>

          <div className={classes.address}>
            <AddressIcon />
            <address>{FormatedAdress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Buton link={ExploreLink}>
            <span>Explore Link</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Buton>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
