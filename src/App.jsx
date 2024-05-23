import { useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalNotificationSelector,
} from "./atom";

function App() {
  const network = useRecoilValue(networkAtom);
  const notification = useRecoilValue(notificationAtom);
  const jobs = useRecoilValue(jobsAtom);
  const messaging = useRecoilValue(messagingAtom);

  const totalNotification = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      <button>My Network ({network > 99 ? "99+" : network})</button>
      <button>Jobs ({jobs > 99 ? "99+" : jobs})</button>
      <button>Messaging ({messaging > 99 ? "99+" : messaging})</button>
      <button>Notification ({notification > 99 ? "99+" : notification})</button>
      <button>Me({totalNotification})</button>
    </>
  );
}

export default App;
