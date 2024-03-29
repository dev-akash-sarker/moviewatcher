import axios from "axios";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Movies() {
  const [mydata, setMydata] = useState();
  useEffect(() => {
    const mymovie = async () => {
      await axios.get("https://vidsrc.to/vapi/movie/new/1").then((e) => {
        const Array = Object.entries(e.data.result.items);
        setMydata(Array);
      });
    };
    mymovie();
  }, []);

  return (
    <>
      <div>
        <Header />
        <div className=" mx-[100px]">
          <div className="flex flex-wrap">
            {mydata?.map((item, i) => (
              <>
                <li
                  key={i}
                  className=" flex-shrink-0 w-[300px] bg-[#1f232c] m-[10px] relative overflow-hidden text-[.9em] rounded-[.5rem]"
                >
                  <div className=" relative w-full  overflow-hidden block">
                    <div className="w-full h-[100%] bg-green-900">
                      {/* <img
                      src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    /> */}
                      <img
                        src={`https://www.imdb.com/title/${item[1].imdb_id}/mediaviewer`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" relative p-2">
                    <Link
                      className="text-white no-underline outline-0"
                      to={`${
                        "numberone-" +
                        item[1].imdb_id +
                        "-" +
                        "numbertwo-" +
                        item[1].tmdb_id +
                        "-" +
                        "moviename-" +
                        item[1].title
                      }`}
                    >
                      {/* `id?${item[1].imdb_id}?id2:${item[1].imdb_id}?name:${item[1].title}` */}
                      {item[1].title}
                    </Link>
                    <div className="flex text-white items-center justify-between text-[10.71px]">
                      <div>2024</div>
                      <div className=" flex ml-[4.8px] items-center justify-start flex-shrink-0 leading-[20px] w-[3px] h-[3px] rounded-[50%] bg-[#aaa]"></div>
                      <div className="flex ml-[4.8px] items-center justify-start flex-shrink-0 leading-[20px]">
                        115min
                      </div>
                      <div className="flex items-center justify-start flex-shrink-0 flex-grow-[1] leading-[20px]"></div>
                    </div>
                  </div>
                </li>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
