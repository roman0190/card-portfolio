import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Image
          className="absolute w-screen h-[68rem] lg:h-full blur-sm"
          src="./images/1.png"
          alt="alt"
          width={1440}
          height={1440}
        />
        <nav className=" sticky bg-green-400/20 h-18 flex items-center p-[1rem] rounded-b-lg justify-between ">
          <Image
            className="lg:w-20 lg:h-20 w-14 h-14"
            src="./images/icon/icon.png"
            alt="alt"
            width={400}
            height={400}
          />
          <div className="flex gap-2">
            <a href="https://www.facebook.com/AhamedSanjed?mibextid=LQQJ4d">
              <img src="/images/icon/facebook.png" alt="" className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/ahamed_sanjed?igsh=MXNzM2swOHBkMXk1Yg%3D%3D&utm_source=qr&fbclid=IwY2xjawE7FBNleHRuA2FlbQIxMAABHSxTTBT8VwVvxCS4aQEJPUo0qz6EA_1_sIYelEzLj26w0lBGVwi0uHL_ow_aem_Ee8W-O1Yw31ZUah1zLAu0g">
              <img
                src="/images/icon/instagram.png"
                alt=""
                className="w-9 h-9"
              />
            </a>
            <a href="https://www.snapchat.com/add/asanjed?share_id=5sckdim415E&locale=en-US">
              <img src="/images/icon/snapchat.png" alt="" className="w-9 h-9" />
            </a>
            <a href="https://youtube.com/@ahamedsk9435?si=2xk1eUjdaGyi1EaM">
              <img src="/images/icon/youtube.png" alt="" className="w-9 h-9" />
            </a>
          </div>
        </nav>
        <div className=" relative flex flex-col h-screen pt-[2rem] ">
          <div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 justify-center items-center">
            <div className="flex justify-center">
              <div className="flex justify-center">
                <div className="relative h-60 w-60 lg:h-96 lg:w-96 rounded-full border-transparent  border-glow">
                  <Image
                    className="h-full w-full rounded-full object-cover"
                    src="./images/2.png"
                    alt="alt"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-center lg:items-start font-bold text-xl lg:text-5xl md:text-5xl col-span-2 mt-[2rem]  items-center">
              <span className="typewriter  font-mono">
                SHAHIR AHAMED KHAN SANJED
              </span>
              <div className=" pl-[3rem] pr-[3rem] lg:pl-[0rem] mt-[1rem] lg:mt-[2rem] text-xs lg:text-xl font-mono text-black">
                <div class="text-center space-y-2 bg-white/30 rounded-2xl w-[20rem] h-[20rem] flex flex-col items-center justify-center">
                  <p className="text-xl font-bold mb-3 ">Intro:</p>
                  <p class=" font-extralight">Assalamualaikum,</p>
                  <p></p>
                  <p>♠I AM MORE THAN WHAT YOU SEE♠</p>
                  <p>🗺️ Passionate Traveler 🌏</p>
                  <p>🎎Enthusiast of Global Cultures🎎</p>
                  <p>🏍️Bike Lover🏍</p>
                  <p>🌊 Drawn to the Ocean & Mountain 🏔️</p>
                  <a href="mailto:ahmedsanjed3@gmail.com">
                    📥 ahmedsanjed3@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" translate-y-[150%] flex justify-center items-center relative h-[6%] rounded-t-lg text-black text-xs font-extralight ">
          © 2024 Roman Howladar. All rights reserved.
        </div>
      </div>
    </>
  );
}
