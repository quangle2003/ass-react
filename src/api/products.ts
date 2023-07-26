import instance from "."
import { addForm, IProduct, updateForm } from "../models"

export const getAll = ()=>{
    const uri = "/products"
    return instance.get(uri)
}
export const getById =(id:string)=>{
    const uri = "/products/"+ id
    return instance.get(uri)
}
export const creatProduct = (data:addForm)=>{
    const uri="/products"
    return instance.post(uri,data)
}
export const update = (id:string,body:updateForm)=>{
    const uri = "/products/"+ id
    return instance.put(uri,body)
}
 export const removeProduct = (id:string)=>{
    const uri = "/products/"+ id
    return instance.delete(uri)
 }