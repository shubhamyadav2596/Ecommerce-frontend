import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ex natus laborum ratione quam inventore, obcaecati est consequatur ea? Culpa sunt nisi doloremque maiores, sequi voluptate ut aliquid nemo quia.</p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 ">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>DELIVERY</li>
          <li>POLICY POLICY</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="text-xl font-medium mb-5 ">
            <li>+91 98754-65874</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ forever.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer