export default function App() {
  return (
    <>
      <nav className="flex flex-col md:flex-row justify-between bg-slate-50 drop-shadow w-full">
        <h2 className="font-bold text-2xl my-5 mx-20 text-center">nexcent</h2>
        <ul className="flex flex-col md:flex-row gap-8 my-5 mr-10 items-center">
          <li>Home</li>
          <li>Features</li>
          <li>Community</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li className="bg-lime-500 rounded-xl p-2">
            <button>Register Now</button>
          </li>
        </ul>
      </nav>
      <section className="py-12">
        <div className="flex flex-col md:flex-row md:justify-center">
          <div className="content-center m-5 text-center md:text-left">
            <h1 className="font-bold  text-2xl md:text-4xl">
              Lorem ipsum dolor sit amet,{" "}
            </h1>
            <h1 className="text-lime-400 font-bold text-4xl mb-3">
              consectetur adipisicing elit.
            </h1>
            <p className="md:*:w-1/2 mb-5 text-center md:text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              aspernatur iusto hic!
            </p>
            <button className="bg-lime-500 rounded-xl p-2">Register Now</button>
          </div>
          <div>
            <img
              className="p-10 md:max-w-md grayscale hover:grayscale-0"
              src="https://img.freepik.com/free-vector/desktop-computer-vconcept-illustration_114360-12153.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <h1 className="font-bold text-3xl text-center">About us!</h1>
        <div className="flex">
          <div>
            <img
              className="rounded-2xl max-w-md"
              src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg"
              alt=""
            />
          </div>
          <div className="content-center ml-5 w-1/2">
            <h1 className="font-bold text-xl mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              eaque!
            </h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur cum, ipsa ipsum iste expedita illum nemo molestias quam
              neque pariatur vitae ullam corrupti iure voluptatum libero
              obcaecati voluptatibus similique aliquid.
            </p>
            <button className="p-2 bg-lime-500">Learn more</button>
          </div>
        </div>
      </section>
      <footer className="p-4">
        <h1 className="text-center content-center">
          @Designed by Dinesh Karthik Rajan D
        </h1>
      </footer>
    </>
  );
}
