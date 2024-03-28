import { useRouter } from "next/router";

const PHSTB = () => {
    const router = useRouter();
    const handleSubmit = (next) => {
      localStorage.setItem('formFilled', 'emergency-contact');
      router.push('/emergency-contact');
    }
  return (
    <>
      <div className="w-[80%] py-2 mx-auto">
        <iframe src="/PHS-TB.pdf" width="100%" height="500px" />
        <div className="flex w-full my-5 mx-auto justify-between items-center">
          <button
            onClick={handleSubmit}
            className="font-medium rounded-md text-lg px-5 py-2 bg-green-500 text-white disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Save & Exit
          </button>
          <button
            onClick={() => handleSubmit("nextForm")}
            className="font-medium rounded-md text-lg px-5 py-2 bg-green-600 text-white disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default PHSTB;
