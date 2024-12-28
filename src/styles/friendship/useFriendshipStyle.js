import { makeStyles } from "@mui/styles";

import Colors from "../../configs/Colors";

const useStyles = makeStyles((theme) => ({
  background: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f8fb",
    padding: "20px",
  },
  container: {
    maxWidth: "1000px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    "& input": {
      flexGrow: 1,
      marginRight: "10px",
    },
  },
  searchResults: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: "30px",
  },
  userCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#ddd",
    marginBottom: "10px",
  },
  userName: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  addButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007bff",
    height: 50,
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
  buttonSearch: {
    marginLeft: 20,
  },
}));

export default useStyles;
