import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            blanditiis error impedit voluptates cumque laudantium animi
            repellat! Pariatur sunt ipsa aperiam laudantium in placeat illo
            distinctio, nulla exercitationem aut quia quam quidem doloribus
            reprehenderit necessitatibus iste eum culpa ex libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quae
            aperiam, veniam explicabo perspiciatis fugit eum ut eos atque autem.
            Tempora ex inventore numquam neque ea vel ad, aspernatur sunt
            deserunt optio facere repellendus veniam animi error corrupti!
          </p>
          <b className="text-gray-800">Our Misson</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            aspernatur ratione nesciunt a nulla aperiam, aut illo dolor velit
            iure ad ea ipsam, unde non reprehenderit facilis excepturi fugiat
            delectus.
          </p>
        </div>
      </div>
      <div className="text-xl py-4 ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 sm:px-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            minus reprehenderit voluptatum cum reiciendis commodi!
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:px-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            minus reprehenderit voluptatum cum reiciendis commodi!
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:px-20 flex flex-col gap-5">
          <b>Exceptional Customer Services:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            minus reprehenderit voluptatum cum reiciendis commodi!
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
