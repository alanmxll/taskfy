import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  closeButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    position: "absolute",
    top: "1%",
    left: "96.6%",
    width: 35,
    height: 35,
    borderRadius: "5px",
    cursor: "pointer",
  },
  contentCard: {
    position: "absolute",
    top: "5.5%",
    left: "72.5%",
    width: 500,
    backgroundColor: "#FFF",
    borderRadius: "5px",
  },
}));
