import express from "express";
import {
  sendEmaiil,
  uploadSingleFile,
  uploadMultipleFile,
  payment,
  paymentNotification,
  paymentSuccessRedirect,
  index,
} from "../controller/utiityController";
import { verifyUserToken } from "../middleware/verifyToken";
import upload from "../middleware/fileInput";

const router = express.Router();

router.get("/", index);
router.post("/send-email", sendEmaiil);
router.post("/payment", verifyUserToken, payment);
router.post("/payment/notification", paymentNotification);
router.get("/payment/success", paymentSuccessRedirect);
router.post(
  "/upload-profile",
  verifyUserToken,
  upload.single("profile"),
  uploadSingleFile
);
router.post(
  "/create-post",
  verifyUserToken,
  upload.array("image"),
  uploadMultipleFile
);

export default router;
