//เรียกใช้ express router
import { Router } from "express";

const accountRouter = Router();

//สร้างไฟล์ account.mjs แล้วแยก API accounts ออกมา
//แล้วเปลี่ยนจาก app.get เป็น accountRouter.get
//แล้วก็มาลบคำว่า accounts ออก 
//เพราะ path /accounts ถูกกำหนดไว้แล้วใน app.mjs

accountRouter.get("/", function (req, res) {
    res.send("View all accounts");
  });
  
  accountRouter.get("/:id", function (req, res) {
    res.send("View an account by id");
  });
  
  accountRouter.post("/", function (req, res) {
    res.send("Create an account");
  });
  
  accountRouter.put("/:id", function (req, res) {
    res.send("Update an account by id");
  });
  
  accountRouter.delete("/:id", function (req, res) {
    res.send("Delete an account by id");
  });

//แล้ว export ไปใช้ใน app.mjs
export default accountRouter;