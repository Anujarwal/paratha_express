import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";

const AddToCard = ({ card }) => {
  const custStyle = {
    width: "60%",
  };

  //   const [count, setCount] = useState(1);
  return (
    <>
      <div className="card mb-3" style={custStyle}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">Name {card.name}</h4>

              <p className="card-text">
                <h5 className="text-body-secondary">Price : {card.price}</h5>
              </p>
              <Typography>
                <Button>
                  <RemoveIcon />
                </Button>
                5
                <Button>
                  <AddIcon />
                </Button>
                <Button>
                  <DeleteOutlineIcon
                    onClick={() => handleRemove(card.id)}
                    color="error"
                  />
                </Button>
              </Typography>
              <span className="float-end"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCard;
