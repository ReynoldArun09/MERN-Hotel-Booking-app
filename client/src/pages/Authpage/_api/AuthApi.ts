
import { BASE_URL } from "@/utils/constants";
import { LoginFormType, RegisterFormType, ResetFormType } from "../_schema";

export const LoginUserApi = async (formData: LoginFormType) => {
  const response = await fetch(`${BASE_URL}/user/login-user`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  
  return responseBody;
};

export const RegisterUserApi = async (formData: RegisterFormType) => {
  const response = await fetch(`${BASE_URL}/user/register-user`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  
  return responseBody;
};

export const ResetUserApi = async (formData: ResetFormType) => {
  console.log(formData);
};

export const LogoutUserapi = async () => {
  const response = await fetch(`${BASE_URL}/user/Logout-user`, {
    method: "POST",
    credentials: "include",
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  
  return responseBody;
};
