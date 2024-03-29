import { Link } from "react-router-dom";
import Layout from "./Layout";
import { FaArrowRight } from "react-icons/fa6";
export default function RootLayout() {
  return (
    <div>
      <Layout>
        <div className="bg-black h-[100vh] relative">
          <div className=" flex justify-center items-center  bg-orange-400">
            <Link
              to="/movies"
              className="text-white flex  p-4 text-[25px] font-bold"
            >
              Browse All Movies <FaArrowRight />
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}
