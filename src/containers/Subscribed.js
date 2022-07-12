import { useParams } from "react-router-dom";

const Subscribed = () => {
  let params = useParams();

  return (
    <div style={{ margin: "0 30px" }}>
      <p>Thank You For Subscribing!</p>
      <p>Your plan now: {params?.plan}</p>
    </div>
  );
};

export default Subscribed;
