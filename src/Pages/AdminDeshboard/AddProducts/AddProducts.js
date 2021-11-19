import axios from "axios";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/apartments", data).then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        alert("A place is Added Successfully.");
      }
    });
  };

  return (
    <div>
      <div>
        <h1 className="fw-bold text-center mt-5">Hero Admin</h1>
        <h6 className="fw-bold text-center">
          Insert Your data to Show on{" "}
          <span className="text-danger fs-3 mb-5">UI</span>{" "}
        </h6>

        <div className="d-flex justify-content-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className=" w-100 ps-2 pe-4 py-2 rounded"
              placeholder="Apartment Name"
              {...register("appartmentName")}
            />
            <br />
            <br />
            <input
              className=" w-100 ps-2 pe-4 py-2 rounded"
              placeholder="Images"
              {...register("img")}
            />
            <br />
            <br />
            <input
              className=" w-100 ps-2 pe-4 py-2 rounded"
              placeholder="Location"
              {...register("location")}
            />
            <br />
            <br />
            <input
              className=" w-100 ps-2 pe-4 py-2 rounded"
              placeholder="Appartment Description"
              {...register("appartmentDescription")}
            />
            <br />
            <br />
            <input
              className=" w-100 ps-2 pe-4 py-2 rounded"
              placeholder="Appartment Owner"
              {...register("appartmentOwner")}
            />
            <br />
            <br />
            <input
              className=" w-100 ps-2 pe-4 py-2 rounded"
              placeholder="Appartment Type"
              {...register("appartmentType")}
            />
            <br />
            <br />
            <input
              className=" w-100 ps-2 pe-4 py-2 rounded"
              placeholder="Balconies"
              {...register("balconies")}
            />
            <br />
            <br />
            <input
              className=" w-100 ps-2 pe-4 py-2 rounded"
              placeholder="Facing"
              {...register("facing")}
            />
            <br />
            <br />
            <input
              className=" w-100 ps-2 pe-4 py-2 rounded"
              placeholder="Furnishing"
              {...register("furrnishing")}
            />
            <br />
            <br />
            <input
              className=" w-100 ps-2 pe-4 py-2 rounded"
              placeholder="Numer of Bathrooms"
              type="number"
              {...register("baths")}
            />
            <br />
            <br />
            <input
              className=" w-100 ps-2 pe-4 py-2 rounded"
              placeholder="Number of Bedroom"
              type="number"
              {...register("bedroom")}
            />
            <br />
            <br />
            <input
              className=" w-100 ps-2 pe-4 py-2 rounded"
              placeholder="Total Floor"
              type="number"
              {...register("tootalFloor")}
            />
            <br />
            <br />
            <input
              className="pe-2 text-light btn btn-secondary"
              type="submit"
            />
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
