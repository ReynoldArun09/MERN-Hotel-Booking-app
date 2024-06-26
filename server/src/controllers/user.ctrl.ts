import AsyncWrapper from "../utils/AsyncWrapper";
import { Request, Response } from "express";
import User from "../models/user";
import AppError from "../utils/AppError";
import { ErrorMessage, HttpStatusCode, SuccessMessage } from "../helper/Enum";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const RegisterUser = AsyncWrapper(
  async (req: Request, res: Response) => {
    const {email} = req.body

    const checkIfExist = await User.findOne({email})

    if(checkIfExist) {
      throw new AppError(ErrorMessage.USER_ALREADY_EXIST, HttpStatusCode.BAD_REQUEST)
    }
    const user = new User(req.body)
    const savedUser = await user.save()

    const token = jwt.sign({userId: savedUser._id}, process.env.SECRET as string, {
      expiresIn: '1h'
    })

    res.cookie('booking.com', token, {
      httpOnly: true,
      maxAge: 86400000,
      secure: false
    })

    return res.status(HttpStatusCode.CREATED).json({
      success: true,
      message: SuccessMessage.USER_REGISTERED
    })
  }
);

export const LoginUser = AsyncWrapper(async(req:Request, res:Response) => {
  const {email, password} = req.body;
  const findUser = await User.findOne({email})
  if(!findUser) {
      throw new AppError(ErrorMessage.USER_NOT_FOUND, HttpStatusCode.BAD_REQUEST)
  }


 const comparePassword = bcrypt.compare(password, findUser.password)

  if(!comparePassword) {
      throw new AppError(ErrorMessage.LOGIN_FAILURE, HttpStatusCode.BAD_REQUEST)
  }

  const token = jwt.sign({userId: findUser.id}, process.env.SECRET, {
      expiresIn: '1d'
  })
  res.cookie('booking.com', token, {
      httpOnly: true,
      secure: false,
      maxAge: 86400000,
  })
  return res.status(HttpStatusCode.OK).json({success: true, message: SuccessMessage.LOGIN_SUCCESS})
})


export const LogoutUser = AsyncWrapper(async(req:Request, res:Response) => {
  res.cookie("booking.com", "", {
      expires: new Date(0),
      httpOnly: true,
      secure: false,
      maxAge: 0,  
  })
  return res.status(HttpStatusCode.OK).json({success: true, message: SuccessMessage.LOGGED_OUT_SUCCESS})
})

export const ValidateUser = AsyncWrapper(async(req:Request, res:Response) => {
  res.status(200).send({ userId: req.userId });
})

export const GetUser = AsyncWrapper(async(req:Request, res:Response) => {
    const userId = req.userId
    const user = await User.findById(userId).select("-password")

    if(!user) {
      throw new AppError(ErrorMessage.USER_NOT_FOUND, HttpStatusCode.BAD_REQUEST)
    }
    return res.status(HttpStatusCode.OK).json(user)
})
