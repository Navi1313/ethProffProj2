import Image from "next/image";
import styles from "./page.module.css";
import Login from "../../components/login"

export default function Home() {
  return (
    <div style= {{
    margin: "30px", 
    marginTop: "150px",
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center' }}>
      <h1> ⛓️‍💥 Etherium Blockchain ⛓️ </h1>
      <Login />
    </div>
  );
}
