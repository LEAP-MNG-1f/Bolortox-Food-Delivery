import { createContext } from "react";

export const FoodContext = createContext([]);
const [foodData, setFoodData] = useState([]);

const getFoodData = async () => {
  const response = await fetch("http://localhost:8001/api/food");
  const data = await response.json();
  setFoodData(data.data);
};
useEffect(() => {
  getFoodData();
}, []);

export const FoodProvider = ({ children }) => {
  <FoodContext.Provider value={foodData}>{children}</FoodContext.Provider>;
};
