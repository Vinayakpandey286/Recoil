import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 102
})
export const jobsAtom = atom({
    key: "jobsAtom",
    default: 10
})
export const messagingAtom = atom({
    key: "messagingAtom",
    default: 12
})
export const notificationAtom = atom({
    key: "notificationAtom",
    default: 92
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const network = get(networkAtom)
        const jobs = get(jobsAtom)
        const messaging = get(messagingAtom)
        const notification = get(notificationAtom)

        return network + jobs + messaging + notification
    }
})
