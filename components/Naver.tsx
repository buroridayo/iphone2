"use client";
import { navlinks } from "@/utils";
import Image from "next/image";

const Naver = () => {
  return (
    <header>
      <nav>
        <Image src="/apple.svg" alt="logo" width={24} height={24} />
        <ul>
          {navlinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>
        <div>
          <button>
            <Image src="/search.svg" alt="search" width={24} height={24} />
          </button>
          <button>
            <Image src="/cart.svg" alt="cart" width={24} height={24} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Naver;
