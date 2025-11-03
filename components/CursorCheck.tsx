"use client";
import Image from "next/image";

const CursorCheck = () => {
  return (
    <section id="cursor">
      <div className="screen-max-width">
        <div>
          <h1>Get the highlights</h1>
          <div>
            <p>Watch the film</p>
            <Image src="/play.svg" alt="playbutton" width={20} height={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CursorCheck;
