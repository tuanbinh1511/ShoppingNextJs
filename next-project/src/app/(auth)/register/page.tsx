import RegisterForm from "@/app/(auth)/register/RegisterForm";

export default function RegisterPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center">Đăng ký</h1>
      <div className=" flex justify-center w-full ">
        <RegisterForm />
      </div>
    </div>
  );
}
