import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { MdOutlineContentCopy } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { TbLocationFilled } from "react-icons/tb";

function ContactUs() {
  const data = useSelector(
    (state) => state.language.languages[0].content.contactUs
  );

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(data.phoneNumber);
    } catch (err) {}
  };

  return (
    <div className="container d-flex">
      <div className={`${styles.detailsContainer} column`}>
        <div
          className={`${styles.contactDetails}  text d-flex 
        `}
        >
          <h1>{data.contactUs}</h1>
          <a></a>
          <a href={`https://wa.me/${data.phoneNumber}`}>
            <AiOutlineWhatsApp size={50} />
          </a>
          <div className={styles.phoneNumber}>
            <div onClick={handleCopy}>
              <MdOutlineContentCopy
                style={{ marginBottom: "-3px", cursor: "pointer" }}
                size={21}
              />
            </div>
            <a href={`sms:+${data.phoneNumber}`}>{data.phoneNumber}</a>
          </div>
        </div>
        <div
          className={`${styles.address}   text d-flex 
        `}
        >
          <h1>{data.ourAddress}</h1>
          <a href="https://waze.com/ul?ll=32.07164961988873,35.26690457134639&navigate=yes">
            <TbLocationFilled size={40} />
          </a>

          <a>{data.address}</a>
        </div>
      </div>
      <img
        className={`${styles.img} column`}
        src="public/assets/photos/24131129_1566127380150960_1819579110054555952_n.jpg"
      />
    </div>
  );
}

export default ContactUs;
