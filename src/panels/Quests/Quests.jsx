import { useEffect } from "react";

let Quests = () => {
  useEffect(() => {
    console.log("MOUNT_QUESTS");
  }, [])

  return (
    <div>
      Это страница с заданиями.
    </div>
  )
}

export default Quests;