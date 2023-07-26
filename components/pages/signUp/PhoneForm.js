import { useForm } from "react-hook-form";

const PhoneForm = (name, placeholder, condition, error) => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          handleNextProcess(data);
        })}
        className="flex flex-col gap-y-8"
      >
        <input
          {...register("id", { required: "this is required" })}
          placeholder="먕먕"
        />
      </form>
    </div>
  );
};

export default PhoneForm;
