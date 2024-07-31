import React from "react";
import axios from "axios";
import {useState, useEffect} from 'react'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function Login(e) {
    e.preventDefault()
    try {
        const { data } = await axios.post('https://server.imam-asyari.online/user/login', {email, password})
        localStorage.setItem("access_token", data.access_token)
    } catch (error) {
     console.log(error)   
    }
  }

  
  return (
    <div>
      <section className="h-screen">
        <div className="container h-full px-6 py-24">
          <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>

            <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
              <form onSubmit={Login}>
                <div className="relative mb-6" data-twe-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput3"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    for="exampleFormControlInput3"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                  >
                    Email address
                  </label>
                </div>

                <div className="relative mb-6" data-twe-input-wrapper-init>
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput33"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    for="exampleFormControlInput33"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                  >
                    Password
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
