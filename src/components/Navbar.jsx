import { NavLink, useNavigate } from "react-router-dom"
import "./Navbar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <View style={styles.container}>
          <Text style={styles.counterText}>Count: {count}</Text>
          <Button title="Increase" onPress={() => setCount(count + 1)} />
          <Button title="Decrease" onPress={() => setCount(count - 1)} />
        </View>
      );
    };
