import useLocalStorage from "./useLocalStorage";

const useGetPosition = (taskId) => {
  const [coords, setCoords] = useLocalStorage(taskId + "-task-coords", {});

  if (Object.keys(coords).length) {
    return coords;
  } else {
    //create a random co-ordinate
    const maxX = window.innerWidth - 350;
    const maxY = window.innerHeight - 250;
    const newTaskCoord = {
      id: taskId,
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * (maxY - 100)) + 100,
    };

    // set that random co-ordinate for future
    setCoords(newTaskCoord);
    return newTaskCoord;
  }
};

export default useGetPosition;
