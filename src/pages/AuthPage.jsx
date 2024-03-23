import React from "react";

const AuthPage = () => {
  return (
    <section className="h-screen grid place-items-center ">
      <div className="bg-black flex flex-col gap-10 py-16 px-32 rounded-lg">
        <div className="flex justify-center">
          <img className="h-[60px]" src="x-logo.webp" alt="x" />
        </div>
        <h1 className="text-center font-bold text-xl">X'e giriş yap</h1>
        <button className="bg-white flex items-center py-2 px-10 rounded-full gap-3 transition hover:bg-gray-300">
          <img className="h-[20px]" src="/google-logo.svg" alt="google" />
          <span className="text-black whitespace-nowrap">
            Google İle Devam Et
          </span>
        </button>
        <form className="flex flex-col">
          <label>Email</label>
          <input type="email" />

          <label>Şifre</label>
          <input type="password" />

          <button type="submit">Giriş Yap</button>
        </form>
      </div>
    </section>
  );
};

export default AuthPage;
