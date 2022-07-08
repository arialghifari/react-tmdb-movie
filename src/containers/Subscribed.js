import { useParams } from "react-router-dom";

export const Subscribed = () => {
  let params = useParams();

  return (
    <div>
      <p>Thank You For Subscribing!</p>
      <p>Your plan now: {params?.plan}</p>
    </div>
  );
};
