import React, { useEffect } from 'react';
// import TransactionHistory from '../../Hooks/TransactionHistory/TransactionHistory';
import HistoryTable from './HistoryTable';
import './ShortHistory.css'
import OverallSpend from '../../Hooks/OvarallSpend/OverallSpend';
import Overall from './Overall';
import { useState } from 'react';
import Statement from '../../Hooks/Statement/Statement';




const ShortHistory = () => {
    // const [myTransactionHistory] = TransactionHistory();
    //--------------------------------------------
    const [allStatement, setAllStatement] = useState([]);


    // useEffect(() => {
    //     const url = `TransactionHistory.json`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             const count = data.count;
    //             console.log(count);
    //             const perTransaction = Math.ceil(count / 2);
    //             setAllStatement(perTransaction);
    //         })
    // }, []);
    //--------------------------------------------
    const [userSpend] = OverallSpend();
    //--------------------------------------------

    useEffect(() => {
        const allStatement = `TransactionHistory.json`
        fetch(allStatement)
            .then(res => res.json())
            .then(data => setAllStatement(data))
    }, []);

    console.log('history', allStatement);
    return (
        <div className='bg-slate-200 grid lg:grid-cols-3 grid-cols-1 px-4 pb-4 gap-4 '>
            <div className="card shadow-xl bg-white grid lg:col-span-2 p-10 ">
                <div className="history-Header grid lg:grid-cols-2 grid-cols-1 items-center lg:py-5 py-0">
                    <div className="header grid lg:justify-start justify-center">
                        <h2 className='lg:text-xl text-sm font-bold text-center'>Latest Transactions</h2>
                    </div>
                    {/* <div className="array-header grid justify-end">
                        <div className="icon-arrow">
                            <FaArrowRight className='right-arrow text-primary' />
                        </div>
                    </div> */}
                </div>
                <div className='transActionSection'>
                    <ol className='fontSizeStatement align-center items-center'>
                        <ol className='flex items-start justify-between border-b mb-3  '>
                            
                            <li className='font-bold'>Method</li>
                            <li className='font-bold'>Type</li>
                            <li className='font-bold'>Amount</li>
                            <li className='font-bold'>Date</li>
                        </ol>
                        {
                            allStatement.slice(0,5).map((listMoney, index) =>
                                <ol className=' text-right flex justify-between items-center  border-b mt-3 mb-3' key={listMoney._id}>
                                    <li className={listMoney.transactionType === 'Debit' ? 'addMoneyColor text-left text-left p-0 ' : 'sendMoneyColor  text-left p-0'}>{listMoney.payBy}</li>
                                    <li className={listMoney.transactionType === 'Cradit' ? 'addMoneyColor text-left p-0 mx-[-40px] ' : 'sendMoneyColor  text-left p-0 mx-[-40px] '}>{listMoney.transactionsType}</li>
                                    <li className={listMoney.transactionType === 'Cradit' ? 'text-green-600 text-left p-0 m-0' : 'text-red-600 text-left p-0 m-0'}>{listMoney.amount}</li>
                                    <li className=' text-left p-0 m-0 '>{listMoney.date}</li>

                                </ol>
                            ).reverse()
                        }
                    </ol>
                </div>
            </div>

            {/* overview of user account  */}
            <div className="card bg-base-100 shadow-xl">

                <div className="card-body">
                    <div className="history-Header  py-5">
                        <div className="header flex lg:justify-start justify-center items-center">
                            <h2 className='text-xl font-bold text-center'>Overall</h2>
                        </div>
                    </div>
                    <div className="total-spend grid lg:grid-cols-3 text-center ">
                        {
                            userSpend.map(totalSpend => <Overall
                                totalSpend={totalSpend}
                                key={totalSpend.spend}
                            ></Overall>)
                        }
                    </div>

                    <hr className='py-2' />

                </div>
            </div>


        </div>
    );
};

export default ShortHistory;