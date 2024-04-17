import { BASE_URL } from "@/main";
import { HotelType } from "@/types.def";

export const CreateHotel = async (formData: FormData) => {
  const response = await fetch(`${BASE_URL}/hotel/add`, {
    method: "POST",
    credentials: "include",
    body: formData,
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const responsebody = await response.json();
  return responsebody;
};

export const GetAllUsersHotels = async () => {
  const response = await fetch(`${BASE_URL}/hotel/users`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const responsebody = await response.json();
  return responsebody;
};

export const fetchMyHotelById = async (hotelId: string): Promise<HotelType> => {
  const response = await fetch(`${BASE_URL}/hotel/user/${hotelId}`, {
    credentials: "include",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const responsebody = await response.json();
  return responsebody;
};

export const UpdateMyHotelById = async (hotelFormData: FormData) => {
  const response = await fetch(
    `${BASE_URL}/hotel/${hotelFormData.get("hotelId")}`,
    {
      method: "PUT",
      body: hotelFormData,
      credentials: "include",
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const responsebody = await response.json();
  return responsebody;
};

export const GetHotelById = async (hotelId: string) => {
  const response = await fetch(`${BASE_URL}/hotel/${hotelId}`);

  if (!response.ok) {
    throw new Error("Error fetching hotel");
  }

  const responseBody = await response.json();
  return responseBody;
};
