import { Router } from "express";
import {createCard, getcardbyCard_number, getcards, getinstructions} from "../controllers/cards.controller.js"
import isLoggedIn from "../middleware/isloggedin.js";
import { ispreviouscompleted } from "../middleware/ispreviouscompleted.js";
const  cardr = Router();
cardr.post("/cards",getcards)
cardr.get("/card",ispreviouscompleted,getcardbyCard_number)
cardr.post("/create",isLoggedIn,createCard)
cardr.get("/instructions",getinstructions)
export  default cardr;