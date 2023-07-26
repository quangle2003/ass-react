import { useForm } from "react-hook-form"
import { addForm, addProductSchema } from "../models"
import { yupResolver } from "@hookform/resolvers/yup"
import { creatProduct } from "../api/products"
import { useNavigate } from "react-router-dom"

const Addproduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<addForm>({
        resolver: yupResolver(addProductSchema)
    })
    const Navigate = useNavigate()
    const onsubmit = async (data: addForm) => {
        const res = await creatProduct(data)
        console.log(res);
        Navigate('/admin')
    }

    return <>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">thêm sản phẩm</h1>

                <p className="mt-4 text-gray-500">

                </p>
            </div>

            <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4" onSubmit={handleSubmit(onsubmit)}>
                <div>
                    <label htmlFor="tendangn" className="sr-only">Tên</label>

                    <div className="relative">
                        <input
                            {...register("ten")}
                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                            placeholder="Tên sản phẩm"
                        />
                        <p className="text-red-600">{errors.ten && errors.ten.message}</p>
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="sr-only">Email</label>

                    <div className="relative">
                        <input
                            {...register("gia")}

                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                            placeholder="Giá"
                        />
                        <p className="text-red-600">{errors.gia && errors.gia.message}</p>
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="sr-only">Password</label>

                    <div className="relative">
                        <input
                            {...register("mota")}
                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                            placeholder="mota"
                        />
                        <p className="text-red-600">{errors.mota && errors.mota.message}</p>
                    </div>

                </div>

                <div>
                    <label htmlFor="email" className="sr-only"></label>

                    <div className="relative">
                        <input
                            {...register("thuonghieu")}
                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                            placeholder="thương hiệu"
                        />
                        <p className="text-red-600">{errors.thuonghieu && errors.thuonghieu.message}</p>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Thêm
                    </button>
                </div>
            </form>
        </div>
    </>
}
export default Addproduct