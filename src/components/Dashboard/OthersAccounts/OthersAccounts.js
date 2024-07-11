import React from 'react';
import OthersAccountHooks from '../../Hooks/OthersAccountsHooks/OthersAccountHooks';
import DisplayAccounts from './DisplayAccounts';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';
import ViewAllTransaction from '../Shared/ViewAllTransaction/ViewAllTransaction';
import DBUserData from '../../Hooks/UserData/DBUserData';

const OthersAccounts = () => {
  const [othersAccount] = OthersAccountHooks()
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const [userData] = DBUserData([]);
  const onSubmit = data => {

    const userId = userData?._id;
    const accountData = {
      bankName: data.bankName,
      accountNumber: data.accountNumber,
      origin: data.origin,
    }
    console.log(accountData);
    axios.put(`http://localhost:4000/addBankAccount/${userId}`, accountData)
      .then(response => {
        console.log(response);
        toast.success('successfully new Account added');
      })
    reset();
  };

  return (

    <div className=' px-20 justify-center  mt-10  h-screen overflow-y-scroll'>
      <div className="bg-base-100  shadow-xl justify-center text-center rounded-lg  ">
        <div className=" items-center text-center">
          <h1 className='text-4xl font-bold text-primary py-5'>Add New Bank Account</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-4 gap-5">
            <input type="text" placeholder="Bank Name" {...register("bankName")} className="input input-bordered w-full max-w-xs" required />
            <input type="number" placeholder="Account Number"  {...register("accountNumber")} className="input input-bordered w-full max-w-xs" required />
            <input type="text" placeholder="Origin" {...register("origin")} className="input input-bordered w-full max-w-xs" required />
            <input type="submit" value="Add Account" className="bg-primary hover:bg-secondry text-white border-none hover:text-white btn btn-sm btn-active h-full" />

          </form>
          {/* </div> */}
        </div>

        <thead>
          {
            othersAccount.map(accounts =>
              <DisplayAccounts
                accounts={accounts}
                key={accounts.accountNumber}
              ></DisplayAccounts>)
          }
        </thead>

      </div>
    </div>
  );
};

export default OthersAccounts;