import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';
import {FcGoogle} from "react-icons/fc";

export default function SignUp({isOpen, setIsOpen}) {

  function closeModal() {
    setIsOpen(false)
  }



  return (
    <>
    

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                                     
                </Dialog.Title>
                <div className="mt-2 w-full flex flex-col gap-3 ">
                
                  <button className="flex items-center rounded-lg py-2 gap-2 justify-center  w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100">
                      SignUp with Google <FcGoogle/>
                  </button>
                </div>

             <form className="flex flex-col gap-3">
                <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="email">E-mail</label>
                      <input type="text" 
                                id="email" 
                                placeholder="examplename@gmail.com"
                                className="w-full border border-gray-400  px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                         />
                  </div>

                    <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="fullName">Full Name</label>
                      <input type="text" 
                                id="fullName" 
                                placeholder="jhon Doe"
                                className="w-full border border-gray-400  px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                         />
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="password">Password</label>
                      <input type="password" 
                                id="password" 
                                placeholder="********"
                                className="w-full border border-gray-400  px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                         />
                  </div>

                  <div 
                      onClick={SignUp}
                      className="w-full bg-zomato-500 text-white py-2 rounded-lg text-center mt-3"> 
                    Sign Up
                  </div>

                  

            </form>

                <div className="mt-4">
                  
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
