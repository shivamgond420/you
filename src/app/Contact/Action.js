"use server";

import email from "../../../models/Contact";
import dbConnect from "../../../utils/DBConact";

const Submit = async (data) => {
  try {
    await dbConnect();
    await email.create(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default Submit;
