import { NextResponse } from "next/server";
import { createUser } from "../../../queries/users";
import bcrypt from "bcryptjs";
import { mdbConnect } from "@/lib/mongo";
import { error } from "console";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  console.log(name, email, password);
  // CREATE A DB CONNECTION

  await mdbConnect();

  // ENCRYPT THE PASSWORD
  const hashedPassword = await bcrypt.hash(password, 5);
  // FORM A DB PAYLOAD
  const newUser = {
    name,
    password: hashedPassword,
    email,
  };

  // UPDATE THE DB
  try {
    await createUser(newUser);
  } catch (e) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }

  return new NextResponse("User has been created", {
    status: 201,
  });
};
